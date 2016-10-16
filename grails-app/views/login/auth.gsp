<html>
<head>
    <title><g:message code="springSecurity.login.title"/></title>

	<link href="${resource(dir: 'css', file: 'bootstrap.min.css')}" rel="stylesheet" type="text/css">
	<link href="${resource(dir: 'css', file: 'hims.css')}" rel="stylesheet" type="text/css">
	<style type='text/css' media='screen'>
		.length{
			margin-top:110px;
		}
	.login-page {
		width: 300px;
		padding: 5% 0 0;
		margin: auto;
	}
	.form {
		position: relative;
		z-index: 1;
		background: #FFFFFF;
		max-width: 360px;
		padding: 5px;
		text-align: center;
		/*margin-top: 175px;*/

	}
	.form input {
		font-family: "Roboto", sans-serif;
		outline: 0;
		background: #dcdcdc;
		width: 100%;
		border: 0;
		margin: 0 0 15px;
		padding: 15px;
		box-sizing: border-box;
		font-size: 14px;
	}

	#button {
		font-family: "Roboto", sans-serif;
		text-transform: uppercase;
		outline: 0;
		background:#66c2ff! important;
		width: 100%;
		border: 0;
		padding: 15px;
		color: #f6f1ed! important;
		font-size: 14px;
		-webkit-transition: all 0.3 ease;
		transition: all 0.3 ease;
		cursor: pointer;
	}
	/*.login {*/
		/*margin-top: 175px;*/
		/*padding: 0px;*/
		/*text-align: center;*/
	/*}*/
	/*.form{*/
		/*margin-left: 26px;*/
	/*}*/

	 /*.inner {*/
		/*width: 340px;*/
		/*padding-bottom: 6px;*/
		/*margin: 60px auto;*/
		/*text-align: left;*/
		/*border: 1px solid #aab;*/
		/*background-color: #f0f0fa;*/
		/*-moz-box-shadow: 2px 2px 2px #eee;*/
		/*-webkit-box-shadow: 2px 2px 2px #eee;*/
		/*-khtml-box-shadow: 2px 2px 2px #eee;*/
		/*box-shadow: 2px 2px 2px #eee;*/
	/*}*/

		 .fheader {
		padding: 18px 26px 14px 26px;

		margin: 0px 0 14px 0;
		color: #2e3741;
		font-size: 18px;
		font-weight: bold;
	}

	/*#login .inner .cssform p {*/
		/*clear: left;*/
		/*margin: 0;*/
		/*padding: 4px 0 3px 0;*/
		/*padding-left: 105px;*/
		/*margin-bottom: 20px;*/
		/*height: 1%;*/
	/*}*/

	/*#login .inner .cssform input[type='text'] {*/
		/*width: 120px;*/
	/*}*/

	/*#login .inner .cssform label {*/
		/*font-weight: bold;*/
		/*float: left;*/
		/*text-align: right;*/
		/*margin-left: -105px;*/
		/*width: 110px;*/
		/*padding-top: 3px;*/
		/*padding-right: 10px;*/
	/*}*/

	/*#login #remember_me_holder {*/
		/*padding-left: 120px;*/
	/*}*/

	/*#login #submit {*/
		/*margin-left: 15px;*/
	/*}*/

	/*#login #remember_me_holder label {*/
		/*float: none;*/
		/*margin-left: 0;*/
		/*text-align: left;*/
		/*width: 200px*/
	/*}*/

	/*#login .inner .login_message {*/
		/*padding: 6px 25px 20px 25px;*/
		/*color: #c33;*/
	/*}*/

	/*#login .inner .text_ {*/
		/*width: 120px;*/
	/*}*/

	/*#login .inner .chk {*/
		/*height: 12px;*/
	/*}*/
	</style>
	<script type='text/javascript'>
		(function() {
			document.forms['loginForm'].elements['j_username'].focus();
		})();
	</script>
</head>

<body>
%{--<g:if test='${hims.Hike.findByDeadLine(false)}'>--}%
%{--<div class='login_message'>${hims.Hike.findByDeadLine(false)}</div>--}%
%{--</g:if>--}%

<div class="navbar navbar-default navbar-fixed-top logo">


	<g:link controller="home" action="index">
		<img class="logoImage" src="${resource(dir: 'images', file: 'hiking_logo.gif')}" height="100%">
	</g:link>
</div >

<div class="length container-fluid ">

	<div class="row">

		<div class="col-md-8 ">
			Content Area
		</div>
		<div class="col-md-4">

			<div class="login-page">
				<div class="fheader"><b><g:message code="springSecurity.login.header"/></b></div>

				<g:if test='${flash.message}'>
					<div class='login_message'>${flash.message}</div>
				</g:if>
				<div class="form">
					<form action='${postUrl}' method='POST' id='loginForm' class='cssform' autocomplete='off'>


						<input type='text' class='text_' name='j_username' id='username' placeholder="Username"/>




						<input type='password' class='text_' name='j_password' id='password' placeholder="Password"/>




						<input type='submit' id="button"  value='${message(code: "springSecurity.login.button")}'/>

					</form>
					<g:link controller="login" action="sign"><button>Sign Up</button></g:link>
					<div style="text-align: center;">
					<g:link controller="login" action="forgetPassword">forgot password?</g:link>
					</div>


				</div>
			</div>
		</div>





	</div>
</div>




</body>
</html>
