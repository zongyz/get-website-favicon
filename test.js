let getFavicons = require('./')
let url = 'http://github.com'
getFavicons(url).then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
})