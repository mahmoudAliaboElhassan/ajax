let xhr = new XMLHttpRequest();
console.log("Hello");
function loadData() {
  xhr.open("GET", "data.xml", true);
  xhr.onreadystatechange = handleResponse;
  xhr.send(null);
}
function handleResponse() {
  console.log("Hello");
  if (xhr.readyState === 4 && xhr.status === 200)
    console.log(JSON.parse(xhr.responseXML));
}

loadData();
