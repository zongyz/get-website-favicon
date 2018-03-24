'use strict'

const {URL, parse:urlParse} = require('url')
const getdom = require('./getdom')
const iconByFile = require('./origin/file')
const iconByHtml = require('./origin/html')
const iconByManifest = require('./origin/manifest')
const iconByDeep = require('./origin/deep')

module.exports = async url=>{
    if(!urlParse(url).protocol) url = `http://${url}/`
    let icons = []
    return new Promise( async (resolve, reject)=>{
        let $ = await getdom(url),
            tagIcon = await iconByHtml($),
            manifestIcon = await iconByManifest($),
            fileIcon = await iconByFile($.baseUrl),
            deepIcon = await iconByDeep(url)

        icons = icons.concat(fileIcon, tagIcon, manifestIcon, deepIcon)
        resolve({
            url,
            baseUrl: $.baseUrl,
            icons
        })
    })
}