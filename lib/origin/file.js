'use strict'
const request = require('../request')
const {URL, parse:urlParse} = require('url')

module.exports =  async baseurl=>{
    let icons = []
    return new Promise(async (resolve, reject)=>{
        let url = new URL('/favicon.ico', baseurl).href
        try {
            let response = await request(url, {
                method:'HEAD'
            })
            if(
                response.status ==200 &&
                parseInt(response.headers['content-length'],10) > 0 &&
                /image/ig.test(response.headers['content-type'])
            ){
                icons.push({
                    src:url,
                    sizes:'',
                    type:'image/x-icon',
                    origin:'/favicon.ico'
                })
            }
        } catch (error) {
            
        }
        resolve(icons)
    })
}