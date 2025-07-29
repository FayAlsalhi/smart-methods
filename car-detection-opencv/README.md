Car Detection using OpenCV 🚗📹
This project demonstrates a simple real-time Car Detection system using OpenCV and Haar Cascade Classifier. It processes video frames and identifies cars by drawing bounding boxes around them.

💡 Overview
The goal of this project is to detect vehicles in a video using classical computer vision techniques. This system can be used as a base for traffic monitoring, smart surveillance, or intelligent transport systems.

🛠️ Technologies Used
Python

OpenCV

Haar Cascade (pre-trained model)

📂 How it Works
Load the pre-trained Haar cascade classifier for cars.

Read video input frame by frame.

Convert each frame to grayscale for better performance.

Detect cars using detectMultiScale.

Draw bounding boxes around detected vehicles.

Press Q to quit the video.

🖼️ Sample Output
Below is an example of the detection result:

<img width="1311" height="745" alt="image" src="https://github.com/user-attachments/assets/250186a2-854b-425b-b0ed-a45e6bc8a0b9" />




🔍 Future Enhancements
Use deep learning-based detectors like YOLO for more accuracy.

Add vehicle counting functionality.

Apply detection to live camera input.

