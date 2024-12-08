var xhr;
document.getElementById("btn").onclick = function () {
  console.log("clicked");
  xhr = new XMLHttpRequest();
  xhr.open("GET", "data.xml", true);
  xhr.onreadystatechange = handleResonse;
  xhr.send(null);
};
function handleResonse() {
  console.log("from response");
  if (xhr.readyState === 4 && xhr.status === 200) {
    let response = xhr.responseXML;
    const xmlResponse = response.getElementsByTagName("product");
    console.log(xmlResponse);
    const table = document.getElementById("mytable");
    const tableHeading = document.createElement("tr");
    const tableTitle = document.createElement("td");
    tableTitle.innerHTML = "Title";
    tableHeading.appendChild(tableTitle);
    const tablePrice = document.createElement("td");
    tablePrice.innerHTML = "Cost";
    tableHeading.appendChild(tablePrice);
    const tableDetails = document.createElement("td");
    tableDetails.innerHTML = "Details";
    tableHeading.appendChild(tableDetails);
    table.appendChild(tableHeading);
    console.log(table);
    for (let i = 0; i < xmlResponse.length; i++) {
      let row = document.createElement("tr");
      let title = document.createElement("td");
      title.innerHTML =
        xmlResponse[i].getElementsByTagName("title")[0].textContent;
      console.log(xmlResponse[i].getElementsByTagName("title")[0]);
      row.appendChild(title);
      let cost = document.createElement("td");
      cost.innerHTML =
        xmlResponse[i].getElementsByTagName("cost")[0].textContent;
      console.log(xmlResponse[i].getElementsByTagName("cost")[0]);
      row.appendChild(cost);
      let description = document.createElement("td");
      description.innerHTML =
        xmlResponse[i].getElementsByTagName("details")[0].textContent;
      console.log(xmlResponse[i].getElementsByTagName("details")[0]);
      row.appendChild(description);
      table.appendChild(row);
    }
  }
}
