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

// Retrieve the comments from the database
$sql = 'SELECT blog FROM blogs';
$result = $conn->query($sql);
$comments = array();

if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $comments[] = $row['blog'];
  }
}

$conn->close();

// Return the comments as a JSON response
header('Content-Type: application/json');
echo json_encode($comments);
?>