const fs = require('fs').promises;

async function ask(fileName) {
  {
    let data = await fs.readFile(fileName,'utf8');
    let s='';
    let newdata='';
    for(let c in data){
      console.log(data[c]);
      if(data[c]!==' ')
      {
        s+=data[c];
      }else
      {
        if(s)
        {newdata+=s;
        newdata+=' ';
        s='';}
      }
    }
   console.log(newdata);
    await fs.writeFile(fileName,newdata,'utf8');
  } 
}
ask('a.txt');

