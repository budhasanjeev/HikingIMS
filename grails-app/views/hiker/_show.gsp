
<button type="button" class="btn btn-primary" id="add-button" onclick="changeHiker();"><i class="glyphicon glyphicon-plus">Hiker</i></button>
<hr>
<table class="table">
    <thead>
    <tr>
        <th>Full Name</th>
        <th>Mobile Number</th>
        <th>Phone Number</th>
        <th>Email Address</th>
        <th>Batch</th>
        <th>Roll Number</th>
        <th>Address</th>
        <th>Food Preference</th>
        <th>Actions</th>
    </tr>
    </thead>

    <tbody>
    <g:if test="${hiker}">

        <g:each in="${hiker}" var="hikerList">
            <tr>
                <td>${hikerList.firstName}${hikerList.middleName}${hikerList.lastName}</td>
                <td>${hikerList.mobileNumber}</td>
                <td>${hikerList.phoneNumber}</td>
                <td>${hikerList.emailAddress}</td>
                <td>${hikerList.batch}</td>
                <td>${hikerList.rollNumber}</td>
                <td>${hikerList.address}</td>
                <td>${hikerList.foodPreferences}</td>
                <td>
                    <button onclick="editHiker(${hikerList?.id})"><i class="glyphicon glyphicon-edit"></i></button>
                    <button onclick="deleteHiker(${hikerList?.id})"><i class="glyphicon glyphicon-minus-sign"></i></button>
                    <button><i class="glyphicon glyphicon-eye-open"></i></button>
                </td>
            </tr>
        </g:each>
    </g:if>
    </tbody>
</table>