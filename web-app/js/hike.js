/**
 * Created by sanjeev-budha on 3/19/16.
 */

$(document).ready(function() {
    $('#hike-table').dataTable({
        "lengthMenu": [[6,12,24,-1],[6,12,24,"ALL"]]
    });
    $("#title").on("click",function(){
        document.getElementById('titleDiv').innerHTML = "";
    })
    $("#hikingMonth").click(function(){
        document.getElementById('hikingDateDiv').innerHTML = "";
    })
    $("#hikingDay").click(function(){
        document.getElementById('hikingDateDiv').innerHTML = "";
    })
    $("#hikingYear").click(function(){
        document.getElementById('hikingDateDiv').innerHTML = "";
    })
    $("#hikingType").click(function(){
        document.getElementById('hikingTypeDiv').innerHTML = "";
    })
    $("#startHours").click(function(){
        document.getElementById('startTimeDiv').innerHTML = "";
    })
    $("#startMins").click(function(){
        document.getElementById('startTimeDiv').innerHTML = "";
    })
    $("#startAmPM").click(function(){
        document.getElementById('startTimeDiv').innerHTML = "";
    })
    $("#finishHours").click(function(){
        document.getElementById('finishTimeDiv').innerHTML = "";
    })
    $("#fininshMins").click(function(){
        document.getElementById('finishTimeDiv').innerHTML = "";
    })
    $("#finishAmPM").click(function(){
        document.getElementById('finishTimeDiv').innerHTML = "";
    })


})


function check(){
    flag = true;
    var title = $("#title").val();
    var hMonth = $("#hikingMonth").val();
    var hDay = $("#hikingDay").val();
    var hYear = $("#hikingYear").val();
    var hType = $("#hikingType").val();
    var sHour = $("#startHours").val();
    var sMin = $("#startMins").val();
    var sAmPm = $("#startAmPM").val();
    var fHour = $("#finishHours").val();
    var fMin = $("#finishMins").val();
    var fAmPm = $("#finishAmPM").val();
    var letters = /^[a-zA-Z]+$/;


    if(!title){
        $("#title").focus();
        document.getElementById('titleDiv').innerHTML = "Title is empty!!!!";
        flag =  false;
    }
    else if(!title.match(letters))
    {
        $("#title").focus();
        document.getElementById('titleDiv').innerHTML = "Title is numeric!!!!";
        flag =  false;
    }
    else if(!hMonth) {
        $("#hikingMonth").focus();
        document.getElementById('hikingDateDiv').innerHTML = "Date point is empty!!!!";
        flag = false;
    }
    else if(!hDay){
        $("#hikingDay").focus();
        document.getElementById('hikingDateDiv').innerHTML = "Date point is empty!!!!";
        flag = false;
    }
    else if(!hYear){
        $("#hikingYear").focus();
        document.getElementById('hikingDateDiv').innerHTML = "Date point is empty!!!!";
        flag = false;
    }



    else  if(hType=='')
    {
        $("#hikingType").focus();
        document.getElementById('hikingTypeDiv').innerHTML = "Select hiking type";
        flag =  false;
    }
    else if(sHour=='') {
        $("#startHours").focus();
        document.getElementById('startTimeDiv').innerHTML = "Select Time";
        flag = false;
    }
    else if(sMin=='')
    {
        $("#startMins").focus();
        document.getElementById('startTimeDiv').innerHTML ="Select Time";
        flag = false;
    }
    else if(sAmPm=='')
    {
        $("#startAmPM").focus();
        document.getElementById('startTimeDiv').innerHTML ="Select Time";
        flag = false;
    }
    else if(fHour=='') {
        $("#finishHours").focus();
        document.getElementById('finishTimeDiv').innerHTML = "Select Time";
        flag = false;
    }
    else if(fMin=='')
    {
        $("#finishMins").focus();
        document.getElementById('finishTimeDiv').innerHTML ="Select Time";
        flag = false;
    }
    else if(fAmPm=='')
    {
        $("#finishAmPM").focus();
        document.getElementById('finishTimeDiv').innerHTML ="Select Time";
        flag = false;
    }

    return flag;
}


function changeHike(){
    $('#insert-hike').modal('show');
    $('#insert-hike .modal-title').html("Add New Hike");
    $('#insert-hike button[type=submit]').html("Save");

    document.getElementById('createHikeForm').reset();
}

