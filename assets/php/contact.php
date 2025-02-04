<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = htmlspecialchars(trim($_POST['fullname']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate fields
    if (!empty($fullname) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to = "amycarauna2000@gmail.com";
        $subject = "Contact Form Message from $fullname";
        $body = "Name: $fullname\nEmail: $email\n\nMessage:\n$message";
        $headers = "From: $email\r\nReply-To: $email";

        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send the message.";
        }
    } else {
        echo "Please fill in all fields correctly.";
    }
}
?>
