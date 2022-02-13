<?php
use PHPMailer\PHPMailer\PHPMailer; //подключение файлов из папки phpMailer
use PHPMailer\PHPMailer\Exception; //подключение файлов из папки phpMailer

require 'phpmailer/src/Exception.php' //подключение файлов из папки phpMailer
require 'phpmailer/src/PHPMailer.php' //подключение файлов из папки phpMailer


$mail = new PHPMailer(true); //объявление 
$mail->CharSet = 'UTF-8' //настройка кодировки
$mail->setLanguage('ru', 'phpmailer/language/') //выбор языка для вывода ошибок на понятном языке
$mail->IsHTML(true); //возможность HTML тегов в письме

$mail->setFrom('damayorov93@gmail.com', 'Данил') //от кого письмо

$mail->addAddress('damayorov93@gmail.com') //кому отправить // можно указать несколько адресатов

$mail->Subject = 'Заявка на съёмку'

$body = '<h1>Встречайте супер письмо!</h1>' //тело письма

if(trim(!empty($_POST['name']))) {
    $body.='<p><strong>Имя:</strong>'.$_POST['name'].'</p>'
}
if(trim(!empty($_POST['phone']))) {
    $body.='<p><strong>Телефон:</strong>'.$_POST['phone'].'</p>'
}
if(trim(!empty($_POST['email']))) {
    $body.='<p><strong>E-mail:</strong>'.$_POST['email'].'</p>'
}
if(trim(!empty($_POST['message']))) {
    $body.='<p><strong>Сообщение:</strong>'.$_POST['message'].'</p>'
}

$mail->Body = $body 

if(!$mail->send()) {
    $message = 'Ошибка'
} else {
    $message = 'Данные отправлены'
}
$response = ['message' => $message]

header('Content-type: application/json')

echo json_encode($response)
?>