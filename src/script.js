const button = document.getElementById("btn");

button.addEventListener("click", function() {
  alert("Button clicked!");
});

const paragraph = document.getElementById("demo");

paragraph.addEventListener("mouseover", function() {
  paragraph.style.color = "blue";
});

paragraph.addEventListener("mouseout", function() {
  paragraph.style.color = "black";
});