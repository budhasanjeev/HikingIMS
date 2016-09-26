<button type="button" class="btn btn-primary" onclick="changeHike()"><i class="glyphicon glyphicon-plus">Hike</i></button>
<hr>
<table class="table" id="hike-table">
    <thead>
    <tr>
        <th>Title</th>
        <th>Hiking Date</th>
        <th>Hiking Type</th>
        <th>Start Time</th>
        <th>Finish Time</th>
        %{--<th>Present</th>
        <th>Absentees</th>
        <th>Expense</th>
        <th>Injury</th>--}%
        <th>Actions</th>
    </tr>
    </thead>

    <tbody>

    <g:if test="${hike}">

        <g:each in="${hike}" var="h">
            <tr>
                <td>${h.title}</td>
                <td>${h.hikingDate}</td>
                <td>${h.hikingType}</td>
                <td>${h.startTime}</td>
                <td>${h.finishTime}</td>
                <td>
                    <g:if test="${h?.isOver}">
                        <button class="btn btn-success" title="EDIT"><i class="glyphicon glyphicon-edit"></i></button>
                        <button class="btn btn-danger"  title="DELETE"><i class="glyphicon glyphicon-minus-sign"></i></button>
                        <button class="btn btn-primary" title="HIKER"><i class="glyphicon glyphicon-user"></i></button>
                        <button class="btn btn-info" title="INFO"  onclick="info(${h.id})"><i class="glyphicon glyphicon-info-sign"></i></button>
                    </g:if>
                    <g:else>
                        <button class="btn btn-success" onclick="editHike(${h.id})" title="EDIT"><i class="glyphicon glyphicon-edit"></i></button>
                        <button class="btn btn-danger" onclick="deleteHike(${h.id})" title="DELETE"><i class="glyphicon glyphicon-minus-sign"></i></button>
                        <button class="btn btn-primary" onclick="addHiker(${h.id});" title="HIKER"><i class="glyphicon glyphicon-user"></i></button>
                        <button class="btn btn-info" title="INFO" onclick="info(${h.id})"><i class="glyphicon glyphicon-info-sign"></i></button>
                    </g:else>
                </td>
            </tr>
        </g:each>

    </g:if>

    </tbody>
</table>
