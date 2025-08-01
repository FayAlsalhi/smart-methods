void setup() {
  pinMode(7, INPUT);   // الزر الأول
  pinMode(4, INPUT);   // الزر الثاني
  pinMode(2, INPUT);   // الزر الثالث

  pinMode(13, OUTPUT); // اللمبة الأولى
  pinMode(12, OUTPUT); // اللمبة الثانية
  pinMode(8, OUTPUT);  // اللمبة الثالثة
}

void loop() {
  if (digitalRead(7) == HIGH) {
    digitalWrite(13, HIGH);
    delay(3000);
    digitalWrite(13, LOW);
    delay(3000);
  }
  else if (digitalRead(4) == HIGH) {
    digitalWrite(12, HIGH);
    delay(3000);
    digitalWrite(12, LOW);
    delay(3000);
  }
  else if (digitalRead(2) == HIGH) {
    digitalWrite(8, HIGH);
    delay(3000);
    digitalWrite(8, LOW);
    delay(3000);
  }
  else {
    // تأكد أن كل اللمبات طافية إذا ما تم ضغط أي زر
    digitalWrite(13, LOW);
    digitalWrite(12, LOW);
    digitalWrite(8, LOW);
  }
}
