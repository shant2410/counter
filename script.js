const countValue=document.querySelector('#counter');
const increment=() =>{
    let value=parseInt(countValue.innerText); // getting given present number
    //but it is in char form we need to convert it into integer
   
    //update the value
    value=value+1;
    //set the value on UI
    countValue.innerText=value;


};
const decrement=()=>{
    let value=parseInt(countValue.innerText); // getting given present number
    //but it is in char form we need to convert it into integer
    
    //update the value
    value=value-1;
    //set the value on UI
    
    countValue.innerText=value;
   



};
