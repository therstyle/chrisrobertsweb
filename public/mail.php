<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

//decode string received from fetch
$content = trim(file_get_contents("php://input"));
$data = json_decode($content, true);
if (isset($_POST['to']) && isset($_POST['name']) && isset($_POST['message'])) {
  $to = $_POST['to'];
  $name = $_POST['name'];
  $message = $_POST['message'];
  $from = 'noreply@rstyledesign.com';
  $subject = 'Test Contact Email';
  $headers = 'From: '.$name.' < '.$from.' >\n';
  mail($to, $subject, $message, $headers);
  echo '<span class="success">A test email has been sent to '.$to.'!</span>';
}
else {
  echo '<span class="error">A problem has occurred. Please try again later.</span>';
}
?>