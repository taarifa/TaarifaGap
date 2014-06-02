<?php
header('Access-Control-Allow-Origin: *');
include 'config.php';

$id = $_GET['id'];


$sql =  "SELECT * from followers where SemaID='$id'";


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