<?php
header('Access-Control-Allow-Origin: *');
include 'config.php';

$id = $_GET['id'];


$sql =  "SELECT followers.Phone as Phone, followers.Fullname as Fullname, sema_user.ID as ID
		 FROM followers, sema_user WHERE SemaID = '$id' AND followers.Phone = sema_user.Phone";


try {
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);  
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $dbh->query($sql);  
    $following = $stmt->fetchAll(PDO::FETCH_OBJ);
    $dbh = null;
    echo '{"items":'. json_encode($following) .'}'; 
} catch(PDOException $e) {
    echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}


?>