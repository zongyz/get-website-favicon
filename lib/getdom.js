'use strict'
const request = require('./request')
const cheerio = require('cheerio')
const { parse: urlParse } = require('url')
module.exports =  async url=>{
    return new Promise(async (resolve, reject)=>{
        try {
            let response = await request(url),
            html = response.data,
            $ = cheerio.load(html,{
                lowerCaseTags: true,
                lowerCaseAttributeNames: true,
            })
            $.url = response.request.res.responseUrl
            $.baseUrl = urlParse($.url).protocol+'//'+urlParse($.url).hostname
            resolve($)
        } catch (error) {
            // console.log(error)
            let $ = cheerio.load("")
            $.url = url
            $.baseUrl = urlParse($.url).protocol+'//'+urlParse($.url).hostname
            resolve($)
        }
    })
}