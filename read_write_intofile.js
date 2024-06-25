const fs = require('fs').promises;

async function ask(fileName) {
  {
    console.log("before editing");
    let data = await fs.readFile(fileName,'utf8');
    console.log(data);
    console.log("after editing");
    data+="and i love chess";
    await fs.writeFile(fileName,data,'utf8');
    let afterdata = await fs.readFile(fileName,'utf8');
    console.log(afterdata);
  } 
}

ask('a.txt');
