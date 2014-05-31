<?php
header('Access-Control-Allow-Origin: *');
include 'config.php';


$sql =  "SELECT user.Username as name, user.ID as id, 
		(select count(id) from radio_followers where user.ID = radio_followers.radio) as followers 
		from user where Level=4 order by name asc
		";


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