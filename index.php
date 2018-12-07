<?php
  require('./funcoes.php');

  if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = json_decode(file_get_contents('php://input'), true);
    if(setUser($user['nome'], $user['email'], $user['telefone'])) {
      echo '{"status":200}';
    } else {
      echo '{"status":500}';
    }

  } else if($_SERVER['REQUEST_METHOD'] === 'GET') {
    if(isset($_GET['id'])) {
      echo json_encode(getUserById($_GET['id']));
    } else {
      echo json_encode(getUsers());
    }

  } else if($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $user = json_decode(file_get_contents('php://input'), true);
    if(updateUser($user['id'], $user['nome'], $user['email'], $user['telefone'])) {
      echo '{"status":200}';
    } else {
      echo '{"status":500}';
    }

  } else if($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $id = json_decode(file_get_contents('php://input'), true);
    if(deleteUser($id['id'])) {
      echo '{"status":200}';
    } else {
      echo '{"status":500}';
    }
  }
