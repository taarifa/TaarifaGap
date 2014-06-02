<?php
include 'config.php';
header('Access-Control-Allow-Origin: *');

$id = $_GET['id'];


$sql  = "SELECT f.FriendID, u.Fullname, u.Username, u.Phone, u.FB_Pic, u.TW_Pic, ";
$sql .= "u.Email, u.Uploaded_Pic, u.FB_Userid, u.TW_screen_name ";
$sql .= "FROM sema_user u, sema_friends f ";
$sql .= "WHERE f.FriendID = u.ID ";
$sql .= "AND f.SemaID = '$id' ";
$sql .= "AND Status = 'pending'";

try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->query($sql);  
	$friends = $stmt->fetchAll(PDO::FETCH_OBJ);
	$dbh = null;
	echo '{"items":'. json_encode($friends) .'}'; 
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}


?>