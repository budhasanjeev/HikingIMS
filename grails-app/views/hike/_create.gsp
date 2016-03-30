<div class="modal-dialog">

    <div class="modal-content">

        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title"></h4>
        </div>
        <div class="modal-body">
            <g:form role="form" class="form-horizontal" id="createHikeForm" name="createHikeForm">

                <input type="hidden" id="hike_id" name="id">
                <div class="form-group">
                    <label for="title" class="col-sm-4 control-label" >Title</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="title" name="title" placeholder="Example : Godawari To Lele">
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-sm-4 control-label" >Hiking Date</label>
                    <div class="col-sm-8">

                        <div class="col-sm-4">
                            <g:select name="hikingMonth" id="hikingMonth" from="${["January","February","March","April","May","June","July","August","September","October","November","December"]}" class="form-control" noSelection="['':'--Months--']"/>
                        </div>

                        <div class="col-sm-4">
                            <g:select name="hikingDay" from="${1..30}" id="hikingDay" noSelection="['':'--Day--']" class="form-control"/>
                        </div>
                        
                        <div class="col-sm-4">
                            <g:select name="hikingYear" id="hikingYear" from="${2012..2020}" noSelection="['':'--Year--']" class="form-control"/>
                        </div>

                    </div>
                </div>

                <div class="form-group">
                    <label for="hikingType" class="col-sm-4 control-label" >Hiking Type</label>
                    <div class="col-sm-8">
                        <g:select class="form-control" name="hikingType" id="hikingType" from="${["One Day","Two Days","Cycling"]}" noSelection="['':'--Select Hiking Type--']"/>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-sm-4 control-label" >Start Time</label>
                    <div class="col-sm-8">
                        <div class="col-sm-4">
                            <g:select class="form-control" id="startHours" name="startHours" from="${1..12}" noSelection="['':'-Hours-']"/>
                        </div>
                        <div class="col-sm-4">
                            <g:select class="form-control" id="startMins" name="startMins" from="${1..60}" noSelection="['':'-Mins-']"/>
                        </div>
                        <div class="col-sm-4">
                            <g:select class="form-control" id="startAmPM" name="startAmPM" from="${["AM","PM"]}" noSelection="['':'-AM/PM-']" />
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-sm-4 control-label" >Finish Time</label>
                    <div class="col-sm-8">
                        <div class="col-sm-4">
                            <g:select class="form-control" name="finishHours" from="${1..12}" noSelection="['':'-Hours-']"/>
                        </div>
                        <div class="col-sm-4">
                            <g:select class="form-control" name="finishMins" from="${1..60}" noSelection="['':'-Mins-']"/>
                        </div>
                        <div class="col-sm-4">
                            <g:select class="form-control" name="finishAmPM" from="${["AM","PM"]}" noSelection="['':'-AM/PM-']" />
                        </div>
                    </div>
                </div>

                %{--<div class="form-group">
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
--}%
            </g:form>
        </div>
        <div class="modal-footer">
            <button class="btn btn-primary" type="submit" id="saveHike" onclick=" return createHike()">Save</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
        </div>

    </div>

</div>