

<html>
<head>
    <meta name='layout'/>
    <title>Reset</title>
    <asset:stylesheet src="bootstrap.min.css"/>
    <link href="${resource(dir: 'css', file: 'hims.css')}" rel="stylesheet" type="text/css">


    <style type="text/css" rel="stylesheet">
    .form-signin
    {
        max-width: 330px;
        padding: 15px;
        margin: 0 auto;
    }
    .form-signin .form-signin-heading, .form-signin .checkbox
    {
        margin-bottom: 10px;
    }
    .form-signin .checkbox
    {
        font-weight: normal;
    }
    .form-signin .form-control
    {
        position: relative;
        font-size: 16px;
        height: auto;
        padding: 10px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .form-signin .form-control:focus
    {
        z-index: 2;
    }
    .form-signin input[type="text"]
    {
        margin-bottom: -1px;
    }
    .form-signin input[type="password"]
    {
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .account-wall
    {
        margin-top: 20px;
        padding: 40px 0px 20px 0px;
        background-color: #f7f7f7;
        -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    }
    .login-title
    {
        color: #555;
        font-size: 18px;
        font-weight: 400;
        display: block;
    }
    .profile-img
    {
        width: 120px;
        height: 120px;
        margin: 0 auto 10px;
        display: block;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
    }
    </style>
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-sm-6 col-md-4 col-md-offset-4">
            <h1 class="text-center login-title">RESET PASSWORD</h1>
            <div class="account-wall ">
                %{--<img class="logoImage" src="${resource(dir: 'images', file: 'hiking_logo.gif')}" height="100%">--}%
                <h1 class="text-center login-title"><strong>Enter  your username and we'll email you a new password.</strong></h1>
                <g:if test="${flash.message}">
                    <div style="display: block; color: red;text-align:center">${flash.message}</div>
                </g:if>
                <g:form url="[controller:'home', action:'changePassword']" class="form-signin">
                    <label for="currentPassword">Current Password</label>
                    <g:passwordField name="currentPassword" class="form-control" required=""/>

                    <label for="newPassword">New Password</label>
                    <g:passwordField name="newPassword" class="form-control" required=""/>

                    <label for="repeatPassword">Re-enter Password</label>
                    <g:passwordField name="repeatPassword" class="form-control" required=""/>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">
                        Reset my password</button>

                </g:form>



            </div>
        </div>
    </div>
</div>
</body>

</html>
