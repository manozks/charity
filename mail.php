<?php
$to = "manozk.raz@gmail.com";
$subject = "Enquiry Form - Charity";
$name= $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$comment = $_POST['message'];

$message = "
<html>
<head>
<title>Enquiry Form For Charity</title>
</head>
<body>
<p>A new form has been submited</p>
<table>
<tr>
<th>Name</th>
<th>Phone</th>
<th>Email</th>
<th>Message</th>
</tr>
<tr>
<td>'.$name.'</td>
<td>'.$phone.'</td>
<td>'.$email.'</td>
<td>'.$message.'</td>

</tr>
</table>
</body>
</html>";

$headers = "manozk.raz@gmail.com";
// Always set content-type when sending HTML email
$headers.= "MIME-Version:Class Concept Enquiry" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

$mail = mail($to,$subject,$message,$headers);
if($mail){
    echo '<script>alert("Thank you for reaching to us! we\'ll get back to you at the earliest."); window.location.replace("https://manozks.github.io/charity/")</script>';
}else{
    echo "ACCESS DENIED";
}
?>