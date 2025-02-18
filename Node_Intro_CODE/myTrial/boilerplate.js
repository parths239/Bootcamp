const fs = require('node:fs');
const folderName = process.argv[2] || "Project";

try{
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/app.js`,"");
  fs.writeFileSync(`${folderName}/index.html`,"");
  fs.writeFileSync(`${folderName}/app.css`,"");
}
catch(e){
  console.log("Something didn't work out");
  console.log(e);
}
