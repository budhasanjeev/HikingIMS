<html>
<head>
    <title></title>
</head>

<body>
<table width="100%" cellspacing="0">
    <thead>
    <tr>
        <th>Hike</th>
        <th>Provided Fund</th>
        <th>Breakfast</th>
        <th>Snacks</th>
        <th>Dinner</th>
        <th>Transportation</th>

        %{--<th>Actions</th>--}%
    </tr>
    </thead>

    <tbody>
    <g:if test="${expense}">

        <g:each in="${expense}" var="e">
            <tr>
                <td>${hims.Hike.findById(e.hikeId).title}</td>
                <td>${e.providedBudget}</td>
                <td>${e.breakfast}</td>
                <td>${e.snacks}</td>
                <td>${e.dinner}</td>
                <td>${e.transportation}</td>
            </tr>
        </g:each>

    </g:if>

    </tbody>
</table>

</body>
</html>