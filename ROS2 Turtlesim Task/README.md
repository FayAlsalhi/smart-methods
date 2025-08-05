# 🐢 ROS2 Turtlesim Simulation

This project demonstrates how to use the `turtlesim` package in **ROS2** to control a turtle using keyboard commands.

> 📌 **Task**: Manipulate the turtlesim package in ROS2  
> 📁 **Goal**: Upload all steps and screenshots on GitHub

---

## 🚀 Getting Started

### ✅ Step 1: Launch the Turtlesim Node

Open a terminal and run the following command to launch the simulation:

```bash
ros2 run turtlesim turtlesim_node
You should see a blue window open with a turtle in the center.

✅ Step 2: Control the Turtle
Open a second terminal and run the teleop (keyboard control) node:

bash
نسخ
تحرير
ros2 run turtlesim turtle_teleop_key
A prompt will appear with instructions like:

Use arrow keys to move the turtle.

Use G | B | V | C | D | E | R | T to rotate the turtle.

Press Q to quit.

⚠️ Important: Make sure the terminal window is focused when using the keyboard, not the turtle screen.

📸 Screenshot
Here is a snapshot of the simulation while running:



💡 Notes
Make sure both terminals are running in the same ROS2 environment.

If the turtle doesn't respond, refocus the terminal running turtle_teleop_key.

