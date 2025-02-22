let fristNum =(num) => {
    let arr =num.split("");
    console.log(arr.slice(0,));
}
fristNum("500");

let lastNum =(arr) => {
 let positive =[];
 let negative =[];
 let even =[];
 let odd =[];
  arr.forEach((num) => {
    if(num>0){
      positive.push(num);
    }
    else{
        negative.push(num);
  
    }
    if(num%2==0){
        even.push(num);
    }
    else{
        odd.push(num);
    }
  })
  console.log("positive num is "+ positive.length);
  console.log("negative num is "+ negative.length);
  console.log("even num is "+even.length);
  console.log("odd num is "+odd.length);

}
lastNum([10,21,-50,-3,-12,9,2]);


let max = (num) => {   
    let x=[[1,2,3,4],[45,73,12],[13,13,10]];
    let max =[Math.max(...x[0]),Math.max(...x[1]),Math.max(...x[2])]; ;
    console.log(max);
}
max();
let max_1 = () => {   
    let x=[[1,2,3,4],[45,73,12],[13,13,10]];
    let y=[];
    x.forEach((x,index) => {
        let max =Math.max(...x);
        y.push(max);
    })
    console.log(y);

}
max_1();

let min = () => {
    let x=[[1,2,3,4],[45,73,12],[13,13,10]];
    let y=[];
    x.forEach((x,index) => {
        let min =Math.min(...x);
        y.push(min);
    })
    console.log(y);

}
min();

let min_1 = (str) => {
    str =prompt();
    let final ="";
    if(str.length<=5){
        final =str;
    }
    else{
        final =str.slice(0,1)+str.length+str.slice(str.length-1,str.length);
    }
    console.log(final);
}
min_1();

