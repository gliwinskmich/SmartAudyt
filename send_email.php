<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Odbieranie danych z formularza
    $email = $_POST['name'];
    $rola = $_POST['object'];
    $etap = $_POST['subject'];
    $wiadomosc = $_POST['message'];

    // Adres docelowy (podmień na swój prawdziwy adres e-mail)
    $to = "gliwinskmich@gmail.com"; // <<< TUTAJ WPISZ SWÓJ E-MAIL

    $subject = "Nowa wiadomość z formularza kontaktowego";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "Email: $email\n"
          . "Rola: $rola\n"
          . "Etap: $etap\n"
          . "Wiadomość:\n$wiadomosc";

    // Wysyłanie wiadomości
    if (mail($to, $subject, $body, $headers)) {
        // Przekierowanie do strony z podziękowaniem
        header("Location: podziekowanie.html");
        exit;
    } else {
        echo "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.";
    }
}
?>