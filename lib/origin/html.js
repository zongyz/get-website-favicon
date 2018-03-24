'use strict'
const {URL, parse:urlParse} = require('url')
const cheerio = require('cheerio')
const selectors = [
    "link[rel='icon' i][href]",
    "link[rel='shortcut icon' i][href]",
    "link[rel='apple-touch-icon' i][href]",
    "link[rel='apple-touch-icon-precomposed' i][href]",
    "link[rel='apple-touch-startup-image' i][href]",
    "link[rel='mask-icon' i][href]",
    "link[rel='fluid-icon' i][href]",
    "meta[name='msapplication-TileImage' i][content]",
    "meta[name='twitter:image' i][content]",
    "meta[property='og:image' i][content]"
]

module.exports =  async $=>{
    const icons = []
    
    return new Promise((resolve, reject)=>{
        try {
            $(selectors.join()).each(function(i,el){
                let {href = '', sizes = '', type = '', content = '', rel = ''} = el.attribs, src
                if(el.name == 'link'){
                    src = href
                }else{
                    src = content
                }
                if(src && src !== '#'){
                    icons.push({
                        src:new URL(src, $.baseUrl).href,
                        sizes,
                        type,
                        origin:cheerio.html(el)
                    })
                }
            })
        } catch (error) {

        }
        resolve(icons)
    })
}