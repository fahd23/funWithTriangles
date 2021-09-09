const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output =document.querySelector("#output-msg");

function calculateSumOfAngles(angle1, angle2, angle3){
    sumOfAngles = angle1 + angle2 +angle3;
    return sumOfAngles;
}

function isTriangle(){
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sumOfAngles === 180){
        output.innerText="Yay! Its form a triangle";
    }else{
        output.innerText="Oh oh ! Its doesnt form a triangle";
    }
}

isTriangleBtn.addEventListener("click",isTriangle);