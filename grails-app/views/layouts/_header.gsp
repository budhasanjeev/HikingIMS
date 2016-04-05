
<link href="${resource(dir: 'css', file: 'hims.css')}" rel="stylesheet" type="text/css">

<div class="navbar navbar-default navbar-fixed-top">

    <div class="logo">
        <g:link controller="home" action="index">
            <img class="logoImage" src="${resource(dir: 'images', file: 'hiking_logo.gif')}" height="100%">
        </g:link>

        <g:if test="${sec.loggedInUserInfo(field: 'username')}">
            <span style="margin-left: 850px;">Welcome ${sec.loggedInUserInfo(field: 'username')}
            <g:link controller="logout" action="index">
                <button class="btn btn-danger">
                        Logout
                </button>
            </g:link>
            </span>
        </g:if>

    </div>

</div>
