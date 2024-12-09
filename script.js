function bmi() {
  var h = document.getElementById("height").value; // Height in cm
  var w = document.getElementById("weight").value; // Weight in kg
  
  // Correct formula for BMI
  var bmi = w / ((h / 100) * (h / 100));
  
  // Round BMI to 2 decimal places for better readability
  var total = bmi.toFixed(2);
  
  // Display result
  document.getElementById("result").innerHTML = "Your BMI is : " + total;
}
