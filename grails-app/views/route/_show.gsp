<button type="button" class="btn btn-primary" onclick="changeRoute();"><i class="glyphicon glyphicon-plus">Route</i></button>


<hr>
<table class="table" id="route-table">
    <thead>
    <tr>
        <th>Start Point</th>
        <th>Finish Point</th>
        <th>Difficulty Level</th>
        <th>Estimated Time</th>
        <th>Actions</th>
    </tr>
    </thead>

    <tbody>
    <g:if test="${route}">
        <g:each in="${route}" var="r">
            <tr>
                <td>${r.startPoint}</td>
                <td>${r.finishPoint}</td>
                <td>${r.difficultyLevel}</td>
                <td>${r.estimatedTime}</td>
                <td>
                    <button class="btn btn-success" onclick="editRoute(${r.id});"><i class="glyphicon glyphicon-edit"></i></button>
                    <button class="btn btn-danger" onclick="deleteRoute(${r.id})"><i class="glyphicon glyphicon-minus-sign"></i></button>
                    <button class="btn btn-info"><i class="glyphicon glyphicon-info-sign"></i></button>
                </td>
            </tr>
        </g:each>
    </g:if>


    </tbody>
</table>

