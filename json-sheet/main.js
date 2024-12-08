console.log("Hello Mahmoud");

let xhr = new XMLHttpRequest();
xhr.open("GET", "data.json", true);
xhr.onreadystatechange = handleResponse;
var currentIndex = 0;
var json;
xhr.send(null);

function handleResponse() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const jsonData = xhr.responseText;
    json = JSON.parse(jsonData).persons;
    showData();
  }
}

function showData() {
  document.getElementById(
    "name"
  ).innerHTML = `Name : ${json[currentIndex].name}`;
  document.getElementById("age").innerHTML = `Age : ${json[currentIndex].age}`;
  document.getElementById(
    "city"
  ).innerHTML = `City : ${json[currentIndex].city}`;
}
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");

prevButton.addEventListener("click", function () {
  if (currentIndex >= 1) {
    currentIndex = currentIndex -= 1;
  }
  showData();
});
nextButton.addEventListener("click", function () {
  if (currentIndex < json.length - 1) {
    currentIndex = currentIndex += 1;
  }
  showData();
});

document.getElementById("draw").addEventListener("click", () => {
  const height = parseInt(document.getElementById("height").value, 10);
  if (isNaN(height) || height < 1) {
    alert("Please enter a valid height.");
    return;
  }
  const triangle = document.getElementById("triangle");
  triangle.textContent = generateTriangle(height);
});

function generateTriangle(height) {
  let output = "";
  for (let i = 1; i <= height; i++) {
    output += "*".repeat(i) + "\n";
  }
  return output;
}
