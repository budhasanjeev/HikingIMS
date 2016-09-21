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

        <button type="submit" class="btn btn-warning" id="two">Button2</button>
    </g:if>
    <g:else>
        No Hike
    </g:else>
</p>