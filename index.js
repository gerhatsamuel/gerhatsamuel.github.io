function CalculateBMI(Weight,Height){
    Height/=100
    BMI = Weight/((Height*Height))
    if (BMI < 18.5){
        Class = "Underweight"
    }
    if ((BMI >= 18.5)&&(BMI <25)){
        Class = "Normal"
    }
    if ((BMI >= 25)&&(BMI <30)){
        Class = "Overweight"
    }
    if (BMI >= 30) {
        Class = "Obesity"
    }
    result.innerHTML = "Your BMI is: "+BMI.toFixed(2)+"  Categorized as: "+Class
}

let button = document.getElementById('btn')
button.addEventListener('click', () => {
    Input_Height = document.getElementById('tinggi').value
    Input_Weight = document.getElementById('berat').value
    result = document.getElementById('output')
    CalculateBMI(Input_Weight,Input_Height)
})



//console.log(BMI+"  "+WeightClass(BMI))
   