<%--
  Created by IntelliJ IDEA.
  User: sanjeev-budha
  Date: 1/3/16
  Time: 4:37 PM
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <meta content="main" name="layout">
    <title>Admin Panel</title>

    %{--Stylesheets--}%
    <link rel="stylesheet" type="text/css" href="${resource(dir: 'css', file: 'bootstrap.min.css')}">

    %{--javascript files--}%
    <script type="text/javascript" src="${resource(dir: 'js',file: 'jquery-1.12.0.min.js')}"></script>
    <script src="${resource(dir: 'js',file: 'bootstrap.min.js')}" type="text/javascript"></script>
    <script src="${resource(dir: 'js',file: 'hiker.js')}" type="text/javascript"></script>
    <script src="${resource(dir: 'js',file: 'hike.js')}" type="text/javascript"></script>
    <script src="${resource(dir: 'js',file: 'route.js')}" type="text/javascript"></script>
    <script src="${resource(dir: 'js',file: 'expense.js')}" type="text/javascript"></script>

    <script type="text/javascript">
        function HikerUrl(){
            this.saveHikerUrl = "<g:createLink controller="hiker" action="save"/>"
            this.deleteHikerUrl = "<g:createLink controller="hiker" action="delete"/>"
            this.editHikerUrl = "<g:createLink controller="hiker" action="edit"/>"
            this.updateHikerUrl = "<g:createLink controller="hiker" action="update"/>"
        }

        hikerUrl = new HikerUrl();

        function HikeUrl(){
            this.saveHikeUrl = "<g:createLink controller="hike" action="save"/>"
            this.deleteHikeUrl = "<g:createLink controller="hike" action="delete"/>"
            this.editHikeUrl = "<g:createLink controller="hike" action="edit"/>"
            this.updateHikeUrl = "<g:createLink controller="hike" action="update"/>"
        }

        hikeUrl = new HikeUrl();

        function RouteUrl(){
            this.saveRouteUrl = "<g:createLink controller="route" action="save"/>"
            this.deleteRouteUrl = "<g:createLink controller="route" action="delete"/>"
            this.editRouteUrl = "<g:createLink controller="route" action="edit"/>"
            this.updateRouteUrl = "<g:createLink controller="route" action="update"/>"
        }

        routeUrl = new RouteUrl();

        function ExpenseUrl(){
            this.saveExpenseUrl = "<g:createLink controller="expense" action="save"/>"
            this.deleteExpenseUrl = "<g:createLink controller="expense" action="delete"/>"
            this.editExpenseUrl = "<g:createLink controller="expense" action="edit"/>"
            this.updateExpenseUrl = "<g:createLink controller="expense" action="update"/>"
        }

        expenseUrl = new ExpenseUrl();

    </script>

    <style>
    #main{
        width: 1200px;
        margin: 10% auto;
    }

    </style>


</head>

<body>
<div id="main">

    <div>
        <ul class="nav nav-tabs">
            <li class="active"><a href="#">Hiker</a></li>
            <li><a href="#">Hike</a></li>
            <li><a href="#">Route</a></li>
            <li><a href="#">Expense</a></li>
        </ul>
    </div>

    <div>
        <div class="jumbotron" id="hiker_table">
            <g:render template="/hiker/show"></g:render>
        </div>

        <div class="jumbotron" id="hike_table">
            <g:render template="/hike/show"></g:render>
        </div>

        <div class="jumbotron" id="route_table">
            <g:render template="/route/show"></g:render>
        </div>

        <div class="jumbotron" id="expense_table">
            <g:render template="/expense/show"></g:render>
        </div>

        <div id="insert-hiker" class="modal fade" role="dialog" tabindex="-1" aria-labelledby="myModelLabel" aria-hidden="true" style="margin-top: 100px">
            <g:render template="../hiker/create"/>
        </div>

        <div id="insert-hike" class="modal fade" role="dialog" tabindex="-1" aria-hidden="true" style="margin-top: 100px">
            <g:render template="../hike/create"/>
        </div>

        <div id="insert-route" class="modal fade" role="dialog" tabindex="-1" aria-labelledby="myModelLabel" aria-hidden="true" style="margin-top: 100px">
            <g:render template="../route/create"/>
        </div>

        <div id="insert-expense" class="modal fade" role="dialog" tabindex="-1" aria-labelledby="myModelLabel" aria-hidden="true" style="margin-top: 100px">
            <g:render template="../expense/create"/>
        </div>
    </div>


</div>
</body>
</html>