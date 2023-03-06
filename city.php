<?php
include 'connect.php';
$query = "SELECT * FROM vendor_login_system WHERE email='" . $_SESSION['email'] . "'";
$result = mysqli_query($connect, $query);
while ($row = mysqli_fetch_array($result)) {
    $state = $row['state'];
}
$sql = "SELECT * FROM cities WHERE state_id='$state'";
    $query = mysqli_query($connect, $sql);
    $dt = "";
    while($row=mysqli_fetch_assoc($query)){
    $dt .= "<option value=".$row['id'].">".$row['city']."</option>";
    }

    echo $dt;

?>