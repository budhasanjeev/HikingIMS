<%--
  Created by IntelliJ IDEA.
  User: Sushant
  Date: 9/19/2016
  Time: 8:08 AM
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>User Panel</title>
    <meta content="main" name="layout">
    <link rel="stylesheet" type="text/css" href="${resource(dir: 'css', file: 'bootstrap.min.css')}">
    <script type="text/javascript" src="${resource(dir: 'js',file: 'jquery-1.12.0.min.js')}"></script>
    <script src="${resource(dir: 'js',file: 'bootstrap.min.js')}" type="text/javascript"></script>
    <style>
    #main{
        width: 1200px;
        margin: 10% auto;
    }
    li{
        background-color: rgba(205, 196, 191, 0.21)
    }
    </style>
</head>

<body>
<div id="main">
    <div class="container">

        <div class="col-md-5 ">

            <div class="table-responsive">
                <table class="table">
                    <thead>
                    <tr>
                        <th>Student Information</th>
                        <th></th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Anna</td>


                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Anna</td>


                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                    <tr>
                        <th>HIke you have attended</th>
                        <th></th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>


                    </tr>
                    <tr>
                        <td>1</td>



                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-md-1 ">

        </div>
        <div class="col-md-5 ">
        <g:render template="/home/about"/>
        </div>
</div>

</div>
</body>
</html>