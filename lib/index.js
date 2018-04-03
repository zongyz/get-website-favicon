'use strict'

const { URL, parse: urlParse } = require('url')
const getdom = require('./getdom')
const rank = require('./rank')
const iconByFile = require('./origin/file')
const iconByHtml = require('./origin/html')
const iconByManifest = require('./origin/manifest')
const iconByDeep = require('./origin/deep')

module.exports = async url => {
    let icons = []
    return new Promise(async(resolve, reject) => {
        if (!url) return reject({})
        if (!urlParse(url).protocol) url = `http://${url}/`
        let $ = await getdom(url),
            tagIcon = await iconByHtml($),
            manifestIcon = await iconByManifest($),
            fileIcon = await iconByFile($.baseUrl),
            deepIcon = await iconByDeep(url)

        icons = icons.concat(fileIcon, tagIcon, manifestIcon, deepIcon)
        for (let i in icons) icons[i].rank = rank(icons[i])
        icons.sort((a, b) => (b.rank - a.rank))
        resolve({
            url: $.baseUrl,
            icons
        })
    })
}