# PHP User Status Toggle (Form + MySQL)

A simple web app that:
1) Accepts **Name** and **Age** via a one-line form  
2) Stores data into **MySQL**  
3) Displays all records in a table  
4) Provides a **Toggle** button to switch the `status` (0/1) for each record  
5) Reflects the update immediately on the page

> Built with **PHP**, **MySQL**, and basic **HTML/CSS**. Ready for XAMPP.

---

## 🗂 Project Structure

project-root/
├─ index.php # Form + table view + Toggle buttons
├─ insert.php # Handles form submission and inserts into DB
├─ toggle.php # Flips status between 0 and 1 for a given row
└─ info.sql # Database export (schema + optional seed)

markdown
نسخ
تحرير

---

## ⚙️ Requirements

- XAMPP (Apache + MySQL)
- PHP 8.x (bundled with XAMPP)
- phpMyAdmin (bundled with XAMPP)

---

## 🚀 Setup (Local)

1. **Start Services**
   - Open **XAMPP Control Panel**
   - Start **Apache** and **MySQL**

2. **Create Database**
   - Open `http://localhost/phpmyadmin`
   - Create a database named **`info`**
   - Import `info.sql`:
     - Select DB `info` → **Import** → choose `info.sql` → **Go**

   > If you don't want to import, you can create the table manually:
   ```sql
   CREATE TABLE user (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(100) NOT NULL,
     age INT NOT NULL,
     status TINYINT(1) DEFAULT 0
   );
Place Files

Copy project folder to:

lua
نسخ
تحرير
C:\xampp\htdocs\php-user-status-toggle
Ensure files: index.php, insert.php, toggle.php, info.sql

Configure DB (if needed)

Default credentials in the code assume XAMPP:

host: localhost

user: root

password: (empty string)

db: info

Run

Open: http://localhost/php-user-status-toggle/index.php

✍️ Usage
Enter Name and Age → click Submit

Records appear in the table below

Click Toggle to switch status between 0 and 1

✅ Task Checklist
 Webpage using HTML/CSS/JS/PHP

 One-line form (name, age, submit)

 Store submitted data into MySQL

 Display all records in a table

 Toggle button per record to switch status (0/1)

 Reflect updates immediately after toggling

🔐 Notes & Good Practices
Inputs are minimal; for production use prepared statements and validation.

Consider adding CSRF protection if you deploy publicly.

🧩 Troubleshooting
Blank page → ensure Apache/MySQL are running; check error_reporting in PHP.

Access denied for user 'root' → on XAMPP, password is usually empty ("").

No data shown → verify DB name info and table user exist; import info.sql.


