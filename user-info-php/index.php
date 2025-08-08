<?php
// اتصال لقراءة البيانات
$conn = new mysqli("localhost", "root", "", "info");
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

// اجلب كل السجلات
$result = $conn->query("SELECT id, name, age, status FROM user ORDER BY id ASC");
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Users</title>
  <style>
    table { border-collapse: collapse; margin-top: 16px; }
    th, td { border: 1px solid #ddd; padding: 8px 12px; }
    button { padding: 6px 10px; cursor: pointer; }
  </style>
</head>
<body>

  <!-- نموذج الإضافة (اختياري: اتركيه إن تبينه) -->
  <h3>Add user</h3>
  <form method="POST" action="insert.php">
      Name: <input type="text" name="name" required>
      Age: <input type="number" name="age" required>
      <button type="submit">Submit</button>
  </form>

  <!-- جدول العرض + زر Toggle -->
  <h3>Users Table</h3>
  <table>
    <thead>
      <tr>
        <th>ID</th><th>Name</th><th>Age</th><th>Status</th><th>Action</th>
      </tr>
    </thead>
    <tbody>
    <?php while($row = $result->fetch_assoc()): ?>
      <tr>
        <td><?= htmlspecialchars($row['id']) ?></td>
        <td><?= htmlspecialchars($row['name']) ?></td>
        <td><?= htmlspecialchars($row['age']) ?></td>
        <td><?= htmlspecialchars($row['status']) ?></td>
        <td>
          <form method="POST" action="toggle.php" style="display:inline;">
            <input type="hidden" name="id" value="<?= $row['id'] ?>">
            <button type="submit">Toggle</button>
          </form>
        </td>
      </tr>
    <?php endwhile; ?>
    </tbody>
  </table>

</body>
</html>
<?php $conn->close(); ?>