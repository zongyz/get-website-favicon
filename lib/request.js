'use strict'
const axios = require('axios').create({
    headers: {
        // 'Accept': '*/*',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36'
    },
    maxRedirects: 5,
    timeout: 10000
})


//TODO: add custom options, such as interceptor, be used for set proxy or rule
module.exports = async (url, options={})=>{
    options.url = url
    return await axios.request(options)
}