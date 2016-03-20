<div class="modal-dialog">

    <div class="modal-content">

        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title"></h4>
        </div>
        <div class="modal-body">
            <g:form role="form" class="form-horizontal" id="routeForm" name="routeForm">

                <input type="hidden" id="route_id" name="id">
                <div class="form-group">
                    <label for="startPoint" class="col-sm-4 control-label" >Start Point</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="startPoint" name="startPoint" placeholder="Example : Godawari">
                    </div>
                </div>

                <div class="form-group">
                    <label for="finishPoint" class="col-sm-4 control-label" >Finish Point</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="finishPoint" name="finishPoint" placeholder="Example : Lele">
                    </div>
                </div>

                <div class="form-group">
                    <label for="difficultyLevel" class="col-sm-4 control-label" >Difficulty Level</label>
                    <div class="col-sm-8">
                        <g:select name="difficultyLevel" id="difficultyLevel" from="${1..5}" class="form-control" noSelection="['null':'----Select Difficulty Level----']"/>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-sm-4 control-label" >Estimated Time</label>
                    <div class="col-sm-8">
                        <div class="col-sm-6">
                            <g:select class="form-control" name="estimatedHours" id="estimatedHours" from="${1..12}" noSelection="['':'--Hours--']" />
                        </div>
                        <div class="col-sm-6">
                            <g:select class="form-control" name="estimatedMins" id="estimatedMins" from="${1..60}" noSelection="['':'--Minutes--']"/>
                        </div>
                    </div>
                </div>

            </g:form>
        </div>
        <div class="modal-footer">
            <button class="btn btn-primary" type="submit" id="saveRoute" onclick="return createRoute();">Save</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
        </div>


    </div>

</div>

<script>
    $(function() {
        $('#datetimepicker3').datetimepicker({
            pickDate: false
        });
    });
</script>