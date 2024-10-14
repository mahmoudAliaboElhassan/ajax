<?php
 
 header('Content-Type: application/json');

 if ($_SERVER["REQUEST_METHOD"] != "POST") {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method.'
    ]);
    exit;
}

// Retrieve and sanitize POST data
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';

// Simple server-side validation
if ($name === '' || $email === '') {
    echo json_encode([
        'success' => false,
        'message' => 'Both name and email are required.'
    ]);
    exit;
}

 if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid email format.'
    ]);
    exit;
}

 $safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');

// Generate a response message
$message = "Welcome, $safeName!<br>Your Email is: $safeEmail.";

// Respond with success
echo json_encode([
    'success' => true,
    'message' => $message
]);
?>
