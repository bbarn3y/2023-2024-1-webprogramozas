<?php

include 'util.php';


class UserStorage {

    // @note The password is password
    function findUser($username, $password): array {
        // @todo
        return [];
    }

    function getUsers(): array {
        return json_decode(file_get_contents('users.json'), true);
    }
}

function check_user($user_storage, $username, $password) {

}

function login($user) {

}

$userStorage = new UserStorage();
