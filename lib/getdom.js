'use strict'
const request = require('./request')
const cheerio = require('cheerio')

module.exports =  async url=>{
    return new Promise(async (resolve, reject)=>{
        try {
            let response = await request(url),
            options =  response.request._redirectable._options,
            html = response.data,
            $ = cheerio.load(html,{
                lowerCaseTags: true,
                lowerCaseAttributeNames: true,
            })
            $.baseUrl = `${options.protocol}//${options.hostname}`
            resolve($)
        } catch (error) {
            let $ = cheerio.load("")
            $.baseUrl = url
            resolve($)
        }
    })
}