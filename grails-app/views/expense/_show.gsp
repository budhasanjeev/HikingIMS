<%@ page import="hims.Hike" %>
<button type="button" class="btn btn-primary" onclick="changeExpense();"><i class="glyphicon glyphicon-plus">Expense</i></button>
<hr>
<table id="expense-table" class="display" width="100%" cellspacing="0">
    <thead>
    <tr>
        <th>Hike</th>
        <th>Provided Fund</th>
        <th>Breakfast</th>
        <th>Snacks</th>
        <th>Dinner</th>
        <th>Transportation</th>

        <th>Actions</th>
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

                <td>
                    %{--<button class="btn btn-success" onclick="editExpense(${e.id})"><i class=" glyphicon glyphicon-edit"></i></button>--}%
                    <button class="btn btn-danger" onclick="deleteExpense(${e.id})"><i class="glyphicon glyphicon-minus-sign"></i></button>
                    <g:link controller="expense" action="downloadExpense" id="${e.id}"><button class="btn btn-info"><i class="glyphicon glyphicon-download"></i></button></g:link>
                </td>
            </tr>
        </g:each>

    </g:if>

    </tbody>
</table>
