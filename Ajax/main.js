console.log("hello, wold!");
// ajax asynchronous javascript and xml

// xml/json get send data to server
// XMLHttpRequest => make the connection with the server
// part of page is updated without refreshing the page
// you can send and retrieve data in different format json xml html text file
// you can continue to use the application while connection is working

// examples
// google when you search
// in the background
// gmail when sending message
// facebook when writing posts

// img displayed is request

// 429 too many requests
// remote address => ip which i bring data from xxx.xx.xxx.x:port

// XHR => XMLHttpRequest

var myRequest = new XMLHttpRequest();
// assign request Object to variable
myRequest.onreadystatechange = function () {
  console.log(this.readyState);
  // function call when ready state change
  /*
ready state => the Status of the request
[0] Request not Initialized
[1] Server Connection Established
[2] Request Received
[3] Processing Request
[4] Request is Finished and Response is Ready



*/
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
    console.log(this.statusText);
    document.getElementById("getFileData");
    //   ok not-found and other not modified
  }
};
// myRequest.open("method","url",async true or false,user,password)
// url can be api or file in the project
// if async is false it means that request is synchronous that any thing after request will not
// be implemented until request finishes
myRequest.open("GET", "mahmoud.txt", true);
myRequest.send();

// it work whe page rendered

function getFileData() {
  var myRequest = new XMLHttpRequest();
  myRequest.onreadystatechange = function () {
    console.log(this.readyState);
    console.log(this.responseText);
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
      console.log(this.statusText);
      document.getElementById("text").innerHTML = this.responseText;
    }
  };
  // myRequest.open("method,url",async)
  myRequest.open("GET", "mahmoud.txt", true);
  myRequest.send();
}
function getJsonData() {
  var myRequest = new XMLHttpRequest();
  myRequest.onreadystatechange = function () {
    console.log(this.readyState);
    console.log(this.responseText);
    if (this.readyState === 4 && this.status === 200) {
      console.log(JSON.parse(this.responseText));
      console.log(this.statusText);
    }
  };
  // myRequest.open("method,url",async)
  myRequest.open("GET", "object.json", true);
  myRequest.send();
}
function getPHP() {
  var myRequest = new XMLHttpRequest();
  myRequest.onreadystatechange = function () {
    console.log(this.readyState);
    console.log(this.responseText);
    if (this.readyState === 4 && this.status === 200) {
      // console.log(JSON.parse(this.responseText));
      console.log(this.statusText);
    }
  };
  // myRequest.open("method,url",async)
  // myRequest.open("GET", `main.php?name=Mahmoud&lastLoginis=today`, true);
  // myRequest.send();
  myRequest.open("POST", `main.php`, true);
  myRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  // after open before send
  myRequest.send("name=Mahmoud&lastLoginis=today");
}

// CROS policy
// protection
// access control allow origin
