<?php
header('Access-Control-Allow-Origin: *');
include 'config.php';


$username = $_GET['username'];
$password = $_GET['password'];



try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	$sql_login  = "SELECT * from sema_user where username ='$username' AND password = MD5('$password')";	
	$stmt = $dbh->prepare($sql_login);  
	$stmt->execute();
	$sql_login = $stmt->fetchObject();  

	exit(var_export($sql_login));

	if($sql_login == TRUE){
		

			// echo '{"item":'. json_encode($user_register) .'}'; 
	}else{
		//username_check failed
		$dbh = null;
		// echo '{"item":'. json_encode() .'}'; 
	}


	

} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}

?>