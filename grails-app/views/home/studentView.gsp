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
    <script src="${resource(dir: 'js',file: 'student.js')}" type="text/javascript"></script>
    <script src="${resource(dir: 'js',file: 'bootstrap.min.js')}" type="text/javascript"></script>
    <style>
    #main{
        width: 1200px;
        margin: 10% auto;
    }
    li{
        background-color: rgba(205, 196, 191, 0.21)
    }
    button#two:focus
    {
        background:olive;
    }
    </style>
    <script>
        function editable(){


                if( $(".makeEditable").val()=="Edit")
                {
                    $(".editable").removeAttr("readonly");
                    $(".makeEditable").val('Update');

                }else
                {
                    var datas = $('#updateUserForm').serialize();
                    $.ajax({
                        url: ${createLink(controller: 'hiker', action: 'save')},
                        data:datas,
                        success:function(resp){
                            $(".editable").attr("readonly","readonly");
                            $(".makeEditable").val('Edit');
                            alert("wow Done!!!!");
                        } ,error: function (er) {
                            alert("Error")
                        }

                    })
                }



        }
        function sendName(){
            var userId = $('#hikerId').val();
            var data = {
                hikerId:userId
            }
            $.ajax({
                url:"${createLink(controller: 'home', action: 'sendName')}",
                type:"POST",
                data:data,
                success: function(resp){
                    console.log(resp)
                    if(resp.messageType=="Successful"){
                        document.getElementById('two').style.backgroundColor='darkblue';
                        document.getElementById('two').disabled = true
                        $('#msg').html("You have submitted your name for hike!!!");
                    }
                } ,error: function (er) {
                    alert("Error")
                }
            })
        }
    </script>
</head>

<body>
<div id="main">
    <div class="container">

        <div class="col-md-5 ">
            <g:hiddenField name="hikerId" id="hikerId" value="${hikerInfo?.id}"/>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                    <tr>
                        <th>Student Information</th>
                        <th></th>

                    </tr>
                    </thead>
                    <tbody>
                        <g:form role="form" id="updateUserForm" name="updateUserForm">
                            <g:hiddenField name="hiddenMsg" value="second"/>
                            <tr>
                                <td>First Name</td>
                                <td><input type="text" readonly="readonly" id="firstName" name="firstName" class="editable" value="${hikerInfo?.firstName?:''} ${hikerInfo?.middleName?:''} ${hikerInfo?.lastName?:''}"/> </td>
                            </tr>
                            <tr>
                                <td>Middle Name</td>
                                <td><input type="text" readonly="readonly" id="middleName" name="middleName" class="editable" value="${hikerInfo?.middleName?:''} ${hikerInfo?.middleName?:''} ${hikerInfo?.lastName?:''}"/> </td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td><input type="text" readonly="readonly" id="lastName" name="lastName" class="editable" value="${hikerInfo?.lastName?:''} ${hikerInfo?.lastName?:''} "/> </td>
                            </tr>
                            <tr>
                                <td>Username</td>
                                <td><input type="text" readonly="readonly" id="username" name="username" value="${hikerInfo?.user?.username?:''} "/> </td>
                            </tr>
                            <g:if test="${hikerInfo?.batch}">
                                <tr>
                                    <td>Batch</td>
                                    <td><input type="text" readonly="readonly" id="batch" name="batch" class="editable" value="${hikerInfo?.batch}"/> </td>

                                </tr>
                                <tr>
                                    <td>Roll Number</td>
                                    <td><input type="text" readonly="readonly" id="rollNumber" name="rollNumber" class="editable"  value="${hikerInfo?.rollNumber}"/> </td>


                                </tr>
                            </g:if>
                            <g:else>
                                <tr>
                                    <td>Role</td>
                                    <td>Faculty/Admin</td>

                                </tr>
                            </g:else>
                            <tr>
                                <td>Address</td>
                                <td><input type="text" readonly="readonly" id="address" name="address" class="editable" value="${hikerInfo?.address?:''} "/> </td>
                            </tr>
                            <tr>
                            <tr>
                                <td>Mobile Number</td>
                                <td><input type="text" readonly="readonly"  id="mobileNumber" name="mobileNumber" class="editable"  value="${hikerInfo?.mobileNumber?:''} "/> </td>
                            </tr>

                            <tr>
                                <td>Email-Address</td>
                                <td><input type="text" readonly="readonly"class="editable"  value="${hikerInfo?.emailAddress?:''} "/> </td>
                            </tr>
                            <tr>
                                <td>Food Preference</td>
                                <td><input type="text" readonly="readonly" id="foodPreference" name="foodPreferences" class="editable" value="${hikerInfo?.foodPreferences?:''} "/> </td>
                            </tr>
                        </g:form>
                            <tr>
                                <td>

                                </td>
                                <td>
                                    <input type="button" class= "makeEditable" id="two" onclick="editable();" value="Edit">

                                </td>
                            </tr>

                    </tbody>
                </table>
            </div>
            %{--<div class="table-responsive">--}%
                %{--<table class="table">--}%
                    %{--<thead>--}%
                    %{--<tr>--}%
                        %{--<th>HIke you have attended</th>--}%
                        %{--<th>${totalCount}</th>--}%

                    %{--</tr>--}%
                    %{--<tr>--}%
                        %{--<td>S.No.</td>--}%
                        %{--<td>Title</td>--}%
                        %{--<td>Date of Hike</td>--}%
                    %{--</tr>--}%
                    %{--</thead>--}%
                    %{--<tbody>--}%
                        %{--<g:if test="${hikeList}">--}%
                            %{--<g:each in="${hikeList}" var="hike" status="i">--}%
                                %{--<tr>--}%
                                    %{--<td>${i+1}</td>--}%
                                    %{--<td>${hike?.title}</td>--}%
                                    %{--<td><g:formatDate format="yyyy-MM-dd" date="${hike?.hikingDate}"/></td>--}%

                                %{--</tr>--}%
                            %{--</g:each>--}%
                        %{--</g:if>--}%
                        %{--<g:else>--}%
                            %{--You haven't attended even a single hike!!!--}%
                        %{--</g:else>--}%
                    %{--</tbody>--}%
                %{--</table>--}%
            %{--</div>--}%
        </div>
        <div class="col-md-1 ">

        </div>
        <div class="col-md-5 ">
        <g:render template="/home/about" model="[hike:hike]"/>
        <br>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                    <tr>
                        <th>HIke you have attended</th>
                        <th>${totalCount}</th>

                    </tr>
                    <tr>
                        <td>S.No.</td>
                        <td>Title</td>
                        <td>Date of Hike</td>
                    </tr>
                    </thead>
                    <tbody>
                    <g:if test="${hikeList}">
                        <g:each in="${hikeList}" var="hike" status="i">
                            <tr>
                                <td>${i+1}</td>
                                <td>${hike?.title}</td>
                                <td><g:formatDate format="yyyy-MM-dd" date="${hike?.hikingDate}"/></td>

                            </tr>
                        </g:each>
                    </g:if>
                    <g:else>
                        You haven't attended even a single hike!!!
                    </g:else>
                    </tbody>
                </table>
            </div>
        </div>

        </div>
</div>

</div>
</body>
</html>