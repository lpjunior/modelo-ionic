<?php
  function uploadImg($Imgfile) {

  	$file = $Imgfile;

  	$dirUploads = 'imagens';

  	if(!is_dir($dirUploads)) {
  		mkdir($dirUploads);
  	}

    // Gera o nome do Arquivo
    $fileName = md5(uniqid()) . '-' . time() . '.jpeg';

    // diretório com o nome do arquivo
    $newFilename = $dirUploads . DIRECTORY_SEPARATOR . $fileName;

  	// http://php.net/manual/pt_BR/function.move-uploaded-file.php
  	#move_uploaded_file(filename, destination) // essa função retorna um booleano

  	if(move_uploaded_file($file['tmp_name'], $newFilename)) {
  		#echo 'Arquivo enviado com sucesso. ' . $newFilename;
      echo $newFilename;
  	} else {
  		//throw new Exception('Falha ao efetuar o upload.');
  		exit('Erro ao efetuar o upload');
  	}
  }
