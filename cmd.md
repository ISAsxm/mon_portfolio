# Architecture model of a web user interface with sass and npm.

## Description :

Ready-to-use architecture model of a UI with sass and npm.  
Version : 1.0.0  
Date : 2020-05-06  
Responsable : HI

---

## Implementation :

### project init :

Change the name, version, description, author and license in package.json with your own data.

Then run :

$ **npm install**

---

### dev environment :

Run this if you don't need npm server :

$ **npm run watch:sass**

_This is the script in package.json :_

`"watch:sass": "node-sass sass/main.scss css/style.css -w",`

Or this if you prefer to use the npm server :

**_install npm live-server if you have not already done so :_**
$ **npm install live-server -g**

Then run :

$ **npm run start**

_This is the script in package.json :_

`"devserver": "live-server", "start": "npm-run-all --parallel devserver watch:sass",`

**_add --browser option if you need_** :

`"devserver": "live-server --browser=firefox", "start": "npm-run-all --parallel devserver watch:sass",`

---

### prod environment :

$ **npm run build:css**

_This is the script in package.json :_

- It compiles all scss in css  
   `"compile:sass": "node-sass sass/main.scss css/style.comp.css",`
- It prefixes with browsers prefix  
   `"prefix:css": "postcss --use autoprefixer -b 'last 10 versions' css/style.comp.css -o css/style.prefix.css",`
- It compresses the output css file  
   `"compress:css": "node-sass css/style.prefix.css css/style.css --output-style compressed",`
- It runs the 3 commands above to be ready to production  
   `"build:css": "npm-run-all compile:sass prefix:css compress:css"`

**_replace with these lines if you have used several .css files to concatenate them (like a font file for icons for example)_**  
_(just rename the file to be concat with your file name)_

`"compile:sass": "node-sass sass/main.scss css/style.comp.css",`  
`"concat:css": "concat -o css/style.concat.css css/icon-font.css css/style.comp.css",`  
`"prefix:css": "postcss --use autoprefixer -b 'last 10 versions' css/style.concat.css -o css/style.prefix.css",`  
`"compress:css": "node-sass css/style.prefix.css css/style.css --output-style compressed",`  
`"build:css": "npm-run-all compile:sass concat:css prefix:css compress:css"`

---

## Informations :

There are several examples and comments in all the directories.  
Delete everything you don't need but respect the architecture of the application for it to work properly.

## Npm command reminder :

npm outdated
npx npm-check-updates -u
