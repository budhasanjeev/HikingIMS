<div class="modal-dialog">

    <div class="modal-content">

        <div class="modal-header" style="background-color: rgb(201, 170, 160)">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">New Batch</h4>
        </div>
        <div class="modal-body" style="background-color: rgb(222, 221, 193)">
            <g:form role="form" class="form-horizontal">

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
                        <input type="text" class="form-control" id="difficultyLevel" name="difficultyLevel" placeholder="Example : Lele">
                    </div>
                </div>

                <div class="form-group">
                    <label for="estimatedTime" class="col-sm-4 control-label" >Estimated Time</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="estimatedTime" name="estimatedTime" placeholder="Example : 4 hrs 30 Secs">
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