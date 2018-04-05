'use strict'
const request = require('../request')
const {URL, parse:urlParse} = require('url')
const fileType = require('file-type')

module.exports =  async baseurl=>{
    let icons = []
    return new Promise(async (resolve, reject)=>{
        let url = new URL('/favicon.ico', baseurl).href
        try {
            let response = await request(url, {
                method:'GET',
                responseType: 'arraybuffer' 
            }), type = fileType(response.data) || {}
            if(
                response.status == 200 &&
                /image/ig.test(type.mime)
            ){
                icons.push({
                    src:url,
                    sizes:'',
                    type:'image/x-icon',
                    origin:'/favicon.ico'
                })
            }
        } catch (error) {
            // console.log(error);
        }
        resolve(icons)
    })
}