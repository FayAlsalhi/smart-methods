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
✅ Step 2: Control the Turtle
Open a second terminal and run the teleop (keyboard control) node:

bash
نسخ
تحرير
ros2 run turtlesim turtle_teleop_key
You should see instructions like:

pgsql
نسخ
تحرير
Use arrow keys to move the turtle.
Use G | B | V | C | D | E | R | T to rotate the turtle.
Press F to cancel a rotation.
Press Q to quit.
⚠️ Important:
Make sure the terminal window is focused when using the keyboard — not the turtle screen.

💡 Notes
Ensure both terminals are running in the same ROS2 environment.

If the turtle doesn’t respond, refocus the terminal that is running turtle_teleop_key.

📸 Screenshot
Here is a snapshot of the simulation while running:

<img width="929" height="603" alt="Turtlesim running" src="https://github.com/user-attachments/assets/5e933dae-1810-4965-bcd8-b73aa0aefeb9" /> ```

