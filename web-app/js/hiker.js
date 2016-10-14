
$(document).ready(function() {
    $('#hiker-table').dataTable({
        "lengthMenu": [[6,12,24,-1],[6,12,24,"ALL"]]
    });
    $("#firstName").on("click",function(){
        document.getElementById('fNameDiv').innerHTML = "";
    })
    $("#middleName").click(function(){
        document.getElementById('mNameDiv').innerHTML = "";
    })
    $("#lastName").click(function(){
        document.getElementById('lNameDiv').innerHTML = "";
    })
    $("#mobileNumber").click(function(){
        document.getElementById('mNumberDiv').innerHTML = "";
    })
    $("#phoneNumber").click(function(){
        document.getElementById('pNumberDiv').innerHTML = "";
    })
    $("#emailAddress").click(function(){
        document.getElementById('eAddressDiv').innerHTML = "";
    })
    $("#batch").click(function(){
        document.getElementById('batchDiv').innerHTML = "";
    })
    $("#rollNumber").click(function(){
        document.getElementById('rNumberDiv').innerHTML = "";
    })
    $("#address").click(function(){
        document.getElementById('addressDiv').innerHTML = "";
    })
    $("#foodPreference").click(function(){
        document.getElementById('foodDiv').innerHTML = "";
    })

})




function changeHiker(){
    $('#insert-hiker').modal('show');
    $('#insert-hiker .modal-title').html("Add New Hiker");
    $('#insert-hiker button[type=submit]').html("Save");

    document.getElementById('createHikerForm').reset();
}

function check(){
    flag = true;
    var fName = $("#firstName").val();
    var mName = $("#middleName").val();
    var lName = $("#lastName").val();
    var mNumber = $("#mobileNumber").val();
    var pNumber = $("#phoneNumber").val();
    var eAddress = $("#emailAddress").val();
    var batch = $("#batch").val();
    var rNumber = $("#rollNumber").val();
    var address = $("#address").val();
    var food = $("#foodPreference").val();

    var letters = /^[a-zA-Z]+$/;
    var numbers = /^[0-9]+$/;
    var re = /\S+@\S+\.\S+/;
    if(!fName){
        $("#firstName").focus();
        document.getElementById('fNameDiv').innerHTML = "First name is empty!!!!";
        flag =  false;
    }
    else if(!fName.match(letters))
    {
        $("#firstName").focus();
        document.getElementById('fNameDiv').innerHTML = "First name is numeric!!!!";
        flag =  false;
    }
    else if(mName)
    {
        console.log(mName)
        if(!mName.match(letters)){
            console.log("asdkfhlaksjfdhlaskjdfh");
            $("#middleName").focus();
            document.getElementById('mNameDiv').innerHTML = "Middle name is numeric!!!!";
            flag = false;
        }
    }
    else if(!lName){
        $("#lastName").focus();
        document.getElementById('lNameDiv').innerHTML = "Last name is empty!!!!";
        flag = false;
    }
    else if(!lName.match(letters))
    {
        $("#lastName").focus();
        document.getElementById('lNameDiv').innerHTML = "last name is numeric!!!!";
        flag = false;
    }
    else if(!mNumber){
        $("#mobileNumber").focus();
        document.getElementById('mNumberDiv').innerHTML = "Mobile number is empty!!!!";
        flag = false;
    }
    else if(mNumber.length!=10){
        $("#mobileNumber").focus();
        document.getElementById('mNumberDiv').innerHTML = "Mobile number not valid!!!!";
        flag = false;
    }
    else  if(!mNumber.match(numbers))
    {
        $("#mobileNumber").focus();
        document.getElementById('mNumberDiv').innerHTML = "Mobile number is string";
        flag =  false;
    }
    else if(pNumber){
        if(!pNumber.match(numbers))
        {
            $("#phoneNumber").focus();
            document.getElementById('pNumberDiv').innerHTML = "Phone number is string";
            flag =  false;
        }
    }
    else if(pNumber.length!=10){
        $("#phoneNumber").focus();
        document.getElementById('pNumberDiv').innerHTML = "phone number is not valid!!!!";
        flag = false;
    }
    else if(!eAddress)
    {

        $("#emailAddress").focus();
        document.getElementById('eAddressDiv').innerHTML ="Email address is empty";
        flag = false;
    }
    else if(!eAddress.match(re))
    {
        $("#emailAddress").focus();
        document.getElementById('eAddressDiv').innerHTML ="Not valid email address";
        flag = false;
    }
    else if(batch=='')
    {
        $("#batch").focus();
        document.getElementById('batchDiv').innerHTML ="Select Batch";
        flag = false;
    }
    else if(!rNumber)
    {
        $("#rollNumber").focus();
        document.getElementById('rNumberDiv').innerHTML ="Roll Number is empty";
        flag = false;
    }
    else if(!rNumber.match(numbers))
    {
        $("#rollNumber").focus();
        document.getElementById('rNumberDiv').innerHTML ="Roll number must be numeric";
        flag = false;
    }
    else if(!address)
    {
        $("#address").focus();
        document.getElementById('addressDiv').innerHTML ="Address is null";
        flag = false;
    }
    else if(!address.match(letters))
    {
        $("#address").focus();
        document.getElementById('addressDiv').innerHTML ="Address must be string";
        flag = false;
    }
    else if(!rNumber)
    {
        $("#address").focus();
        document.getElementById('addressDiv').innerHTML ="Address is null";
        flag = false;
    }
    else if(food="")
    {
        $("#foodPreference").focus();
        document.getElementById('foodDiv').innerHTML ="Select food preference";
        flag = false;
    }
    return flag;
}


