<p>
    <g:if test="${hike}">
        <table class="table">
            <tr>
                <h1>${hike?.title}</h1>
            </tr>
            <tr>
                <td>
                    Date
                </td>
                <td>
                    ${hike?.hikingDate}
                </td>
            </tr>
            <tr>
                <td>
                    Difficulty
                </td>
                <td>
                    ${hike?.hikingType}
                </td>
            </tr>
            <tr>
                <td>
                    Hiking Duration
                </td>
                <td>
                    ${hike?.startTime} - ${hike?.finishTime}
                </td>
            </tr>
        </table>

        <g:if test="${hikerInfo?.isInHiker}">
            <input type="button" class="btn btn-warning" id="two" onclick="sendName();" value="Button" style="background-color:darkblue" disabled="true">
        </g:if>
        <g:else>
            <input type="button" class="btn btn-warning" id="two" onclick="sendName();" value="Button">
        </g:else>
        <br>
        <div id="msg">

        </div>
    </g:if>
    <g:else>
        No Hike
    </g:else>
</p>