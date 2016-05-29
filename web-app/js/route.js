/**
 * Created by sanjeev-budha on 3/19/16.
 */

$(document).ready(function() {
    $('#route-table').dataTable({
        "lengthMenu": [[6,12,24,-1],[6,12,24,"ALL"]]
    });
    $("#startPoint").on("click",function(){
        document.getElementById('startPointDiv').innerHTML = "";
    })
    $("#finishPoint").click(function(){
        document.getElementById('finishPointDiv').innerHTML = "";
    })
    $("#difficultyLevel").click(function(){
        document.getElementById('difficultyLevelDiv').innerHTML = "";
    })
    $("#estimatedHours").click(function(){
        document.getElementById('eTimeDiv').innerHTML = "";
    })
    $("#estimatedMins").click(function(){
        document.getElementById('eTimeDiv').innerHTML = "";
    })
})


//test

function changeRoute(){
    $('#insert-route').modal('show');
    $('#insert-route .modal-title').html("Add New Route");
    $('#insert-route button[type=submit]').html("Save");

    document.getElementById('routeForm').reset();
}

function check(){
    flag = true;
    var sPoint = $("#startPoint").val();
    var fPoint = $("#finishPoint").val();
    var dLevel = $("#difficultyLevel").val();
    var eHours = $("#estimatedHours").val();
    var eMins = $("#estimatedMins").val();
    var letters = /^[a-zA-Z]+$/;
    console.log("dlevel="+dLevel+"\n");
    console.log("eHours"+eHours+"\n");
    console.log("eMins="+eMins+"\n");

    if(!sPoint){
        $("#startPoint").focus();
        document.getElementById('startPointDiv').innerHTML = "Start point is empty!!!!";
        flag =  false;
    }
    else if(!sPoint.match(letters))
    {
        $("#startPoint").focus();
        document.getElementById('startPointDiv').innerHTML = "Start point is numeric!!!!";
        flag =  false;
    }
    else if(!fPoint){
        $("#finishPoint").focus();
        document.getElementById('finishPointDiv').innerHTML = "finish point is empty!!!!";
        flag = false;
    }
    else if(!fPoint.match(letters))
    {
        $("#finishPoint").focus();
        document.getElementById('finishPointDiv').innerHTML = "finish point is numeric!!!!";
        flag = false;
    }

   else  if(dLevel=='')
    {
        $("#difficultyLevel").focus();
        document.getElementById('difficultyLevelDiv').innerHTML = "Select difficulty level";
        flag =  false;
    }
   else if(eHours=='')
    {
        $("#estimatedHours").focus();
        document.getElementById('eTimeDiv').innerHTML ="Select Hour and Minutes";
        flag = false;
    }
    else if(eMins=='')
    {
        $("#estimatedMins").focus();
        document.getElementById('eTimeDiv').innerHTML ="Select Hour and Minutes";
        flag = false;
    }
    return flag;
}

function createRoute(){
    var sPoint = $("#startPoint").val();
    var fPoint = $("#finishPoint").val();
    var dLevel = $("#difficultyLevel").val();
    var eHours = $("#estimatedHours").val();
    var eMins = $("#estimatedMins").val();
    var letters = /^[a-zA-Z]+$/;
    console.log("dlevel="+dLevel+"\n");
    console.log("eHours"+eHours+"\n");
    console.log("eMins="+eMins+"\n");

    if(!sPoint){
            $("#startPoint").focus();
            document.getElementById('startPointDiv').innerHTML = "Start point is empty!!!!";
            return false;
    }
    if(!sPoint.match(letters))
    {
            $("#startPoint").focus();
            document.getElementById('startPointDiv').innerHTML = "Start point is numeric!!!!";
            return false;
    }
    if(!fPoint){
        $("#finishPoint").focus();
        document.getElementById('finishPointDiv').innerHTML = "finish point is empty!!!!";
        return false;
    }
    if(!fPoint.match(letters))
    {
        $("#finishPoint").focus();
        document.getElementById('finishPointDiv').innerHTML = "finish point is numeric!!!!";
        return false;
    }

    if(dLevel=='')
    {
        $("#difficultyLevel").focus();
        document.getElementById('difficultyLevelDiv').innerHTML = "Select difficulty level";
        return false;
    }
    if(eHours=='')
    {
        $("#estimatedHours").focus();
        document.getElementById('eTimeDiv').innerHTML ="Select Hour and Minutes";
        return false;
    }
    if(eMins=='')
    {
        $("#estimatedMins").focus();
        document.getElementById('eTimeDiv').innerHTML ="Select Hour and Minutes";
        return false;
    }


    var data = $("#routeForm").serialize();

    $.ajax({
        type:"POST",
        url:routeUrl.saveRouteUrl,
        data:data,
        success:function(data){
            if(data.messageType=="Success"){
                alert("Saved Successfully")
                window.location.reload(true);
            }else{
                alert("Error while creating")
            }
        },error: function (er) {
            alert("Error")
        }
    });
}



