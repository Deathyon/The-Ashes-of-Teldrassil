<?php
if( isset($_POST['firstname'] ) && isset( $_POST['lastname'] ) )
{
    $txt= $_POST['firstname'].' - '.$_POST['lastname'] . PHP_EOL; 
    file_put_contents('fields.txt', $txt, FILE_APPEND);
}
?><?php
if( isset($_POST['firstname'] ) && isset( $_POST['lastname'] ) )
{
    $txt= $_POST['firstname'].' - '.$_POST['lastname'] . PHP_EOL; 
    file_put_contents('fields.txt', $txt, FILE_APPEND);
}
?>