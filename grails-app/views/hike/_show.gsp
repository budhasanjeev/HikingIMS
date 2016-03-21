<button type="button" class="btn btn-primary" onclick="changeHike()"><i class="glyphicon glyphicon-plus">Hike</i></button>
<hr>
<table class="table">
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
                    <button onclick="editHike(${h.id})"><i class="glyphicon glyphicon-edit"></i></button>
                    <button onclick="deleteHike(${h.id})"><i class="glyphicon glyphicon-minus-sign"></i></button>
                    <button><i class="glyphicon glyphicon-eye-open"></i></button>
                </td>
            </tr>
        </g:each>

    </g:if>

    </tbody>
</table>