function deleteRoute(id){

    var answer = confirm("Are you sure?")

    if(answer){

        $.ajax({
            type:"POST",
            url:routeUrl.deleteRouteUrl,
            data:{id:id},
            success:function(data){
                if(data.messageType=="Success"){
                    alert("Deleted Successfully")
                    window.location.reload(true);
                }else{
                    alert("Error while deleting")
                }
            },error: function  (er) {
                alert("Error")
            }
        });
    }

    return false
}

function editRoute(id){
    $.ajax({
        type:"POST",
        url:routeUrl.editRouteUrl,
        data:{id:id},
        success:function(data){

            $('#startPoint').val(data.startPoint);
            $('#finishPoint').val(data.finishPoint);
            $('#difficultyLevel').val(data.difficultyLevel);

            var hour = data.estimatedTime.split(":")[0];
            var minute = data.estimatedTime.split(":")[1];

            $('#estimatedHours').val(hour);
            $('#estimatedMins').val(minute);

            check();

            $('#saveRoute').attr("onclick","return updateRoute();");
            $('#route_id').attr("value",data.id)

            $('#insert-route').modal('show');
            $('#insert-route .modal-title').html("Edit this Route")
            $('#insert-route button[type=submit]').html("Save Changes")

        },error: function  (er) {
            alert("Error")
        }
    });

    return false

}

function updateRoute(){
    var sPoint = $("#startPoint").val();
    var fPoint = $("#finishPoint").val();
    var dLevel = $("#difficultyLevel").val();
    var eHours = $("#estimatedHours").val();
    var eMins = $("#estimatedMins").val();
    var letters = /^[a-zA-Z]+$/;
    console.log("dlevel="+dLevel+"\n");
    console.log("eHours"+eHours+"\n");
    console.log("eMins="+eMins+"\n");

    if(!sPoint){
        $("#startPoint").focus();
        document.getElementById('startPointDiv').innerHTML = "Start point is empty!!!!";
        return false;
    }
    if(!sPoint.match(letters))
    {
        $("#startPoint").focus();
        document.getElementById('startPointDiv').innerHTML = "Start point is numeric!!!!";
        return false;
    }
    if(!fPoint){
        $("#finishPoint").focus();
        document.getElementById('finishPointDiv').innerHTML = "finish point is empty!!!!";
        return false;
    }
    if(!fPoint.match(letters))
    {
        $("#finishPoint").focus();
        document.getElementById('finishPointDiv').innerHTML = "finish point is numeric!!!!";
        return false;
    }

    if(dLevel=='')
    {
        $("#difficultyLevel").focus();
        document.getElementById('difficultyLevelDiv').innerHTML = "Select difficulty level";
        return false;
    }
    if(eHours=='')
    {

        $("#estimatedHours").focus();
        document.getElementById('eTimeDiv').innerHTML ="Select Hour and Minutes";
        return false;
    }
    if(eMins=='')
    {
        $("#estimatedMins").focus();
        document.getElementById('eTimeDiv').innerHTML ="Select Hour and Minutes";
        return false;
    }
    var data = $("#routeForm").serialize();
    check();
    $.ajax({
        type:"POST",
        url:routeUrl.updateRouteUrl,
        data:data,
        success:function(data){
            if(data.messageType=="Success"){
                alert("Updated Successfully")
                window.location.reload(true);
            }else{alert("Error while Updating")
            }
        },error: function (er) {
            alert("Error")
        }
    });
    return false;
}

