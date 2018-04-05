'use strict'
const axios = require('axios').create({
    headers: {
        // 'Accept': '*/*',
        'Accept-Encoding': 'gzip, identity',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36'
    },
    // withCredentials: true,
    maxRedirects: 5,
    timeout: 3000
})


//TODO: add custom options, such as interceptor, be used for set proxy or rule
module.exports = async (url, options={})=>{
    options.url = url
    return await axios.request(options)
}