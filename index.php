<?php
	// (c) 2013 bigflannel
	// This code is licensed under MIT license (see LICENSE.txt for details)
	
	
	include('conf.php');
	require 'bigflannel-instafeed/data/instagram.class.php';
	// Initialize class
	$instagram = new Instagram($accessToken);
	$instagram->setAccessToken($accessToken);
	$contents = $instagram->getUserMedia($userID,$settings['count']);
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>bigflannel Instafeed</title>
	<meta name="description" content="">
	<meta name="keywords" content="">
    <!--[if IE]>
	<script type="text/javascript" src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<!-- load open sans font -->
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
	<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script type="text/javascript" src="bigflannel-instafeed/js/app.js"></script>
	<link rel="stylesheet" href="bigflannel-instafeed/css/style.css">
	<!-- initiate the application-->
	<script type="text/javascript" language="Javascript">
		$(document).ready(function pageLoaded() {
			srcPrefix = '';
			settingsData = <?php echo json_encode($settings); ?>;
			constructor();
		});
	</script>
</head>
<body>
<div id="page">
	<div id="left-column">
		<nav id="main">
			<div id="logo" class="gallery-title">
			</div><!-- .gallery-title -->
			<div id="home" class="gallery-title">
				<a href="index.php">Home</a>
			</div><!-- .gallery-title -->
		</nav><!-- #main -->
		<header id="album-text">
			<div id="links">
			</div><!-- #links -->
		</header>
	</div><!-- #left-column -->
	<div id="right-column">
		<section>
		<?php
			// Loop through feed content
			foreach ($contents->data as $data) {
			  echo '<div class="image-thumb"><a href="content/?id=' . $data->id  . '"><img src="' . $data->images->thumbnail->url . '"></a></div>'; 
			}
		?>
		</section>
	</div><!-- #right-column -->
	<footer></footer>
</div><!-- #page -->
</body>
</html>