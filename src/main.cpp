#include <Arduino.h>
#include <Firebase_ESP_Client.h>

// Configuración de WiFi
#define WIFI_SSID "Venustiano Carranza"
#define WIFI_PASSWORD "ForaneosUP"

// Configuración de Firebase
#define API_KEY "AIzaSyByKm6mseQCdmZx5aqkLezpzUAEt8imoVk"
#define DATABASE_URL "https://multi-debce-default-rtdb.firebaseio.com" 
#define USER_EMAIL "arisel583@gmail.com"
#define USER_PASSWORD "yeremi224"

// Pines
const byte ledPin = D4;  // Pin para el LED indicador de alarma
const byte relay = D5;   // Pin para el relay principal
const byte relay2 = D6;  // Pin para un segundo relay
const byte resetPin = D7; // Pin para reiniciar el circuito

// Firebase
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
  pinMode(relay, OUTPUT);
  pinMode(relay2, OUTPUT);
  pinMode(resetPin, OUTPUT);

  digitalWrite(ledPin, LOW);
  digitalWrite(relay, LOW);
  digitalWrite(relay2, LOW);
  digitalWrite(resetPin, HIGH);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }
  Serial.println("Connected to WiFi");

  config.api_key = API_KEY;
  auth.user.email = USER_EMAIL;
  auth.user.password = USER_PASSWORD;
  config.database_url = DATABASE_URL;

  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}

void activatePanicMode() {
  digitalWrite(relay, HIGH);
  digitalWrite(relay2, HIGH);
  for (int i = 0; i < 12; i++) {
    digitalWrite(ledPin, HIGH);
    delay(250);
    digitalWrite(ledPin, LOW);
    delay(250);
  }
  digitalWrite(ledPin, HIGH);
  Serial.println("LED encendido");
}

void stopPanicMode() {
  digitalWrite(ledPin, LOW);
  digitalWrite(relay, LOW);
  digitalWrite(relay2, LOW);
  Serial.println("LED apagado");
}

void loop() {
  if (Firebase.ready() && Firebase.RTDB.getBool(&fbdo, "/alarms/1/isActive")) {
    bool isActive = fbdo.to<bool>();
    if (isActive) {
      activatePanicMode();
    } else {
      stopPanicMode();
    }
  }
  delay(1000); // Reduce la carga de la CPU
}
