<div class="modal-dialog">

    <div class="modal-content">

        <div class="modal-header" style="background-color: rgb(201, 170, 160)">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">New Hike</h4>
        </div>
        <div class="modal-body" style="background-color: rgb(222, 221, 193)">
            <g:form role="form" class="form-horizontal">

                <div class="form-group">
                    <label for="title" class="col-sm-4 control-label" >Title</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="title" name="title" placeholder="Example : Godawari To Lele">
                    </div>
                </div>

                <div class="form-group">
                    <label for="hikingDate" class="col-sm-4 control-label" >Hiking Date</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="hikingDate" name="hikingDate" placeholder="Example : 2/27/2016">
                    </div>
                </div>

                <div class="form-group">
                    <label for="hikingType" class="col-sm-4 control-label" >Hiking Type</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="hikingType" name="hikingType" placeholder="Example : One Day">
                    </div>
                </div>

                <div class="form-group">
                    <label for="startTime" class="col-sm-4 control-label" >Start Time</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="startTime" name="startTime" placeholder="Example : 7 AM">
                    </div>
                </div>

                <div class="form-group">
                    <label for="finishTime" class="col-sm-4 control-label" >Finish Time</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="finishTime" name="finishTime" placeholder="Example : 5 PM">
                    </div>
                </div>

                <div class="form-group">
                    <label for="injury" class="col-sm-4 control-label" >Injury</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="injury" name="injury" placeholder="Example : No Injury">
                    </div>
                </div>

                <div class="form-group">
                    <label for="present" class="col-sm-4 control-label" >Present</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="present" name="present" placeholder="Example : 14">
                    </div>
                </div>

                <div class="form-group">
                    <label for="absentees" class="col-sm-4 control-label" >Absentees</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="absentees" name="absentees" placeholder="Example : 4">
                    </div>
                </div>

            </g:form>
        </div>
        <div class="modal-footer" style="background-color: rgb(201, 170, 160)">
            <button class="btn btn-primary" type="submit" onclick="$('form').submit()">Save</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
        </div>

    </div>

</div>