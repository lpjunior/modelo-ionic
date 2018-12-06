<?php
  require('./crud.php');

  function setUser($nome, $email, $telefone) {
    if(fnCreateUser($nome, $email, $telefone)) {
      return true;
    }
    return false;
  }

  function getUsers() {
    if($users = fnListUsers()) {
      return $users;
    }
    return array();
  }

  function getUserById($id) {
    if($user = fnFindUserById($id)) {
      return $user;
    }
    return array();
  }

  function getUsersByName($name) {
    if($users = fnListUsersByName($name)) {
      return $users;
    }
    return array();
  }

  function deleteUser($id) {
    if(fnDeleteUser($id)) {
      return true;
    }
    return false;
  }