function createHike(){
    var title = $("#title").val();
    var hMonth = $("#hikingMonth").val();
    var hDay = $("#hikingDay").val();
    var hYear = $("#hikingYear").val();
    var hType = $("#hikingType").val();
    var sHour = $("#startHours").val();
    var sMin = $("#startMins").val();
    var sAmPm = $("#startAmPM").val();
    var fHour = $("#finishHours").val();
    var fMin = $("#finishMins").val();
    var fAmPm = $("#finishAmPM").val();
    var letters = /^[a-zA-Z]+$/;


    if(!title){
        $("#title").focus();
        document.getElementById('titleDiv').innerHTML = "Title is empty!!!!";
        return false;
    }
    if(!title.match(letters))
    {
        $("#title").focus();
        document.getElementById('titleDiv').innerHTML = "Title is numeric!!!!";
        return false;
    }
    if(!hMonth) {
        $("#hikingMonth").focus();
        document.getElementById('hikingDateDiv').innerHTML = "Date point is empty!!!!";
        return false;
    }
    if(!hDay){
        $("#hikingDay").focus();
        document.getElementById('hikingDateDiv').innerHTML = "Date point is empty!!!!";
        return false;
    }
    if(!hYear){
        $("#hikingYear").focus();
        document.getElementById('hikingDateDiv').innerHTML = "Date point is empty!!!!";
        return false;
    }



    if(hType=='')
    {
        $("#hikingType").focus();
        document.getElementById('hikingTypeDiv').innerHTML = "Select hiking type";
        return false;
    }
    if(sHour=='') {
        $("#startHours").focus();
        document.getElementById('startTimeDiv').innerHTML = "Select Time";
        return false;
    }
    if(sMin=='')
    {
        $("#startMins").focus();
        document.getElementById('startTimeDiv').innerHTML ="Select Time";
        return false;
    }
    if(sAmPm=='') {
        $("#startAmPM").focus();
        document.getElementById('startTimeDiv').innerHTML = "Select Time";
        return false;
    }
    if(fHour=='') {
        $("#finishHours").focus();
        document.getElementById('finishTimeDiv').innerHTML = "Select Time";
        return false;
    }
    if(fMin=='')
    {
        $("#finishMins").focus();
        document.getElementById('finishTimeDiv').innerHTML ="Select Time";
        return false;
    }
    if(fAmPm=='')
    {
        $("#finishAmPM").focus();
        document.getElementById('finishTimeDiv').innerHTML ="Select Time";
        return false;
    }

    var data = $("#createHikeForm").serialize();

    $.ajax({
        type:"POST",
        url:hikeUrl.saveHikeUrl,
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
    return false;
}



function deleteHike(id){

    var answer = confirm("Are you sure?")

    if(answer){

        $.ajax({
            type:"POST",
            url:hikeUrl.deleteHikeUrl,
            data:{id:id},
            success:function(data){
                alert(data.messageType);
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

function editHike(id){

    $.ajax({
        type:"POST",
        url:hikeUrl.editHikeUrl,
        data:{id:id},
        success:function(data){

            $('#title').val(data.title);

            /*Splitting Date into months/day/year*/
            var month = data.hikingDate.split("-")[0];
            var day = data.hikingDate.split("-")[1];
            var year = data.hikingDate.split("-")[2];

            $('#hikingMonth').val(month);
            $('#hikingDay').val(day);
            $('#hikingYear').val(year);

            $('#hikingType').val(data.hikingType);

            /*Splitting start Time*/
            var hours = data.startTime.split(":")[0];
            var extra = data.startTime.split(":")[1];
            var mins = extra.split(" ")[0];
            var amPM = data.startTime.split(" ")[1];

            $('#startHours').val(hours);
            $('#startMins').val(mins);
            $('#startAmPM').val(amPM);


            /*Splitting finishTime*/
            var fhours = data.finishTime.split(":")[0];
            var fextra = data.finishTime.split(":")[1];
            var fmins = fextra.split(" ")[0];
            var famPM = data.finishTime.split(" ")[1];

            $('#finishHours').val(fhours);
            $('#finishMins').val(fmins);
            $('#finishAmPM').val(famPM);

            check();
            $('#saveHike').attr("onclick","return updateHike();");
            $('#hike_id').attr("value",data.id)

            $('#insert-hike').modal('show');
            $('#insert-hike .modal-title').html("Edit this Hike")
            $('#insert-hike button[type=submit]').html("Save Changes")
        },error: function  (er) {
            alert("Error")
        }
    });

    return false

}

function updateHike(){
    var title = $("#title").val();
    var hMonth = $("#hikingMonth").val();
    var hDay = $("#hikingDay").val();
    var hYear = $("#hikingYear").val();
    var hType = $("#hikingType").val();
    var sHour = $("#startHours").val();
    var sMin = $("#startMins").val();
    var sAmPm = $("#startAmPM").val();
    var fHour = $("#finishHours").val();
    var fMin = $("#finishMins").val();
    var fAmPm = $("#finishAmPM").val();
    var letters = /^[a-zA-Z]+$/;


    if(!title){
        $("#title").focus();
        document.getElementById('titleDiv').innerHTML = "Title is empty!!!!";
        return false;
    }
    if(!title.match(letters))
    {
        $("#title").focus();
        document.getElementById('titleDiv').innerHTML = "Title is numeric!!!!";
        return false;
    }
    if(!hMonth) {
        $("#hikingMonth").focus();
        document.getElementById('hikingDateDiv').innerHTML = "Date point is empty!!!!";
        return false;
    }
    if(!hDay){
        $("#hikingDay").focus();
        document.getElementById('hikingDateDiv').innerHTML = "Date point is empty!!!!";
        return false;
    }
    if(!hYear){
        $("#hikingYear").focus();
        document.getElementById('hikingDateDiv').innerHTML = "Date point is empty!!!!";
        return false;
    }



    if(hType=='')
    {
        $("#hikingType").focus();
        document.getElementById('hikingTypeDiv').innerHTML = "Select hiking type";
        return false;
    }
    if(sHour=='') {
        $("#startHours").focus();
        document.getElementById('startTimeDiv').innerHTML = "Select Time";
        return false;
    }
    if(sMin=='')
    {
        $("#startMins").focus();
        document.getElementById('startTimeDiv').innerHTML ="Select Time";
        return false;
    }
    if(sAmPm=='')
    {
        $("#startAmPM").focus();
        document.getElementById('startTimeDiv').innerHTML ="Select Time";
        return false;
    }
    if(fHour=='') {
        $("#finishHours").focus();
        document.getElementById('finishTimeDiv').innerHTML = "Select Time";
        return false;
    }
    if(fMin=='')
    {
        $("#finishMins").focus();
        document.getElementById('finishTimeDiv').innerHTML ="Select Time";
        return false;
    }
    if(fAmPm=='')
    {
        $("#finishAmPM").focus();
        document.getElementById('finishTimeDiv').innerHTML ="Select Time";
        return false;
    }
    var data = $("#createHikeForm").serialize();
    check();
    $.ajax({
        type:"POST",
        url:hikeUrl.updateHikeUrl,
        data:data,
        success:function(data){
            if(data.messageType=="Success"){
                alert("Updated Successfully")
                window.location.reload(true);
            }else{
                alert("Error while Updating")
            }
        },error: function (er) {
            alert("Error")
        }
    });
    return false;
}

function addHiker(id){

    $.ajax({
        type:"GET",
        url:hikeUrl.addHikerUrl,
        success:function(data){
            var table = "<table class='table table-bordered' id='userList'><thead><tr><th><input type='hidden' name='hikeId' value='"+id+"'/><input type='checkbox' onclick='toggle(this)'></th><th>Name</th><th>Batch</th></tr></thead>";
            var tableRow = "";

            for(var i = 0; i < data.length;i++){
                tableRow += "<tr><td><input type='checkbox' name='hiker_id' value='"+data[i].id+ "'></td><td>" + data[i].firstName+ " "+data[i].lastName+"</td>" +
                    "<td>"+data[i].batch+"</td></tr>";

            }
            table = table+tableRow+"</table>"

            $("#select-hiker-table").html(table);

            $("#select-hiker").modal('show');
            $("#select-hiker .modal-title").html("Select Hikers");
            $("#select-hiker button[type=submit]").html("Add Hikers");

        },error: function (er) {
            alert("Error")
        }
    });
    return false;
}

function addHikers() {

    var data = $('#hikerLists').serialize();

    $.ajax({
        type: "POST",
        url: hikeUrl.addHikeHikerUrl,
        data: data,
        success: function (data) {
            if (data.messageType == "Success") {
                alert("Successfully Added")
                window.location.reload(true);
            } else {
                alert("Error while Updating")
            }
        }, error: function (er) {
            alert("Error")
        }
    })

}

function toggle(source) {
    var checkboxes = document.getElementsByName('hiker_id');

    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}
