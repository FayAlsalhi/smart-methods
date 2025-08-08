<?php
// بيانات الاتصال بقاعدة البيانات
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "info";

// الاتصال بقاعدة البيانات
$conn = new mysqli($servername, $username, $password, $dbname);

// التحقق من الاتصال
if ($conn->connect_error) {
    die("فشل الاتصال: " . $conn->connect_error);
}

// استقبال البيانات من النموذج
$name = $_POST['name'];
$age  = $_POST['age'];

// إدخال البيانات في الجدول
$sql = "INSERT INTO user (name, age) VALUES ('$name', $age)";

if ($conn->query($sql) === TRUE) {
    echo "✅ تمت إضافة البيانات بنجاح!";
    echo "<br><a href='index.php'>رجوع للنموذج</a>";
} else {
    echo "خطأ: " . $conn->error;
}

// إغلاق الاتصال
$conn->close();
?>