/**
 * Created by sanjeev-budha on 3/19/16.
 */

$(document).ready(function() {
    $('#route-table').dataTable({
    "lengthMenu": [[6,12,24,-1],[6,12,24,"ALL"]]
});
})



function changeRoute(){
    $('#insert-route').modal('show');
    $('#insert-route .modal-title').html("Add New Route");
    $('#insert-route button[type=submit]').html("Save");

    document.getElementById('routeForm').reset();
}

function createRoute(){

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
    return false;
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

    var data = $("#routeForm").serialize();

    $.ajax({
        type:"POST",
        url:routeUrl.updateRouteUrl,
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

