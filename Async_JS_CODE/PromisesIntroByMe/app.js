
// const fakeRequestCallBackByMe = function (urlLink,successFunc,failureFunc) {
//   const delayByMe = (Math.floor(Math.random()*4500)+500);

//   setTimeout(()=>{
//     if(delayByMe>4000){
//       console.log("It failed");
//       failureFunc("Error my guy");
//     }
//     else{
//       console.log("It worked");
//       successFunc(`That was smooth and here's the link: ${urlLink}`);
//     };
//   },delayByMe);

// }

// fakeRequestCallBackByMe("https://parthsharmaa.com", 

// function(response) {
//   console.log(response);
// }, 

// function(err){
//   console.log(err);
// }

// );



////////////////////////////

// function getData(data, getNextData){
  
//   setTimeout(
//     console.log("Data", data);
//     if(getNextData){
//       getNextData();
//     }
//   ,2000);
  
// }

// getData(2, () => {
//   getData(4, () => {
//     getData(8)
//   });
// });

// let promise = new Promise((resolve,reject)=>{
//   let num = Math.floor(Math.random()*10)+1;

//   if (num>=5){
//     console.log("greater then five");
//     resolve("greater then five");
//   }
//   else{
//     console.log("less than five");
//     reject("less than five");
//   }


// });


// this one utilizes .then and promises

// function getData(data) {
//   return new Promise((resolve,reject)=>{

//     console.log("Fetching data...")
//     setTimeout(()=>{
//       console.log(data);
//       resolve("Success for data")
//     },3000)
    

//   })
// }


// getData(1234)
//   .then((res)=>{
//      return getData(5678)
//       .then((res)=>{
//          return getData(10111213)
//          .then((res)=>{
//           console.log(res);
//          })
//       })
//   })
  

// lets try async await

function getData(data) {
  return new Promise((resolve,reject)=>{

    setTimeout(() =>{

      console.log(data)
      resolve();

    },2000);

  });
};


(async function() {

  console.log("Getting data..")
  await getData(1);


  console.log("Getting data..")
  await getData(2);

  console.log("Getting data..")
  await getData(3);

  console.log("Getting data..")
  await getData(4);
})();

