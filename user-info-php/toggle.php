
<?php
// تحقق من وصول id
if (!isset($_POST['id'])) {
  header('Location: index.php'); exit;
}

$id = (int)$_POST['id'];

$conn = new mysqli("localhost", "root", "", "info");
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

// بدّل القيمة: 1 - status
$stmt = $conn->prepare("UPDATE user SET status = 1 - status WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();
$stmt->close();
$conn->close();

// رجوع للجدول
header('Location: index.php');
exit;