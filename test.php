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
<!-- PHP Avtar Code-->
function createAvatarImage($string)
{
    $imageFilePath = "images/".$string . ".png";

    //base avatar image that we use to center our text string on top of it.
    $avatar = imagecreatetruecolor(60,60);
    $bg_color = imagecolorallocate($avatar, 211, 211, 211);
    imagefill($avatar,0,0,$bg_color);
    $avatar_text_color = imagecolorallocate($avatar, 0, 0, 0);
	// Load the gd font and write 
    $font = imageloadfont('gd-files/gd-font.gdf');
    imagestring($avatar, $font, 10, 10, $string, $avatar_text_color);
    imagepng($avatar, $imageFilePath);
    imagedestroy($avatar);
 
    return $imageFilePath;
}

</html>
