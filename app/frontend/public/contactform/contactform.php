<?php
if(isset($_POST['submit'])){
       $name = $_POST['name'];
       $email = $_POST['email'];
       $message = $_POST['message'];

       // Set your email address where you want to receive emails. 
       $to = 'bikrampurorganicfoods@gmail.com';
       $subject = 'Contact Request From Website';
       $headers = "From: ".$name." <".$email."> \r\n";
       $send_email = mail($to,$subject,$message,$headers);

       echo ($send_email) ? 'success' : 'error';
}
?>