function createHiker(){
    //var fName = $("#firstName").val();
    //var mName = $("#middleName").val();
    //var lName = $("#lastName").val();
    //var mNumber = $("#mobileNumber").val();
    //var pNumber = $("#phoneNumber").val();
    //var eAddress = $("#emailAddress").val();
    //var batch = $("#batch").val();
    //var rNumber = $("#rollNumber").val();
    //var address = $("#address").val();
    //var food = $("#foodPreference").val();
    //
    //var letters = /^[a-zA-Z]+$/;
    //var numbers = /^[0-9]+$/;
    //var re = /\S+@\S+\.\S+/;
    //if(!fName){
    //    $("#firstName").focus();
    //    document.getElementById('fNameDiv').innerHTML = "First name is empty!!!!";
    //    return false;
    //}
    //if(!fName.match(letters))
    //{
    //    $("#firstName").focus();
    //    document.getElementById('fNameDiv').innerHTML = "First name is numeric!!!!";
    //    return false;
    //}
    //
    //if(!lName){
    //    $("#lastName").focus();
    //    document.getElementById('lNameDiv').innerHTML = "Last name is empty!!!!";
    //    return false;
    //}
    //if(!lName.match(letters))
    //{
    //    $("#lastName").focus();
    //    document.getElementById('lNameDiv').innerHTML = "last name is numeric!!!!";
    //    return false;
    //}
    //if(!mNumber){
    //    $("#mobileNumber").focus();
    //    document.getElementById('mNumberDiv').innerHTML = "Mobile number is empty!!!!";
    //    return false;
    //}
    //if(mNumber.length!=10){
    //    $("#mobileNumber").focus();
    //    document.getElementById('mNumberDiv').innerHTML = "Mobile number not valid!!!!";
    //    return false;
    //}
    //if(!mNumber.match(numbers))
    //{
    //    $("#mobileNumber").focus();
    //    document.getElementById('mNumberDiv').innerHTML = "Mobile number is string";
    //    return false;
    //}
    ////if(!pNumber){
    ////    $("#phoneNumber").focus();
    ////    document.getElementById('pNumberDiv').innerHTML = "phone number is empty!!!!";
    ////    return false;
    ////}
    ////if(!pNumber.match(numbers))
    ////{
    ////    $("#phoneNumber").focus();
    ////    document.getElementById('pNumberDiv').innerHTML = "Phone number is string";
    ////    return false;
    ////}
    ////if(pNumber.length){
    ////    $("#phoneNumber").focus();
    ////    document.getElementById('pNumberDiv').innerHTML = "phone number is not valid!!!!";
    ////    return false;
    ////}
    //if(!eAddress)
    //{
    //
    //    $("#emailAddress").focus();
    //    document.getElementById('eAddressDiv').innerHTML ="Email address is empty";
    //    return false;
    //}
    //if(!eAddress.match(re))
    //{
    //    $("#emailAddress").focus();
    //    document.getElementById('eAddressDiv').innerHTML ="Not valid email address";
    //    return false;
    //}
    //console.log(batch+"sadsdasdas")
    //if(!batch)
    //{
    //    $("#batch").focus();
    //    document.getElementById('batchDiv').innerHTML ="Select Batch";
    //    return false;
    //}
    //if(!rNumber)
    //{
    //    $("#rollNumber").focus();
    //    document.getElementById('rNumberDiv').innerHTML ="Roll Number is empty";
    //    return false;
    //}
    //if(!rNumber.match(numbers))
    //{
    //    $("#rollNumber").focus();
    //    document.getElementById('rNumberDiv').innerHTML ="Roll number must be numeric";
    //    return false;
    //}
    //if(!address)
    //{
    //    $("#address").focus();
    //    document.getElementById('addressDiv').innerHTML ="Address is null";
    //    return false;
    //}
    //if(!address.match(letters))
    //{
    //    $("#address").focus();
    //    document.getElementById('addressDiv').innerHTML ="Address must be string";
    //    return false;
    //}
    //if(!rNumber)
    //{
    //    $("#address").focus();
    //    document.getElementById('addressDiv').innerHTML ="Address is null";
    //    return false;
    //}
    //if(food="")
    //{
    //    $("#foodPreference").focus();
    //    document.getElementById('foodDiv').innerHTML ="Select food preference";
    //    return false;
    //}

    var data = $("#createHikerForm").serialize();
    $.ajax({
        type:"POST",
        url:hikerUrl.saveHikerUrl,
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
            url:hikerUrl.deleteHikerUrl,
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
        url:hikerUrl.editHikerUrl,
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

            check();

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
    var fName = $("#firstName").val();
    var mName = $("#middleName").val();
    var lName = $("#lastName").val();
    var mNumber = $("#mobileNumber").val();
    var pNumber = $("#phoneNumber").val();
    var eAddress = $("#emailAddress").val();
    var batch = $("#batch").val();
    var rNumber = $("#rollNumber").val();
    var address = $("#address").val();
    var food = $("#foodPreference").val();

    var letters = /^[a-zA-Z]+$/;
    var numbers = /^[0-9]+$/;
    var re = /\S+@\S+\.\S+/;
    console.log("I have entered in update!!!!")
    if(!fName){
        $("#firstName").focus();
        document.getElementById('fNameDiv').innerHTML = "First name is empty!!!!";
        return false;
    }
    if(!fName.match(letters))
    {
        $("#firstName").focus();
        document.getElementById('fNameDiv').innerHTML = "First name is numeric!!!!";
        return false;
    }
    if(!mName){
        $("#middleName").focus();
        document.getElementById('mNameDiv').innerHTML = "Middle name is empty!!!!";
        return false;
    }
    if(!mName.match(letters))
    {
        $("#middleName").focus();
        document.getElementById('mNameDiv').innerHTML = "Middle name is numeric!!!!";
        return false;
    }
    if(!lName){
        $("#lastName").focus();
        document.getElementById('lNameDiv').innerHTML = "Last name is empty!!!!";
        return false;
    }
    if(!lName.match(letters))
    {
        $("#lastName").focus();
        document.getElementById('lNameDiv').innerHTML = "last name is numeric!!!!";
        return false;
    }
    if(!mNumber){
        $("#mobileNumber").focus();
        document.getElementById('mNumberDiv').innerHTML = "Mobile number is empty!!!!";
        return false;
    }
    if(mNumber.length()<=10 || mNumber.length()>=10){
        $("#mobileNumber").focus();
        document.getElementById('mNumberDiv').innerHTML = "Mobile number not valid!!!!";
        return false;
    }
    if(!mNumber.match(numbers))
    {
        $("#mobileNumber").focus();
        document.getElementById('mNumberDiv').innerHTML = "Mobile number is string";
        return false;
    }
    if(!pNumber){
        $("#phoneNumber").focus();
        document.getElementById('pNumberDiv').innerHTML = "phone number is empty!!!!";
        return false;
    }
    if(!pNumber.match(numbers))
    {
        $("#phoneNumber").focus();
        document.getElementById('pNumberDiv').innerHTML = "Phone number is string";
        return false;
    }
    if(pNumber.length()<=10||pNumber.length()>=10){
        $("#phoneNumber").focus();
        document.getElementById('pNumberDiv').innerHTML = "phone number is not valid!!!!";
        return false;
    }
    if(!eAddress)
    {

        $("#emailAddress").focus();
        document.getElementById('eAddressDiv').innerHTML ="Email address is empty";
        return false;
    }
    if(!eAddress.match(re))
    {
        $("#emailAddress").focus();
        document.getElementById('eAddressDiv').innerHTML ="Not valid email address";
        return false;
    }
    if(batch=='')
    {
        $("#batch").focus();
        document.getElementById('batchDiv').innerHTML ="Select Batch";
        return false;
    }
    if(!rNumber)
    {
        $("#rollNumber").focus();
        document.getElementById('rNumberDiv').innerHTML ="Roll Number is empty";
        return false;
    }
    if(!rNumber.match(numbers))
    {
        $("#rollNumber").focus();
        document.getElementById('rNumberDiv').innerHTML ="Roll number must be numeric";
        return false;
    }
    if(!address.match(letters))
    {
        $("#address").focus();
        document.getElementById('addressDiv').innerHTML ="Address must be string";
        return false;
    }
    if(!rNumber)
    {
        $("#address").focus();
        document.getElementById('addressDiv').innerHTML ="Address is null";
        return false;
    }
    if(food="")
    {
        $("#foodPreference").focus();
        document.getElementById('foodDiv').innerHTML ="Select food preference";
        return false;
    }

    var data = $("#createHikerForm").serialize();
    check();
    $.ajax({
        type:"POST",
        url:hikerUrl.updateHikerUrl,
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

function additionalInfo(id){

    $.ajax({
        type:"POST",
        url:hikerUrl.infoUrl,
        data:{id:id},
        success: function (data) {

            var table = "<table class='table table-bordered' id='hikingHis'><thead><tr></th><th>Hike Title</th><th>Hiking Date</th></tr></thead>";
            var tableRow = "";

            for(var i = 0; i < data.hikeInformation.length;i++){
                tableRow += "<tr><td>"+data.hikeInformation[i].title+"</td><td>" + data.hikeInformation[i].hikingDate+"</td></tr>";

            }
            table = table+tableRow+"</table>"

            $("#hiking-history").html(table);

            $("#hikingHistory").modal('show');
            $("#hikingHistory .modal-title").html("Hiking History");

        },
        error: function (err) {
            alert(err);
        }

    });
}

