<div class="modal-dialog">

    <div class="modal-content">

        <div class="modal-header" style="background-color: rgb(201, 170, 160)">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">New Batch</h4>
        </div>
        <div class="modal-body" style="background-color: rgb(222, 221, 193)">
            <g:form role="form" class="form-horizontal" method="POST" controller="batch" action="save">

                <div class="form-group">
                    <label for="batch" class="col-sm-4 control-label" >Batch</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="batch" name="batch" placeholder="Example : 2015">
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