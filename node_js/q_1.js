
//Q1- Reading the age and display corresponding message to it
const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});

readline.question("What is your name? ", name =>{
    console.log(`Welcome ${name}`);

    readline.question(`What is your age? `, age => {
        if(age<16){
            console.log(`You are not allowed to drive in Iowa`);
        }
        else{
            console.log(`You're allowed to get a driver's license in Iowa`);
        }
        readline.close();
    });    
});