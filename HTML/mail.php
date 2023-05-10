<?php

		// Dirección de mail a la que se envía el mensaje
		$sendto  = 'tomasangelerii@gmail.com'; 
		// Asunto del mensaje
		$subject = "Formulario de contacto pagina Rafael Nadal"; 
	
		// Contenido del mensaje
		$corps="Nombre: ".$_REQUEST['nombre']."\n".
		"Apellido: ".$_REQUEST['apellido']."\n".
		"Email: ".$_REQUEST['email']."\n".
		"Pais: ".$_REQUEST['pais']."\n".
		"provincia: ".$_REQUEST['provincia']."\n".
		"Ciudad: ".$_REQUEST['ciudad']."\n".
		"Usuario de instagram: ".$_REQUEST['ig']."\n".
		"¿Ya conocias a Rafael Nadal antes de ver este sitio?: ".$_REQUEST['preg1']."\n".
		"¿Si ya lo conocia, lo conocia Por lo deportivo o por fuera de el?: ".$_REQUEST['preg2']."\n".
		"¿Conoces de tenis? ¿Haz jugado alguna vez? ".$_REQUEST['preg3']."\n".
		"¿Practica o ha practicado deporte alguna vez?: ".$_REQUEST['preg4']."\n".
		"¿Ve deporte?: ".$_REQUEST['preg5']."\n".
		"¿Le resulto util la informacion dada en el sitio?: ".$_REQUEST['preg6']."\n".
		"¿A quien considera como el mejor tenista de la historia y por que?: ".$_REQUEST['comentarios']."\n"."\n".
		"Si quiere dejar algun comentario final: ".$_REQUEST['comentarios1']."\n";
	
		// Datos de quien envía el mensaje, para poder responder al mismo mensaje recibido
		$From = "De: ".$_REQUEST['nombre']."\n";
		$From .= "Replica a: ".$_REQUEST['nombre']."\n";

		// Comando para enviar el mail 
		@mail($sendto,$subject,$corps,$From);
?>

<a href="../HTML/index.html">Enviado correctamente, click aqui para volver al inicio</a>
