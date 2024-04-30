#! /usr/bin/env node
import inquirer from "inquirer";

let answer = await inquirer.prompt({name:'age',type:'number',message:'enter your age'})
console.log("IN'SHAA'ALLAH , after " + (60 - answer.age) + "years you will be 60 years old")
