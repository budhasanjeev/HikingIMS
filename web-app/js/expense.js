/**
 * Created by sanjeev-budha on 3/21/16.
 */
/**
 * Created by sanjeev-budha on 3/19/16.
 */

$(document).ready(function(){
    $('#expense-table').DataTable(
        {
            "lengthMenu": [[6,12,24,-1],[6,12,24,"ALL"]]
        }
    );
    $("#providedBudget").click(function(){
        document.getElementById('providedBudgetDiv').innerHTML = "";
    })
    $("#breakfast").click(function(){
        document.getElementById('breakfastDiv').innerHTML = "";
    })
    $("#snacks").click(function(){
        document.getElementById('snacksDiv').innerHTML = "";
    })
    $("#dinner").click(function(){
        document.getElementById('dinnerDiv').innerHTML = "";
    })
    $("#transportation").click(function(){
        document.getElementById('transportationDiv').innerHTML = "";
    })


})
function changeExpense(){
    $('#insert-expense').modal('show');
    $('#insert-expense .modal-title').html("Add New Expense");
    $('#insert-expense button[type=submit]').html("Save");

    document.getElementById('createExpenseForm').reset();
}
function check(){
    flag = true;
    var hike = $("#hike").val();
    var providedBudget = $("#providedBudget").val();
    var breakfast = $("#breakfast").val();
    var snacks = $("#snacks").val();
    var dinner = $("#dinner").val();
    var transportation = $("#transportation").val();

    var letters = /^[a-zA-Z]+$/;
    var numbers = /^[0-9]+$/;
    //console.log("dlevel="+dLevel+"\n");
    //console.log("eHours"+eHours+"\n");
    //console.log("eMins="+eMins+"\n");

    //if(!hike){
    //    $("#hike").focus();
    //    document.getElementById('hikeDiv').innerHTML = "Hike is empty!!!!";
    //    flag =  false;
    //}
    //
    //else if(!hike.match(letters))
    //{
    //    $("#hike").focus();
    //    document.getElementById('hikeDiv').innerHTML = "Hike is alphabet!!!!";
    //    flag =  false;
    //
    //}
    if (!providedBudget){
        $("#providedBudget").focus();
        document.getElementById('providedBudget').innerHTML = "Budget is empty";
        flag = false;
    }
    else if(!breakfast){
        $("#breakfast").focus();
        document.getElementById('breakfastDiv').innerHTML = "Breakfast is empty!!!!";
        flag =  false;
    }
    else if(!breakfast.match(numbers)){
        $("#breakfast").focus();
        document.getElementById('breakfastDiv').innerHTML = "Breakfast is alphabet!!!";
        flag = false;
    }
    else if(breakfast>=providedBudget){
        $("#breakfast").focus();
        document.getElementById('breakfastDiv').innerHTML = "Breakfast is greater than provided fund";
        flag = false;
    }
    else if(!snacks){
        $("#snacks").focus();
        document.getElementById('snacksDiv').innerHTML = "Snacks is empty!!!!";
        flag =  false;
    }
    else if(!snacks.match(numbers)){
        $("#snacks").focus();
        document.getElementById('snacksDiv').innerHTML = "Snack is alphabet!!!!";
        flag = false;
    }
    else if(snacks>=providedBudget){
        $("#snacks").focus();
        document.getElementById('snacksDiv').innerHTML = "Snacks is greater than provided fund";
        flag = false;
    }
    else if(!dinner){
        $("#dinner").focus();
        document.getElementById('dinnerDiv').innerHTML = "Dinner is empty!!!!";
        flag =  false;
    }
    else if(!dinner.match(numbers)){
        $("#dinner").focus();
        document.getElementById('dinnerDiv').innerHTML = "Dinner is alphabet!!!!";
        flag = false;
    }
    else if(dinner>=providedBudget){
        $("#dinner").focus();
        document.getElementById('dinnerDiv').innerHTML = "Dinner is greater than provided fund";
        flag = false;
    }
    else if(!transportation){
        $("#transportation").focus();
        document.getElementById('transportationDiv').innerHTML = "Transportation is empty!!!!";
        flag =  false;
    }
    else if(!transportation.match(numbers)){
        $("#transportation").focus();
        document.getElementById('transportationDiv').innerHTML = "Transportation is alphabet!!!!";
        flag = false;
    }
    else if(transportation>=providedBudget){
        $("#transportation").focus();
        document.getElementById('transportationDiv').innerHTML = "Transportation is greater than provided fund";
        flag = false;
    }

    return flag;
}
function createExpense(){
    var hike = $("#hike").val();
    var providedBudget = $("#providedBudget").val();
    var breakfast = $("#breakfast").val();
    var snacks = $("#snacks").val();
    var dinner = $("#dinner").val();
    var transportation = $("#transportation").val();

    var letters = /^[a-zA-Z]+$/;
    var numbers = /^[0-9]+$/;
    console.log("providedfund="+providedBudget+"\n");
    console.log("breakfast"+breakfast+"\n");

    if(!providedBudget){
        $("#providedBudget").focus();
        document.getElementById('providedBudgetDiv').innerHTML = "Provided Fund is empty!!!!";
        return false;
    }
    if(!providedBudget.match(numbers)){
        $("#providedBudget").focus();
        document.getElementById('providedBudgetDiv').innerHTML = "Provided Fund is alphabet!!!!";
        return false;
    }


    if(!breakfast){
        $("#breakfast").focus();
        document.getElementById('breakfastDiv').innerHTML = "Breakfast is empty!!!!";
        return  false;
    }
    if(!breakfast.match(numbers)){
        $("#breakfast").focus();
        document.getElementById('breakfastDiv').innerHTML = "Breakfast is alphabet!!!";
        return false;
    }
    if(breakfast>=providedBudget){
        $("#breakfast").focus();
        document.getElementById('breakfastDiv').innerHTML = "Breakfast is greater than provided fund";
        return false;
    }
    if(!snacks){
        $("#snacks").focus();
        document.getElementById('snacksDiv').innerHTML = "Snacks is empty!!!!";
        return false;
    }
    if(!snacks.match(numbers)){
        $("#snacks").focus();
        document.getElementById('snacksDiv').innerHTML = "Snack is alphabet!!!!";
        return false;
    }
    if(snacks>=providedBudget){
        $("#snacks").focus();
        document.getElementById('snacksDiv').innerHTML = "Snacks is greater than provided fund";
        return false;
    }
    if(!dinner){
        $("#dinner").focus();
        document.getElementById('dinnerDiv').innerHTML = "Dinner is empty!!!!";
        return  false;
    }
    if(!dinner.match(numbers)){
        $("#dinner").focus();
        document.getElementById('dinnerDiv').innerHTML = "Dinner is alphabet!!!!";
        return false;
    }
    if(dinner>=providedBudget){
        $("#dinner").focus();
        document.getElementById('dinnerDiv').innerHTML = "Dinner is greater than provided fund";
        return false;
    }
    if(!transportation){
        $("#transportation").focus();
        document.getElementById('transportationDiv').innerHTML = "Transportation is empty!!!!";
        return  false;
    }
    if(!transportation.match(numbers)){
        $("#transportation").focus();
        document.getElementById('transportationDiv').innerHTML = "Transportation is alphabet!!!!";
        return false;
    }
    if(transportation>=providedBudget){
        $("#transportation").focus();
        document.getElementById('transportationDiv').innerHTML = "Transportation is greater than provided fund";
        return false;
    }


    var data = $("#createExpenseForm").serialize();

    $.ajax({
        type:"POST",
        url:expenseUrl.saveExpenseUrl,
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

function editExpense(id){

    $.ajax({
        type:"POST",
        url:expenseUrl.editExpenseUrl,
        data:{id:id},
        success:function(data){

            $('#hike').val(data.hike);
            $('#providedBudget').val(data.providedBudget);

            $('#breakfast').val(data.breakfast);
            $('#snacks').val(data.snacks);
            $('#dinner').val(data.dinner);
            $('#transportation').val(data.transportation);

            check()
            $('#saveExpense').attr("onclick","return updateExpense();");
            $('#expense_id').attr("value",data.id)

            $('#insert-expense').modal('show');
            $('#insert-expense .modal-title').html("Edit this Expense")
            $('#insert-expense button[type=submit]').html("Save Changes")
        },error: function  (er) {
            alert("Error")
        }
    });

    return false

}






function deleteExpense(id){

    var answer = confirm("Are you sure?")

    if(answer){

        $.ajax({
            type:"POST",
            url:expenseUrl.deleteExpenseUrl,
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

function updateExpense(){
    var hike = $("#hike").val();
    var breakfast = $("#breakfast").val();
    var snacks = $("#snacks").val();
    var dinner = $("#dinner").val();
    var transportation = $("#transportation").val();
    var providedBudget = $("#providedBudget").val();
    var letters = /^[a-zA-Z]+$/;
    var numbers = /^[0-9]+$/;
    //console.log("dlevel="+dLevel+"\n");
    //console.log("eHours"+eHours+"\n");
    //console.log("eMins="+eMins+"\n");


    if(!providedBudget){
        $("#providedBudget").focus();
        document.getElementById('providedBudgetDiv').innerHTML = "Provided Fund is empty!!!!";
        return false;
    }
    else if(!providedBudget.match(numbers)){
        $("#providedBudget").focus();
        document.getElementById('providedBudgetDiv').innerHTML = "Provided Fund is alphabet!!!!";
        return false;
    }
    else if(!breakfast){
        $("#breakfast").focus();
        document.getElementById('breakfastDiv').innerHTML = "Breakfast is empty!!!!";
        return  false;
    }
    else if(!breakfast.match(numbers)){
        $("#breakfast").focus();
        document.getElementById('breakfastDiv').innerHTML = "Breakfast is alphabet!!!";
        return false;
    }
    else if(breakfast>=providedBudget){
        $("#breakfast").focus();
        document.getElementById('breakfastDiv').innerHTML = "Breakfast is greater than provided fund";
        return false;
    }
    else if(!snacks){
        $("#snacks").focus();
        document.getElementById('snacksDiv').innerHTML = "Snacks is empty!!!!";
        return false;
    }
    else if(!snacks.match(numbers)){
        $("#snacks").focus();
        document.getElementById('snacksDiv').innerHTML = "Snack is alphabet!!!!";
        return false;
    }
    else if(snacks>=providedBudget){
        $("#snacks").focus();
        document.getElementById('snacksDiv').innerHTML = "Snacks is greater than provided fund";
        return false;
    }
    else if(!dinner){
        $("#dinner").focus();
        document.getElementById('dinnerDiv').innerHTML = "Dinner is empty!!!!";
        return  false;
    }
    else if(!dinner.match(numbers)){
        $("#dinner").focus();
        document.getElementById('dinnerDiv').innerHTML = "Dinner is alphabet!!!!";
        return false;
    }
    else if(dinner>=providedBudget){
        $("#dinner").focus();
        document.getElementById('dinnerDiv').innerHTML = "Dinner is greater than provided fund";
        return false;
    }
    else if(!transportation){
        $("#transportation").focus();
        document.getElementById('transportationDiv').innerHTML = "Transportation is empty!!!!";
        return  false;
    }
    else if(!transportation.match(numbers)){
        $("#transportation").focus();
        document.getElementById('transportationDiv').innerHTML = "Transportation is alphabet!!!!";
        return false;
    }
    else if(transportation>=providedBudget){
        $("#transportation").focus();
        document.getElementById('transportationDiv').innerHTML = "Transportation is greater than provided fund";
        return false;
    }


    var data = $("#createExpenseForm").serialize();
    check()
    $.ajax({
        type:"POST",
        url:expenseUrl.updateExpenseUrl,
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

function generateBill(id){

    $.ajax({
        type:"POST",
        url:expenseUrl.billExpenseUrl,
        data:{id:id},
        success:function(data){
            if(data.messageType=="success"){
                alert("Successfully downloaded")
            }
        }
    })
}