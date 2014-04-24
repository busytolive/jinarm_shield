<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />	
	<title>京武盾安保集团</title>
	<meta name="author" content="Alvaro Trigo Lopez" />
	<meta name="description" content="fullPage very simple demo." />
	<meta name="keywords"  content="fullpage,jquery,demo,simple" />
	<meta name="Resource-type" content="Document" />

	
	<link rel="stylesheet" type="text/css" href="css/jquery.fullPage.css" />
	<link rel="stylesheet" type="text/css" href="css/simple.css" />
    <link rel="icon" type="image/png" href="images/favicon.png" /> 

	<!--[if IE]>
		<script type="text/javascript">
			 var console = { log: function() {} };
		</script>
	<![endif]-->
		
	<script src="js/jquery.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
	
	<script type="text/javascript" src="js/jquery.fullPage.js"></script>
	<script type="text/javascript">
		$(document).ready(function() {
			var pepe = $.fn.fullpage({
                css3: true,
                fixedElements: '#header,#header_logo'
			});
		});
	</script>

</head>
<body>

    <img src="images/header_logo.png" id="header_logo"/>
    <div id="header" style="position:fixed">
        <a href="index.html">首页</a>
        <a href="aboutus.html">关于我们</a>
        <a href="wecando.html">我们能做什么</a>
        <a href="library.html">JAS智库</a>
        <a href="contactus.php">联系我们</a>
    </div>

<div class="section active" id="contactus_0"></div>
<div class="section" id="department_1">
    <div class="logo_banner">
        <a href="department.html?dep=0" id="logo_0" class="logo">
        </a> 
        <a href="department.html?dep=1" id="logo_1" class="logo">
        </a> 
        <a href="department.html?dep=2" id="logo_2" class="logo">
        </a> 
        <a href="department.html?dep=3" id="logo_3" class="logo">
        </a> 
        <a href="department.html?dep=4" id="logo_4" class="logo">
        </a> 
    </div>
</div>

</body>
</html>
