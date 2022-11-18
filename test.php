<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form action="" method="post">
Email:<br>
<input type="text" 	id="box"	placeholder="Enter Email"  	name="email"	value=""/>	<br><br>   Password:<br>
<input type="password"  id="box" 	placeholder="Enter Password" name="password" value=""/>
 <br>
<a style="font-size:10;color:red;" href="forgot.php">  Forgot Password	</a>				<br><br>

<input  id="btn" type="submit" name="submit" value="Login">
</form>
<?phpif(isset($_POST['submit'])){$email=$_POST['email'];
$password=$_POST['password'];$query="SELECT * FROM registeration WHERE email='$email' && password='$password'";$result=mysqli_query($conn,$query);$temp=mysqli_num_rows($result);if($temp){	$_SESSION['email']=$email;	header('location:home.php');	}else{	echo "Incorrect ID or Password, Please try again.";}
}
<!-- Code injected by live-server -->
<script>
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[4];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {

</html>
