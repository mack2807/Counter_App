const countvalue =document.querySelector('#counter');

const increment= ()=>{
    // get the value from ui
    let value=parseInt(countvalue.innerText);
    //update it
    value=value+1;
    //set the value onto ui
    countvalue.innerText=value;


};



const decrement=()=>{

    // get the value from ui
    let value=parseInt(countvalue.innerText);
    //update it
    value=value-1;
    //set the value onto ui
    countvalue.innerText=value;

};