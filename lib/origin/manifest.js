'use strict'
const request = require('../request')
const {URL, parse:urlParse} = require('url')

module.exports =  async $=>{
    let icons = []
    
    return new Promise(async (resolve, reject)=>{
        let href = $('link[rel="manifest" i]', 'head').attr('href')
        if(!href) return resolve(icons)
        
        let url = new URL(href, $.baseUrl).href
        try {
            let response = await request(url)
            if(response.status == 200 && response.data && Array.isArray(response.data.icons)){
                icons = response.data.icons.map( 
                    ({src = '', sizes = '', type = ''})=>({src:new URL(src, $.baseUrl).href, sizes, type, origin:url})
                ) || []
            }
        } catch (error) {
        }
        resolve(icons)
    })
}