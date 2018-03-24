let getFavicons = require('./')
let url = 'github.com'
getFavicons(url).then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
})