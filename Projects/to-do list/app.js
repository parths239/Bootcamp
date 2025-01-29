
let action = prompt("what would you like to do? Type new, list, delete, quit");
const todolist = ["eat","eat again"];

while(action !== "quit"){

  if (action === "new"){
    let item = prompt("Please add item to the to do list:");
    todolist.push(item);
    console.log("Item added!")
   
  }

  else if(action  === "list"){
    console.log("***********");
    
    for (let i = 0; i < todolist.length; i++) {
      console.log(`${i}: ${todolist[i]}`);
    }

    console.log("***********");
  }

  else if(action === "delete"){
    let index = parseInt(prompt("What index would you like to delete:"));
    if(!isNaN(index) && index>=0 && index < todolist.length){
      todolist.splice(index,1);
    }
    else{
      console.log("Invalid index. Please try again.");
    }
  }
  else{
    console.log("Unknow action.");
  }
  action = prompt("what else would you like to do? Type new, list, delete, quit");
}

if(action === "quit"){
  console.log("Ok, you quit!")
}
