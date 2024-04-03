#! /usr/bin/env node

import inquirer from "inquirer";

//Printing a Wellcome Message
console.log("\n\tWellcome to \'CodeWithAyesha\' - CLI Simple Calculator\n");

 // Asking Questions from users through inquirer

 let answers = await inquirer.prompt([
    {message: "Enter First Number", type: "number", name: "firstNumber"},
    {message: "Enter Second Number", type: "number", name: "secondNumber"},
    {
        message: "Select one Operator to perform Operations",
        type:"list",
        name:"Operator",
        choices:["Addition", "Subtraction", "Multiplication", "Division"],
    }
 ]);

 console.log(answers);

 if (answers.Operator === "Addition"){
console.log(answers.firstNumber + answers.secondNumber)
 }
 else if(answers.Operator === "Subtraction"){
console.log(answers.firstNumber - answers.secondNumber)
 }
 else if(answers.Operator === "Multiplication"){
console.log(answers.firstNumber * answers.secondNumber)
 }
 else if(answers.Operator === "Division"){
console.log(answers.firstNumber / answers.secondNumber)
 }
 else{
    console.log("Invalid Input")
 }

 