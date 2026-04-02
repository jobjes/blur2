<?php
// Honeypot anti-bot check
if(!empty($_POST['website'])){
    exit("Bot detected");
}

// Inputs ophalen en schoonmaken
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$phone = preg_replace('/[^0-9]/', '', $_POST['phone']); // alleen cijfers

// Input validatie
if(!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($phone) < 8){
    exit("Ongeldige invoer");
}

// Stel landcode NL in
$countryCode = "31";

// Data voor RelationCity API
$data = [
    "name" => "", // optioneel
    "mobileNumber" => $phone,
    "msisdn" => $countryCode.$phone, // altijd +31
    "email" => $email,
    "tags" => ["blur"] // voeg jouw tag ID toe
];

// API key en endpoint
$apiKey = "hvcoFWVDFI0gKvtMEt6G5jCBqSOhyIre";
$endpoint = "https://app.relationcity.io/api/v1/contacts";

// CURL request opzetten
$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer $apiKey"
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

// Request uitvoeren
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Feedback naar browser
if($httpCode == 200 || $httpCode == 201){
    echo "ok";
} else {
    echo "Fout bij registratie: HTTP $httpCode, Response: $response";
}
?>
