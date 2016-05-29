<div class="modal-dialog">

    <div class="modal-content">

        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title"></h4>
        </div>
        <div class="modal-body">

            <form id="hikerLists">
                <div id="select-hiker-table">

                </div>
            </form>

        </div>
        <div class="modal-footer">
            <button class="btn btn-primary" type="submit" id="addHiker" onclick="addHikers()"></button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
        </div>

    </div>

    <script>
        $('#userList').dataTable();
    </script>
</div>