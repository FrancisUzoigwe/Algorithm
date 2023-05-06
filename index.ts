// // const start = (n: number) => {
// //     for (let i = 0; i <= n; i++) {
// //         console.log(i);
// //     }
// // }

// const start = //(n: number) => {
//     let count: number = 0
//     for (let i = n; i >= 0; i--) {
//         // count = count + i
//         count += i
//     }
//     return count
// }

// const start1 = (n: number) => {
//     let count: number[] = [];
//     for (let i = n; i >= 0; i--) {
//         count.push(i);
//     }
//     return count.reduce((a, b) => a + b);
// };

// const start2 = (n: number) => {
//     return (n * (n + 1)) / 2;
// }

// // console.log("")
// // console.time();
// // console.log("Best Result", start2(100000));
// // console.timeEnd();
// // console.log("");

// // console.time();
// // console.log("OK Result", start(100000));
// // console.timeEnd();
// // console.log("");

// // console.time();
// // console.log("Bad Result", start1(100000));
// // console.timeEnd();
// // console.log("");

// //Write a function that reverse a String "Peter".

//     // const String
//     // let Str: string = "Peter";
//     // let StrSpliting: string[] = Str.split("");
//     // let StrReverse: string[] = StrSpliting.reverse();
//     //  console.log(StrReverse.join(""))
    
//     const StrFunc = () => {
//         let Str: string = "";
//         let StrSpliting: string[] = Str.split("");
//         let StrReverse: string[] = StrSpliting.reverse();
//         console.log( StrReverse.join(""))
//     };

//     // console.log(StrFunc())
//     // to get "eter" from "P"
//     // console.log("Peter".slice(1));
//     // console.log("Peter".substr(1));
//     // console.log("");
//     // console.log("Peter".slice(0, 1));
//     // console.log("Peter".charAt(0));

    // const aFuncString = (n: string): any =>  {
    //     if (n === "") {
    //         return ""
    //     } else {
    //         return aFuncString(n.slice(1)) + n.slice(0, 1);
    //     }
    // };
    // console.log("");
    // console.log(aFuncString("Peter"));

    // const aFuncStringAgain = (n: string) => {
    //     let nn: string = "";
    //     for (let i = n.length; i >= 0; i--) {

    //     }
    // }

    // console.log("")
    // console.time()
    // console.log(aFuncString("Peter"))
    // console.timeEnd("")

    // console.log("")
    // console.time()
    // console.log(aFuncStringAgain(""))
    // console.timeEnd("")

    // console.log("")
    // console.time()
    // console.timeEnd("");
    // // StrFunc()
    

// let numArr: number[] = [1, 2, 3, 4, 5];
// let arrAny: any[] = [1, 1, 1, 1, "The Boy", {name: "Peter"}, [0, 4]];

// // console.log(arrAny.every((el) => {
// //     return el === "The Boy"
// // }));

// // console.log(arrAny.some((el) => {
// //     return el === "The Boy"
// // }));


// // console.log(arrAny[5]); 

// let pass: number = 6
// let stored: number[] = [];

// const check = numArr.findIndex((el => {
//     el === pass
// }));

// const check1 = numArr.some((el => {
//     el === pass
// }));

// // console.log(check);
// // console.log(check1);

// // if (check1) {
// //     console.log("Already exits");
// // } else {
// //     numArr.push(pass)
// //     console.log("You can go ahead");
// // };

// console.log(numArr);

// const checkFor = (data: number[]) => {
//     let map = new Map();
//     for (let i of data) {
//         if (map.has(i)) {
//             return true
//         } else {
//             map.set(i, true)
//         }
//     }
//     console.log(map);
//     return false;
// };

// console.log(checkFor(numArr));

interface iData1 {
    school:string;
    address:string;
    age:number;
    phone:number
}

interface iData2 extends iData1{
    name:string;
    hobby:string
}



