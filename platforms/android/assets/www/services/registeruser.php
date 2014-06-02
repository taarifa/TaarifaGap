<?php
header('Access-Control-Allow-Origin: *');
include 'config.php';

$name = $_GET['name'];
$email = $_GET['email'];
$username = $_GET['username'];
$phone = $_GET['phone'];
$password = $_GET['password1'];



try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	$sql_username_check  = "SELECT * from sema_user where Username ='$username'";	
	$stmt = $dbh->prepare($sql_username_check);  
	$stmt->execute();
	$username_check = $stmt->fetchObject();  

	if($username_check == FALSE){
		//check for phone number
		$sql_phone_check  = "SELECT * from sema_user where Phone ='$phone'";	
		$stmt = $dbh->prepare($sql_phone_check);  
		$stmt->execute();
		$phone_check = $stmt->fetchObject();  

		if($phone_check == FALSE){
		//do user registration
			$sql_user_register  = "INSERT into sema_user SET Phone ='$phone',
									Username ='$username',
									Password = MD5('$password'),
									Fullname = '$name',
									Email ='$email'	
			";	

			$stmt = $dbh->prepare($sql_user_register);  
			if($stmt->execute()){
				echo '{"item":"User registered"}'; 
			}else{
				echo '{"item":"Registration failed"}'; 
			}
		}else{
			$dbh = null;
			echo '{"item":"Phone number has already been register, try another one."}'; 
		}		
	}else{
		//username_check failed
		$dbh = null;
		echo '{"item":"Username already exists"}'; 
	}
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}

?>