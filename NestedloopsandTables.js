let prompt = require('prompt-sync')()
userName = prompt('Enter your name') // outside will make tables 
for(let r= 1; r<=5; r++)//Outter loop
  
{
    //name = prompt('Enter your name') // when in bracket it ask 5 times 
    for(let c=1; c<=6; c++ )//inside loop
    {
        process.stdout.write(userName)  // This will print name in column and rows 
    //process.stdout.write(r.toString())    
    }
    console.log() //The purpose of console.log is so you can easily see the output in diff rows.
    
}