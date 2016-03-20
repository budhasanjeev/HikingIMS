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



function deleteHiker(id){

    var answer = confirm("Are you sure?")

    if(answer){

        $.ajax({
            type:"POST",
            url:hikeUrl.deleteUrl,
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

function editHiker(id){

    $.ajax({
        type:"POST",
        url:hikeUrl.editUrl,
        data:{id:id},
        success:function(data){

            $('#firstName').val(data.firstName);
            $('#middleName').val(data.middleName);
            $('#lastName').val(data.lastName);
            $('#mobileNumber').val(data.mobileNumber);
            $('#phoneNumber').val(data.phoneNumber);
            $('#emailAddress').val(data.emailAddress);
            $('#batch').val(data.batch);
            $('#rollNumber').val(data.rollNumber);
            $('#address').val(data.address);
            $('#foodPreference').val(data.foodPreferences);

            $('#saveHiker').attr("onclick","return updateHiker();");
            $('#hiker_id').attr("value",data.id)

            $('#insert-hiker').modal('show');
            $('#insert-hiker .modal-title').html("Edit this Hiker")
            $('#insert-hiker button[type=submit]').html("Save Changes")
        },error: function  (er) {
            alert("Error")
        }
    });

    return false

}

function updateHiker(){

    var data = $("#createHikerForm").serialize();

    $.ajax({
        type:"POST",
        url:hikeUrl.updateUrl,
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

