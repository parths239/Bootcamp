
const fakeRequestCallBackByMe = function (urlLink,successFunc,failureFunc) {
  const delayByMe = (Math.floor(Math.random()*4500)+500);

  setTimeout(()=>{
    if(delayByMe>4000){
      console.log("It failed");
      failureFunc("Error my guy");
    }
    else{
      console.log("It worked");
      successFunc(`That was smooth and here's the link: ${urlLink}`);
    };
  },delayByMe);

}

// const successFunc = function(response) {
//   console.log(response);
// };

// const failureFunc = function(err){
//   console.log(err);
// };

fakeRequestCallBackByMe("https://parthsharmaa.com", 

function(response) {
  console.log(response);
}, 

function(err){
  console.log(err);
}

);






