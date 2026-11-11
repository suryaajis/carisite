import type * as Three from 'three'

/** The renderer is a progressive enhancement; the HTML poster is always available. */
export async function mountScene(shell:HTMLElement){
  if(shell.dataset.initialized)return
  shell.dataset.initialized='true'
  const status=shell.querySelector<HTMLElement>('[data-scene-status]')!
  const enable=shell.querySelector<HTMLButtonElement>('[data-scene-enable]')!
  const pauseButton=shell.querySelector<HTMLButtonElement>('[data-scene-pause]')!
  const host=shell.querySelector<HTMLElement>('[data-scene-canvas]')!
  status.textContent='Menyiapkan ruang 3D…'
  let cleanup=()=>{}
  let cancelled=false
  window.addEventListener('pagehide',()=>{cancelled=true;cleanup()},{once:true})
  try{
    const T=await import('three')
    if(!shell.isConnected)return
    const renderer=new T.WebGLRenderer({alpha:true,antialias:devicePixelRatio<2,powerPreference:'low-power'})
    renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setClearColor(0x000000,0);renderer.outputColorSpace=T.SRGBColorSpace
    host.append(renderer.domElement)
    const scene=new T.Scene();const camera=new T.PerspectiveCamera(34,1,.1,60);camera.position.set(0,.4,10)
    const group=new T.Group();scene.add(group)
    scene.add(new T.HemisphereLight(0xeaffd1,0x173b30,3));const light=new T.DirectionalLight(0xffffff,3);light.position.set(-3,5,6);scene.add(light)
    const textures:Three.Texture[]=[];const geometries:Three.BufferGeometry[]=[];const materials:Three.Material[]=[]
    cleanup=()=>{textures.forEach(t=>t.dispose());geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());renderer.dispose();renderer.domElement.remove()}
    const loader=new T.TextureLoader()
    const texture=async(path:string)=>{const map=await loader.loadAsync(path);if(cancelled){map.dispose();throw new Error('Scene closed')}map.colorSpace=T.SRGBColorSpace;map.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());textures.push(map);return map}
    const material=(options:Three.MeshStandardMaterialParameters)=>{const mat=new T.MeshStandardMaterial(options);materials.push(mat);return mat}
    const box=(w:number,h:number,d:number,mat:Three.Material)=>{const geo=new T.BoxGeometry(w,h,d);geometries.push(geo);return new T.Mesh(geo,mat)}
    const screen=async(path:string,w:number,h:number)=>{const map=await texture(path);const geo=new T.PlaneGeometry(w,h);geometries.push(geo);const mat=new T.MeshBasicMaterial({map,toneMapped:false});materials.push(mat);return new T.Mesh(geo,mat)}
    const browser=new T.Group();const frame=box(5.7,3.6,.14,material({color:0xc4d7bb,metalness:.5,roughness:.35}));browser.add(frame)
    const display=await screen('/images/previews/restoran-desktop.webp',5.43,3.3);display.position.set(0,-.02,.075);browser.add(display)
    const bar=box(5.44,.19,.025,material({color:0xe7eddc,roughness:.8}));bar.position.set(0,1.57,.09);browser.add(bar)
    for(let i=0;i<3;i++){const geo=new T.SphereGeometry(.032,8,8);geometries.push(geo);const dot=new T.Mesh(geo,material({color:[0xb9cc93,0x799b70,0x3d6c51][i]}));dot.position.set(-2.48+i*.13,1.57,.115);browser.add(dot)}
    browser.rotation.set(-.07,-.2,-.07);browser.position.set(-.35,.2,0);group.add(browser)
    const phone=new T.Group();phone.add(box(1.28,2.65,.17,material({color:0xe4edcf,metalness:.45,roughness:.3})));const mobile=await screen('/images/previews/ecommerce-mobile.webp',1.13,2.44);mobile.position.z=.09;phone.add(mobile);phone.position.set(2.2,-.5,.9);phone.rotation.set(.04,-.22,.12);group.add(phone)
    const wireGeo=new T.EdgesGeometry(new T.BoxGeometry(5.9,3.8,.15));geometries.push(wireGeo);const wireMat=new T.LineBasicMaterial({color:0xb4d67b,transparent:true,opacity:.2});materials.push(wireMat);const wire=new T.LineSegments(wireGeo,wireMat);wire.position.set(-.5,.45,-.6);wire.rotation.z=.05;group.add(wire)
    const ringGeo=new T.TorusGeometry(3.8,.009,6,90);geometries.push(ringGeo);const ring=new T.Mesh(ringGeo,material({color:0x779e65,transparent:true,opacity:.5}));ring.rotation.set(.7,.3,.2);ring.position.z=-1.5;scene.add(ring)
    let visible=true;let paused=matchMedia('(prefers-reduced-motion: reduce)').matches;let disposed=false;let frameId=0;let pointerX=0;let pointerY=0;let elapsed=0;let last=performance.now()
    const render=(now:number)=>{frameId=0;if(disposed||!visible||document.hidden)return;const dt=Math.min((now-last)/1000,.05);last=now;if(!paused){elapsed+=dt;group.rotation.y+=(pointerX*.13-group.rotation.y)*.045;group.rotation.x+=(-pointerY*.07-group.rotation.x)*.045;group.position.y=Math.sin(elapsed*.65)*.07;wire.rotation.z=.05+Math.sin(elapsed*.3)*.025}renderer.render(scene,camera);if(!paused)frameId=requestAnimationFrame(render)}
    const schedule=()=>{if(!frameId&&!disposed&&visible&&!document.hidden){last=performance.now();frameId=requestAnimationFrame(render)}}
    const resize=()=>{const {width,height}=host.getBoundingClientRect();renderer.setSize(width,height,false);camera.aspect=width/height;camera.position.z=width<600?12.5:10;camera.updateProjectionMatrix();schedule()}
    const onPointer=(event:PointerEvent)=>{if(!matchMedia('(pointer:fine)').matches||paused)return;const bounds=host.getBoundingClientRect();pointerX=(event.clientX-bounds.left)/bounds.width-.5;pointerY=(event.clientY-bounds.top)/bounds.height-.5;schedule()}
    const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)schedule();else{cancelAnimationFrame(frameId);frameId=0}},{threshold:.02});observer.observe(shell)
    const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(host)
    const visibility=()=>{if(document.hidden){cancelAnimationFrame(frameId);frameId=0}else schedule()}
    const updatePause=()=>{pauseButton.textContent=paused?'Putar gerakan ▶':'Jeda gerakan Ⅱ';pauseButton.setAttribute('aria-pressed',String(paused));status.textContent=paused?'3D dijeda · tampilan tetap dapat dilihat':'3D aktif · gerakkan pointer untuk perspektif'}
    const toggle=()=>{paused=!paused;updatePause();schedule()};const preference=matchMedia('(prefers-reduced-motion: reduce)');const onPreference=()=>{paused=preference.matches;updatePause();schedule()}
    host.addEventListener('pointermove',onPointer);pauseButton.addEventListener('click',toggle);document.addEventListener('visibilitychange',visibility);preference.addEventListener('change',onPreference)
    cleanup=()=>{if(disposed)return;disposed=true;cancelAnimationFrame(frameId);observer.disconnect();resizeObserver.disconnect();host.removeEventListener('pointermove',onPointer);document.removeEventListener('visibilitychange',visibility);pauseButton.removeEventListener('click',toggle);preference.removeEventListener('change',onPreference);textures.forEach(t=>t.dispose());geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());renderer.dispose();renderer.domElement.remove();delete shell.dataset.active}
    renderer.domElement.addEventListener('webglcontextlost',(event)=>{event.preventDefault();cleanup();status.textContent='3D tidak tersedia. Preview ringan tetap dapat dijelajahi.';pauseButton.hidden=true},{once:true})
    window.addEventListener('pagehide',cleanup,{once:true});enable.hidden=true;pauseButton.hidden=false;shell.dataset.active='true';updatePause();resize();schedule()
  }catch{cleanup();delete shell.dataset.initialized;status.textContent='3D tidak tersedia di perangkat ini. Preview ringan tetap tersedia.';enable.textContent='Coba muat 3D kembali';pauseButton.hidden=true}
}
