<?php

$name = strip_tags(trim($_POST['name']));
$lastName = strip_tags(trim($_POST['lastname']));
$address = strip_tags(trim($_POST['address']));
$phone = strip_tags(trim($_POST['phone']));
$amount = strip_tags(trim($_POST['amount']));
$model = $_POST['model'];

if ($model == 1) {
    $model = 'MyPhone Black';
} else {
    $model = 'MyPhone Red';
}

if ($amount <= 0) {
    $errors = 'Неверно введено количество товара';
}

?>

<?php if (!isset($errors)) { ?>
    <!DOCTYPE html>
    <html lang="ru">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Спасибо за заказ!</title>
        <link rel="stylesheet" href="../thanks.css">

    </head>

    <body>
        <div class="thanks">
            <div class="title">Спасибо за заказ!</div>
            <div class="line"></div>
            <div class="text">Имя: <?php echo $name ?></div>
            <div class="text">Фамилия: <?php echo $lastName ?></div>
            <div class="text">Адрес: <?php echo $address ?></div>
            <div class="text">Телефон: <?php echo $phone ?></div>
            <div class="text">Наименование товара: <?php echo $model ?></div>
            <div class="text">Количество: <?php echo $amount ?></div>
            <div class="line"></div>
            <div class="text">В ближайшее время мы свяжемся с Вами по телефону для подтверждения доставки.</div>
        </div>
    </body>

    </html>
<?php } else {
    if (isset($errors)) {
        echo $errors;
    }
} ?>