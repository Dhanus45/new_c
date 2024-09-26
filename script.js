

const p=document.getElementById('demo')
const a=document.getElementById("oper").options

document.getElementById("form").addEventListener("submit",function(event){event.preventDefault()});
total()
function total(){
    const num1=parseInt(document.getElementById('firstnum').value)
    const num2=parseInt(document.getElementById('Secondnum').value)
if (a == '+'){
        
    num1+num2;
    console.log(num1)
    console.log(num1+num2)
    document.getElementById('demo').innerHTML=num1+num2
}else if(a == '-')
    {
        num1-num2;
    console.log(text)
    document.getElementById('demo').innerHTML=num1-num2
    }else if(a == '*'){
        num1*num2;
            console.log(num1)
            document.getElementById('demo').innerHTML=num1*num2
    }else{
        num1*num2;
            console.log(num1)
            document.getElementById('demo').innerHTML=num1/num2    }
}

