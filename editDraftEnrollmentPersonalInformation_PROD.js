$(document).ready(function() {

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

    // Disable new address text fields -- January 19 2021
    $("#ndph_statetextonly").prop('disabled', true);
    $("#ndph_citytextonly").prop('disabled', true);
    $("#ndph_statebusinesstextonly").prop('disabled', true);
    $("#ndph_citybusinesstextonly").prop('disabled', true);
    // disable new fields
    $("#ndph_company").prop("disabled", true);
    $("#ndph_industry").prop("disabled", true);
    $("#ndph_joblevel").prop("disabled", true);
    $("#jobtitle").prop("disabled", true);
    $("#ndph_industryname1").prop("disabled", true);
    // disable job function
    $("#ndph_jobfunction").prop("disabled",true);
    $("#ndph_jobfunctionother").prop("disabled",true);

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
        } else {
            $("#ndph_jobfunctionother").parent().parent().hide();
        }
    }
   
    // Total Work Experience
    $("[data-name='total_work_experience_section']").prev().css({  "color" : "black", "text-transform" : "capitalize", "font-size" : "15px", "font-weight" : "500", "font-family" : "Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif", "margin-left" : "17px" });

    $("#ndph_businessaddressishomeaddress").parent().parent().parent().hide(); // hide same as home address button

    $("#ndph_school").parent().parent().parent().hide(); //hide school
    function toggleStateOtherHome() {
        var checkedStateOtherHome = $("#ndph_addressnotshownonthelist");
        var stateHome = $("#ndph_state");
        var stateHomeField = stateHome.parent().parent().parent();
        var stateOtherHome = $("#address1_stateorprovince");
        var stateOtherHomeField = stateOtherHome.parent().parent();

        if (checkedStateOtherHome.prop("checked")) {
            stateHomeField.hide();
            stateOtherHomeField.show();
        }
        else {
            stateOtherHomeField.hide();
            stateHomeField.show();
        }
    }

    // Hide/show Home City (Other) based on "Others" checkbox
    function toggleCityOtherHome() {
        var checkedCityOtherHome = $("#ndph_addressnotshownonlist_city");
        var cityHome = $("#ndph_city");
        var cityHomeField = cityHome.parent().parent().parent();
        var cityOtherHome = $("#address1_city");
        var cityOtherHomeField = cityOtherHome.parent().parent();

        if (checkedCityOtherHome.prop("checked")) {
            cityHomeField.hide();
            cityOtherHomeField.show();
        }
        else {
            cityOtherHomeField.hide();
            cityHomeField.show();
        }
    }

     // Toggle Business State based on whether Business Country has a value
     function toggleStateBusiness() {
        var checkedStateOtherBusiness = $("#ndph_addressnotshownonthelistbusiness");
        var stateBusiness = $("#ndph_mequestion12");
        var stateBusinessField = stateBusiness.parent().parent().parent();
        var stateOtherBusiness = $("#ndph_statebusinessothers");
        var stateOtherBusinessField = stateOtherBusiness.parent().parent();

        if (checkedStateOtherBusiness.prop("checked")) {
            stateBusinessField.hide();
            stateOtherBusinessField.show();
        }
        else {
            stateOtherBusinessField.hide();
            stateBusiness.show();
        }
    }
    // Toggle Business City based on whether Business State has a value
    function toggleCityBusiness() {
        var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");
        var cityBusiness = $("#ndph_mequestion13");
        var cityBusinessField = cityBusiness.parent().parent().parent();
        var cityOtherBusiness = $("#ndph_citybusinessothers");
        var cityOtherBusinessField = cityOtherBusiness.parent().parent();

        if (checkedCityOtherBusiness.prop("checked")) {
            cityBusinessField.hide();
            cityOtherBusinessField.show();
        }
        else {
            cityOtherBusinessField.hide();
            cityBusiness.show();
        }
    }


    // ################################################################
    // INITIALIZE FORM
    // ################################################################

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

    // Hide metadata fields
    $(".section[data-name='hidden']").closest("fieldset").hide();

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
        $("p.oep_instruct").css( { "margin-left" : "92px" });
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

    // Disable applicant info fields
    $("#firstname").prop('disabled', true);
    $("#middlename").prop('disabled', true);
    $("#lastname").prop('disabled', true);
    $("#ndph_suffix").prop('disabled', true);
    $("#emailaddress1").prop('disabled', true);
    $("#ndph_countrycodemobilenew").prop('disabled', true);
    $("#ndph_countrycodemobilenew_name").parent().find('.input-group-btn').hide();
    $("#mobilephone").prop('disabled', true);
    $("#ndph_dateofbirth_datepicker_description").parent().find('.form-control').prop('disabled', true);
    $("#ndph_dateofbirth").parent().find('.input-group-addon').hide();
    $("#ndph_sex").prop('disabled', true);
    $("#ndph_countryofbirth").prop('disabled', true);
    $("#ndph_citizenship").prop('disabled', true);
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
    $("#ndph_addressnotshownonlist_city").prop('disabled', true);
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
    $("#ndph_addressnotshownonlist_citybusiness").prop('disabled', true);
    // Disable dietary info fields
    $("#ndph_foodallergies").prop('disabled', true);

    // Change color and font-style country code and mobile phone
    $("div.description.below").css( { "color" : "gray", "font-weight" : "400", "font-style" : "italic", "font-size" : "10.5" } );
    $("input#mobilephone.text.form-control").css( { "margin-top" : "24px" } );

    // Resize SEELL Program field
    $("#ndph_seellopenprograms").parent().parent().parent().attr("colspan","3");          // Home Address
    $("#ndph_seellopenprograms").parent().css("width","100%");
    // Resize State/City fields
    $("#ndph_country").parent().parent().parent().attr("colspan","3");          // Home Address
    $("#ndph_country").parent().css("width","100%");
    $("#ndph_state").parent().parent().parent().attr("colspan","2");
    $("#ndph_state").parent().css("width","100%");
    $("#address1_stateorprovince").parent().parent().attr("colspan","2");
    $("#ndph_city").parent().parent().parent().attr("colspan","2");
    $("#ndph_city").parent().css("width","100%");
    $("#address1_city").parent().parent().attr("colspan","2");
    
    $("#ndph_mequestion11").parent().parent().parent().attr("colspan","3");     // Business Address
    $("#ndph_mequestion11").parent().css("width","100%");
    $("#ndph_mequestion12").parent().parent().parent().attr("colspan","2");
    $("#ndph_mequestion12").parent().css("width","100%");
    $("#ndph_statebusinessothers").parent().parent().attr("colspan","2");
    $("#ndph_mequestion13").parent().parent().parent().attr("colspan","2");
    $("#ndph_mequestion13").parent().css("width","100%");
    $("#ndph_citybusinessothers").parent().parent().attr("colspan","2");

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

    // Initialize Program
    //lockProgram();

    // Initialize Address (Other) fields
    showAndHideIndustryOther();
    jobFunction();
    toggleStateOtherHome();
    toggleCityOtherHome();
    toggleStateBusiness();
    toggleCityBusiness();

});