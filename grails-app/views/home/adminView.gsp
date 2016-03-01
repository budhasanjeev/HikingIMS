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

    <link rel="stylesheet" type="text/css" href="${resource(dir: 'css', file: '/bootstrap.min.css')}">
    <script type="text/javascript" src="${resource(dir: 'js',file: 'jquery-1.12.0.min.js')}"></script>
    <script src="${resource(dir: 'js',file: 'bootstrap.min.js')}"></script>

    <style>
        #main{
            width: 90%;
            margin: 10% auto;
        }
        body{
            background-color: #319889;
        }
    </style>

    <script>
        $(document).ready(function(){
            $("#hike_table").hide();
            $("#hiker_table").show();
            $("#route_table").hide();
            $("#batch_table").hide();
            $("#expense_table").hide();
        });

        function changeTab(id){

            if(id == 1){
                $("#hike_table").hide();
                $("#hiker_table").show();
                $("#route_table").hide();
                $("#batch_table").hide();
                $("#expense_table").hide();
            }
            if(id == 2){
                $("#hike_table").show();
                $("#hiker_table").hide();
                $("#route_table").hide();
                $("#batch_table").hide();
                $("#expense_table").hide();
            }
            if(id == 3){
                $("#hike_table").hide();
                $("#hiker_table").hide();
                $("#route_table").show();
                $("#batch_table").hide();
                $("#expense_table").hide();
            }
            if(id == 4){
                $("#hike_table").hide();
                $("#hiker_table").hide();
                $("#route_table").hide();
                $("#batch_table").show();
                $("#expense_table").hide();
            }
            if(id == 5){
                $("#hike_table").hide();
                $("#hiker_table").hide();
                $("#route_table").hide();
                $("#batch_table").hide();
                $("#expense_table").show();
            }
        }
    </script>
</head>

<body>
    <div id="main">

        <div class="navbar navbar-pills">

            <button class="btn btn-primary btn-lg" role="button" id="hiker" onclick="changeTab(1);">Hiker</button>
            <button class="btn btn-primary btn-lg" role="button" id="hike" onclick="changeTab(2)">Hike</button>
            <button class="btn btn-primary btn-lg" role="button" id="route" onclick="changeTab(3)">Route</button>
            <button class="btn btn-primary btn-lg" role="button" id="batch" onclick="changeTab(4)">Batch</button>
            <button class="btn btn-primary btn-lg" role="button" id="expense" onclick="changeTab(5)">Expense</button>
        </div>

        <div class="container">
            <div class="jumbotron" id="hiker_table">
                <g:render template="/hiker/show"></g:render>
            </div>

            <div class="jumbotron" id="hike_table">
               <g:render template="/hike/show"></g:render>
            </div>

            <div class="jumbotron" id="route_table">
                <g:render template="/route/show"></g:render>
            </div>

            <div class="jumbotron" id="batch_table">
                <g:render template="/batch/show"></g:render>
            </div>

            <div class="jumbotron" id="expense_table">
                <g:render template="/expense/show"></g:render>
            </div>

            <div id="addHiker" class="modal fade" role="dialog" tabindex="-1" aria-labelledby="myModelLabel" aria-hidden="true" style="margin-top: 100px">
                <g:render template="../hiker/create"/>
            </div>

            <div id="addHike" class="modal fade" role="dialog" tabindex="-1" aria-labelledby="myModelLabel" aria-hidden="true" style="margin-top: 100px">
                <g:render template="../hike/create"/>
            </div>

            <div id="addRoute" class="modal fade" role="dialog" tabindex="-1" aria-labelledby="myModelLabel" aria-hidden="true" style="margin-top: 100px">
                <g:render template="../route/create"/>
            </div>

            <div id="addBatch" class="modal fade" role="dialog" tabindex="-1" aria-labelledby="myModelLabel" aria-hidden="true" style="margin-top: 100px">
                <g:render template="../batch/create"/>
            </div>

            <div id="addExpense" class="modal fade" role="dialog" tabindex="-1" aria-labelledby="myModelLabel" aria-hidden="true" style="margin-top: 100px">
                <g:render template="../expense/create"/>
            </div>
        </div>


    </div>
</body>
</html>