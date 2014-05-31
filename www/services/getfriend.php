<?php
header('Access-Control-Allow-Origin: *');
include 'config.php';



$sql  = "SELECT f.FriendID, u.Fullname, u.Username, u.Phone, u.FB_Pic, u.TW_Pic, ";
$sql .= "u.Email, u.Uploaded_Pic, u.FB_Userid, u.TW_screen_name ";
$sql .= "FROM sema_user u, sema_friends f ";
$sql .= "WHERE f.FriendID = u.ID ";
$sql .= "AND f.FriendID =:id ";
$sql .= "AND Status = 'Accepted'";

try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->prepare($sql);  
	$stmt->bindParam("id", @$_GET[id]);
	$stmt->execute();
	$friend = $stmt->fetchObject();  
	$dbh = null;
	echo '{"item":'. json_encode($friend) .'}'; 
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}

?>