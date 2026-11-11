import lighthouse from 'lighthouse'
import {launch} from 'chrome-launcher'
import fs from 'node:fs/promises'
const base=process.env.PREVIEW_URL||'http://127.0.0.1:4321'
const chrome=await launch({chromePath:'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',chromeFlags:['--headless','--disable-gpu','--no-first-run']})
const selected=(process.env.PERFORMANCE_PAGES||'home,catalog,dashboard').split(',')
let summary=[]
try{summary=JSON.parse(await fs.readFile('docs/qa/lighthouse/summary.json','utf8')).results.filter(r=>!selected.some(name=>({'home':'/','catalog':'/demo','dashboard':'/demo/live/dashboard'}[name])===r.route))}catch{}
await fs.mkdir('docs/qa/lighthouse',{recursive:true})
try{for(const [name,route] of [['home','/'],['catalog','/demo'],['dashboard','/demo/live/dashboard']].filter(([name])=>selected.includes(name))){
 const result=await lighthouse(base+route,{port:chrome.port,output:['html','json'],logLevel:'error',onlyCategories:['performance','accessibility','best-practices','seo']},{extends:'lighthouse:default',settings:{formFactor:'mobile',screenEmulation:{mobile:true,width:390,height:844,deviceScaleFactor:1,disabled:false}}})
 await fs.writeFile(`docs/qa/lighthouse/${name}.html`,result.report[0]);await fs.writeFile(`docs/qa/lighthouse/${name}.json`,result.report[1]);const lhr=result.lhr
 const scores=Object.fromEntries(Object.entries(lhr.categories).map(([k,v])=>[k,Math.round(v.score*100)]));const metrics=Object.fromEntries(['first-contentful-paint','largest-contentful-paint','total-blocking-time','cumulative-layout-shift','speed-index'].map(id=>[id,lhr.audits[id].displayValue]));summary.push({route,scores,metrics,warnings:lhr.runWarnings});console.log(route,JSON.stringify(scores),JSON.stringify(metrics))
}}finally{await chrome.kill();await fs.writeFile('docs/qa/lighthouse/summary.json',JSON.stringify({generatedAt:new Date().toISOString(),environment:'Local Windows, headless Microsoft Edge, Lighthouse mobile simulated throttling, viewport 390x844, DPR 1. Lab results, not field Core Web Vitals.',results:summary},null,2))}
