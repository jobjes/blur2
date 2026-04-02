<?php
// Honeypot anti-bot check
if(!empty($_POST['website'])){
    exit;
}

// Inputs
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$phone = preg_replace('/[^0-9+]/', '', $_POST['phone']);

// Validatie
if(!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($phone)<8){
    exit("Ongeldige invoer");
}

// RelationCity API data
$data = [
    "email"=>$email,
    "phone"=>$phone
];

// API key
$apiKey = "hvcoFWVDFI0gKvtMEt6G5jCBqSOhyIre"; // vul jouw API key hier in

// API endpoint
$url="https://app.relationcity.io/api/contacts";

// Curl request
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);
curl_setopt($ch, CURLOPT_POST,true);
curl_setopt($ch, CURLOPT_HTTPHEADER,[
    'Content-Type: application/json',
    'Authorization: Bearer '.$apiKey
]);
curl_setopt($ch,CURLOPT_POSTFIELDS,json_encode($data));
$response = curl_exec($ch);
curl_close($ch);

// Response terug naar browser
echo "ok";
?>
