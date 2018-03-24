'use strict'

const getWebsiteFavicon = require("./lib");

module.exports = async (url, options)=>{
    return await getWebsiteFavicon(url)
}