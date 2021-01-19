$(document).ready(function() {
        
    function toggleBusinessIsHomeAddress() {
        var businessIsHome = $("#ndph_businessaddressishomeaddress").prop("checked");
   
 if (businessIsHome) {
        // Show Business Address section
        $(".section[data-name='BS']").closest("fieldset").hide();
        //Enable all fields in business address
        $("#address1_line1").prop("disabled", false);
        $("#address1_line2").prop("disabled", false);
        $("#address1_line3").prop("disabled", false);
        $("#ndph_country").prop("disabled", false);
        $("#ndph_country_name").prop("disabled", false);
        $("#address1_postalcode").prop("disabled", false);
        $("#ndph_state").prop("disabled", false);
        $("#address1_stateorprovince").prop("disabled", false);
        $("#ndph_addressnotshownonthelist").prop("disabled", false);
        $("#ndph_city").prop("disabled", false);
        $("#address1_city").prop("disabled", false);
        $("#ndph_citynotshownonthelist").prop("disabled", false);
        // added new address fields january 19 2021
        $("#ndph_statetextonly").prop("disabled", false);
        $("#ndph_citytextonly").prop("disabled", false);
        $("#ndph_statebusinesstextonly").prop("disabled", false);
        $("#ndph_citybusinesstextonly").prop("disabled", false);

        // Set values for Business Address to Home Address
        mirrorHomeAddress();
        // added new address fields january 19 2021
        $("#ndph_statetextonly").change(mirrorHomeAddress);
        $("#ndph_citytextonly").change(mirrorHomeAddress);
        $("#ndph_statebusinesstextonly").change(mirrorHomeAddress);
        $("#ndph_citybusinesstextonly").change(mirrorHomeAddress);
        // Set Business Address to update on Home Address change
        $("#address1_line1").change(mirrorHomeAddress);
        $("#address1_line2").change(mirrorHomeAddress);     
        $("#address1_line3").change(mirrorHomeAddress);
        $("#ndph_country").change(mirrorHomeAddress);
        $("#ndph_country_name").change(mirrorHomeAddress);
        $("#address1_postalcode").change(mirrorHomeAddress);
        $("#ndph_state").change(mirrorHomeAddress);
        $("#address1_stateorprovince").change(mirrorHomeAddress);
        $("#ndph_addressnotshownonthelist").change(mirrorHomeAddress);
        $("#ndph_city").change(mirrorHomeAddress);
        $("#address1_city").change(mirrorHomeAddress);
        $("#ndph_citynotshownonthelist").change(mirrorHomeAddress);

    } 

else {
        // Show Business Address section
        $(".section[data-name='BS']").closest("fieldset").show();

        // Clear change event handler for Business Address
        $("#address1_line1").off("change", mirrorHomeAddress);
        $("#address1_line2").off("change", mirrorHomeAddress);
        $("#address1_line3").off("change", mirrorHomeAddress);
        $("#ndph_country").off("change", mirrorHomeAddress);
        $("#ndph_country_name").off("change", mirrorHomeAddress);
        $("#ndph_postalzipcode").off("change", mirrorHomeAddress);
        $("#ndph_state").off("change", mirrorHomeAddress);
        $("#address1_stateorprovince").off("change", mirrorHomeAddress);
        $("#ndph_addressnotshownonthelist").off("change", mirrorHomeAddress);
        $("#ndph_city").off("change", mirrorHomeAddress);
        $("#address1_city").off("change", mirrorHomeAddress);
        $("#ndph_citynotshownonthelist").off("change", mirrorHomeAddress);

        // Clear values for Business Address
        $("#ndph_street1business").val("");                                 // Street 1
        $("#ndph_street2business").val("");                                 // Street 2
        $("#ndph_street3business").val("");                                 // Street 3
        $("#ndph_countrybusiness").val("");                                 // Country GUID
        $("#ndph_countrybusiness_name").val("");                            // Country name
        $("#ndph_countrybusiness_entityname").val("");                      // Country entity
        $("#ndph_zippostalcodebusiness").val("");                           // ZIP/Postal Code
        $("#ndph_statebusiness").val("");                                   // State GUID
        $("#ndph_statebusiness_name").val("");                              // State name
        $("#ndph_statebusiness_entityname").val("");                        // State entity
        $("#ndph_statebusinessother").val("");                              // State (others)
        $("#ndph_statenotonthelistbusiness").prop("checked", false);        // State not on list
        $("#ndph_statebusinessother").parent().parent().hide();             // Hide State (Other)
        $("#ndph_statebusiness").parent().parent().show();                  // Show State
        $("#ndph_citybusiness").val("");                                    // City GUID
        $("#ndph_citybusiness_name").val("");                               // City name
        $("#ndph_citybusiness_entityname").val("");                         // Country entity
        $("#ndph_citybusinessother").val("");                               // City (others)
        $("#ndph_citynotonthelistbusiness").prop("checked", false);         // City not on list
        $("#ndph_citybusinessother").parent().parent().hide();              // Hide City (Other)
        $("#ndph_citybusiness").parent().parent().show();                   // Show City
    }

    // Re-initialize fields: call initialization function
    initializeBusinessAddress();
}

function mirrorHomeAddress() { // Function to copy Home Address fields to Business Address
    var homeStreet1 = $("#address1_line1").val();
    var homeStreet2 = $("#address1_line2").val();
    var homeStreet3 = $("#address1_line3").val();
    var homeCountry = $("#ndph_country").val();
    var homeCountryName = $("#ndph_country_name").val();
    var homeZIPPostalCode = $("#address1_postalcode").val();
    var homeState = $("#ndph_state").val();
    var homeStateName = $("#ndph_state_name").val();
    var homeStateOthers = $("#address1_stateorprovince").val();
    var homeStateNotOnList = $("#ndph_addressnotshownonthelist").prop("checked");
    var homeCity = $("#ndph_city").val();
    var homeCityName = $("#ndph_city_name").val();
    var homeCityOthers = $("#address1_city").val();
    var homeCityNotOnList = $("#ndph_citynotshownonthelist").prop("checked");

        $("#ndph_street1business").val(homeStreet1);                                            // Street 1
        $("#ndph_street2business").val(homeStreet2);                                            // Street 2
        $("#ndph_street3business").val(homeStreet3);                                            // Street 3
        $("#ndph_countrybusiness").val(homeCountry);                                            // Country GUID
        $("#ndph_countrybusiness_name").val(homeCountryName);                                   // Country name
        $("#nndph_countrybusiness_entityname").val("ndph_country");                             // Country entity
        $("#ndph_zippostalcodebusiness").val(homeZIPPostalCode);                                // ZIP/Postal Code
        $("#ndph_statebusiness").val(homeState);                                                // State GUID
        $("#ndph_statebusiness_name").val(homeStateName);                                       // State name
        $("#ndph_statebusiness_entityname").val("ndph_state");                                  // State entity
        $("#ndph_statebusinessother").val(homeStateOthers);                                     // State (others)
        $("#ndph_statenotonthelistbusiness").prop("checked",homeStateNotOnList);                // State not on list
        $("#ndph_citybusiness").val(homeCity);                                                  // City GUID
        $("#ndph_citybusiness_name").val(homeCityName);                                         // City name
        $("#ndph_citybusiness_entityname").val("ndph_city");                                    // City entity
        $("#ndph_citybusinessother").val(homeCityOthers);                                       // City (others)
        $("#ndph_citynotonthelistbusiness").prop("checked",homeCityNotOnList);                  //CIty not on te list


    // Update (Other) fields
    if ($("#ndph_addressnotshownonthelist").prop("checked")) { 
        // State
        $("#ndph_statebusiness").parent().parent().parent().hide();
        $("#ndph_statebusinessother").parent().parent().show();
    } 
    else 
    {
        $("#ndph_statebusinessother").parent().parent().hide();
        $("#ndph_statebusiness").parent().parent().parent().show();
    }
    if ($("#ndph_citynotshownonthelist").prop("checked")) { // City
        $("#ndph_citybusiness").parent().parent().parent().hide();
        $("#ndph_citybusinessother").parent().parent().show();
    } else {
        $("#ndph_citybusinessother").parent().parent().hide();
        $("#ndph_citybusiness").parent().parent().parent().show();
    }
}
    // Toggle Home State based on whether Home Country has a value
    function toggleStateHome() {
        var countryHome = $("#ndph_country").val();
        var checkedStateOtherHome = $("#ndph_addressnotshownonthelist");
        var stateHome = $("#ndph_state");
        var stateHomeName = $("#ndph_state_name");
        var stateHomeEntity = $("#ndph_state_entityname");
        var stateHomeField = $("#ndph_state").parent().parent().parent();
        var stateOtherHome = $("#address1_stateorprovince");
        var stateOtherHomeField = $("#address1_stateorprovince").parent().parent();
        var checkedCityOtherHome = $("#ndph_citynotshownonthelist");
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

        if (countryHome) {
            // Enable State
            stateHome.prop("disabled", false);
            stateHome.parent().find(".input-group-btn").show();
            stateHome.parent().css("display", "table");
            stateHome.parent().css("width", "100%");
            // Border radius changed to curved
            $("#ndph_state_name").css("border-bottom-right-radius","0px");
            $("#ndph_state_name").css("border-top-right-radius","0px");
            // Enable State (Other)
            stateOtherHome.prop("disabled", false);
            // Enable "Other" checkbox
            checkedStateOtherHome.prop("disabled", false);
        }
        else {
            //Disable State
            stateHome.prop("disabled", true);
            stateHome.parent().find(".input-group-btn").hide();
            stateHome.parent().css("display", "block");
            // Border radius changed to curved
            $("#ndph_state_name").css("border-bottom-right-radius","5px");
            $("#ndph_state_name").css("border-top-right-radius","5px");
            //Disable State (Other)
            stateOtherHome.prop("disabled", true);
            // Disable "Others" checkbox
            checkedStateOtherHome.prop("disabled", true);
            // Update (Other) visibility 
            stateOtherHomeField.hide();
            stateHomeField.show();
            
            // Disable City
            cityHome.prop("disabled", true);
            cityHome.parent().find(".input-group-btn").hide();
            cityHome.parent().css("display", "block");
            // Disable City (Other)
            cityOtherHome.prop("disabled", true);
            // Disable "Others" checkbox
            //checkedCityOtherHome.prop("disabled", true);
            checkedCityOtherHome.parent().parent().parent().hide();
            // Update (Other) visibility 
            cityOtherHomeField.hide();
            cityHomeField.show();
        }
    }
    // Toggle Home City based on whether Home State has a value
    function toggleCityHome() {
        var stateHome = $("#ndph_state").val();
        var stateOtherHome = $("#address1_stateorprovince").val();
        var checkedStateOtherHome = $("#ndph_addressnotshownonlist");
        var checkedCityOtherHome = $("#ndph_citynotshownonthelist");
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
        // Untick "Others" checkbox
        //checkedCityOtherHome.prop("checked", false);        

        if (stateHome || stateOtherHome) {
            // Enable City
            cityHome.prop("disabled", false);
            cityHome.parent().find(".input-group-btn").show();
            cityHome.parent().css("display", "table");
            cityHome.parent().css("width", "100%");
            // Border radius changed to curved
            $("#ndph_city_name").css("border-bottom-right-radius","0px");
            $("#ndph_city_name").css("border-top-right-radius","0px");
            // Enable City (Other)
            cityOtherHome.prop("disabled", false);
            if (stateHome && !checkedStateOtherHome.prop("checked")) {
                // Enable "Others" checkbox only if State is populated and not locked to "Other"
                //checkedCityOtherHome.prop("disabled",false);
                checkedCityOtherHome.parent().parent().parent().show();
            }
        }
        else {  
            // Disable City
            cityHome.prop("disabled", true);
            cityHome.parent().find(".input-group-btn").hide();
            cityHome.parent().css("display", "block");
            // Border radius changed to curved
            $("#ndph_city_name").css("border-bottom-right-radius","5px");
            $("#ndph_city_name").css("border-top-right-radius","5px");
            // Disable City (Other)
            cityOtherHome.prop("disabled", true);
            // Disable "Others" checkbox
            //checkedCityOtherHome.prop("disabled", true);
            checkedCityOtherHome.parent().parent().parent().hide();
            // Update (Other) visibility 
            cityOtherHomeField.hide();
            cityHomeField.show();
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
        var checkedCityOtherHome = $("#ndph_citynotshownonthelist");

        if (checkedStateOtherHome.prop("checked")) {
            stateHome.val("");
            stateHomeName.val("");
            stateHomeEntity.val("");
            stateHomeField.hide();
            stateOtherHomeField.show();
            // Lock City to Other
            //checkedCityOtherHome.prop("disabled", true);
            checkedCityOtherHome.parent().parent().parent().hide();
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
        }
        toggleCityOtherHome();
    }
    // Hide/show Home City (Other) based on "Others" checkbox
    function toggleCityOtherHome() {
        var checkedCityOtherHome = $("#ndph_citynotshownonthelist");
        var cityHome = $("#ndph_city");
        var cityHomeName = $("#ndph_city_name");
        var cityHomeEntity = $("#ndph_city_entityname");
        var cityHomeField = $("#ndph_city").parent().parent().parent();
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
    // Toggle Business State based on whether Business Country has a value
    function toggleStateBusiness() {
        var countryBusiness = $("#ndph_countrybusiness").val();
        var checkedStateOtherBusiness = $("#ndph_statenotonthelistbusiness");
        var stateBusiness = $("#ndph_statebusiness");
        var stateBusinessName = $("#ndph_statebusiness_name");
        var stateBusinessEntity = $("#nndph_statebusiness_entityname");
        var stateBusinessField = stateBusiness.parent().parent().parent();
        var stateOtherBusiness = $("#ndph_statebusinessother");
        var stateOtherBusinessField = stateOtherBusiness.parent().parent();
        var checkedCityOtherBusiness = $("#ndph_citynotonthelistbusiness");
        var cityBusiness = $("#ndph_citybusiness");
        var cityBusinessName = $("#ndph_citybusiness_name");
        var cityBusinessEntity = $("#ndph_citybusiness_entityname");
        var cityBusinessField = cityBusiness.parent().parent().parent();
        var cityOtherBusiness = $("#ndph_citybusinessother");
        var cityOtherBusinessField = cityOtherBusiness.parent().parent();

        // Clear State
        stateBusiness.val("");
        stateBusinessName.val("");
        stateBusinessEntity.val("");
        // Clear State (Other)
        stateOtherBusiness.val("");
        // Untick "Others" checkbox
        checkedStateOtherBusiness.prop("checked", false);

        // Clear City
        cityBusiness.val("");
        cityBusinessName.val("");
        cityBusinessEntity.val("");
        // Clear City (Other)
        cityOtherBusiness.val("");
        // Untick "Others" checkbox
        checkedCityOtherBusiness.prop("checked", false);

        if (countryBusiness) {
            // Enable State
            stateBusiness.prop("disabled", false);
            stateBusiness.parent().find(".input-group-btn").show();
            stateBusiness.parent().css("display", "table");
            stateBusiness.parent().css("width", "100%");
            // Border radius changed to curved
            $("#ndph_statebusiness_name").css("border-bottom-right-radius","0px");
            $("#ndph_statebusiness_name").css("border-top-right-radius","0px");
            // Enable State (Other)
            stateOtherBusiness.prop("disabled", false);
            // Enable "Other" checkbox
            checkedStateOtherBusiness.prop("disabled", false);
        }
        else {
            // Disable State
            stateBusiness.prop("disabled", true);
            stateBusiness.parent().find(".input-group-btn").hide();
            stateBusiness.parent().css("display", "block");
            // Border radius changed to curved
            $("#ndph_statebusiness_name").css("border-bottom-right-radius","5px");
            $("#ndph_statebusiness_name").css("border-top-right-radius","5px");
            // Disable State (Other)
            //stateOtherBusiness.prop("disabled", true);
            // Disable "Others" checkbox
            checkedStateOtherBusiness.prop("disabled", true);
            // Update (Other) visibility 
            stateOtherBusinessField.hide();
            stateBusinessField.show();
            
            // Disable City
            cityBusiness.prop("disabled", true);
            cityBusiness.parent().find(".input-group-btn").hide();
            cityBusiness.parent().css("display", "block");
            // Disable City (Other)
            //cityOtherBusiness.prop("disabled", true);
            // Disable "Others" checkbox
            //checkedCityOtherBusiness.prop("disabled", true);
            checkedCityOtherBusiness.parent().parent().hide();
            // Update (Other) visibility 
            cityOtherBusinessField.hide();
            cityBusinessField.show();            
        }
    }
    // Toggle Business City based on whether Business State has a value
    function toggleCityBusiness() {
        var stateBusiness = $("#ndph_statebusiness").val();
        var stateOtherBusiness = $("#ndph_statebusinessother").val();
        var checkedStateOtherBusiness = $("#ndph_statenotonthelistbusiness");
        var checkedCityOtherBusiness = $("#ndph_citynotonthelistbusiness");
        var cityBusiness = $("#ndph_citybusiness");
        var cityBusinessName = $("#ndph_citybusiness_name");
        var cityBusinessEntity = $("#ndph_citybusiness_entityname");
        var cityBusinessField = cityBusiness.parent().parent().parent();
        var cityOtherBusiness = $("#ndph_citybusinessother");
        var cityOtherBusinessField = cityOtherBusiness.parent().parent();

        // Clear City
        cityBusiness.val("");
        cityBusinessName.val("");
        cityBusinessEntity.val("");
        // Clear City (Other)
        cityOtherBusiness.val("");
        // Untick "Others" checkbox
        //checkedCityOtherBusiness.prop("checked", false);

        if (stateBusiness || stateOtherBusiness) {
            // Enable City
            cityBusiness.prop("disabled", false);
            cityBusiness.parent().find(".input-group-btn").show();
            cityBusiness.parent().css("display", "table");
            cityBusiness.parent().css("width", "100%");
            // Border radius changed to curved
            $("#ndph_citybusiness_name").css("border-bottom-right-radius","0px");
            $("#ndph_citybusiness_name").css("border-top-right-radius","0px");
            // Enable City (Other)
            cityOtherBusiness.prop("disabled", false);
            if (stateBusiness && !checkedStateOtherBusiness.prop("checked")) {
                // Enable "Others" checkbox only if State is populated and not locked to "Other"
                //checkedCityOtherBusiness.prop("disabled", false);
                checkedCityOtherBusiness.parent().parent().parent().show();
            }
        }
        else {
            // Disable City
            cityBusiness.prop("disabled", true);
            cityBusiness.parent().find(".input-group-btn").hide();
            cityBusiness.parent().css("display", "block");
            // Border radius changed to curved
            $("#ndph_citybusiness_name").css("border-bottom-right-radius","5px");
            $("#ndph_citybusiness_name").css("border-top-right-radius","5px");
            // Disable City (Other)
            //cityOtherBusiness.prop("disabled", true);
            // Disable "Others" checkbox
            //checkedCityOtherBusiness.prop("disabled", true);
            checkedCityOtherBusiness.parent().parent().parent().hide();
            // Update (Other) visibility 
            cityOtherBusinessField.hide();
            cityBusinessField.show();
        }
    }
    // Hide/show Business State (Other) based on "Others" checkbox
    function toggleStateOtherBusiness() {
        var checkedStateOtherBusiness = $("#ndph_statenotonthelistbusiness");
        var stateBusiness = $("#ndph_statebusiness");
        var stateBusinessName = $("#ndph_statebusiness_name");
        var stateBusinessEntity = $("#ndph_statebusiness_entityname");
        var stateBusinessField = stateBusiness.parent().parent().parent();       
        var stateOtherBusiness = $("#ndph_statebusinessother");
        var stateOtherBusinessField = stateOtherBusiness.parent().parent()
        
        var cityBusiness = $("#ndph_citybusiness");
        var cityOtherBusiness = $("#ndph_citybusinessother");
        var checkedCityOtherBusiness = $("#ndph_citynotonthelistbusiness");

        if (checkedStateOtherBusiness.prop("checked")) {
            stateBusiness.val("");
            stateBusinessName.val("");
            stateBusinessEntity.val("");
            stateBusinessField.hide();
            stateOtherBusinessField.show();
            // Lock City to Other
            //checkedCityOtherBusiness.prop("disabled", true);
            checkedCityOtherBusiness.parent().parent().parent().hide();
            checkedCityOtherBusiness.prop("checked", true);
            // Disable City (Other) until State is filled in
            //cityOtherBusiness.prop("disabled", true);
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
        }
        toggleCityOtherBusiness();
    }
    // Hide/show Business State (Other) based on "Others" checkbox
    function toggleCityOtherBusiness() {
        var checkedCityOtherBusiness = $("#ndph_citynotonthelistbusiness");
        var cityBusiness = $("#ndph_citybusiness");
        var cityBusinessName = $("#ndph_citybusiness_name");
        var cityBusinessEntity = $("#ndph_citybusiness_entityname");
        var cityBusinessField = $("#ndph_citybusiness").parent().parent().parent();
        var cityOtherBusiness = $("#ndph_citybusinessother");
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

    function initializeHomeAddress() {
        var countryHome = $("#ndph_country").val();

        var checkedStateOtherHome = $("#ndph_addressnotshownonthelist");
        var stateHome = $("#ndph_state");
        var stateHomeField = stateHome.parent().parent().parent();
        var stateOtherHome = $("#address1_stateorprovince");
        var stateOtherHomeField = stateOtherHome.parent().parent();

        var checkedCityOtherHome = $("#ndph_citynotshownonthelist");
        var cityHome = $("#ndph_city");
        var cityHomeField = cityHome.parent().parent().parent();
        var cityOtherHome = $("#address1_city");
        var cityOtherHomeField = cityOtherHome.parent().parent();

        if (!countryHome) {
            // Disable State
            stateHome.prop("disabled", true);
            stateHome.parent().find(".input-group-btn").hide();
            stateHome.parent().css("display", "block");
            // Disable and hide State (Other)
            stateOtherHome.prop("disabled", true);
            stateOtherHomeField.hide();
            // Reset and disable "Other" checkbox for State
            checkedStateOtherHome.prop("checked", false);
            checkedStateOtherHome.prop("disabled", true);
            // Disable City
            cityHome.prop("disabled", true);
            cityHome.parent().find(".input-group-btn").hide();
            cityHome.parent().css("display", "block");
            // Disable and hide City (Other)
            cityOtherHome.prop("disabled", true);
            cityOtherHomeField.hide();
            // Reset and disable "Other" checkbox for City 
            checkedCityOtherHome.prop("checked", false);
            //checkedCityOtherHome.prop("disabled", true);
            checkedCityOtherHome.parent().parent().parent().hide();
        }
        else if (checkedStateOtherHome.prop("checked")) {
            // Hide State
            stateHomeField.hide();
            // Hide City
            cityHomeField.hide();
            // Reset and disable "Other" checkbox for City 
            checkedCityOtherHome.prop("checked", true);
            //checkedCityOtherHome.prop("disabled", true);
            checkedCityOtherHome.parent().parent().parent().hide();
            if (!stateHome) {
                // Disable City
                cityHome.prop("disabled", true);
                cityHome.parent().find(".input-group-btn").hide();
                cityHome.parent().css("display", "block");
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
            // Disable and hide City (Other)
            cityOtherHome.prop("disabled", true);
            cityOtherHomeField.hide();
            // Untick and disable "Others"
            checkedCityOtherHome.prop("checked", false);
            //checkedCityOtherHome.prop("disabled", true);
            checkedCityOtherHome.parent().parent().parent().hide();
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
            //stateHome.parent().find(".input-group-btn").hide();
            // Hide City (Other)
            cityOtherHomeField.hide();
            //cityHome.parent().find(".input-group-btn").hide();
        }
    }
     // Initialize Business Address
    function initializeBusinessAddress() {
        var businessIsHome = $("#ndph_businessaddressishomeaddress").prop("checked");

        var countryBusiness = $("#ndph_countrybusiness").val();

        var checkedStateOtherBusiness = $("#ndph_statenotonthelistbusiness");
        var stateBusiness = $("#ndph_statebusiness");   
        var stateBusinessField = stateBusiness.parent().parent().parent();
        var stateOtherBusiness = $("#ndph_statebusinessother");
        var stateOtherBusinessField = stateOtherBusiness.parent().parent();

        var checkedCityOtherBusiness = $("#ndph_citynotonthelistbusiness");
        var cityBusiness = $("#ndph_citybusiness");
        var cityBusinessField = cityBusiness.parent().parent().parent();
        var cityOtherBusiness = $("#ndph_citybusinessother");
        var cityOtherBusinessField = cityOtherBusiness.parent().parent();

        if (businessIsHome) {
            $(".section[data-name='BS']").closest("fieldset").hide();
        }

        else if (!countryBusiness) 
        {
            // Disable State
            stateBusiness.prop("disabled", true);
            stateBusiness.parent().find(".input-group-btn").hide();
            stateBusiness.parent().css("display", "block");
            // Disable and hide State (Other)
            //stateOtherBusiness.prop("disabled", true);
            stateOtherBusinessField.hide();
            // Reset and disable "Other" checkbox for State
            checkedStateOtherBusiness.prop("checked", false);
            //checkedStateOtherBusiness.prop("disabled", true);
            // Disable City
            cityBusiness.prop("disabled", true);
            cityBusiness.parent().find(".input-group-btn").hide();
            cityBusiness.parent().css("display", "block");
            // Disable and hide City (Other)
            //cityOtherBusiness.prop("disabled", true);
            cityOtherBusinessField.hide();
            // Reset and disable "Other" checkbox for City 
            checkedCityOtherBusiness.prop("checked", false);
           //checkedCityOtherBusiness.prop("disabled", true);
            checkedCityOtherBusiness.parent().parent().parent().hide();
            cityBusinessField.show();
            stateBusinessField.show();
        }
        else if (checkedStateOtherBusiness.prop("checked")) {
            // Hide State
            stateBusinessField.hide();
            // Hide City
            cityBusinessField.hide();
            // Reset and disable "Other" checkbox for City 
            checkedCityOtherBusiness.prop("checked", false);
            //checkedCityOtherBusiness.prop("disabled", true);
            checkedCityOtherBusiness.parent().parent().parent().hide();
            if (!stateBusiness) {
                // Disable City
               cityBusiness.prop("disabled", true);
               cityBusiness.parent().find(".input-group-btn").hide();
               cityBusiness.parent().css("display", "block");
            }
            if (!stateOtherBusiness) {
            // Disable City (Other)
            //cityOtherBusiness.prop("disabled", true);
            }
        }
        else if (!stateBusiness) {
            // Hide State (Other)
            stateOtherBusinessField.hide();
             // Disable City
            cityBusiness.prop("disabled", true);
            cityBusiness.parent().find(".input-group-btn").hide();
            cityBusiness.parent().css("display", "block");
            // Disable and hide City (Other)
            //cityOtherBusiness.prop("disabled", true);
            cityOtherBusinessField.hide();
            // Untick and disable "Others"
            checkedCityOtherBusiness.prop("checked", false);
            //checkedCityOtherBusiness.prop("disabled", true);
            checkedCityOtherBusiness.parent().parent().parent().hide();
        }
        else if (checkedCityOtherBusiness.prop("checked")) 
        {
            // Hide State (Other)
            stateOtherBusinessField.hide();
            // Hide City
            cityBusinessField.hide();
        }
        else {
            // Hide State (Other)
            stateOtherBusinessField.hide();
            stateBusinessField.show();
            // Hide City (Other)
            cityOtherBusinessField.hide();
            cityBusinessField.show();
        }
    }



    // INITIALIZE FORM
    // Hide metadata fields
    // $("#parentcontactid").parent().parent().parent().hide();
    // $("#fullname").parent().parent().hide();
    // $(".section[data-name='hidden_anonymous']").closest("fieldset").hide();

    //Resize State/City fields
    $("#ndph_country").parent().parent().parent().attr("colspan","2");
    $("#ndph_country").parent().css("width","100%");
    $("#ndph_state").parent().parent().parent().attr("colspan","2");
    $("#ndph_state").parent().css("width","100%");
    $("#address1_stateorprovince").parent().parent().attr("colspan","2");
    $("#ndph_city").parent().parent().parent().attr("colspan","2");
    $("#ndph_city").parent().css("width","100%");
    $("#address1_city").parent().parent().attr("colspan","2");
    
    $("#ndph_countrybusiness").parent().parent().parent().attr("colspan","2");
    $("#ndph_countrybusiness").parent().css("width","100%");
    $("#ndph_statebusiness").parent().parent().parent().attr("colspan","2");
    $("#ndph_statebusiness").parent().css("width","100%");
    $("#ndph_statebusinessother").parent().parent().attr("colspan","2");
    $("#ndph_citybusiness").parent().parent().parent().attr("colspan","2");
    $("#ndph_citybusiness").parent().css("width","100%");
    $("#ndph_citybusinessother").parent().parent().attr("colspan","2");

    // Initialize Address fields
    initializeHomeAddress();
    initializeBusinessAddress();
    
    // FUNCTIONS TO EXECUTE ON FIELD CHANGE:
    // Update Business Address section
    $("#ndph_businessaddressishomeaddress").change(toggleBusinessIsHomeAddress);
    // Update Home Address fields
    $("#ndph_country").change(toggleStateHome);
    $("#ndph_state").change(toggleCityHome);
    $("#address1_stateorprovince").change(toggleCityHome);
    $("#ndph_addressnotshownonthelist").change(toggleStateOtherHome);
    $("#ndph_citynotshownonthelist").change(toggleCityOtherHome);
    // Update Business Address fields
    $("#ndph_countrybusiness").change(toggleStateBusiness);
    $("#ndph_statebusiness").change(toggleCityBusiness);
    $("#ndph_statebusinessother").change(toggleCityBusiness);
    $("#ndph_statenotonthelistbusiness").change(toggleStateOtherBusiness);
    $("#ndph_citynotonthelistbusiness").change(toggleCityOtherBusiness);
    
    
    /*
    //check if search button is visible for lookups
    if ( $(".input-group-btn").css('display') == 'none' || $(".input-group-btn").css("visibility") == "hidden"){
        
    // 'element' is hidden
    }
    */
    
});
