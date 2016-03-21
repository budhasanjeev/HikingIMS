/**
 * Created by sanjeev-budha on 3/19/16.
 */

function changeHike(){
    $('#insert-hike').modal('show');
    $('#insert-hike .modal-title').html("Add New Hike");
    $('#insert-hike button[type=submit]').html("Save");

    document.getElementById('createHikeForm').reset();
}

function createHike(){

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

    var data = $("#createHikeForm").serialize();
    
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
            var table = "<table class='table table-bordered'><thead><tr><th><input type='checkbox'></th><th>Name</th><th>Batch</th></tr></thead>";
            var tableRow = "";

            for(var i = 0; i < data.length;i++){
                tableRow += "<tr><td><input type='checkbox'></td><td>" + data[i].firstName+ " "+data[i].lastName+"</td>" +
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

