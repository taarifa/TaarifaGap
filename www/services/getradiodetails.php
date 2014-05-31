<?php
header('Access-Control-Allow-Origin: *');
include 'config.php';



$sql  = "SELECT Username as name, ID as id";
$sql .= " FROM user ";
$sql .= "WHERE ID=:id ";

try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->prepare($sql);  
	$stmt->bindParam("id", @$_GET['id']);
	$stmt->execute();
	$friend = $stmt->fetchObject();  
	$dbh = null;
	echo '{"item":'. json_encode($friend) .'}'; 
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}

?>