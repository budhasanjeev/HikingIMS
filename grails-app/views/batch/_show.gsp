<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addBatch"><i class="glyphicon glyphicon-plus">Batch</i></button>
<hr>
<table class="table">
    <thead>
    <tr>
        <th>Batch</th>
        <th>Actions</th>
    </tr>
    </thead>

    <tbody>

    <g:if test="${hims.Batch.findAll()}">
        <g:each in="${hims.Batch.findAll()}" var="batch">

            <tr>
                <td>${batch.batch}</td>
                <td>
                    <button><i class="glyphicon glyphicon-edit"></i></button>
                    <button><i class="glyphicon glyphicon-minus-sign"></i></button>
                    <button><i class="glyphicon glyphicon-eye-open"></i></button>
                </td>
            </tr>
        </g:each>
    </g:if>
    </tbody>
</table>
