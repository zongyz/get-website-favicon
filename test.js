let getFavicons = require('./')
let url = process.argv[2] || 'http://gitub.com'
getFavicons(url).then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
})