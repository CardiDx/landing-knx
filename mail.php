<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user-name'];
$phone = $_POST['phone'];

// <option value="unselected" selected>Тип услуги</option>
//            <option value="order-a-project">Заказать проект</option>
//            <option value="order-a-tracing">Заказать трассировку</option>
//            <option value="make-a-shield">Собрать щит</option>

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';                                                // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'bmw.t@bk.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'zXTRsiATzzZoYocyBnyR'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('bmw.t@bk.ru'); // от кого будет уходить письмо?
$mail->addAddress('bmw.t@bk.ru');     // Кому будет уходить письмо
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта';
$mail->Body    = 'Имя клиента: ' . $name . ' <br> Телефон: ' . $phone;
$mail->AltBody = '';

if (!$mail->send()) {
  echo 'Error';
} else {
  header("Refresh:0");
}
