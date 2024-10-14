<?php
//  php scripting language 

if(isset($_POST["name"])){
   // echo "Hello". $_GET['name']."last login ".$_GET['lastLoginis'];
   // get or post based on method of ajax .open(method)
   echo "Hello ". $_POST['name']."last login ".$_POST['lastLoginis'];
}

?>