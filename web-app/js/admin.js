/**
 * Created by sanjeev-budha on 3/21/16.
 */

function changeTab(tab){

    if(tab == 1) {
        $('#hiker_table').show();
        $('#hike_table').hide();
        $('#route_table').hide();
        $('#expense_table').hide();
        $('#hiker-tab').attr("class", "active");

    }
    else if(tab == 2){
        $('#hiker_table').hide();
        $('#hike_table').show();
        $('#route_table').hide();
        $('#expense_table').hide();
        $('#hike-tab').attr("class", "active");
    }
    else if(tab == 3){
        $('#hiker_table').hide();
        $('#hike_table').hide();
        $('#route_table').show();
        $('#expense_table').hide();
        $('#route-tab').attr("class", "active");
    }
    else if(tab == 4){
        $('#hiker_table').hide();
        $('#hike_table').hide();
        $('#route_table').hide();
        $('#expense_table').show();
        $('#expense-tab').attr("class", "active");
    }

    removeClass(tab);
}

function removeClass(tab){

    if(tab == 1){
        $('#hiker-tab').attr("class","active");
        $('#hike-tab').removeAttr("class","active");
        $('#route-tab').removeAttr("class","active");
        $('#expense-tab').removeAttr("class","active");
    }
    else if(tab == 2){
        $('#hiker-tab').removeAttr("class","active");
        $('#hike-tab').attr("class","active");
        $('#route-tab').removeAttr("class","active");
        $('#expense-tab').removeAttr("class","active");
    }
    else if(tab == 3){
        $('#hiker-tab').removeAttr("class","active");
        $('#hike-tab').removeAttr("class","active");
        $('#route-tab').attr("class","active");
        $('#expense-tab').removeAttr("class","active");
    }
    else if(tab == 4){
        $('#hiker-tab').removeAttr("class","active");
        $('#hike-tab').removeAttr("class","active");
        $('#route-tab').removeAttr("class","active");
        $('#expense-tab').attr("class","active");
    }
}
