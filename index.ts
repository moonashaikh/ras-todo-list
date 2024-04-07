#! /user/bin/env node

import inquirer from  "inquirer"
    let todos:string[] = [];  
    let condition = true;  
    
    while(condition)
{
    let answer = await inquirer.prompt([        
        {
        name :  "select",
        type : "list",
        message : "Select an options",
        choices :["Add","update","view","Delete","Exit"]

            },

]); 
 
if(answer.select  == "Add") 
{ 
    let addtodo = await inquirer.prompt({
        name :"todo",
        type:"input",
        message:"Add item in the list",
        validate : function (input) {
            if(input.trim() ==""){
                return "please enter no-empty item"
            } return true;
        
        }
        })   
        if(addtodo.todo.trim() !="")
        {
            todos.push(addtodo.todo);
            console.log(todos);
   }
        }
   
        

if(answer.select  == "update") 
{ 
    let updatetodo = await inquirer.prompt({
        name :"todo",
        type:"list",
        message:"update item in the list",
        choices : todos.map(item=> item)
    });    
   
    let addtodo = await inquirer.prompt({
        name :"todo",
        type:"input",
        message:"Add item in the list"
    }); 
    
         let newTodo =todos.filter(val => val !== updatetodo.todo);
         todos= [...newTodo,addtodo.todo];
       console.log(todos);

}
if(answer.select  == "view") 
{ 
    console.log("**** TO-DO-LIST**********");
    console.log(todos);

}
if(answer.select  == "Delete") 
{ 
    let deletetodo = await inquirer.prompt({
        name :"todo",
        type:"list",
        message:"select item to delete",
        choices : todos.map(item=> item)
    }); 
    let newTodo =todos.filter(val => val !== deletetodo.todo);
         todos= [...newTodo];
       console.log(todos);

}
if(answer.select  == "Exit") {
    console.log("Exit the program");
    condition = false;
}
}
















    
