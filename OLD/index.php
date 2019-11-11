<?php 
include 'config.php';
include 'valida.php';

$valida = new Valida();
$conect = new conect();
$conecao = $conect ->mostra($valida->validacao(2019, 07));

//inserindo no mysql com pdo poo
/*
$query = $conecao->prepare("insert into empresas(razaoSocial)values('rony ltda')");
//var_dump($query);
$query->execute();
*/
$query = $conecao->prepare("select*from tema");
$query->bindValue(':search', '%' . "" . '%');
$query->execute();

	if (empty($_POST['menu'])) {
		$menu = "home";
	}else{
		$menu = $_POST['menu'];
	}
	// cria um array com os resultados
	$products = $query->fetchAll(PDO::FETCH_ASSOC);
	if (count($products) > 0):
		$i = 0;        
		foreach ($products as $product): 
			$link[] = 'templates'.$product['link'];   
			$i++;
		endforeach;
	else:
		echo "Erro Na Conexao."; 
	endif;
	if ($menu == "home") {
		require_once($link[0]);	
	}elseif ($menu == "sobre") {
		include_once($link[1]);	
	}
?>
<form method="post" action="index.php">
	<input type="submit" name="menu" value="home"/><br>
	<input type="submit" name="menu" value="sobre"/><br>
</form>