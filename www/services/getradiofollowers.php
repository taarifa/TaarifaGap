<?php
header('Access-Control-Allow-Origin: *');
include 'config.php';

$radio_id = $_GET['id'];
$sql =  "SELECT sema_user.Phone as phone, sema_user.Fullname as name, sema_user.ID as id from sema_user, radio_followers where sema_user.ID=radio_followers.user and radio_followers.radio='$radio_id' ";


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