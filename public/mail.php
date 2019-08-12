<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

//decode string received from fetch
$content = trim(file_get_contents("php://input"));
$data = json_decode($content, true);
if (isset($_POST['from']) && isset($_POST['name']) && isset($_POST['message'])) {
  $to = 'chris@rstyledesign.com';
  $name = $_POST['name'];
  $message = $_POST['message'];
  $from = $_POST['from'];
  $subject = 'CR Web Email Submission';
  $headers = 'From: '.$name.' < '.$from.' >\n';
  mail($to, $subject, $message, $headers);
  echo '<span class="success">Thanks, your message has been sent.</span>';
}
else {
  echo '<span class="error">A problem has occurred. Please try again later.</span>';
}
?>