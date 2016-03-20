

<div class="modal-dialog">

    <div class="modal-content">

        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">New Hiker</h4>
        </div>
        <div class="modal-body">
            <g:form role="form" name="createHikerForm" class="form-horizontal" id="createHikerForm">
                <input type="hidden" name="id" id="hiker_id">
                <div class="form-group">
                    <label for="firstName" class="col-sm-4 control-label" >First Name</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="firstName" name="firstName" placeholder="Example : Sanjeev">
                    </div>
                </div>

                <div class="form-group">
                    <label for="middleName" class="col-sm-4 control-label" >Middle Name</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="middleName" name="middleName" placeholder="Example : ">
                    </div>
                </div>

                <div class="form-group">
                    <label for="lastName" class="col-sm-4 control-label" >Last Name</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Example : Budha">
                    </div>
                </div>

                <div class="form-group">
                    <label for="mobileNumber" class="col-sm-4 control-label" >Mobile Number</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="mobileNumber" name="mobileNumber" placeholder="Example : 9843723195">
                    </div>
                </div>

                <div class="form-group">
                    <label for="phoneNumber" class="col-sm-4 control-label" >Phone Number</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="phoneNumber" name="phoneNumber" placeholder="Example : 083-690162">
                    </div>
                </div>

                <div class="form-group">
                    <label for="emailAddress" class="col-sm-4 control-label" >Email Address</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="emailAddress" name="emailAddress" placeholder="Example : sanjeevbudha@gmail.com">
                    </div>
                </div>

                <div class="form-group">
                    <label for="batch" class="col-sm-4 control-label" >Batch</label>
                    <div class="col-sm-8">
                        <select class="form-control" id="batch" name="batch">
                           <option>---Select Batch---</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label for="rollNumber" class="col-sm-4 control-label" >Roll Number</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="rollNumber" name="rollNumber" placeholder="Example : 220">
                    </div>
                </div>

                <div class="form-group">
                    <label for="address" class="col-sm-4 control-label" >Address</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="address" name="address" placeholder="Example : Sifal, Kathmandu">
                    </div>
                </div>


                <div class="form-group">
                    <label for="foodPreference" class="col-sm-4 control-label" >Food Preference</label>
                    <div class="col-sm-8">
                        <select class="form-control" id="foodPreference" name="foodPreferences">
                            <option value="Vegetarian">Vegetarian</option>
                            <option value="Non-Vegetarian">Non-Vegetarian</option>
                        </select>
                    </div>
                </div>

            </g:form>
        </div>
        <div class="modal-footer">
            <button class="btn btn-primary" type="submit" id="saveHiker" onclick="return createHiker();">Save</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
        </div>

    </div>

</div>