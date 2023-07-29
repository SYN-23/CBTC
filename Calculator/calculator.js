let oldData;
let calculate=0;
function btnClick(data){
  
   checkSign(oldData,data);

   oldData=data;

 }

const clickBack=()=>{
  let v=document.getElementById('input');
  v.value= v.value.slice(0,-1)
  
}

const clickClear=()=>{
  let v=document.getElementById('input');
  v.value="";
}

const equal=()=>{
  let number1=document.getElementById('input').value;
  if(number1===''){
    document.getElementById('input').value='';
  }else{
   calculate=eval(number1);
  document.getElementById('input').value=calculate;
  }
}

function checkSign(oldData,data){
  let v=document.getElementById('input');
  if(data==="+"||data==="/"|| data ==='*' || data==='-' ||data==='.'||data==='%'){
  if( oldData==="+"||oldData==="/"|| oldData ==='*' || oldData==='-' ||oldData==='.'|| oldData==='%'){

   v.value= v.value.slice(0,-1)
    v.value += data;
  }else{
    v.value += data;
  }
}else{
    v.value += data;
  }
}
