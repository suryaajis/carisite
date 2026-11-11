import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const directory='src/pages/demo/live'
const files=(await fs.readdir(directory)).filter(f=>f.endsWith('.astro'))
const sources=await Promise.all(files.map(async f=>({file:path.join(directory,f),source:await fs.readFile(path.join(directory,f),'utf8')})))
const ids=[...new Set(sources.flatMap(s=>[...s.source.matchAll(/photo-[0-9]+-[a-z0-9]+/g)].map(m=>m[0])))]
await fs.mkdir('public/images/demo-assets',{recursive:true})
const manifest=[]
let index=0
async function worker(){while(index<ids.length){const id=ids[index++];const dest=`public/images/demo-assets/${id}.webp`;const url=`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1440&q=85`;try{await fs.access(dest)}catch{let downloaded=false;for(let attempt=0;attempt<3&&!downloaded;attempt++){try{const response=await fetch(url,{signal:AbortSignal.timeout(25000)});if(!response.ok)throw new Error(`HTTP ${response.status}`);await sharp(Buffer.from(await response.arrayBuffer())).resize({width:1440,withoutEnlargement:true}).webp({quality:78}).toFile(dest);downloaded=true}catch(error){if(attempt===2)throw new Error(`${id}: ${error.message}`)}}}manifest.push({id,url,local:`/images/demo-assets/${id}.webp`,provider:'Unsplash',license:'https://unsplash.com/license'});console.log(`asset ${manifest.length}/${ids.length} ${id}`)}}
await Promise.all(Array.from({length:4},worker))
for(const item of sources){let source=item.source.replace(/https:\/\/images\.unsplash\.com\/(photo-[0-9]+-[a-z0-9]+)\?[^'"\s<>`]+/g,'/images/demo-assets/$1.webp');source=source.replace(/https:\/\/images\.unsplash\.com\/\$\{([^}]+)\}\?[^`]+/g,'/images/demo-assets/${$1}.webp');await fs.writeFile(item.file,source)}
await fs.writeFile('docs/asset-sources.json',JSON.stringify(manifest.sort((a,b)=>a.id.localeCompare(b.id)),null,2)+'\n')
console.log(`Localized ${ids.length} photos. Keep asset-sources.json for provenance.`)
