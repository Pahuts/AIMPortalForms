$(document).ready(function() {

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

    // jquery css for new fields
    // added new fields jan 19 2021
    $("#ndph_statetextonly").parent().parent().attr("colspan","3");
    $("#ndph_statetextonly").parent().css("width","100%");
    $("#ndph_citytextonly").parent().parent().attr("colspan","3");
    $("#ndph_citytextonly").parent().css("width","100%");
    $("#ndph_statebusinesstextonly").parent().parent().attr("colspan","3");
    $("#ndph_statebusinesstextonly").parent().css("width","100%");
    $("#ndph_citybusinesstextonly").parent().parent().attr("colspan","3");
    $("#ndph_citybusinesstextonly").parent().css("width","100%");
    // end of new fields
    $("#address1_postalcode").parent().parent().attr("colspan","3");
    $("#address1_postalcode").parent().css("width","100%");
    $("#ndph_mequestion14").parent().parent().attr("colspan","3");
    $("#ndph_mequestion14").parent().css("width","100%");    
    // Hide school
    $("#ndph_school").parent().parent().parent().hide();
    // Insert educational background edit instruction
    $('<div>')
    .addClass('educationalBgInstruction')
    .attr('id', 'educationalBgInstruction')
    .append('<p>To update this section, proceed to My Profile > <a href = "/profile/OtherInfo/">Other Information</a>.</p>')
    .insertBefore('[data-name="educational_background"]');

     // Insert professional background edit instruction
     $('<div>')
     .addClass('professionalBgInstruction')
     .attr('id', 'professionalBgInstruction')
     .append('<p>To update this section, proceed to My Profile > <a href = "/profile/OtherInfo/">Other Information</a>.</p>')
     .insertBefore('[data-name="Professional_Background"]'); 

    // Job function script
    function jobFunction()
    {
        if($("#ndph_jobfunction").val() == "649840015"){
            $("#ndph_jobfunctionother").parent().parent().show();
        }else {
            $("#ndph_jobfunctionother").parent().parent().hide();
        }
    }
    
   
     // Adjust total work experience
    $("[data-name='total_work_experience_section']").prev().css({  "color" : "black", "text-transform" : "capitalize", "font-size" : "15px", "font-weight" : "500", "font-family" : "Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif", "margin-left" : "17px" });

   /*$("#ndph_jobfunction").prop("disabled",true);
   $("#ndph_jobfunctionother").prop("disabled",true);
    // disable additional fields
    // $("#parentaccountid").parent().find('.input-group-btn').hide(); 
    // $("#parentaccountid").parent().parent().parent().attr("colspan","4");          // Billing Information
    // $("#parentaccountid").parent().css("width","100%");
    $("#ndph_company").prop("disabled", true);
    $("#ndph_industry").prop("disabled", true);
    $("#ndph_joblevel").prop("disabled", true);
    $("#ndph_industryname1").prop("disabled", true);
    $("#ndph_applicantpositiontitle").prop("disabled", true);
    $("#ndph_totalyearsofworkexperienceyears").prop("disabled",true);
    $("#ndph_totalworkexperiencemonths").prop("disabled",true);
    $("#ndph_highesteducationalattainment").prop("disabled",true);
    $("#ndph_degreeprogramname").prop("disabled",true);
    $("#ndph_nameofschoollastattended").prop("disabled",true);
    $("#ndph_yearcompleted").prop("disabled",true);*/
    //City Billing
    $("#parentaccountid_name").css("border-bottom-right-radius","5px");
    $("#parentaccountid_name").css("border-top-right-radius","5px");

    // hide PICOT Section
    var checkedPICOT = $("#ndph_otherpersoninchargeoftraining").prop("checked");
    var PICOT = $(".section[data-name='person_in_charge_of_training_section']").closest("fieldset");
    if($("#ndph_otherpersoninchargeoftraining").prop("checked")){
        $(".section[data-name='person_in_charge_of_training_section']").closest("fieldset").show();
    }else {
        $(".section[data-name='person_in_charge_of_training_section']").closest("fieldset").hide();
    }
    if($("#ndph_seellprogramtype").val() == "649840001") {
        $(".tab[data-name='Other_Information']").hide();
        $(".tab[data-name='Other_Information']").prev().hide();   // Hides the tab's title
    }else {
        $(".tab[data-name='Other_Information']").show();
        $(".tab[data-name='Other_Information']").prev().show();   // shows the tab's title
    }
        // How did you find out about this program field function
        function participantSource() {
          var pSource = $("#ndph_oderhowdidyoufirstfoundoutaboutprgram").val();
          var online = $("#ndph_online");
          var traditionalMedia = $("#ndph_traditionalmedia");
          var wordOfMouth = $("#ndph_wordofmouth");

          if (pSource == "649840000") {
              online.parent().parent().show();
              traditionalMedia.parent().parent().hide();
              wordOfMouth.parent().parent().hide();

          }else if (pSource == "649840001") {
              online.parent().parent().hide();
              traditionalMedia.parent().parent().show();
              wordOfMouth.parent().parent().hide();
          }else if (pSource == "649840002") {
              online.parent().parent().hide();
              traditionalMedia.parent().parent().hide();
              wordOfMouth.parent().parent().show();      
          }else {
              online.parent().parent().hide();
              traditionalMedia.parent().parent().hide();
              wordOfMouth.parent().parent().hide();      
          }
        }

    // $("#InsertButton").css({"float" : "right !important"});
    // check seell program type -- changed to check SEELL Portal Status
    function seellProgramType() { // shows/hides the participants tab depending on seell portal status
        var seellPT = $("#ndph_seellprogramtype").val();
        var seellPS = $("#ndph_seellportalstatus").val();
        var seellAT= $("#ndph_seellapplicanttype").val();
        // var tab = $('table[data-name="Participants_Tab"]').closest('.tab'); 
        // var label = tab.prev('.tab-title');

        if (seellAT == "649840000") { // hides participants tab if Applicant Type == Individual, show background information
            $(".tab[data-name='Participants_Tab']").hide();          // Hides tab
            $(".tab[data-name='Participants_Tab']").prev().hide();   // Hides the tab's title
            $(".tab[data-name='Background_Information']").show();          // Hides tab
            $(".tab[data-name='Background_Information']").prev().show();   // Hides the tab's title
            // $(".tab[data-name='Other_Information']").show();      
            // $(".tab[data-name='Other_Information']").prev().show();  


        } else if (seellAT == "649840001") { // shows participants tab if Applicant Type == Corporate, hide background information
            $(".tab[data-name='Participants_Tab']").show();          // Shows tab
            $(".tab[data-name='Participants_Tab']").prev().show();   // Shows the tab's title
            // $(".tab[data-name='Other_Information']").hide();      
            // $(".tab[data-name='Other_Information']").prev().hide();  
            $(".tab[data-name='Background_Information']").hide();
            $(".tab[data-name='Background_Information']").prev().hide();  
            // debugging tool
            // alert("awit");
        }
    }
    
    // billing information functions
    function updatePersonICOTraining() {
    var checkedPICOT = $("#ndph_otherpersoninchargeoftraining").prop("checked");
    var PICOT = $(".section[data-name='person_in_charge_of_training_section']").closest("fieldset");
    
        if (checkedPICOT) {
            PICOT.show();
        } else {
            PICOT.hide();
            clearPersonInChargeOfTraining();
        }
    }
    // run function
    
    function clearPersonInChargeOfTraining() {
        var countryCode = $("#ndph_countrycodepersoninchargeoftraining2");
        var countryCodeName = $("#ndph_countrycodepersoninchargeoftraining2_name");
        var countryCodeEntity = $("#ndph_countrycodepersoninchargeoftraining2_entityname");

        $("#ndph_firstnamepersoninchargeoftraining").val("");
        $("#ndph_middlenamepersoninchargeoftraining").val("");
        $("#ndph_lastnamepersoninchargeoftraining").val("");
        countryCode.val("");
        countryCodeName.val("");
        countryCodeEntity.val("");
        $("#ndph_mobilenumberpersoninchargeoftraining").val("");
        $("#ndph_emailpersoninchargeoftraining").val("");
        $("#ndph_positiontitlepersoninchargeoftraining").val("");
    }

    function billingCountry() { // disables states when country does not contain data
        var billingCountry = $("#ndph_countrybilling").val();
        var billingState = $("#ndph_statebilling");
        var billingStateName = $("#ndph_statebilling_name");
        var billingStateEntityName = $("#ndph_statebilling_entityname");
        var billingStateOther = $("#ndph_stateotherbilling");
        var checkedState = $("#ndph_statenotonthelistbilling");
        var billingCity = $("#ndph_citybilling");
        var billingCityName = $("#ndph_citybilling_name");
        var billingCityEntityName = $("#ndph_citybilling_entityname");

        if (billingCountry)
        {
            billingStateOther.prop('disabled',false);
            checkedState.prop('disabled', false);
            billingState.parent().find('.input-group-btn').show();
            //State Billing Border radius
            $("#ndph_statebilling_name").css("border-bottom-right-radius","0px");
            $("#ndph_statebilling_name").css("border-top-right-radius","0px");
        }
        else
        {
            checkedState.prop('disabled', true);
            billingState.val("");
            billingStateName.val("");
            billingStateEntityName.val("");
            billingStateOther.val("");
            billingStateOther.prop('disabled',true);
            // billingStateOther.parent().parent().hide();
            billingState.parent().find('.input-group-btn').hide();
            //State Billing Border radius
            $("#ndph_statebilling_name").css("border-bottom-right-radius","5px");
            $("#ndph_statebilling_name").css("border-top-right-radius","5px");
        }   

    }


    function billingState() {
        var billingState = $("#ndph_statebilling").val();
        var billingStateName = $("#ndph_statebilling_name");
        var billingStateEntityName = $("#ndph_statebilling_entityname");
        var billingStateOther = $("#ndph_stateotherbilling").val();
        var billingCity = $("#ndph_citybilling");
        var billingCityName = $("#ndph_citybilling_name");
        var billingCityEntityName = $("#ndph_citybilling_entityname");
        var billingCityOther = $("#ndph_cityotherbilling");
        var checkedCity = $("#ndph_citynotonthelistbilling");

        if (billingState || billingStateOther) 
        {
            // enable city fields
            billingCity.parent().find('.input-group-btn').show(); 
            //City Billing Border radius
            $("#ndph_citybilling_name").css("border-bottom-right-radius","0px");
            $("#ndph_citybilling_name").css("border-top-right-radius","0px");
            billingCityOther.prop("disabled", false);
            checkedCity.prop("disabled", false);
            
            // alert("nandito sa if");
        }else 
        {
            // disable city fields
            billingCity.val("");
            billingCityName.val("");
            billingCityEntityName.val("");
            billingCityOther.val("");
            billingCity.parent().find('.input-group-btn').hide();
            //City Billing Border radius
            $("#ndph_citybilling_name").css("border-bottom-right-radius","5px");
            $("#ndph_citybilling_name").css("border-top-right-radius","5px");
            billingCityOther.prop("disabled", true);
            checkedCity.prop("disabled", true);
            
            // alert("nandito sa else");
        }
    }


    function billingStateCheck() { // checks if state not on the list is checked
        var billingState = $("#ndph_statebilling");
        var billingStateName = $("#ndph_statebilling_name");
        var billingStateEntityName = $("#ndph_statebilling_entityname");
        var billingStateOther = $("#ndph_stateotherbilling");
        var checkedState = $("#ndph_statenotonthelistbilling");
        var checkedCity = $("#ndph_citynotonthelistbilling");


        if (checkedState.prop("checked")) 
        {   // disable state field and city checkbox
            billingStateOther.parent().parent().show();
            billingState.parent().parent().parent().hide();
            checkedCity.prop("checked", true);
            checkedCity.prop("disabled", true);
            billingCityCheck();
            billingState.val("");
            billingStateName.val("");
            billingStateEntityName.val("");

        }else
        {   // enable statefield and city checkbox
            billingStateOther.parent().parent().hide();
            billingState.parent().parent().parent().show();
            // checkedCity.prop("checked", false);
            
            billingStateOther.val("");
            billingCityCheck();
            
        }
    }

    function billingCityCheck() {  // checks if city not on the list is checked
        var billingCity = $("#ndph_citybilling");
        var billingCityName = $("#ndph_citybilling_name");
        var billingCityEntityName = $("#ndph_citybilling_entityname");
        var billingCityOther = $("#ndph_cityotherbilling");
        var checkedCity = $("#ndph_citynotonthelistbilling");

        if (checkedCity.prop("checked")) 
        {
            billingCityOther.parent().parent().show();
            billingCity.parent().parent().parent().hide();
            billingCity.val("");
            billingCityName.val("");
            billingCityEntityName.val("");

        }else
        {
            billingCityOther.parent().parent().hide();
            billingCity.parent().parent().parent().show();
           billingCityOther.val("");
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


    // hide fields
    // $("#ndph_statenotonthelistbilling").parent().parent().parent().hide();
    // $("#ndph_citynotonthelistbilling").parent().parent().parent().hide();


    // adjust column spans of fields
    $("#ndph_countrybilling").parent().parent().parent().attr("colspan","2");          // Billing Information
    $("#ndph_countrybilling").parent().css("width","100%");
    $("#ndph_statebilling").parent().parent().parent().attr("colspan","2");
    $("#ndph_statebilling").parent().css("width","100%");
    $("#ndph_stateotherbilling").parent().parent().attr("colspan","2");
    $("#ndph_citybilling").parent().parent().parent().attr("colspan","2");
    $("#ndph_citybilling").parent().css("width","100%");
    $("#ndph_cityotherbilling").parent().parent().attr("colspan","2");


    // Initiate the functions
    seellProgramType(); // shows/hides the participants tab depending on the value of seell program type
    billingCountry(); // shows or hides billing information fields
    billingStateCheck(); // shows or hides state fields
    billingCityCheck(); // shows or hides city fields
    billingState(); // Disables or enables state and city fields
    toggleIndustryOther();
    jobFunction();

    // Hide and show industry other
    function showAndHideIndustryOther()
    {
        if($("#ndph_industry").val() == "20438f98-603f-ea11-a813-000d3a851ff7"){
            $("#ndph_industryname1").parent().parent().show();
        } else {
            $("#ndph_industryname1").parent().parent().hide();
        }
    }
    

    // Initiate functions on field change
    $("#ndph_jobfunction").change(jobFunction);
    $("#ndph_industry").change(showAndHideIndustryOther);
    $("#ndph_countrybilling").change(billingCountry);
    $("#ndph_statenotonthelistbilling").change(billingStateCheck);
    $("#ndph_citynotonthelistbilling").change(billingCityCheck);
    $("#ndph_statebilling").change(billingState);
    $("#ndph_stateotherbilling").change(billingState);
    $("#ndph_citybilling").change(billingState);
    $("#ndph_otherpersoninchargeoftraining").change(updatePersonICOTraining);
    $("#ndph_industry").change(toggleIndustryOther);

    //$('input[name =ctl00$ContentContainer$MainContent$EntityFormControl$InsertButton]').removeClass("form-action-container-left");
    //$('input[name =ctl00$ContentContainer$MainContent$EntityFormControl$InsertButton]').addClass("pull-right");
    //$('.submit-btn btn btn-primary form-action-container-left').css({"float" : "right !important"});
    //$('.submit-btn btn btn-primary form-action-container-left').addClass("pull-right");

    // initiate functions
    participantSource()

    // execute functions on change
    $("#ndph_oderhowdidyoufirstfoundoutaboutprgram").change(participantSource);


    $('iframe').load( function() {
        $('iframe').contents().find("head")
        .append($("<style type='text/css'>  .crmEntityFormView .actions .btn:first-child{float: right !important;}  </style>"));
    });
    
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
    
});