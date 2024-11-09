const table = document.getElementById("table");
const xhr = new XMLHttpRequest();

let xmlResponse;
function handleXML(type) {
  xhr.open("GET", "data.xml", true);
  xhr.onreadystatechange = processXML;
  xhr.send(null);
}
function processXML() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    xmlResponse = xhr.responseXML;
    console.log(xmlResponse);
    const items = xmlResponse.getElementsByTagName("item");

    const tableHeading = document.createElement("tr");
    const headingName = document.createElement("td");
    headingName.innerHTML = "Name";
    tableHeading.appendChild(headingName);
    const headingPrice = document.createElement("td");
    headingPrice.innerHTML = "Price";
    tableHeading.appendChild(headingPrice);
    const headingDescription = document.createElement("td");
    headingDescription.innerHTML = "Description";
    tableHeading.appendChild(headingDescription);
    table.appendChild(tableHeading);
    console.log(items);
    for (let i = 0; i < items.length; i++) {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      nameCell.innerHTML = items[i].getElementsByTagName("name")[0].textContent;
      row.appendChild(nameCell);
      const price = document.createElement("td");
      price.innerHTML = items[i].getElementsByTagName("price")[0].textContent;
      row.appendChild(price);
      const description = document.createElement("td");
      description.innerHTML =
        items[i].getElementsByTagName("description")[0].textContent;
      row.appendChild(description);
      table.appendChild(row);
    }
  }
}

function handleUl() {
  const list = document.getElementById("list");
  const items = xmlResponse.getElementsByTagName("item");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const li = document.createElement("li");
    let child = item.firstChild;
    while (child) {
      console.log(child);
      if (child.nodeType === 1) {
        li.innerHTML += child.firstChild.textContent + " ";
      }
      child = child.nextSibling;
    }

    list.appendChild(li);
  }
}
