console.log('Starting app');

//greate method to learn about the asynchronous activity..
//this setTimeout will take two arguments
//argument represent how long you want to wait..
setTimeout(() =>{
    console.log('inside call back');
},2000)


//Assignment with no delays to chck the flow of the programs

setTimeout(() => {
    console.log('No delays');
},-1);


console.log('Finishing app');