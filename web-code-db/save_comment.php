<?php
// Establish database connection
$servername = 'localhost';
$username = 'root';
$password = 'mahmoud123';
$dbname = 'purchase';

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die('Database connection failed: ' . $conn->connect_error);
}

// Insert the comment into the database
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $comment = $_POST['comment'];

  $sql = "INSERT INTO blogs (blog,id) VALUES ('$comment',null)";
  if ($conn->query($sql) === true) {
    echo 'Comment saved successfully';
  } else {
    echo 'Error: ' . $sql . '<br>' . $conn->error;
  }
}

$conn->close();
?>