// import os from "OS";
// import chalk from "chalk";
// const root =os.version()
// console.log(root)
// console.log(os.homedir())


// const OS = os.freemem();
// // console.log(OS.toString());


// const root =os.cpus();
// let CPU = root[0].model.split(" ")[2].split("_")[0];

// let CPU_rate =CPU.split("")[1];

// let sys = os.version()

// // console.log(sys.split(" ")[0])
// console.log(CPU_rate);

// if(sys.split(" ")[0] === 'Windows'){
//     if(parseInt(CPU_rate)>=5){
//         console.log(" You can play this game")
//     }else{
//         console.log(" Your processor does not meet the minimum requirement")
//     }
// }else{
//     console.log("You must be Windows user")
// }

// setInterval() => {
//     console.log("This is time")
// }
    

// console.log(os.uptime())
// console.log(os.freemem())
// console.log(os.platform())
// console.log(os.arch( ))
// console.log(chalk.green('Hello World'))
// // console.log(chalk.green(" i am"))


// let ourCount: number = 0;
// setInterval(() => {
//     console.log("Interval: ", ourCount++);
// }, 1000);


// let count:number =0;
// setTimeout(() =>{
//     console.log("Timeout: ",count++)
// },500)


// async(() => {
//     await task
// })

// let numArr: number[] = [1, 2, 4, 3, 2, 1 ,3];

// const checkForDup = (data: number[]) => {
//     let map = new Map();
//     for(let i of data) {
//         if (map.has(i)) {
//             return true
//         } else {
//             map.set(i, true)   
//         }
//     }
//     return false
// };
// console.log(checkForDup(numArr));

// const checkFor = (short: string, long: string) => {
//     let shortArr: string[] = short.split(" ");
//     let longArr: string[] = long.split(" ");

//     let map = new Map();

//     let joinArr = shortArr.concat(longArr);

//     for(let i of joinArr){
//         if (map.has(i)) {
//             return true
//         } else {
//             map.set(i, true)
//         }

//     }
//     return false
// };
// console.log(checkFor("My name is Franklin", "Your name"));
// let i: number = 0;
// for(i= 0; i <10; i++){
//     console.log(i)
// }

// let k:number = 0;
// for(k = 0; k > 0; k--){
//     console.log(k);  
// }

// if(i===9 && k ===3){
//     console.log("I've seen your key")
// }

// for(let i=0;i<=10;i++){
//     for(let k=10; k>=0;k--){
//         console.log(i,k)
//         if(i === 9 && k ===3){
//             console.log("i've found your key")
//         }
//     }
// }


// let data: number[] =[
//     100,
//     200,
//     300,
//     400,
// ]

// console.log(data)





// // let ourCount: number = 0;
// let ourCount: number = 0;
// setInterval(() => {
//     console.log("This Interval: "+ ourCount++ % 5);

// }, 1000);

const waitFor10Secs = async(time:number) =>{
    let timer =await new Date().getTime();
    console.log("I am thinking...")
    while(new Date().getTime() < timer + time){"Loading while you wait"}
    console.log("I am done, you can continue now")
}


// setTimeout()
waitFor10Secs(10000)