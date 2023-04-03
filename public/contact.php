<?php

// configure
$from = 'smavyip@gmail.com';
$sendTo = 'smavyip@gmail.com'; // Add Your Email
$subject = 'Новая форма обратной связи';
$fields = array('name' => 'Name', 'email' => 'Email',  'phone' => 'Phone', 'subject' => 'Subject', 'option' => 'Option'); // array variable name => Text to appear in the email
$okMessage = 'Контактная форма успешно отправлена. Спасибо, мы свяжемся с вами в ближайшее время!';
$errorMessage = 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз позже.';

// let's do the sending

try
{
    $emailText = "Новая заявка на обратную связь\n=============================\n";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    $headers = array('Content-Type: text/plain; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from,
    );
    
    mail($sendTo, $subject, $emailText, implode("\n", $headers));

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
else {
    echo $responseArray['message'];
}
