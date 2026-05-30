//const path = require("path");
//console.log(__dirname);
//console.log(__dirname + "../../index.js"+"/projects"+"/index.js");
//console.log(path.join("/","../../index.js"+"/projects"+"/index.js"))

//import chalk from 'chalk';

//console.log(chalk.red("hi"));

/*
const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('File related cli')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count_words')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
         let words = 0;
         for ( let i = 0; i < data.length; i++ ){
          if (data[i] === " "){
          words++;
         }     
        }
        console.log(`There are ${words + 1} words in ${file}`);
      }
    });
  });

program.command('count_sentences')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
         let words = 0;
         for ( let i = 0; i < data.length; i++ ){
          if (data[i] === "\n"){
          words++;
         }     
        }
        console.log(`There are ${words} sentences in ${file}`);
      }
    });
  });

program.parse(); 
*/

/*
const thenable = {
     then: function (onFulfilled) {
      setTimeout (() => onFulfilled(42), 1000);
    }
};

async function main() {
     await thenable
     console. log ("hi there" );
    };    

main (); */

// Every promise is a thenable 
// Every thenable is not a promise

/*
const fs = require("fs");

function main(fileName) {
    fs.readFile(fileName ,"utf-8", function(err, data) {
    // Hello World
    let total = 0 ;
    for(let i = 0; i < data.length; i++ ){
        console.log(data[i])
        if (data[i] === " "){
             total++;
             }
        }
        console.log(total);
    })
}

main("a.txt");
*/