// fetch("https://swapi.dev/api/people/1")
//   .then((res)=>{
//       console.log("Data fetched");
//       return res.json();
//   })
//   .then((data)=>{
//     console.log("Data is here: ")
//     console.log(data);
//   })
//   .catch((e)=>{
//     console.log("Error",e);
//   })



const getStarWarsPeopleData = async () => {

  try {
    const res = await axios.get("https://swapi.dev/api/people/1");
    console.log(res.data);
  } 
  catch (error) {
    console.log("Error",error)
  }
  
}

getStarWarsPeopleData();