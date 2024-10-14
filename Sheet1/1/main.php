<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);

     echo "<div style='background-color: black;
    color: white;
    font-size: 24px;
    padding: 10px;
    display: flex;  
    justify-content: center;
    align-items: center;
    height: 100vh;'>
        <div>Welcome, $name <br>Your Email is: <br>($email).</div>
    </div>";
} else {
    echo "Invalid request.";
}
?>
