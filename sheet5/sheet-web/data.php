<?php

$servername = "localhost";
$username = "root";
$password = "mahmoud123";
$dbname = "purchase";

$conn = new mysqli($servername, $username, $password, $dbname);


 if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

 $page = isset($_GET['page']) ? intval($_GET['page']) : 1;
$limit = 3; 
$offset = ($page - 1) * $limit;

// Query to fetch news items
$sql = "SELECT Id, Title, Content, Published_date FROM news ORDER BY Published_date DESC LIMIT $limit OFFSET $offset";
$result = $conn->query($sql);

$newsItems = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $newsItems[] = $row ;
    }
}
header('Content-Type: application/json');

echo json_encode($newsItems);
// what return from ajax call

$conn->close();
?>
