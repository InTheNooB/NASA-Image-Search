<?php
    $tab = array();
	
	$tab[0] = "doe";
	$tab[1] = "dodo";
	$tab[2] = "EDU";
	$tab[3] = "doe@gmail.com";
	$tab[4] = "en";
	
	$tab[5] = "jules";
	$tab[6] = "juju";
	$tab[7] = "EDU";
	$tab[8] = "jules@yahoo.fr";
	$tab[9] = "fr";
	
	$tab[10] = "bob";
	$tab[11] = "bobo";
	$tab[12] = "STUDENTFR";
	$tab[13] = "bob@bluewin.ch";
	$tab[14] = "fr";
	
	$tab[10] = "admin";
	$tab[11] = "admin";
	$tab[12] = "EDU";
	$tab[13] = "admin@bluewin.ch";
	$tab[14] = "fr";
	
	
	$username = $_POST['username'];
    $password = $_POST['password'];
    $domaine = $_POST['domaine']; 
	$mail = $_POST['mail']; 
	$langue = $_POST['langue']; 
	$concat = $username.$password.$domaine;
	
	
	
	if ($username === 'xx'){
		var_dump($tab);
		exit();
	}
	
	
	// recherche du login si mail=x
	$trouve = "KO";
	$taille = sizeof($tab);
	if ($mail === 'x'){
		for ($i = 0; $i < $taille; $i=$i+5) {
			$login=$tab[$i].$tab[$i+1].$tab[$i+2];
			if ($login === $concat){
				// langue
				$trouve = $tab[$i+4];
			}
		}
	}

	// Nouvel utilisateur
    if ($trouve === "KO"){
		if ($langue === "fr"){
			$trouve = "Bonjour ".$username;
		}
		if ($langue === "de"){
			$trouve = "Guten Tag ".$username;
		}
		if ($langue === "fr"){
			$trouve = "Hi ".$username;
		}
	}
		
	
	header("Content-type: text/plain");
    echo $trouve;

	
?>
