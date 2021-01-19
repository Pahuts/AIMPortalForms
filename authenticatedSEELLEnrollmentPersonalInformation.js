$(document).ready(function() {

    // Hide and show industry other
    function showAndHideIndustryOther()
    {
        if($("#ndph_industry").val() == "20438f98-603f-ea11-a813-000d3a851ff7"){
            $("#ndph_industryname1").parent().parent().show();
        } else {
            $("#ndph_industryname1").parent().parent().hide();
        }
    }

    // Job function script
    function jobFunction()
    {
    if($("#ndph_jobfunction").val() == "649840015"){
    $("#ndph_jobfunctionother").parent().parent().show();
    }else {
    $("#ndph_jobfunctionother").parent().parent().hide();
    }
    }
    jobFunction();
    $("#ndph_jobfunction").change(jobFunction);
    // disable job function
    $("#ndph_jobfunction").prop("disabled",true);
    $("#ndph_jobfunctionother").prop("disabled",true);

     // Adjust total work experience
    $("[data-name='total_work_experience_section']").prev().css({  "color" : "black", "text-transform" : "capitalize", "font-size" : "15px", "font-weight" : "500", "font-family" : "Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif", "margin-left" : "17px" });

    // hide salutations
    $("#ndph_salutation").parent().parent().hide();

    // disable new fields
    $("#ndph_company").prop("disabled", true);
    $("#ndph_industry").prop("disabled", true);
    $("#ndph_joblevel").prop("disabled", true);
    $("#jobtitle").prop("disabled", true);
    $("#ndph_industryname1").prop("disabled", true);
    
    // Hide school
    $("#ndph_school").parent().parent().parent().hide();

    function autopopulateSchool() //autopopulates school
    {
        //DON'T FORGET THE HASHTAG!!!
        var school = $("#ndph_school");
        var schoolName = $("#ndph_school_name");
        var schoolEntity = $("#ndph_school_entityname");
        //autopopulate school
        school.val("f15b7ce7-0f17-ea11-a811-000d3a82bec6");
        schoolName.val("School of Executive Education and Lifelong Learning");
        schoolEntity.val("ndph_school");

    }
    // Initiate function 
    autopopulateSchool();

    // Append program instructions
    $('<div>')
        .addClass('seellinstruction')
        .attr('id', 'seellinstruction')
        .append('<p class = "oep_instruct">Fill out the Application Form and one of our Business Development Officers will get in touch with you shortly. Should you wish to contact us directly, email us at <a href="mailto: seell@aim.edu" id="recruitmentEmail">SEELL@aim.edu</a>.</p>')
        .append('<p class = "oep_instruct">Please be reminded that all information you submit in this Form will be recorded in AIM’s database and will be accessed only by authorized AIM personnel. </p>')
        .append('<p class = "oep_instruct"><a href = "/enrollment-guide/" target = "_blank" id = "enrollmentprocess"> Click here to read the step-by-step guide to this online process. </a></p>')

        .append('<p class = "oep_instruct"><i>* - Required fields.</i></p>')
        .insertAfter('.page-header');

    // edit css
    $("p.oep_instruct").css( { "margin-left" : "96px", "margin-right" : "30px" });
    $("a#enrollmentprocess").css( { "color" : "blue", "text-decoration" : "underline" });
    $("a#recruitmentEmail").css( { "color" : "blue" } );

    // Append update applicant info instruction
    $('<div>')
    .addClass('updateApplicantInfo')
    .attr('id', 'updateApplicantInfo')
    .append('<p>To update this section, go to My Profile > <a href = "/profile/">Basic Information</a>.</p>')
    .insertBefore('[data-name="seell_personal_information"]');

    // Append update home address instruction
    $('<div>')
    .addClass('updateHomeAddressInstruction')
    .attr('id', 'updateHomeAddressInstruction')
    .append('<p>To update this section, go to My Profile > <a href = "/profile/address/">My Addresses</a>.</p>')
    .insertBefore('[data-name="seell_home_address"]');

    // Append update business address instruction
    $('<div>')
    .addClass('updateBusinessAddressInstruction')
    .attr('id', 'updateBusinessAddressInstruction')
    .append('<p>To update this section, go to My Profile > <a href = "/profile/address/">My Addresses</a>.</p>')
    .insertBefore('[data-name="business_address"]');
        
    // FUNCTION DECLARATIONS

    // Update School based on Program; execute only after OData query returns "programs" variable
    // Update the program
    function updateProgram() {
        var seellProgram = $("#ndph_seellopenprograms");
        var programID = seellProgram.val();  // Variable to track which program (Degree or SEELL) field should be evaluated based on Program Type
        // Get current program based on programID
        var currentProgram = {};
        if (programID) {
            currentProgram = programs.find(
                function(program) {
                    // Search in "programs" array for corresponding program element
                    return program.ndph_programid == programID;
                }
            );
    }
}

function toggleBusinessIsHomeAddress() {
    var businessIsHome = $("#ndph_businessaddressishomeaddress").prop("checked");
    
    if (businessIsHome) {
        // Unbind enable/disable functions for Business Address
        $("#ndph_mequestion11").off("change", toggleStateBusiness);
        $("#ndph_mequestion12").off("change", toggleCityBusiness);
        $("#ndph_statebusinessothers").off("change", toggleCityBusiness);
        $("#ndph_addressnotshownonthelistbusiness").off("change", toggleStateOtherBusiness);
        $("#ndph_addressnotshownonlist_citybusiness").off("change", toggleCityOtherBusiness);

        // Enable fields; needed to ensure fields are saved upon advancing form
        // $("#address1_line1").prop("disabled", false);
        // $("#address1_line2").prop("disabled", false);
        // $("#address1_line3").prop("disabled", false);
        // $("#ndph_country").prop("disabled", false);
        // $("#ndph_country_name").prop("disabled", false);
        // $("#ndph_postalzipcode").prop("disabled", false);
        // $("#ndph_state").prop("disabled", false);
        // $("#ndph_state_name").prop("disabled", false);
        // $("#address1_stateorprovince").prop("disabled", false);
        // $("#ndph_addressnotshownonthelist").prop("disabled", false);
        // $("#ndph_city").prop("disabled", false);
        // $("#ndph_city_name").prop("disabled", false);        
        // $("#address1_city").prop("disabled", false);
        // $("#ndph_addressnotshownonlist_city").prop("disabled", false);

        //enable business fields
        // $("#ndph_mequestion11").prop("disabled", false);
        // $("#ndph_mequestion12").prop("disabled", false);
        // $("#ndph_mequestion13").prop("disabled", false);
        // $("#ndph_mequestion14").prop("disabled", false);
        // $("#ndph_statebusinessothers").prop("disabled", false);
        // $("#ndph_citybusinessothers").prop("disabled", false);
        // $("#ndph_addressnotshownonthelistbusiness").prop("disabled", false);
        // $("#ndph_addressnotshownonlist_citybusiness").prop("disabled", false);

        // Set values for Business Address to Home Address
        mirrorHomeAddress();

        // Set Business Address to update on Home Address change
        $("#address1_line1").change(mirrorHomeAddress);
        $("#address1_line2").change(mirrorHomeAddress);
        $("#address1_line3").change(mirrorHomeAddress);
        $("#ndph_country").change(mirrorHomeAddress);
        $("#ndph_country_name").change(mirrorHomeAddress);
        $("#ndph_postalzipcode").change(mirrorHomeAddress);
        $("#ndph_state").change(mirrorHomeAddress);
        $("#address1_stateorprovince").change(mirrorHomeAddress);
        $("#ndph_addressnotshownonthelist").change(mirrorHomeAddress);
        $("#ndph_city").change(mirrorHomeAddress);
        $("#address1_city").change(mirrorHomeAddress);
        $("#ndph_addressnotshownonlist_city").change(mirrorHomeAddress);
        
        //show/hide fields
        $("#ndph_statebusinessothers").parent().parent().parent().show();                                // Hide State (Other)
        $("#ndph_mequestion12").parent().parent().parent().hide();   
        $("#ndph_citybusinessothers").parent().parent().parent().show();                                 // Hide City (Other)
        $("#ndph_mequestion13").parent().parent().parent().hide();    
        // Hide Business Address section
        // $(".section[data-name='seell_business_address']").closest("fieldset").hide();
    }
    else {
        // Clear "Same as home address" change event handlers for Business Address
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
        $("#ndph_addressnotshownonlist_city").off("change", mirrorHomeAddress);

        // Clear values for Business Address
        $("#ndph_street1business").val("");                                                     // Street 1
        $("#ndph_street2business").val("");                                                     // Street 2
        $("#ndph_street3business").val("");                                                     // Street 3
        $("#ndph_mequestion11").val("");                                                        // Country GUID
        $("#ndph_mequestion11_name").val("");                                                   // Country name
        $("#ndph_mequestion11_entityname").val("");                                             // Country entity
        $("#ndph_mequestion14").val("");                                                        // ZIP/Postal Code
        $("#ndph_mequestion12").val("");                                                        // State GUID
        $("#ndph_mequestion12_name").val("");                                                   // State name
        $("#ndph_mequestion12_entityname").val("");                                             // State entity
        $("#ndph_statebusinessothers").val("");                                                 // State (others)
        $("#ndph_addressnotshownonthelistbusiness").prop("checked", false);                     // State not on list
        $("#ndph_statebusinessothers").parent().parent().hide();                                // Hide State (Other)
        $("#ndph_mequestion12").parent().parent().show();                                       // Show State
        $("#ndph_mequestion13").val("");                                                        // City GUID
        $("#ndph_mequestion13_name").val("");                                                   // City name
        $("#ndph_mequestion13_entityname").val("");                                             // Country entity
        $("#ndph_citybusinessothers").val("");                                                  // City (others)
        $("#ndph_addressnotshownonlist_citybusiness").prop("checked", false);                   // City not on list
        $("#ndph_citybusinessothers").parent().parent().hide();                                 // Hide City (Other)
        $("#ndph_mequestion13").parent().parent().show();                                       // Show City

        // Show Business Address section
        // $(".section[data-name='seell_business_address']").closest("fieldset").show();

        // Re-initialize fields: call initialization function
        initializeBusinessAddress();

        // Re-bind enable/disable functions for Business Address
        $("#ndph_mequestion11").change(toggleStateBusiness);
        $("#ndph_mequestion12").change(toggleCityBusiness);
        $("#ndph_statebusinessothers").change(toggleCityBusiness);
        $("#ndph_addressnotshownonthelistbusiness").change(toggleStateOtherBusiness);
        $("#ndph_addressnotshownonlist_citybusiness").change(toggleCityOtherBusiness);
    }
}
function mirrorHomeAddress() {      // Function to copy Home Address fields to Business Address
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
    var homeCityNotOnList = $("#ndph_addressnotshownonlist_city").prop("checked");

    $("#ndph_street1business").val(homeStreet1);                                            // Street 1
    $("#ndph_street2business").val(homeStreet2);                                            // Street 2
    $("#ndph_street3business").val(homeStreet3);                                            // Street 3
    $("#ndph_mequestion11").val(homeCountry);                                               // Country GUID
    $("#ndph_mequestion11_name").val(homeCountryName);                                      // Country name
    $("#ndph_mequestion11_entityname").val("ndph_country");                                 // Country entity
    $("#ndph_mequestion14").val(homeZIPPostalCode);                                         // ZIP/Postal Code
    $("#ndph_mequestion12").val(homeState);                                                 // State GUID
    $("#ndph_mequestion12_name").val(homeStateName);                                        // State name
    $("#ndph_mequestion12_entityname").val("ndph_state");                                   // State entity
    $("#ndph_statebusinessothers").val(homeStateOthers);                                    // State (others)
    $("#ndph_addressnotshownonthelistbusiness").prop("checked", homeStateNotOnList);        // State not on list
    $("#ndph_mequestion13").val(homeCity);                                                  // City GUID
    $("#ndph_mequestion13_name").val(homeCityName);                                         // City name
    $("#ndph_mequestion13_entityname").val("ndph_city");                                    // City entity
    $("#ndph_citybusinessothers").val(homeCityOthers);                                      // City (others)
    $("#ndph_addressnotshownonlist_citybusiness").prop("checked", homeCityNotOnList);       // City not on list

    // Update (Other) fields
    if ($("#ndph_addressnotshownonthelistbusiness").prop("checked")) {      // State
        $("#ndph_mequestion12").parent().parent().parent().hide();
        $("#ndph_statebusinessothers").parent().parent().show();
    }
    else {
        $("#ndph_statebusinessothers").parent().parent().hide();
        $("#ndph_mequestion12").parent().parent().parent().show();
    }
    if ($("#ndph_addressnotshownonlist_citybusiness").prop("checked")) {      // City
        $("#ndph_mequestion13").parent().parent().parent().hide();
        $("#ndph_citybusinessothers").parent().parent().show();
    }
    else {
        $("#ndph_citybusinessothers").parent().parent().hide();
        $("#ndph_mequestion13").parent().parent().parent().show();
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
    var checkedCityOtherHome = $("#ndph_addressnotshownonlist_city");
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
    // cityHome.val("");
    // cityHomeName.val("");
    // cityHomeEntity.val("");
    // Clear City (Other)
    // cityOtherHome.val("");
    // Untick "Others" checkbox
    // checkedCityOtherHome.prop("checked", false);

    if (countryHome) {
        // Enable State
        // stateHome.prop("disabled", false);
        stateHome.parent().find(".input-group-btn").show();
        stateHome.parent().css("display", "table");
        stateHome.parent().css("width", "100%");
        // Border radius
        $("#ndph_state_name").css("border-bottom-right-radius","0px");
        $("#ndph_state_name").css("border-top-right-radius","0px");
        // Enable State (Other)
        stateOtherHome.prop("disabled", false);
        // Enable "Other" checkbox
        checkedStateOtherHome.prop("disabled", false);
    }
    else if (!countryHome) {
        // Disable State
        stateHome.prop("disabled", true);
        stateHome.parent().find(".input-group-btn").hide();
        stateHome.parent().css("display", "block");
        // Border radius
        $("#ndph_state_name").css("border-bottom-right-radius","5px");
        $("#ndph_state_name").css("border-top-right-radius","5px");
        // Disable State (Other)
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
        // Border radius
        $("#ndph_city_name").css("border-bottom-right-radius","5px");
        $("#ndph_city_name").css("border-top-right-radius","5px");
        // Disable City (Other)
        cityOtherHome.prop("disabled", true);
        // Disable "Others" checkbox
        checkedCityOtherHome.prop("disabled", true);
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
    var checkedCityOtherHome = $("#ndph_addressnotshownonlist_city");
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
    if (checkedStateOtherHome.prop("checked")) {
        checkedCityOtherHome.prop("checked", true);
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
            checkedCityOtherHome.prop("disabled", false);
            checkedCityOtherHome.parent().parent().parent().show();
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
        // // Disable "Others" checkbox
        checkedCityOtherHome.prop("disabled", true);
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
    var checkedCityOtherHome = $("#ndph_addressnotshownonlist_city");

    if (checkedStateOtherHome.prop("checked")) {
        stateHome.val("");
        stateHomeName.val("");
        stateHomeEntity.val("");
        stateHomeField.hide();
        stateOtherHomeField.show();
        // Lock City to Other
        checkedCityOtherHome.prop("disabled", false);
        checkedCityOtherHome.parent().parent().parent().hide();
        checkedCityOtherHome.prop("checked", true);
        // Disable City (Other) until State is filled in
        cityOtherHome.prop("disabled", false);
    }
    else if (!checkedStateOtherHome.prop("checked")) {
        stateOtherHome.val("");
        stateOtherHomeField.hide();
        stateHomeField.show();
        // Reset "Other" checkbox for City
        checkedCityOtherHome.prop("checked", false);
        // Disable City until State is filled in
        cityHome.prop("disabled", true);
        checkedCityOtherHome.parent().parent().parent().show();
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
    var stateHome = $("#ndph_state");
    var stateHomeField = stateHome.parent().parent().parent();
    var stateOtherHome = $("#address1_stateorprovince");
    var stateOtherHomeField = stateOtherHome.parent().parent();

    var checkedCityOtherHome = $("#ndph_addressnotshownonlist_city");
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
        checkedStateOtherHome.prop("disabled", true);
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
        checkedCityOtherHome.prop("disabled", true);
        // checkedCityOtherHome.parent().parent().parent().hide();
    }
    else if (checkedStateOtherHome.prop("checked")) {
        // Hide State
        stateHomeField.hide();
        // Hide City
        cityHomeField.hide();
        // Reset and disable "Other" checkbox for City 
        checkedCityOtherHome.prop("checked", true);
        // checkedCityOtherHome.prop("checked", false); // this command removes the check from the checkbox
        checkedCityOtherHome.prop("disabled", false);
        checkedCityOtherHome.parent().parent().parent().hide();
        if (!stateHome) {
            // Disable City
            // cityHome.prop("disabled", true);
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
    else if (!stateHome || !stateOtherHome) {
        // Hide State (Other)
        stateOtherHomeField.hide();
        // Disable City
        // cityHome.prop("disabled", true);
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
        // checkedCityOtherHome.prop("disabled", true);
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
        // Hide City (Other)
        cityOtherHomeField.hide();
    }
}

// Toggle Business State based on whether Business Country has a value
function toggleStateBusiness() {
    var countryBusiness = $("#ndph_mequestion11").val();
    var checkedStateOtherBusiness = $("#ndph_addressnotshownonthelistbusiness");
    var stateBusiness = $("#ndph_mequestion12");
    var stateBusinessName = $("#ndph_mequestion12_name");
    var stateBusinessEntity = $("#ndph_mequestion12_entityname");
    var stateBusinessField = stateBusiness.parent().parent().parent();
    var stateOtherBusiness = $("#ndph_statebusinessothers");
    var stateOtherBusinessField = stateOtherBusiness.parent().parent();
    var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");
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

    // Clear City
    // cityBusiness.val("");
    // cityBusinessName.val("");
    // cityBusinessEntity.val("");
    // Clear City (Other)
    // cityOtherBusiness.val("");
    // Untick "Others" checkbox
    // checkedCityOtherBusiness.prop("checked", false);

    if (countryBusiness) {
        // Enable State
        stateBusiness.prop("disabled", false);
        stateBusiness.parent().find(".input-group-btn").show();
        stateBusiness.parent().css("display", "table");
        stateBusiness.parent().css("width", "100%");
        //State Border radius
        $("#ndph_mequestion12_name").css("border-bottom-right-radius","0px");
        $("#ndph_mequestion12_name").css("border-top-right-radius","0px");
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
        //State Border radius
        $("#ndph_mequestion12_name").css("border-bottom-right-radius","5px");
        $("#ndph_mequestion12_name").css("border-top-right-radius","5px");
        // Disable State (Other)
        stateOtherBusiness.prop("disabled", true);
        // Disable "Others" checkbox
        checkedStateOtherBusiness.prop("disabled", true);
        // Update (Other) visibility 
        stateOtherBusinessField.hide();
        stateBusinessField.show();
        
        // Disable City
        cityBusiness.prop("disabled", true);
        cityBusiness.parent().find(".input-group-btn").hide();
        cityBusiness.parent().css("display", "block");
        //State Border radius
        $("#ndph_mequestion13_name").css("border-bottom-right-radius","5px");
        $("#ndph_mequestion13_name").css("border-top-right-radius","5px");
        // Disable City (Other)
        cityOtherBusiness.prop("disabled", true);
        // Disable "Others" checkbox
        checkedCityOtherBusiness.prop("disabled", true);
        // Update (Other) visibility 
        cityOtherBusinessField.hide();
        cityBusinessField.show();
    }
}
// Toggle Business City based on whether Business State has a value
function toggleCityBusiness() {
    var stateBusiness = $("#ndph_mequestion12").val();
    var stateOtherBusiness = $("#ndph_statebusinessothers").val();
    var checkedStateOtherBusiness = $("#ndph_addressnotshownonlist_statebusiness");
    var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");
    var cityBusiness = $("#ndph_mequestion13");
    var cityBusinessName = $("#ndph_mequestion13_name");
    var cityBusinessEntity = $("#ndph_mequestion13_entityname");
    var cityBusinessField = cityBusiness.parent().parent().parent();
    var cityOtherBusiness = $("#ndph_citybusinessothers");
    var cityOtherBusinessField = cityOtherBusiness.parent().parent();

    // Clear City
    // cityBusiness.val("");
    // cityBusinessName.val("");
    // cityBusinessEntity.val("");
    // // Clear City (Other)
    // // cityOtherBusiness.val("");
    // // Untick City "Others" checkbox if State "Others" is not ticked
    // if (checkedStateOtherBusiness.prop("checked")) {
    //     // checkedCityOtherBusiness.prop("checked", false);
    // }

    if (stateBusiness || stateOtherBusiness) {
        // Enable City
        // cityBusiness.prop("disabled", false);
        cityBusiness.parent().find(".input-group-btn").show();
        cityBusiness.parent().css("display", "table");
        cityBusiness.parent().css("width", "100%");
        //State Border radius
        $("#ndph_mequestion13_name").css("border-bottom-right-radius","0px");
        $("#ndph_mequestion13_name").css("border-top-right-radius","0px");
        // Enable City (Other)
        // cityOtherBusiness.prop("disabled", false);
        if (stateBusiness && !checkedStateOtherBusiness.prop("checked")) {
            // Enable "Others" checkbox only if State is populated and not locked to "Other"
            checkedCityOtherBusiness.prop("disabled", false);
        }
    }
    else {
        // Disable City
        cityBusiness.prop("disabled", true);
        cityBusiness.parent().find(".input-group-btn").hide();
        cityBusiness.parent().css("display", "block");
        //State Border radius
        $("#ndph_mequestion13_name").css("border-bottom-right-radius","5px");
        $("#ndph_mequestion13_name").css("border-top-right-radius","5px");
        // Disable City (Other)
        cityOtherBusiness.prop("disabled", true);
        // Disable "Others" checkbox
        checkedCityOtherBusiness.prop("disabled", true);
        // Update (Other) visibility 
        cityOtherBusinessField.hide();
        cityBusinessField.show();
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
    var stateOtherBusinessField = stateOtherBusiness.parent().parent();
    
    var cityBusiness = $("#ndph_mequestion13");
    var cityOtherBusiness = $("#ndph_citybusinessothers");
    var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");

    if (checkedStateOtherBusiness.prop("checked")) {
        stateBusiness.val("");
        stateBusinessName.val("");
        stateBusinessEntity.val("");
        stateBusinessField.hide();
        stateOtherBusinessField.show();
        // Lock City to Other
        checkedCityOtherBusiness.prop("disabled", false);
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
        //City Border radius
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
    var stateBusiness = $("#ndph_mequestion12");
    var stateBusinessField = stateBusiness.parent().parent().parent();
    var stateOtherBusiness = $("#ndph_statebusinessothers");
    var stateOtherBusinessField = stateOtherBusiness.parent().parent()

    var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");
    var cityBusiness = $("#ndph_mequestion13");
    var cityBusinessField = cityBusiness.parent().parent().parent();
    var cityOtherBusiness = $("#ndph_citybusinessothers");
    var cityOtherBusinessField = cityOtherBusiness.parent().parent();


    // checkboxes
    var toggleStateOther = $("#ndph_addressnotshownonthelistbusiness").prop("checked");
    var toggleCityOther = $("#ndph_addressnotshownonlist_citybusiness").prop("checked");

    // if (businessIsHome) {
    //     // alert("nasa if");
    //     // toggleBusinessIsHomeAddress();
    //     // $(".section[data-name='seell_business_address']").closest("fieldset").hide();
    //     if(toggleStateOther) {
    //         $("#ndph_statebusinessothers").parent().parent().show();                                // Hide State (Other)
    //         $("#ndph_mequestion12").parent().parent().parent().hide();  
    //         $("#ndph_citybusinessothers").parent().parent().show();                                 // Hide City (Other)
    //         $("#ndph_mequestion13").parent().parent().parent().hide();   
    //     } else if (!toggleStateOther) {
    //         $("#ndph_statebusinessothers").parent().parent().hide();                                // Hide State (Other)
    //         $("#ndph_mequestion12").parent().parent().parent().show();  
    //         // $("#ndph_citybusinessothers").parent().parent().show();                                 // Hide City (Other)
    //         // $("#ndph_mequestion13").parent().parent().hide();   
    //     }

    //     if(toggleCityOther) {
    //         $("#ndph_citybusinessothers").parent().parent().show();                                 // Hide City (Other)
    //         $("#ndph_mequestion13").parent().parent().parent().hide(); 
    //     } else if(!toggleCityOther) {
    //         $("#ndph_citybusinessothers").parent().parent().hide();                                 // Hide City (Other)
    //         $("#ndph_mequestion13").parent().parent().parent().show(); 
    //     }
    // }
    if (!countryBusiness) {
        // Disable State
        stateBusiness.prop("disabled", true);
        stateBusiness.parent().find(".input-group-btn").hide();
        stateBusiness.parent().css("display", "block");
        //State Border radius
        $("#ndph_mequestion12_name").css("border-bottom-right-radius","5px");
        $("#ndph_mequestion12_name").css("border-top-right-radius","5px");
        // Disable and hide State (Other)
        stateOtherBusiness.prop("disabled", true);
        stateOtherBusinessField.hide();
        // Reset and disable "Other" checkbox for State
        checkedStateOtherBusiness.prop("checked", false);
        checkedStateOtherBusiness.prop("disabled", true);
        // Disable City
        cityBusiness.prop("disabled", true);
        cityBusiness.parent().find(".input-group-btn").hide();
        cityBusiness.parent().css("display", "block");
        //State Border radius
        $("#ndph_mequestion13_name").css("border-bottom-right-radius","5px");
        $("#ndph_mequestion13_name").css("border-top-right-radius","5px");
        // Disable and hide City (Other)
        cityOtherBusiness.prop("disabled", true);
        cityOtherBusinessField.hide();
        // Reset and disable "Other" checkbox for City 
        checkedCityOtherBusiness.prop("checked", false);
        checkedCityOtherBusiness.prop("disabled", true);
    }
    else if (checkedStateOtherBusiness.prop("checked")) {
        // Hide State
        stateBusinessField.hide();
        // Hide City
        cityBusinessField.hide();
        // Reset and disable "Other" checkbox for City 
        checkedCityOtherBusiness.prop("checked", true);
        checkedCityOtherBusiness.prop("disabled", false);
        if (!stateBusiness) {
            // Disable City
            // cityBusiness.prop("disabled", true);
            cityBusiness.parent().find(".input-group-btn").hide();
            cityBusiness.parent().css("display", "block");
            //State Border radius
            $("#ndph_mequestion13_name").css("border-bottom-right-radius","5px");
            $("#ndph_mequestion13_name").css("border-top-right-radius","5px");
        }
        if (!stateOtherBusiness) {
            // Disable City (Other)
            cityOtherBusiness.prop("disabled", true);
        }
    }
    else if (!stateBusiness || !stateOtherBusiness) {
        // Hide State (Other)
        stateOtherBusinessField.hide();
        // Disable City
        // cityBusiness.prop("disabled", true);
        cityBusiness.parent().find(".input-group-btn").hide();
        cityBusiness.parent().css("display", "block");
        //city Border radius
        $("#ndph_mequestion13_name").css("border-bottom-right-radius","5px");
        $("#ndph_mequestion13_name").css("border-top-right-radius","5px");
        // Disable and hide City (Other)
        // cityOtherBusiness.prop("disabled", true);
        cityOtherBusinessField.hide();
        // Untick and disable "Others"
        checkedCityOtherBusiness.prop("checked", false);
        // checkedCityOtherBusiness.prop("disabled", true);
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
    // INITIALIZE FORM
    // Validator definition
    if (typeof (Page_Validators) == 'undefined') return;
    // Date of birth validator: disallow future date
    var dateOfBirthValidator = document.createElement('span');
    dateOfBirthValidator.style.display = "none";
    dateOfBirthValidator.id = "ndph_dateofbirthValidator";
    dateOfBirthValidator.controltovalidate = "ndph_dateofbirth";
    dateOfBirthValidator.errormessage = "<a href='#ndph_dateofbirth_datepicker_description'>Date of Birth cannot be set to a future date.</a>";
    dateOfBirthValidator.validationGroup = "";        // Set this if you have set ValidationGroup on the form
    dateOfBirthValidator.initialvalue = "";
    dateOfBirthValidator.evaluationfunction = function () {
        var currentDate = new Date();
        var dateOfBirth = $("#ndph_dateofbirth").val();
        if (dateOfBirth) {
            dateOfBirth = new Date(dateOfBirth);      // Convert to Date object if filled in
        }
        if ((dateOfBirth == "") || (dateOfBirth < currentDate)) {
            return true;
        }
        else {
            return false;
        }
    };

    // Program validator: check if either a degree program or an open program is selected
    var programValidator = document.createElement('span');
    programValidator.style.display = "none";
    programValidator.id = "ndph_programValidator";
    programValidator.controltovalidate = "ndph_program";
    programValidator.errormessage = "Please select a program to apply for.";
    programValidator.validationGroup = "";        // Set this if you have set ValidationGroup on the form
    programValidator.initialvalue = "";
    programValidator.evaluationfunction = function () {
        var degreeProgram = $("#ndph_program");
        var openProgram = $("#ndph_seellopenprograms");
        
        if (degreeProgram.val() || openProgram.val()) {
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
        if ((jobFunction != null) && (jobFunction == 649840015))
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

    // Industry (Other) validator: 
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
    Page_Validators.push(programValidator);
    // Validators for Employment Details
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
    // *End of validator code*

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
    if (params["id"]) {
        var prepopulatedProgram = programs.find(     // Returns an object
            function(program) {
                // Search in "programs" array for element matching GUID on program lookup
                return program.ndph_programid == params["id"];
            }
        );
        
    //     switch (prepopulatedProgram.ndph_programtype.Value) {
    //         // When option set field values are retrieved from the DOM via jQuery, they are retrieved as strings
    //         // But when they're retrieved from a JSON object as the response from an OData feed, they are retrieved as integers
    //         case 649840000:
    //             if (!$("#ndph_program").val()) {
    //                 $("#ndph_programtypeapplication").val("649840000");
                
    //                 $("#ndph_program").val(prepopulatedProgram.ndph_programid);
    //                 $("#ndph_program_name").val(prepopulatedProgram.ndph_name);
    //                 $("#ndph_program_entityname").val("ndph_program");
    //             }
    //             break;
    //         case 649840001:
    //             if (!$("#ndph_seellopenprograms").val()) {
    //                 $("#ndph_programtypeapplication").val("649840001");

    //                 $("#ndph_seellopenprograms").val(prepopulatedProgram.ndph_programid);
    //                 $("#ndph_seellopenprograms_name").val(prepopulatedProgram.ndph_name);
    //                 $("#ndph_seellopenprograms_entityname").val("ndph_program");
    //             }
    //             break;
    //     }
    }


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
    if (!$("#ndph_seellopenprograms").val()) {
        if (params["id"]) 
        {
            var prepopulatedProgram = programs.find(
                    // Returns an object
                function(program) {
                    $("#ndph_seellopenprograms").val(prepopulatedProgram.ndph_programid);
                    $("#ndph_seellopenprograms_name").val(prepopulatedProgram.ndph_name);
                    $("#ndph_seellopenprograms_entityname").val("ndph_program");
                    // Search in "programs" array for element matching GUID on program lookup
                    return program.ndph_programid == params["id"];
                }
            );
        }
    }

    // Disable fields
    $("#firstname").prop('disabled', true);
    $("#middlename").prop('disabled', true);
    $("#lastname").prop('disabled', true);
    $("#ndph_suffix").prop('disabled', true);
    $("#ndph_nickname").prop('disabled', true);
    $("#ndph_countryofbirth").prop('disabled', true);
    $("#ndph_sex").prop('disabled', true);
    $("#ndph_citizenship").prop('disabled', true);
    $("#mobilephone").prop('disabled', true);
    $("#emailaddress1").prop('disabled', true);
    $("#ndph_countrycodemobilenew").parent().find('.input-group-btn').hide();
    $("#ndph_dateofbirth_datepicker_description").parent().find('.form-control').prop('disabled', true);
    $("#ndph_dateofbirth").parent().find('.input-group-addon').hide();
    $("#ndph_totalyearsofworkexperienceyears").prop("disabled",true);
    $("#ndph_totalyearsofworkexperiencemonths").prop("disabled",true);
    $("#ndph_highesteducationalattainment").prop("disabled",true);
    $("#ndph_degreeprogramname").prop("disabled",true);
    $("#ndph_nameofschoollastattended").prop("disabled",true);
    $("#ndph_yearcompleted").prop("disabled",true);
    // Disable home address fields
    $("#address1_line1").prop('disabled', true);
    $("#ndph_country").prop('disabled', true);
    $("#ndph_country_name").parent().find('.input-group-btn').hide();
    $("#address1_postalcode").prop('disabled', true); 
    $("#ndph_state").prop('disabled', true);
    $("#ndph_state_name").parent().find('.input-group-btn').hide(); 
    $("#address1_stateorprovince").prop('disabled', true); 
    $("#ndph_addressnotshownonthelist").prop('disabled', true);
    $("#address1_city").prop('disabled', true);  
    $("#ndph_city").prop('disabled', true);
    $("#ndph_city_name").parent().find('.input-group-btn').hide(); 
    $("#ndph_addressnotshownonlist_city").prop('disabled', false);
    $("#ndph_addressnotshownonlist_city").parent().parent().parent().hide();
    // Disable business address fields
    $("#ndph_businessaddressishomeaddress").prop('disabled', true);
    $("#ndph_street1business").prop('disabled', true);
    $("#ndph_mequestion11").prop('disabled', true);
    $("#ndph_mequestion11_name").parent().find('.input-group-btn').hide();  
    $("#ndph_mequestion12").prop('disabled', true);
    $("#ndph_mequestion12_name").parent().find('.input-group-btn').hide(); 
    $("#ndph_mequestion13").prop('disabled', true);
    $("#ndph_mequestion13_name").parent().find('.input-group-btn').hide();  
    $("#ndph_mequestion14").prop('disabled', true);
    $("#ndph_statebusinessothers").prop('disabled', true);
    $("#ndph_citybusinessothers").prop('disabled', true);
    $("#ndph_addressnotshownonthelistbusiness").prop('disabled', true);
    $("#ndph_addressnotshownonlist_citybusiness").prop('disabled', false);
    $("#ndph_addressnotshownonlist_citybusiness").parent().parent().parent().hide();


    // Hide metadata fields
    $(".section[data-name='hidden']").closest("fieldset").hide();

    

    // Mark Program fields as required
    $("#ndph_program_label").parent().attr("class", "info required");
    $("#ndph_seellopenprograms_label").parent().attr("class", "info required");

    // Resize Program fields

    $("#ndph_seellopenprograms").parent().parent().attr("colspan","3");
    $("#ndph_seellopenprograms").parent().css("width","100%");

    // Resize State/City fields
    $("#ndph_country").parent().parent().parent().attr("colspan","3");          // Home Address
    $("#ndph_country").parent().css("width","100%");
    $("#ndph_state").parent().parent().parent().attr("colspan","3");
    $("#ndph_state").parent().css("width","100%");
    $("#address1_stateorprovince").parent().parent().attr("colspan","3");
    $("#ndph_city").parent().parent().parent().attr("colspan","3");
    $("#ndph_city").parent().css("width","100%");
    $("#address1_city").parent().parent().attr("colspan","3");
    
    $("#ndph_mequestion11").parent().parent().parent().attr("colspan","3");     // Business Address
    $("#ndph_mequestion11").parent().css("width","100%");
    $("#ndph_mequestion12").parent().parent().parent().attr("colspan","3");
    $("#ndph_mequestion12").parent().css("width","100%");
    $("#ndph_statebusinessothers").parent().parent().attr("colspan","3");
    $("#ndph_mequestion13").parent().parent().parent().attr("colspan","3");
    $("#ndph_mequestion13").parent().css("width","100%");
    $("#ndph_citybusinessothers").parent().parent().attr("colspan","3");

    //CSS for border-radius of lookup fields
    //Date of Birth
    $("#ndph_dateofbirth_datepicker_description").css("border-bottom-right-radius","5px");
    $("#ndph_dateofbirth_datepicker_description").css("border-top-right-radius","5px");
    //Country Code for mobile
    $("#ndph_countrycodemobilenew_name").css("border-bottom-right-radius","5px");
    $("#ndph_countrycodemobilenew_name").css("border-top-right-radius","5px");

    //Home Address
    //country
    $("#ndph_country_name").css("border-bottom-right-radius","5px");
    $("#ndph_country_name").css("border-top-right-radius","5px");
    //State
    $("#ndph_state_name").css("border-bottom-right-radius","5px");
    $("#ndph_state_name").css("border-top-right-radius","5px");
    //City
    $("#ndph_city_name").css("border-bottom-right-radius","5px");
    $("#ndph_city_name").css("border-top-right-radius","5px");

    //Business Address
    //country Business
    $("#ndph_mequestion11_name").css("border-bottom-right-radius","5px");
    $("#ndph_mequestion11_name").css("border-top-right-radius","5px");
    //State Business
    $("#ndph_mequestion12_name").css("border-bottom-right-radius","5px");
    $("#ndph_mequestion12_name").css("border-top-right-radius","5px");
    //City Business
    $("#ndph_mequestion13_name").css("border-bottom-right-radius","5px");
    $("#ndph_mequestion13_name").css("border-top-right-radius","5px");

    // Initialize Address fields
    initializeHomeAddress();
    initializeBusinessAddress();
    showAndHideIndustryOther();


    // FUNCTIONS TO EXECUTE ON FIELD CHANGE:
    // Update School field);
    $("#ndph_program").change(updateProgram);


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
    
    // activate checkbox
    $("#ndph_addressnotshownonthelist").prop("disabled", false);
    $("#ndph_addressnotshownonthelist").parent().parent().parent().hide();
    $("#ndph_addressnotshownonthelistbusiness").prop("disabled", false);
    $("#ndph_addressnotshownonthelistbusiness").parent().parent().parent().hide();


});