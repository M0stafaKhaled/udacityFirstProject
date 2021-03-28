import handleSubmit from './formHandler'
let urlcheckview = ()=>{
  
  let url =document.getElementById("base-url").value;
  let test = handleSubmit(url);
}


export  default urlcheckview