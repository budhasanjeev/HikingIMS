/**
 * Created by sanjeev-budha on 3/21/16.
 */
/**
 * Created by sanjeev-budha on 3/19/16.
 */

function changeExpense(){
    $('#insert-expense').modal('show');
    $('#insert-expense .modal-title').html("Add New Expense");
    $('#insert-expense button[type=submit]').html("Save");

    document.getElementById('createExpenseForm').reset();
}

function createExpense(){

    var data = $("#createExpenseForm").serialize();

    alert(data)
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
    return false;
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

function editExpense(id){

    $.ajax({
        type:"POST",
        url:expenseUrl.editExpenseUrl,
        data:{id:id},
        success:function(data){

            $('#hike').val(data.hike);
            $('#breakfast').val(data.breakfast);
            $('#snacks').val(data.snacks);
            $('#dinner').val(data.dinner);
            $('#transportation').val(data.transportation);
            $('#providedBudget').val(data.providedBudget);
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

function updateExpense(){

    var data = $("#createExpenseForm").serialize();

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

