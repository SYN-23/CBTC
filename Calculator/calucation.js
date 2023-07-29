let arr=[];

function input(arr1){
   let number='';
for(let i=0;i<arr1.length;i++){
 number=number+arr[i];
}
return number;
}

function checkSign(arr1){
    if(arr1[arr1.length-1]==='+'||arr1[arr1.length-1]==='-'||arr1[arr1.length-1]==='/'||arr1[arr1.length-1]==='*'){
        arr.pop();
    }
}

const clickBack=()=>{
    arr.pop();
  let number1=input(arr);
  if(arr.length===0){
    document.querySelector(".inputNumber").innerHTML=0;
  }else{
  document.querySelector(".inputNumber").innerHTML=number1;
  }
}

const click7=()=>{
arr.push(7);
let number1=input(arr);
console.log(arr)
document.querySelector(".inputNumber").innerHTML=number1;

}
const click8=()=>{
    arr.push(8);
    let number1=input(arr);
    console.log(arr)
    document.querySelector(".inputNumber").innerHTML=number1;
    
}

const click9=()=>{
    arr.push(9);
    let number1=input(arr);
    console.log(arr)
    document.querySelector(".inputNumber").innerHTML=number1;
    
}

const click4=()=>{
    arr.push(4);
    let number1=input(arr);
    console.log(arr)
    document.querySelector(".inputNumber").innerHTML=number1;
    
}

const click5=()=>{
    arr.push(5);
    let number1=input(arr);
    console.log(arr)
    document.querySelector(".inputNumber").innerHTML=number1;
    
}

const click6=()=>{
    arr.push(6);
    let number1=input(arr);
    console.log(arr)
    document.querySelector(".inputNumber").innerHTML=number1;
    
}

const click1=()=>{
    arr.push(1);
    let number1=input(arr);
    console.log(arr)
    document.querySelector(".inputNumber").innerHTML=number1;
    
}

const click2=()=>{
    arr.push(2);
    let number1=input(arr);
    console.log(arr)
    document.querySelector(".inputNumber").innerHTML=number1;
    
}

const click3=()=>{
    arr.push(3);
    let number1=input(arr);
    console.log(arr)
    document.querySelector(".inputNumber").innerHTML=number1;
    
}

const click0=()=>{
    arr.push(0);
    let number1=input(arr);
    console.log(arr)
    document.querySelector(".inputNumber").innerHTML=number1;
    
}

const clickAdd=()=>{
    checkSign(arr);
arr.push("+");
let number1=input(arr);
console.log(arr)
document.querySelector(".inputNumber").innerHTML=number1;
}

const clickDelete=()=>{
  
checkSign(arr);
arr.push("-");
let number1=input(arr);
console.log(arr)
document.querySelector(".inputNumber").innerHTML=number1;
}

const clickMultiply=()=>{
  
    checkSign(arr);
    arr.push("*");
    let number1=input(arr);
    console.log(arr)
    document.querySelector(".inputNumber").innerHTML=number1;
}

const clickDivide=()=>{
  
    checkSign(arr);
    arr.push("/");
    let number1=input(arr);
    console.log(arr)
    document.querySelector(".inputNumber").innerHTML=number1;
}

const clickClear=()=>{
   arr=[];
   document.querySelector(".inputNumber").innerHTML=0;
}

const equal=()=>{
    
    let sum=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]==='+'){
           
            sum=sum+subequal(i+1);
        }else{
            sum=sum*10+arr[i];
        }
       
    }
    arr=[];
    document.querySelector(".inputNumber").innerHTML=sum;
    
 }

 const subequal=(j)=>{
    let sum=0;
    for(i=j;i<arr.length;i++){
        if(arr[i]!='+'){
            sum=sum*10+arr[i];
        }else{
           break;
        }
    }
    console.log(sum)
    return sum;
    
 }
    

