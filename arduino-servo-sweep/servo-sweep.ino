#include <Servo.h>

Servo myservo;  // Create a servo object to control a servo
int pos = 0;    // Variable to store the servo position

void setup() {
  myservo.attach(9);  // Attach the servo on pin 9 to the servo object
}

void loop() {
  // Move from 0 to 180 degrees
  for (pos = 0; pos <= 180; pos += 1) {
    myservo.write(pos);  // Tell servo to go to position in variable 'pos'
    delay(15);           // Wait 15 milliseconds for the servo to reach the position
  }

  // Move from 180 to 0 degrees
  for (pos = 180; pos >= 0; pos -= 1) {
    myservo.write(pos);  // Tell servo to go to position in variable 'pos'
    delay(15);           // Wait 15 milliseconds for the servo to reach the position
  }
}
