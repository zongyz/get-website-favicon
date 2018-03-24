> get the favicons url from any website

# Install 

```bash
$ npm install get-website-favicon --save
```

# Usage

## Example

```js
var getFavicons = require('get-website-favicon')
getFavicons('github.com').then(data=>{
    /* 
    {
        url: 'https://github.com',
        icons: [{
            src: 'https://github.com/favicon.ico',
            sizes: '',
            type: 'image/x-icon',
            origin: 'site/favicon.ico'
        }, {
            src: 'https://github.com/fluidicon.png',
            sizes: '',
            type: '',
            origin: '<link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">'
        }, {
            src: 'https://assets-cdn.github.com/images/modules/open_graph/github-logo.png',
            sizes: '',
            type: '',
            origin: '<meta property="og:image" content="https://assets-cdn.github.com/images/modules/open_graph/github-logo.png">'
        }, {
            src: 'https://assets-cdn.github.com/images/modules/open_graph/github-mark.png',
            sizes: '',
            type: '',
            origin: '<meta property="og:image" content="https://assets-cdn.github.com/images/modules/open_graph/github-mark.png">'
        }, {
            src: 'https://assets-cdn.github.com/images/modules/open_graph/github-octocat.png',
            sizes: '',
            type: '',
            origin: '<meta property="og:image" content="https://assets-cdn.github.com/images/modules/open_graph/github-octocat.png">'
        }, {
            src: 'https://assets-cdn.github.com/pinned-octocat.svg',
            sizes: '',
            type: '',
            origin: '<link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">'
        }, {
            src: 'https://assets-cdn.github.com/favicon.ico',
            sizes: '',
            type: 'image/x-icon',
            origin: '<link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">'
        }, {
            src: 'https://assets-cdn.github.com/apple-touch-icon-114x114.png',
            sizes: '114x114',
            type: '',
            origin: 'https://github.com/manifest.json'
        }, {
            src: 'https://assets-cdn.github.com/apple-touch-icon-120x120.png',
            sizes: '120x120',
            type: '',
            origin: 'https://github.com/manifest.json'
        }, {
            src: 'https://assets-cdn.github.com/apple-touch-icon-144x144.png',
            sizes: '144x114',
            type: '',
            origin: 'https://github.com/manifest.json'
        }, {
            src: 'https://assets-cdn.github.com/apple-touch-icon-152x152.png',
            sizes: '152x152',
            type: '',
            origin: 'https://github.com/manifest.json'
        }, {
            src: 'https://assets-cdn.github.com/apple-touch-icon-180x180.png',
            sizes: '180x180',
            type: '',
            origin: 'https://github.com/manifest.json'
        }, {
            src: 'https://assets-cdn.github.com/apple-touch-icon-57x57.png',
            sizes: '57x57',
            type: '',
            origin: 'https://github.com/manifest.json'
        }, {
            src: 'https://assets-cdn.github.com/apple-touch-icon-60x60.png',
            sizes: '60x60',
            type: '',
            origin: 'https://github.com/manifest.json'
        }, {
            src: 'https://assets-cdn.github.com/apple-touch-icon-72x72.png',
            sizes: '72x72',
            type: '',
            origin: 'https://github.com/manifest.json'
        }, {
            src: 'https://assets-cdn.github.com/apple-touch-icon-76x76.png',
            sizes: '76x76',
            type: '',
            origin: 'https://github.com/manifest.json'
        }]
    }
    */
})
```