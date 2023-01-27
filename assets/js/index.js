function solveEqn(clicked_id) {
  let eqn = clicked_id;
  let input = document.getElementById("input");

  if (eqn == "point") {
    input.value += ".";
  } else if (eqn == "plus") {
    input.value += "+";
  } else if (eqn == "minus") {
    input.value += "-";
  } else if (eqn == "multiply") {
    input.value += "*";
  } else if (eqn == "div") {
    input.value += "/";
  } else if (eqn == "modulus") {
    input.value += "%";
  } else if (eqn == "equal") {
    input.value = eval(input.value);
  } else if (eqn == "reset") {
    input.value = null;
  } else {
    input.value += eqn;
  }
}

document.onkeypress = function (e) {
  let input = document.getElementById("eqn");
  e = e || window.event;
  let key = e.keyCode;
  let keyName = e.key;
  let keyPressed = String.fromCharCode(key);

  if (keyName == "Enter" || keyName == "Equal") {
    input.value = eval(input.value);
  }
};

var backspace = function () {
  var del = document.getElementById("input").value;
  document.getElementById("input").value = del.substring(0, del.length - 1);
};
