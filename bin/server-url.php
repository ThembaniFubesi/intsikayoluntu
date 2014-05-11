<?php

function getServerUrl() {
    $url = str_replace("/index.php", "", $_SERVER['REQUEST_URI']);
    return rtrim($url, "/");
}

?>