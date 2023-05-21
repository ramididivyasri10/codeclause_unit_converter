function convert() {
    var input = document.getElementById("input").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var output;
  
    if (from == "meters" && to == "feet") {
      output = input * 3.28084;
    } else if (from == "feet" && to == "meters") {
      output = input / 3.28084;
    } else if (from == "meters" && to == "kilometers") {
      output = input / 1000;
    } else if (from == "kilometers" && to == "meters") {
      output = input * 1000;
    } else if (from == "feet" && to == "kilometers") {
      output = input / 3280.84;
    } else if (from == "kilometers" && to == "feet") {
      output = input * 3280.84;
    } else if (from == "meters" && to == "miles") {
      output = input / 1609.34;
    } else if (from == "miles" && to == "meters") {
      output = input * 1609.34;
    } else {
      output = input;
    }
  
    document.getElementById("output").value = output.toFixed(2);
  }
  