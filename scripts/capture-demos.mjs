import {chromium} from '@playwright/test'
import sharp from 'sharp'
import fs from 'node:fs/promises'
const base=process.env.PREVIEW_URL||'http://127.0.0.1:4321'
const slugs=['company-profile','kriya-kayu','restoran','sekolah','properti','hotel','ecommerce','dashboard']
await fs.mkdir('public/images/previews',{recursive:true})
const browser=await chromium.launch({channel:'msedge',headless:true})
try{
 for(const slug of slugs){
  for(const [device,width,height] of [['desktop',1440,1000],['mobile',390,844]]){
   const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:1,reducedMotion:'reduce'})
   const response=await page.goto(`${base}/demo/live/${slug}?embed=1`,{waitUntil:'networkidle',timeout:60000})
   if(response.status()!==200)throw new Error(`${slug} ${response.status()}`)
   await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].filter(i=>i.loading!=='lazy').map(i=>i.decode().catch(()=>{})))})
   await sharp(await page.screenshot()).webp({quality:82}).toFile(`public/images/previews/${slug}-${device}.webp`)
   if(device==='desktop')for(const size of [480,960])await sharp(`public/images/previews/${slug}-desktop.webp`).resize(size).webp({quality:78}).toFile(`public/images/previews/${slug}-${size}.webp`)
   console.log(`captured ${slug} ${device}`);await page.close()
  }
 }
}finally{await browser.close()}
