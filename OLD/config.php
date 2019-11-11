<?php 
class conect{
	function mostra($validacao){
		if ($validacao==(2019*7)) {	
		try {
  		return	$conn = new PDO('mysql:host=localhost;dbname=wm', 'root', 'admin');
    	 	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		} catch(PDOException $e) {
    		echo 'ERROR: ' . $e->getMessage();
		}
		}
	}
}
?>