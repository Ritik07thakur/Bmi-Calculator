function bmi(){
  var h = document.getElementById("height").value
  var w = document.getElementById("weight").value 
  var bmi  = w/(h/100*h/100);
  var totol = bmi.toFixed(0)
  document.getElementById("result").innerHTML = "your BMI is "+ totol

}