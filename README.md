# algo-pay-only-javascript
Work in progress project to port AlgoPay react to pure javascript

build command (to dist folder, will create if does not exist):

```bash
npm run build
```

to correctly show css after bulding, modify the index.html that is generated in the dist folder by:

- removing one of the `<link>` tags for the css
- removing the numeric hash from the remaining `<link>` tag so that the href reads "styles.css"
- renaming the js file to "index.js"

Finally, copy your styles.css file into the dist folder.

test build command on localhost:

```serve dist
```
