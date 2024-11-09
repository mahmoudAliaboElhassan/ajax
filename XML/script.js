var xhr = new XMLHttpRequest();
function loadXML() {
    xhr.open("GET", "xmldata.xml", true);
    xhr.onreadystatechange = processXML;
    xhr.send(null);
}

function processXML() {
    if (xhr.status === 200 && xhr.readyState === 4) {
        var xmlDoc = xhr.responseXML;
        var products = xmlDoc.getElementsByTagName("product");
        var table = document.getElementById("table");
        var html = "<tr><th>Title</th><th>Cost</th><th>Details</th></tr>";
        for (let i = 0; i < products.length; i++) {
            var title = products[i].getElementsByTagName("title")[0].textContent;
            var cost = products[i].getElementsByTagName("cost")[0].textContent;
            var details = products[i].getElementsByTagName("details")[0].textContent;

            html += "<tr><td>" + title + "</td><td>" + cost + "</td><td>" + details + "</td></tr>";
        }
        table.innerHTML = html;

    }
}