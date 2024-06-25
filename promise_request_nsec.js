function promiseresolving(n) {
    const p =  new Promise(function(resolve,reject){
      // const error = false;
      // if(error)
      // reject("sorry");
      setTimeout(()=> {resolve("done")},n*1000);
    });
    return p;
  }
  const p = promiseresolving(2);
  p.then(function(value){
    console.log(value);
  })
  // p.catch(function(value){
  //   console.log(value);
  // })
  