<?php
    // Обратите внимание: в слове Smarty буква 'S' должна быть заглавной
    require_once('./libs/Smarty.class.php');
    $smarty = new Smarty();
    $smarty->caching = false;
    $template = './templates/pages/mice.tpl';
    $smarty->display($template);
?>