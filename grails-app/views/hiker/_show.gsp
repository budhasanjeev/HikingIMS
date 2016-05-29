
<button type="button" class="btn btn-primary" id="add-button" onclick="changeHiker();"><i class="glyphicon glyphicon-plus">Hiker</i></button>
<hr>
<table class="table" id="hiker-table">
    <thead>
    <tr>
        <th>Full Name</th>
        <th>Mobile Number</th>
        <th>Phone Number</th>
        <th>Email Address</th>
        <th>Batch</th>
        %{--<th>Roll Number</th>--}%
        <th>Address</th>
        <th>Food Preference</th>
        <th>Actions</th>
    </tr>
    </thead>

    <tbody>
    <g:if test="${hiker}">

        <g:each in="${hiker}" var="h">
            <tr>
                <td>${h.firstName +" "}${h.middleName}${" "+h.lastName}</td>
                <td>${h.mobileNumber}</td>
                <td>${h.phoneNumber}</td>
                <td>${h.emailAddress}</td>
                <td>${h.batch}</td>
                %{--<td>${hikerList.rollNumber}</td>--}%
                <td>${h.address}</td>
                <td>${h.foodPreferences}</td>
                <td>
                    <button class="btn btn-success" onclick="editHiker(${h?.id})"><i class="glyphicon glyphicon-edit"></i></button>
                    <button class="btn btn-danger" onclick="deleteHiker(${h?.id})"><i class="glyphicon glyphicon-minus-sign"></i></button>
                    <button class="btn btn-info" onclick="additionalInfo(${h?.id});"><i class="glyphicon glyphicon-info-sign"></i></button>
                </td>
            </tr>
        </g:each>
    </g:if>
    </tbody>
</table>