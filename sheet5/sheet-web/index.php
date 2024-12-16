<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>News List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .news-item {
      border-bottom: 1px solid #ccc;
      margin-bottom: 10px;
      padding-bottom: 10px;
    }
    .news-item h3 {
      margin: 0;
    }
    .news-item p {
      margin: 5px 0;
    }
    #loading {
      display: none;
    }
  </style>
</head>
<body>
  <h1>News List</h1>
  <div id="news-container">
    <!-- News items will be dynamically loaded here -->
  </div>
  <button id="next-button">Next</button>
  <div id="loading">Loading...</div>

  <script src="main.js"></script>
   
  
</body>
</html>
