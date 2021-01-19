$(document).ready(function() {

    // ################################################################
    // FUNCTION DECLARATIONS
    // ################################################################

    // jquery css for new fields
    // added new fields jan 19 2021
    $("#ndph_statetextonly").parent().parent().attr("colspan","2");
    $("#ndph_statetextonly").parent().css("width","100%");
    $("#ndph_citytextonly").parent().parent().attr("colspan","2");
    $("#ndph_citytextonly").parent().css("width","100%");
    $("#ndph_statebusinesstextonly").parent().parent().attr("colspan","2");
    $("#ndph_statebusinesstextonly").parent().css("width","100%");
    $("#ndph_citybusinesstextonly").parent().parent().attr("colspan","2");
    $("#ndph_citybusinesstextonly").parent().css("width","100%");
    // end of new fields
    $("#address1_postalcode").parent().parent().attr("colspan","2");
    $("#address1_postalcode").parent().css("width","100%");
    $("#ndph_mequestion14").parent().parent().attr("colspan","2");
    $("#ndph_mequestion14").parent().css("width","100%");

    // Update School based on Program; execute only after OData query returns "programs" variable
    function updateSchool() {
        var school = $("#ndph_school");
        var schoolName = $("#ndph_school_name");
        var schoolEntity = $("#ndph_school_entityname");
        var programID = $("#ndph_program");

        // Get current program based on programID
        var currentProgram = {};
        if (programID.val()) {
            // Search in "programs" array for corresponding program element
            currentProgram = programs.find(
                function(program) {
                    return program.ndph_programid == programID.val();
                }
            );
            // Set School
            school.val(currentProgram.ndph_school.Id);
            schoolName.val(currentProgram.ndph_school.Name);
            schoolEntity.val("ndph_school");
        }
        else {      // Triggers if a program has no school assigned or if corresponding program field is empty
            school.val("");
            schoolName.val("");
            schoolEntity.val("");
        }
    }

     // Adjust Total Work Experience
    $("[data-name='total_work_experience_section']").prev().css({  "color" : "black", "text-transform" : "capitalize", "font-size" : "15px", "font-weight" : "500", "font-family" : "Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif", "margin-left" : "17px" });
    
    function toggleBusinessIsHomeAddress() {
        var businessIsHome = $("#ndph_businessaddressishomeaddress").prop("checked");
        
        if (businessIsHome) {
            // Hide Business Address section
            $(".section[data-name='business_address']").closest("fieldset").hide();
        }
        else {
            // Show Business Address section
            $(".section[data-name='business_address']").closest("fieldset").show();
        }
    }

    // Toggle Home State based on whether Home Country has a value
    function toggleStateHome() {
        var countryHome = $("#ndph_country").val();
        var checkedStateOtherHome = $("#ndph_addressnotshownonthelist");
        var checkedStateOtherHomeField = checkedStateOtherHome.closest("td");
        var stateHome = $("#ndph_state");
        var stateHomeName = $("#ndph_state_name");
        var stateHomeEntity = $("#ndph_state_entityname");
        var stateHomeField = $("#ndph_state").parent().parent().parent();
        var stateOtherHome = $("#address1_stateorprovince");
        var stateOtherHomeField = $("#address1_stateorprovince").parent().parent();
        var checkedCityOtherHome = $("#ndph_addressnotshownonlist_city");
        var checkedCityOtherHomeField = checkedCityOtherHome.closest("td");
        var cityHome = $("#ndph_city");
        var cityHomeName = $("#ndph_city_name");
        var cityHomeEntity = $("#ndph_city_entityname");
        var cityHomeField = $("#ndph_city").parent().parent().parent();
        var cityOtherHome = $("#address1_city");
        var cityOtherHomeField = $("#address1_city").parent().parent();

        // Clear State
        stateHome.val("");
        stateHomeName.val("");
        stateHomeEntity.val("");
        // Clear State (Other)
        stateOtherHome.val("");
        // Untick "Others" checkbox
        checkedStateOtherHome.prop("checked", false);
        // Update (Other) visibility
        stateOtherHomeField.hide();
        stateHomeField.show();

        // Clear City
        cityHome.val("");
        cityHomeName.val("");
        cityHomeEntity.val("");
        // Clear City (Other)
        cityOtherHome.val("");
        // Untick "Others" checkbox
        checkedCityOtherHome.prop("checked", false);
        // Update (Other) visibility
        cityOtherHomeField.hide();
        cityHomeField.show();
            
        // Disable City
        cityHome.prop("disabled", true);
        cityHome.parent().find(".input-group-btn").hide();
        cityHome.parent().css("display", "block");
        // Border radius
        $("#ndph_city_name").css("border-bottom-right-radius","5px");
        $("#ndph_city_name").css("border-top-right-radius","5px");
        // Disable City (Other)
        cityOtherHome.prop("disabled", true);
        // Hide "Others" checkbox
        checkedCityOtherHomeField.hide();

        if (countryHome) {
            // Enable State
            stateHome.prop("disabled", false);
            stateHome.parent().find(".input-group-btn").show();
            stateHome.parent().css("display", "table");
            stateHome.parent().css("width", "100%");
            // Border radius
            $("#ndph_state_name").css("border-bottom-right-radius","0px");
            $("#ndph_state_name").css("border-top-right-radius","0px");
            // Enable State (Other)
            stateOtherHome.prop("disabled", false);
            // Enable "Other" checkbox
            checkedStateOtherHomeField.show();
        }
        else {
            // Disable State
            stateHome.prop("disabled", true);
            stateHome.parent().find(".input-group-btn").hide();
            stateHome.parent().css("display", "block");
            // Border radius
            $("#ndph_state_name").css("border-bottom-right-radius","5px");
            $("#ndph_state_name").css("border-top-right-radius","5px");
            // Disable State (Other)
            stateOtherHome.prop("disabled", true);
            // Hide "Others" checkbox
            checkedStateOtherHomeField.hide();
            // Update (Other) visibility 
            stateOtherHomeField.hide();
            stateHomeField.show();
        }
    }
    // Toggle Home City based on whether Home State has a value
    function toggleCityHome() {
        var stateHome = $("#ndph_state").val();
        var stateOtherHome = $("#address1_stateorprovince").val();
        var checkedStateOtherHome = $("#ndph_addressnotshownonthelist");
        var checkedCityOtherHome = $("#ndph_addressnotshownonlist_city");
        var checkedCityOtherHomeField = checkedCityOtherHome.closest("td");
        var cityHome = $("#ndph_city");
        var cityHomeName = $("#ndph_city_name");
        var cityHomeEntity = $("#ndph_city_entityname");
        var cityHomeField = $("#ndph_city").parent().parent().parent();
        var cityOtherHome = $("#address1_city");
        var cityOtherHomeField = $("#address1_city").parent().parent();

        // Clear City
        cityHome.val("");
        cityHomeName.val("");
        cityHomeEntity.val("");
        // Clear City (Other)
        cityOtherHome.val("");
        // Untick City "Others" checkbox if State "Others" is not ticked
        if (!checkedStateOtherHome.prop("checked")) {
            checkedCityOtherHome.prop("checked", false);
            // Update (Other) visibility 
            cityOtherHomeField.hide();
            cityHomeField.show();
        }

        if (stateHome || stateOtherHome) {
            // Enable City
            cityHome.prop("disabled", false);
            cityHome.parent().find(".input-group-btn").show();
            cityHome.parent().css("display", "table");
            cityHome.parent().css("width", "100%");
            // Border radius
            $("#ndph_city_name").css("border-bottom-right-radius","0px");
            $("#ndph_city_name").css("border-top-right-radius","0px");
            // Enable City (Other)
            cityOtherHome.prop("disabled", false);
            if (stateHome && !checkedStateOtherHome.prop("checked")) {
                // Enable "Others" checkbox only if State is populated and not locked to "Other"
                checkedCityOtherHomeField.show();
            }
        }
        else {
            // Disable City
            cityHome.prop("disabled", true);
            cityHome.parent().find(".input-group-btn").hide();
            cityHome.parent().css("display", "block");
            // Border radius
            $("#ndph_city_name").css("border-bottom-right-radius","5px");
            $("#ndph_city_name").css("border-top-right-radius","5px");
            // Disable City (Other)
            cityOtherHome.prop("disabled", true);
            // Hide "Others" checkbox
            checkedCityOtherHomeField.hide();
            if (!checkedStateOtherHome.prop("checked")) {
                // Update (Other) visibility 
                cityOtherHomeField.hide();
                cityHomeField.show();
            }
            else {
                // Update (Other) visibility 
                cityOtherHomeField.show();
                cityHomeField.hide();
            }
        }
    }
    // Hide/show Home State (Other) based on "Others" checkbox
    function toggleStateOtherHome() {
        var checkedStateOtherHome = $("#ndph_addressnotshownonthelist");
        var stateHome = $("#ndph_state");
        var stateHomeName = $("#ndph_state_name");
        var stateHomeEntity = $("#ndph_state_entityname");
        var stateHomeField = stateHome.parent().parent().parent();
        var stateOtherHome = $("#address1_stateorprovince");
        var stateOtherHomeField = stateOtherHome.parent().parent();

        var cityHome = $("#ndph_city");
        var cityOtherHome = $("#address1_city");
        var checkedCityOtherHome = $("#ndph_addressnotshownonlist_city");
        var checkedCityOtherHomeField = checkedCityOtherHome.closest("td");

        if (checkedStateOtherHome.prop("checked")) {
            stateHome.val("");
            stateHomeName.val("");
            stateHomeEntity.val("");
            stateHomeField.hide();
            stateOtherHomeField.show();
            // Lock City to Other
            checkedCityOtherHomeField.hide();
            checkedCityOtherHome.prop("checked", true);
            // Disable City (Other) until State is filled in
            cityOtherHome.prop("disabled", true);
        }
        else {
            stateOtherHome.val("");
            stateOtherHomeField.hide();
            stateHomeField.show();
            // Reset "Other" checkbox for City
            checkedCityOtherHome.prop("checked", false);
            // Disable City until State is filled in
            cityHome.prop("disabled", true);
            cityHome.parent().find(".input-group-btn").hide();
            cityHome.parent().css("display", "block");
            // Border radius
            $("#ndph_city_name").css("border-bottom-right-radius","5px");
            $("#ndph_city_name").css("border-top-right-radius","5px");
        }
        toggleCityOtherHome();
    }
    // Hide/show Home City (Other) based on "Others" checkbox
    function toggleCityOtherHome() {
        var checkedCityOtherHome = $("#ndph_addressnotshownonlist_city");
        var cityHome = $("#ndph_city");
        var cityHomeName = $("#ndph_city_name");
        var cityHomeEntity = $("#ndph_city_entityname");
        var cityHomeField = cityHome.parent().parent().parent();
        var cityOtherHome = $("#address1_city");
        var cityOtherHomeField = cityOtherHome.parent().parent();

        if (checkedCityOtherHome.prop("checked")) {
            cityHome.val("");
            cityHomeName.val("");
            cityHomeEntity.val("");
            cityHomeField.hide();
            cityOtherHomeField.show();
        }
        else {
            cityOtherHome.val("");
            cityOtherHomeField.hide();
            cityHomeField.show();
        }
    }
    function initializeHomeAddress() {
        var countryHome = $("#ndph_country").val();
    
        var checkedStateOtherHome = $("#ndph_addressnotshownonthelist");
        var checkedStateOtherHomeField = checkedStateOtherHome.closest("td");
        var stateHome = $("#ndph_state");
        var stateHomeField = stateHome.parent().parent().parent();
        var stateOtherHome = $("#address1_stateorprovince");
        var stateOtherHomeField = stateOtherHome.parent().parent();
    
        var checkedCityOtherHome = $("#ndph_addressnotshownonlist_city");
        var checkedCityOtherHomeField = checkedCityOtherHome.closest("td");
        var cityHome = $("#ndph_city");
        var cityHomeField = cityHome.parent().parent().parent();
        var cityOtherHome = $("#address1_city");
        var cityOtherHomeField = cityOtherHome.parent().parent();
    
        if (!countryHome) {
            // Disable State
            stateHome.prop("disabled", true);
            stateHome.parent().find(".input-group-btn").hide();
            stateHome.parent().css("display", "block");
            // Border radius
            $("#ndph_state_name").css("border-bottom-right-radius","5px");
            $("#ndph_state_name").css("border-top-right-radius","5px");
            // Disable and hide State (Other)
            stateOtherHome.prop("disabled", true);
            stateOtherHomeField.hide();
            // Reset and disable "Other" checkbox for State
            checkedStateOtherHome.prop("checked", false);
            checkedStateOtherHomeField.hide();
            // Disable City
            cityHome.prop("disabled", true);
            cityHome.parent().find(".input-group-btn").hide();
            cityHome.parent().css("display", "block");
            // Border radius
            $("#ndph_city_name").css("border-bottom-right-radius","5px");
            $("#ndph_city_name").css("border-top-right-radius","5px");
            // Disable and hide City (Other)
            cityOtherHome.prop("disabled", true);
            cityOtherHomeField.hide();
            // Reset and disable "Other" checkbox for City 
            checkedCityOtherHome.prop("checked", false);
            checkedCityOtherHomeField.hide();
        }
        else if (checkedStateOtherHome.prop("checked")) {
            // Hide State
            stateHomeField.hide();
            // Hide City
            cityHomeField.hide();
            // Reset and disable "Other" checkbox for City 
            checkedCityOtherHome.prop("checked", true);
            checkedCityOtherHomeField.hide();
            if (!stateHome) {
                // Disable City
                cityHome.prop("disabled", true);
                cityHome.parent().find(".input-group-btn").hide();
                cityHome.parent().css("display", "block");
                // Border radius
                $("#ndph_city_name").css("border-bottom-right-radius","5px");
                $("#ndph_city_name").css("border-top-right-radius","5px");
            }
            if (!stateOtherHome) {
                // Disable City (Other)
                cityOtherHome.prop("disabled", true);
            }
        }
        else if (!stateHome) {
            // Hide State (Other)
            stateOtherHomeField.hide();
            // Disable City
            cityHome.prop("disabled", true);
            cityHome.parent().find(".input-group-btn").hide();
            cityHome.parent().css("display", "block");
            // Border radius
            $("#ndph_city_name").css("border-bottom-right-radius","5px");
            $("#ndph_city_name").css("border-top-right-radius","5px");
            // Disable and hide City (Other)
            cityOtherHome.prop("disabled", true);
            cityOtherHomeField.hide();
            // Untick and disable "Others"
            checkedCityOtherHome.prop("checked", false);
            checkedCityOtherHomeField.hide();
        }
        else if (checkedCityOtherHome.prop("checked")) {
            // Hide State (Other)
            stateOtherHomeField.hide();
            // Hide City
            cityHomeField.hide();
        }
        else {
            // Hide State (Other)
            stateOtherHomeField.hide();
            // Hide City (Other)
            cityOtherHomeField.hide();
        }
    }
    
    // Toggle Business State based on whether Business Country has a value
    function toggleStateBusiness() {
        var countryBusiness = $("#ndph_mequestion11").val();
        var checkedStateOtherBusiness = $("#ndph_addressnotshownonthelistbusiness");
        var checkedStateOtherBusinessField = checkedStateOtherBusiness.closest("td");
        var stateBusiness = $("#ndph_mequestion12");
        var stateBusinessName = $("#ndph_mequestion12_name");
        var stateBusinessEntity = $("#ndph_mequestion12_entityname");
        var stateBusinessField = stateBusiness.parent().parent().parent();
        var stateOtherBusiness = $("#ndph_statebusinessothers");
        var stateOtherBusinessField = stateOtherBusiness.parent().parent();
        var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");
        var checkedCityOtherBusinessField = checkedCityOtherBusiness.closest("td");
        var cityBusiness = $("#ndph_mequestion13");
        var cityBusinessName = $("#ndph_mequestion13_name");
        var cityBusinessEntity = $("#ndph_mequestion13_entityname");
        var cityBusinessField = cityBusiness.parent().parent().parent();
        var cityOtherBusiness = $("#ndph_citybusinessothers");
        var cityOtherBusinessField = cityOtherBusiness.parent().parent();

        // Clear State
        stateBusiness.val("");
        stateBusinessName.val("");
        stateBusinessEntity.val("");
        // Clear State (Other)
        stateOtherBusiness.val("");
        // Untick "Others" checkbox
        checkedStateOtherBusiness.prop("checked", false);
        // Update (Other) visibility
        stateOtherBusinessField.hide();
        stateBusinessField.show();

        // Clear City
        cityBusiness.val("");
        cityBusinessName.val("");
        cityBusinessEntity.val("");
        // Clear City (Other)
        cityOtherBusiness.val("");
        // Untick "Others" checkbox
        checkedCityOtherBusiness.prop("checked", false);
        // Update (Other) visibility
        cityOtherBusinessField.hide();
        cityBusinessField.show();
        
        // Disable City
        cityBusiness.prop("disabled", true);
        cityBusiness.parent().find(".input-group-btn").hide();
        cityBusiness.parent().css("display", "block");
        // Border radius
        $("#ndph_mequestion13_name").css("border-bottom-right-radius","5px");
        $("#ndph_mequestion13_name").css("border-top-right-radius","5px");
        // Disable City (Other)
        cityOtherBusiness.prop("disabled", true);
        // Hide "Others" checkbox
        checkedCityOtherBusinessField.hide();

        if (countryBusiness) {
            // Enable State
            stateBusiness.prop("disabled", false);
            stateBusiness.parent().find(".input-group-btn").show();
            stateBusiness.parent().css("display", "table");
            stateBusiness.parent().css("width", "100%");
            // Border radius
            $("#ndph_mequestion12_name").css("border-bottom-right-radius","0px");
            $("#ndph_mequestion12_name").css("border-top-right-radius","0px");
            // Enable State (Other)
            stateOtherBusiness.prop("disabled", false);
            // Enable "Other" checkbox
            checkedStateOtherBusinessField.show();
        }
        else {
            // Disable State
            stateBusiness.prop("disabled", true);
            stateBusiness.parent().find(".input-group-btn").hide();
            stateBusiness.parent().css("display", "block");
            // Border radius
            $("#ndph_mequestion12_name").css("border-bottom-right-radius","5px");
            $("#ndph_mequestion12_name").css("border-top-right-radius","5px");
            // Disable State (Other)
            stateOtherBusiness.prop("disabled", true);
            // Hide "Others" checkbox
            checkedStateOtherBusinessField.hide();
            // Update (Other) visibility 
            stateOtherBusinessField.hide();
            stateBusinessField.show();
        }
    }
    // Toggle Business City based on whether Business State has a value
    function toggleCityBusiness() {
        var stateBusiness = $("#ndph_mequestion12").val();
        var stateOtherBusiness = $("#ndph_statebusinessothers").val();
        var checkedStateOtherBusiness = $("#ndph_addressnotshownonthelistbusiness");
        var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");
        var checkedCityOtherBusinessField = checkedCityOtherBusiness.closest("td");
        var cityBusiness = $("#ndph_mequestion13");
        var cityBusinessName = $("#ndph_mequestion13_name");
        var cityBusinessEntity = $("#ndph_mequestion13_entityname");
        var cityBusinessField = cityBusiness.parent().parent().parent();
        var cityOtherBusiness = $("#ndph_citybusinessothers");
        var cityOtherBusinessField = cityOtherBusiness.parent().parent();

        // Clear City
        cityBusiness.val("");
        cityBusinessName.val("");
        cityBusinessEntity.val("");
        // Clear City (Other)
        cityOtherBusiness.val("");
        // Untick City "Others" checkbox if State "Others" is not ticked
        if (!checkedStateOtherBusiness.prop("checked")) {
            checkedCityOtherBusiness.prop("checked", false);
            // Update (Other) visibility 
            cityOtherBusinessField.hide();
            cityBusinessField.show();
        }

        if (stateBusiness || stateOtherBusiness) {
            // Enable City
            cityBusiness.prop("disabled", false);
            cityBusiness.parent().find(".input-group-btn").show();
            cityBusiness.parent().css("display", "table");
            cityBusiness.parent().css("width", "100%");
            // Border radius
            $("#ndph_mequestion13_name").css("border-bottom-right-radius","0px");
            $("#ndph_mequestion13_name").css("border-top-right-radius","0px");
            // Enable City (Other)
            cityOtherBusiness.prop("disabled", false);
            if (stateBusiness && !checkedStateOtherBusiness.prop("checked")) {
                // Enable "Others" checkbox only if State is populated and not locked to "Other"
                checkedCityOtherBusinessField.show();
            }
        }
        else {
            // Disable City
            cityBusiness.prop("disabled", true);
            cityBusiness.parent().find(".input-group-btn").hide();
            cityBusiness.parent().css("display", "block");
            // Border radius
            $("#ndph_mequestion13_name").css("border-bottom-right-radius","5px");
            $("#ndph_mequestion13_name").css("border-top-right-radius","5px");
            // Disable City (Other)
            cityOtherBusiness.prop("disabled", true);
            // Hide "Others" checkbox
            checkedCityOtherBusinessField.hide();
            if (!checkedStateOtherBusiness.prop("checked")) {
                // Update (Other) visibility 
                cityOtherBusinessField.hide();
                cityBusinessField.show();
            }
            else {
                // Update (Other) visibility 
                cityOtherBusinessField.show();
                cityBusinessField.hide();
            }
        }
    }
    // Hide/show Business State (Other) based on "Others" checkbox
    function toggleStateOtherBusiness() {
        var checkedStateOtherBusiness = $("#ndph_addressnotshownonthelistbusiness");
        var stateBusiness = $("#ndph_mequestion12");
        var stateBusinessName = $("#ndph_mequestion12_name");
        var stateBusinessEntity = $("#ndph_mequestion12_entityname");
        var stateBusinessField = stateBusiness.parent().parent().parent();
        var stateOtherBusiness = $("#ndph_statebusinessothers");
        var stateOtherBusinessField = stateOtherBusiness.parent().parent()
        
        var cityBusiness = $("#ndph_mequestion13");
        var cityOtherBusiness = $("#ndph_citybusinessothers");
        var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");
        var checkedCityOtherBusinessField = checkedCityOtherBusiness.closest("td");

        if (checkedStateOtherBusiness.prop("checked")) {
            stateBusiness.val("");
            stateBusinessName.val("");
            stateBusinessEntity.val("");
            stateBusinessField.hide();
            stateOtherBusinessField.show();
            // Lock City to Other
            checkedCityOtherBusinessField.hide();
            checkedCityOtherBusiness.prop("checked", true);
            // Disable City (Other) until State is filled in
            cityOtherBusiness.prop("disabled", true);
        }
        else {
            stateOtherBusiness.val("");
            stateOtherBusinessField.hide();
            stateBusinessField.show();
            // Reset "Other" checkbox for City
            checkedCityOtherBusiness.prop("checked", false);
            // Disable City until State is filled in
            cityBusiness.prop("disabled", true);
            cityBusiness.parent().find(".input-group-btn").hide();
            cityBusiness.parent().css("display", "block");
            // Border radius
            $("#ndph_mequestion13_name").css("border-bottom-right-radius","5px");
            $("#ndph_mequestion13_name").css("border-top-right-radius","5px");
        }
        toggleCityOtherBusiness();
    }
    // Hide/show Business State (Other) based on "Others" checkbox
    function toggleCityOtherBusiness() {
        var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");
        var cityBusiness = $("#ndph_mequestion13");
        var cityBusinessName = $("#ndph_mequestion13_name");
        var cityBusinessEntity = $("#ndph_mequestion13_entityname");
        var cityBusinessField = cityBusiness.parent().parent().parent();
        var cityOtherBusiness = $("#ndph_citybusinessothers");
        var cityOtherBusinessField = cityOtherBusiness.parent().parent();

        if (checkedCityOtherBusiness.prop("checked")) {
            cityBusiness.val("");
            cityBusinessName.val("");
            cityBusinessEntity.val("");
            cityBusinessField.hide();
            cityOtherBusinessField.show();
        }
        else {
            cityOtherBusiness.val("");
            cityOtherBusinessField.hide();
            cityBusinessField.show();
        }
    }
    // Initialize Business Address
    function initializeBusinessAddress() {
        var businessIsHome = $("#ndph_businessaddressishomeaddress").prop("checked");
    
        var countryBusiness = $("#ndph_mequestion11").val();
    
        var checkedStateOtherBusiness = $("#ndph_addressnotshownonthelistbusiness");
        var checkedStateOtherBusinessField = checkedStateOtherBusiness.closest("td");
        var stateBusiness = $("#ndph_mequestion12");
        var stateBusinessField = stateBusiness.parent().parent().parent();
        var stateOtherBusiness = $("#ndph_statebusinessothers");
        var stateOtherBusinessField = stateOtherBusiness.parent().parent()
    
        var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");
        var checkedCityOtherBusinessField = checkedCityOtherBusiness.closest("td");
        var cityBusiness = $("#ndph_mequestion13");
        var cityBusinessField = cityBusiness.parent().parent().parent();
        var cityOtherBusiness = $("#ndph_citybusinessothers");
        var cityOtherBusinessField = cityOtherBusiness.parent().parent();
    
        if (businessIsHome) {
            $(".section[data-name='business_address']").closest("fieldset").hide();
        }
        else if (!countryBusiness) {
            // Disable State
            stateBusiness.prop("disabled", true);
            stateBusiness.parent().find(".input-group-btn").hide();
            stateBusiness.parent().css("display", "block");
            // Border radius
            $("#ndph_mequestion12_name").css("border-bottom-right-radius","5px");
            $("#ndph_mequestion12_name").css("border-top-right-radius","5px");
            // Disable and hide State (Other)
            stateOtherBusiness.prop("disabled", true);
            stateOtherBusinessField.hide();
            // Reset and disable "Other" checkbox for State
            checkedStateOtherBusiness.prop("checked", false);
            checkedStateOtherBusinessField.hide();
            // Disable City
            cityBusiness.prop("disabled", true);
            cityBusiness.parent().find(".input-group-btn").hide();
            cityBusiness.parent().css("display", "block");
            // Border radius
            $("#ndph_mequestion13_name").css("border-bottom-right-radius","5px");
            $("#ndph_mequestion13_name").css("border-top-right-radius","5px");
            // Disable and hide City (Other)
            cityOtherBusiness.prop("disabled", true);
            cityOtherBusinessField.hide();
            // Reset and disable "Other" checkbox for City 
            checkedCityOtherBusiness.prop("checked", false);
            checkedCityOtherBusinessField.hide();
        }
        else if (checkedStateOtherBusiness.prop("checked")) {
            // Hide State
            stateBusinessField.hide();
            // Hide City
            cityBusinessField.hide();
            // Reset and disable "Other" checkbox for City 
            checkedCityOtherBusiness.prop("checked", true);
            checkedCityOtherBusinessField.hide();
            if (!stateBusiness) {
                // Disable City
                cityBusiness.prop("disabled", true);
                cityBusiness.parent().find(".input-group-btn").hide();
                cityBusiness.parent().css("display", "block");
                // Border radius
                $("#ndph_mequestion13_name").css("border-bottom-right-radius","5px");
                $("#ndph_mequestion13_name").css("border-top-right-radius","5px");
            }
            if (!stateOtherBusiness) {
                // Disable City (Other)
                cityOtherBusiness.prop("disabled", true);
            }
        }
        else if (!stateBusiness) {
            // Hide State (Other)
            stateOtherBusinessField.hide();
            // Disable City
            cityBusiness.prop("disabled", true);
            cityBusiness.parent().find(".input-group-btn").hide();
            cityBusiness.parent().css("display", "block");
            // Border radius
            $("#ndph_mequestion13_name").css("border-bottom-right-radius","5px");
            $("#ndph_mequestion13_name").css("border-top-right-radius","5px");
            // Disable and hide City (Other)
            cityOtherBusiness.prop("disabled", true);
            cityOtherBusinessField.hide();
            // Untick and disable "Others"
            checkedCityOtherBusiness.prop("checked", false);
            checkedCityOtherBusinessField.hide();
        }
        else if (checkedCityOtherBusiness.prop("checked")) {
            // Hide State (Other)
            stateOtherBusinessField.hide();
            // Hide City
            cityBusinessField.hide();
        }
        else {
            // Hide State (Other)
            stateOtherBusinessField.hide();
            // Hide City (Other)
            cityOtherBusinessField.hide();
        }
    }
    function toggleJobFunctionOther() {
        if ($("#ndph_jobfunction").val() == "649840015") {
            $("#ndph_jobfunctionother").closest("td").show();
        }
        else {
            $("#ndph_jobfunctionother").closest("td").hide();
            $("#ndph_jobfunctionother").val("");
        }
    }
    function toggleIndustryOther() {
        if ($("#ndph_industry").val() == "20438f98-603f-ea11-a813-000d3a851ff7") {
            $("#ndph_industryname1").closest("td").show();
        }
        else {
            $("#ndph_industryname1").closest("td").hide();
            $("#ndph_industryname1").val("");
        }
    }


    // ################################################################
    // FUNCTIONS TO EXECUTE ON FIELD CHANGE:
    // ################################################################

    // Update School field;
    $("#ndph_program").change(updateSchool);
    $("#ndph_school").change(updateSchool);
    // Update Business Address section
    $("#ndph_businessaddressishomeaddress").change(toggleBusinessIsHomeAddress);    // Toggle Business Address
    // Update Home Address fields
    $("#ndph_country").change(toggleStateHome);
    $("#ndph_state").change(toggleCityHome);
    $("#address1_stateorprovince").change(toggleCityHome);
    $("#ndph_addressnotshownonthelist").change(toggleStateOtherHome);
    $("#ndph_addressnotshownonlist_city").change(toggleCityOtherHome);
    // Update Business Address fields
    $("#ndph_mequestion11").change(toggleStateBusiness);
    $("#ndph_mequestion12").change(toggleCityBusiness);
    $("#ndph_statebusinessothers").change(toggleCityBusiness);
    $("#ndph_addressnotshownonthelistbusiness").change(toggleStateOtherBusiness);
    $("#ndph_addressnotshownonlist_citybusiness").change(toggleCityOtherBusiness);
    // Update (Other) fields
    $("#ndph_jobfunction").change(toggleJobFunctionOther);
    $("#ndph_industry").change(toggleIndustryOther);

    // ################################################################
    // INITIALIZE FORM
    // ################################################################

    // *** DEFINE VALIDATORS ***

    // Validator definition
    if (typeof (Page_Validators) == 'undefined') return;
    // Date of birth validator: disallow future and current date
    var dateOfBirthValidator = document.createElement('span');
    dateOfBirthValidator.style.display = "none";
    dateOfBirthValidator.id = "ndph_dateofbirthValidator";
    dateOfBirthValidator.controltovalidate = "ndph_dateofbirth";
    dateOfBirthValidator.errormessage = "<a href='#ndph_dateofbirth_datepicker_description'>Date of Birth must be valid.</a>";
    dateOfBirthValidator.validationGroup = "";        // Set this if you have set ValidationGroup on the form
    dateOfBirthValidator.initialvalue = "";
    dateOfBirthValidator.evaluationfunction = function () {
        var currentDate = new Date();
        var dateOfBirth = $("#ndph_dateofbirth").val();
        if (dateOfBirth) {
            dateOfBirth = new Date(dateOfBirth);      // Convert to Date object if filled in
        }
        if (dateOfBirth < currentDate) {
            return true;
        }
        else {
            return false;
        }
    };
    
    // Company name validator: 
    var companyNameValidator = document.createElement('span');
    companyNameValidator.style.display = "none";
    companyNameValidator.id = "ndph_company_validator";
    companyNameValidator.controltovalidate = "ndph_company";
    companyNameValidator.errormessage = "<a href='#ndph_company'>Company Name is a required field.</a>";
    companyNameValidator.validationGroup = "";        // Set this if you have set ValidationGroup on the form
    companyNameValidator.initialvalue = "";
    companyNameValidator.evaluationfunction = function () 
    {
        var companyName = $("#ndph_company").val();
        if (companyName == null || companyName == "") 
        {
            return false;
        } 
        else 
        {
            return true;
        }
    };
    
    // Position title validator: 
    var positionTitleValidator = document.createElement('span');
    positionTitleValidator.style.display = "none";
    positionTitleValidator.id = "jobtitle_validator";
    positionTitleValidator.controltovalidate = "jobtitle";
    positionTitleValidator.errormessage = "<a href='#jobtitle'>Position Title is a required field.</a>";
    positionTitleValidator.validationGroup = "";        // Set this if you have set ValidationGroup on the form
    positionTitleValidator.initialvalue = "";
    positionTitleValidator.evaluationfunction = function () 
    {
        var positionTitle = $("#jobtitle").val();
        if (positionTitle == null || positionTitle == "") 
        {
            return false;
        } 
        else 
        {
            return true;
        }
    };
    
    // Job level validator: 
    var jobLevelValidator = document.createElement('span');
    jobLevelValidator.style.display = "none";
    jobLevelValidator.id = "ndph_joblevel_validator";
    jobLevelValidator.controltovalidate = "ndph_joblevel";
    jobLevelValidator.errormessage = "<a href='#ndph_joblevel'>Job Level is a required field.</a>";
    jobLevelValidator.validationGroup = "";        // Set this if you have set ValidationGroup on the form
    jobLevelValidator.initialvalue = "";
    jobLevelValidator.evaluationfunction = function () 
    {
        var jobLevel = $("#ndph_joblevel").val();
        if (jobLevel == null || jobLevel == "") 
        {
            return false;
        } 
        else 
        {
            return true;
        }
    };
    
    // Job Function validator: 
    var jobFunctionValidator = document.createElement('span');
    jobFunctionValidator.style.display = "none";
    jobFunctionValidator.id = "ndph_jobfunction_validator";
    jobFunctionValidator.controltovalidate = "ndph_jobfunction";
    jobFunctionValidator.errormessage = "<a href='#ndph_jobfunction'>Job Function is a required field.</a>";
    jobFunctionValidator.validationGroup = "";        // Set this if you have set ValidationGroup on the form
    jobFunctionValidator.initialvalue = "";
    jobFunctionValidator.evaluationfunction = function () 
    {
        var jobFunction = $("#ndph_jobfunction").val();
        if (jobFunction == null || jobFunction == "") 
        {
            return false;
        } 
        else 
        {
            return true;
        }
    };
    
    // Job Function (Other) validator: 
    var jobFunctionOtherValidator = document.createElement('span');
    jobFunctionOtherValidator.style.display = "none";
    jobFunctionOtherValidator.id = "ndph_jobfunctionother_validator";
    jobFunctionOtherValidator.controltovalidate = "ndph_jobfunctionother";
    jobFunctionOtherValidator.errormessage = "<a href='#ndph_jobfunctionother'>Job Function (Other) is a required field.</a>";
    jobFunctionOtherValidator.validationGroup = "";        // Set this if you have set ValidationGroup on the form
    jobFunctionOtherValidator.initialvalue = "";
    jobFunctionOtherValidator.evaluationfunction = function () 
    {
        var jobFunction = $("#ndph_jobfunction").val();
        var jobFunctionOther = $("#ndph_jobfunctionother").val();
        if (jobFunction != null && jobFunction == 649840015) //jobFunction == "649,840,015"
        {
            if (jobFunctionOther == null || jobFunctionOther == "")
            {
                return false;
            } 
            else 
            {
                return true;
            }
        } 
        else 
        {
            return true;
        }
    };
    
    // Industry Validator
    var industryValidator = document.createElement('span');
    industryValidator.style.display = "none";
    industryValidator.id = "ndph_industry_validator";
    industryValidator.controltovalidate = "ndph_industry";
    industryValidator.errormessage = "<a href='#ndph_industry'>Industry is a required field.";
    industryValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
    industryValidator.initialvalue = "";
    industryValidator.evaluationfunction = function () 
    {
        var industry = $("#ndph_industry").val();
        if (industry == null || industry == "") 
        {
            return false;
        } 
        else 
        {
            return true;
        }
    };
    
    // Job Function (Other) validator: 
    var industryOtherValidator = document.createElement('span');
    industryOtherValidator.style.display = "none";
    industryOtherValidator.id = "ndph_industryname1_validator";
    industryOtherValidator.controltovalidate = "ndph_industryname1";
    industryOtherValidator.errormessage = "<a href='#ndph_industryname1'>Industry (Other) is a required field.</a>";
    industryOtherValidator.validationGroup = "";        // Set this if you have set ValidationGroup on the form
    industryOtherValidator.initialvalue = "";
    industryOtherValidator.evaluationfunction = function () 
    {
        var industry = $("#ndph_industry").val();
        var industryOther = $("#ndph_industryname1").val();
        if (industry != null && industry == "20438f98-603f-ea11-a813-000d3a851ff7") 
        {
            if (industryOther == null || industryOther == "")
            {
                return false;
            } 
            else 
            {
                return true;
            }
        } 
        else 
        {
            return true;
        }
    };
    
    // Total Work Experience (YEARS) Validator
    var TWEyearsValidator = document.createElement('span');
    TWEyearsValidator.style.display = "none";
    TWEyearsValidator.id = "ndph_totalyearsofworkexperienceyears_validator";
    TWEyearsValidator.controltovalidate = "ndph_totalyearsofworkexperienceyears";
    TWEyearsValidator.errormessage = "<a href='#ndph_totalyearsofworkexperienceyears'>Total Work Experience: Years is a required field.";
    TWEyearsValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
    TWEyearsValidator.initialvalue = "";
    TWEyearsValidator.evaluationfunction = function () 
    {
        var TWEyears = $("#ndph_totalyearsofworkexperienceyears").val();
        if (TWEyears == null || TWEyears == "") 
        {
            return false;
        } 
        else 
        {
            return true;
        }
    };
    
    // Total Work Experience (MONTHS) Validator
    var TWEmonthsValidator = document.createElement('span');
    TWEmonthsValidator.style.display = "none";
    TWEmonthsValidator.id = "ndph_totalyearsofworkexperiencemonths_validator";
    TWEmonthsValidator.controltovalidate = "ndph_totalyearsofworkexperiencemonths";
    TWEmonthsValidator.errormessage = "<a href='#ndph_totalyearsofworkexperiencemonths'>Total Work Experience: Months is a required field.";
    TWEmonthsValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
    TWEmonthsValidator.initialvalue = "";
    TWEmonthsValidator.evaluationfunction = function () 
    {
        var TWEmonths = $("#ndph_totalyearsofworkexperiencemonths").val();
        if (TWEmonths == null || TWEmonths == "") 
        {
            return false;
        } 
        else 
        {
            return true;
        }
    };

    // Add the new validators to the page validators array:
    Page_Validators.push(dateOfBirthValidator);
    Page_Validators.push(companyNameValidator);
    Page_Validators.push(positionTitleValidator);
    Page_Validators.push(jobLevelValidator);
    Page_Validators.push(jobFunctionValidator);
    Page_Validators.push(jobFunctionOtherValidator);
    Page_Validators.push(industryValidator);
    Page_Validators.push(industryOtherValidator);
    Page_Validators.push(TWEyearsValidator);
    Page_Validators.push(TWEmonthsValidator);
    
    // Add Asterisks for required fields made through validators
    function addAsterisk()
    {
        
        //var companyNameLabel = $("#ndph_company_label");
        var companyNameLabel = $("#MaximumLengthValidatorndph_company");
        //var positionTitleLabel = $("#jobtitle_label");
        var positionTitleLabel = $("#MaximumLengthValidatorjobtitle");
        
        var jobLevelLabel = $("#ndph_joblevel_label");
        var jobFunctionLabel = $("#ndph_jobfunction_label");
        var jobFunctionOtherLabel = $("#ndph_jobfunctionother_label");
        var industryLabel = $("#ndph_industry_label");
        var industryOtherLabel = $("#ndph_industryname1_label");
        //var TWEyearsLabel = $("#ndph_totalyearsofworkexperienceyears_label");
        var TWEyearsLabel = $("#IntegerValidatorndph_totalyearsofworkexperienceyears");
        //var TWEmonthsLabel = $("#ndph_totalyearsofworkexperiencemonths_label");
        var TWEmonthsLabel = $("#IntegerValidatorndph_totalyearsofworkexperiencemonths");

        companyNameLabel.before('<span id="requireCompany" style="color: maroon;">*</span>');
        positionTitleLabel.before('<span id="requirePositionTitle" style="color: maroon;">&nbsp;*</span>');
        jobLevelLabel.after('<span id="requireJobLevel" style="color: maroon;">&nbsp;*</span>');
        jobFunctionLabel.after('<span id="requireJobFunction" style="color: maroon;">&nbsp;*</span>');
        jobFunctionOtherLabel.after('<span id="requireJobFunctionOther" style="color: maroon;">&nbsp;*</span>');
        industryLabel.after('<span id="requireIndustry" style="color: maroon;">&nbsp;*</span>');
        industryOtherLabel.after('<span id="requireIndustryOther" style="color: maroon;">&nbsp;*</span>');
        TWEyearsLabel.before('<span id="requireTWEyears" style="color: maroon;">&nbsp;*</span>');
        TWEmonthsLabel.before('<span id="requireTWEmonths" style="color: maroon;">&nbsp;*</span>');
    }
    
    // Add Asterisk
    addAsterisk();

    // Wire-up the click event handler of the validation summary link
    $("a[href='#ndph_dateofbirth']").on("click", function () { scrollToAndFocus('ndph_dateofbirth'); });

    // *** END OF VALIDATOR CODE***


    // Get the query string from the URL
    var queryString = window.location.search;
    queryString = queryString.substring(1);

    // Parse the query string and assign parameters to "params" object
    var queries = queryString.split("&");
    var params = {};
    var query;
    for (var i = 0; i < queries.length; ++i) {
        query = queries[i].split("=");
        params[decodeURIComponent(query[0])] = decodeURIComponent(query[1]);
    }

    // Query program information from OData
    var programs = [];
    var currentURL = "/_odata/Programs";
    while(currentURL) {
        $.ajax({
            type: "GET",
            dataType: "json",
            async: false,
            contentType: "application/json; charset=utf-8",
            url: currentURL,
            beforeSend: function(XMLHttpRequest) {
                XMLHttpRequest.setRequestHeader("Accept", "application/json");
            },
            success: function(data, textStatus, XHR) {
                programs = programs.concat(data.value);
                currentURL = data["odata.nextLink"];
            }
        });
    }

    // Prepopulate Program fields
    if (!$("#ndph_program").val()) {
        if (params["id"]) {
            var prepopulatedProgram = programs.find(     // Returns an object
                function(program) {
                    // Search in "programs" array for element matching GUID on program lookup
                    return program.ndph_programid == params["id"];
                }
            );
        
            // Populate Program lookup
            $("#ndph_program").val(prepopulatedProgram.ndph_programid);
            $("#ndph_program_name").val(prepopulatedProgram.ndph_name);
            $("#ndph_program_entityname").val("ndph_program");
        }
    }

    // sort industry field
    function industrySort()
    {
        if($("#lastname").val() == null || $("#lastname").val() == "")
        {
            $("#ndph_industry").html($("#ndph_industry option").sort(function (a, b) {
                return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
            }))
            $("#ndph_industry").get(0).selectedIndex = 0; // prevents from autopopulating the field
            event.preventDefault();
        }
    }

    // Initiate function
    industrySort();
    // Move Industry "Other" to end
    $("#ndph_industry option[value='20438f98-603f-ea11-a813-000d3a851ff7']").insertAfter($("#ndph_industry option:last"));


    // Set School
    updateSchool();

    // Set (Other) visibility
    toggleJobFunctionOther();
    toggleIndustryOther();

    // Hide metadata fields
    $(".section[data-name='hidden']").closest("fieldset").hide();
    
    // Append program guide
    $('.page-copy').append("<div id='instructions' class='instructions'></div>");
    $("#instructions")
        .addClass('instruction')
        .attr('id', 'instruction')
        .append('<p>Fill out the application form below and one of our Recruitment Officers will get in touch with you to guide you throughout the application process. Should you wish to contact us directly, email us at <a href="mailto: admissions@aim.edu" id="admissionsEmail">admissions@aim.edu</a>.</p>')
        .append('<p>Please be reminded that all information you submit in this Form will be recorded in AIM’s database and will be accessed only by authorized AIM personnel.</p>')
        .append('<p><a href="/application-guide" id="guide-link" target="_blank">Click here to read the step-by-step guide to this online graduate degree application process.</a></p>')
        .append('<p><i>* - Required fields.</i></p>');

    // Resize State/City fields
    $("#ndph_country").parent().parent().parent().attr("colspan","2");          // Home Address
    $("#ndph_country").parent().css("width","100%");
    $("#ndph_state").parent().parent().parent().attr("colspan","2");
    $("#ndph_state").parent().css("width","100%");
    $("#address1_stateorprovince").parent().parent().attr("colspan","2");
    $("#ndph_city").parent().parent().parent().attr("colspan","2");
    $("#ndph_city").parent().css("width","100%");
    $("#address1_city").parent().parent().attr("colspan","2");
    // new fields for home address

    
    $("#ndph_mequestion11").parent().parent().parent().attr("colspan","2");     // Business Address
    $("#ndph_mequestion11").parent().css("width","100%");
    $("#ndph_mequestion12").parent().parent().parent().attr("colspan","2");
    $("#ndph_mequestion12").parent().css("width","100%");
    $("#ndph_statebusinessothers").parent().parent().attr("colspan","2");
    $("#ndph_mequestion13").parent().parent().parent().attr("colspan","2");
    $("#ndph_mequestion13").parent().css("width","100%");
    $("#ndph_citybusinessothers").parent().parent().attr("colspan","2");

    // Add class to adjust top padding on mobile field
    $("input#mobilephone.text.form-control").closest("td").css("padding-top", "26px");

    // Initialize Address appearance
    initializeHomeAddress();
    initializeBusinessAddress();

    // Hide Dietary Preference (Others) and PWD ID
    $(".section[data-name='dietary_information_section']").closest("fieldset").hide();

});