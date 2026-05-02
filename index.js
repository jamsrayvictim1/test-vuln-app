'use strict';
const sink = document.getElementById("flaw");
const click = document.getElementById("click");
const input = document.querySelector("#input");

function render() {
  sink.innerHTML = input.value;
}
