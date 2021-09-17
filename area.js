const inputs = document.querySelectorAll(".values-input");
const submitButton = document.querySelector("#submit-btn");
const outputMsg = document.querySelector("#output");

function areaOfTriangle(base,height){
    const area =(base * height)/2;
    return area;
}


function calculateArea(){
    if (inputs[0].value > 0 && inputs[1].value > 0 ){
        const area = areaOfTriangle(Number(inputs[0].value),Number(inputs[1].value));
        outputMsg.innerText = "Area of Triangle is "+area;
    }else{
        outputMsg.innerText = "Enter valid Numbers";
    }
}

submitButton.addEventListener("click",calculateArea);