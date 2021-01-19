$(document).ready(function() {

    // jquery css for new fields
    // added new fields jan 19 2021
    // $("#ndph_statebillingtextonly").parent().parent().attr("colspan","2");
    // $("#ndph_statebillingtextonly").parent().css("width","100%");
    // $("#ndph_citybillingtextonly").parent().parent().attr("colspan","2");
    // $("#ndph_citybillingtextonly").parent().css("width","100%");
    // // end of new fields
    // $("#ndph_postalzipcodebilling").parent().parent().attr("colspan","2");
    // $("#ndph_postalzipcodebilling").parent().css("width","100%");

    // Function declarations
    function updateAddressSections() {
        var addressType = $("#ndph_addresssameas").val();
        var homeAddress = $(".section[data-name='blling_information_home_address_section']").closest("fieldset");
        var businessAddress = $(".section[data-name='blling_information_business_address_section']").closest("fieldset");
        var billingAddress = $(".section[data-name='blling_information_billing_address_section']").closest("fieldset");

        switch (addressType) {
            case "649840000":
                homeAddress.show();
                businessAddress.hide();
                clearBillingAddress();
                billingAddress.hide();
                break;
            case "649840001":
                homeAddress.hide();
                businessAddress.show();
                clearBillingAddress();
                billingAddress.hide();
                break;
            case "649840002":
                homeAddress.hide();
                businessAddress.hide();
                billingAddress.show();
                $("#ndph_street1").parent().parent().addClass("required2");
                $("#ndph_countrybilling").parent().parent().parent().addClass("required2");
                break;
            default:
                homeAddress.hide();
                businessAddress.hide();
                clearBillingAddress();
                billingAddress.hide();
                break;
        }
    }

    function clearBillingAddress() {
        $("#ndph_street1").val("");
        $("#ndph_street2").val("");
        $("#ndph_street3").val("");
        $("#ndph_citybilling").val("");
        $("#ndph_citybilling_name").val("");
        $("#ndph_cityotherbilling").val("");
        $("#ndph_citynotshownonlist").prop("checked", false);
        $("#ndph_statebilling").val("");
        $("#ndph_statebilling_name").val("");
        $("#ndph_stateotherbilling").val("");
        $("#ndph_statenotshownlist").prop("checked", false);
        $("#ndph_postalzipcodebilling").val("");
        $("#ndph_countrybilling").val("");
        $("#ndph_countrybilling_name").val("");
    }

    function updatePersonICOTraining() {
        var checkedPICOT = $("#ndph_otherpersoninchargeoftraining").prop("checked");
        var PICOT = $(".section[data-name='person_in_charge_of_training_section']").closest("fieldset");

        if (checkedPICOT) {
            PICOT.show();
            $("#ndph_firstnamepersoninchargeoftraining").parent().parent().addClass("required2");
            // $("#ndph_middlenamepersoninchargeoftraining").parent().parent().addClass("required2");
            $("#ndph_lastnamepersoninchargeoftraining").parent().parent().addClass("required2");
            $("#ndph_emailpersoninchargeoftraining").parent().parent().addClass("required2");
            $("#ndph_positiontitlepersoninchargeoftraining").parent().parent().addClass("required2");  
            $("#ndph_countrycodepersoninchargeoftraining2").parent().parent().parent().addClass("required2");
            $("#ndph_mobilenumberpersoninchargeoftraining").parent().parent().addClass("required2");  
        }
        else {
            PICOT.hide();
            clearPersonInChargeOfTraining();
        }
    }

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

    function toggleStateBilling() {
        var countryBilling = $("#ndph_countrybilling").val();
        var checkedStateOtherBilling = $("#ndph_statenotshownlist");
        var checkedStateOtherBillingField = checkedStateOtherBilling.closest("td");
        var stateBilling = $("#ndph_statebilling");
        var stateBillingName = $("#ndph_statebilling_name");
        var stateBillingEntity = $("#ndph_statebilling_entityname");
        var stateBillingField = $("#ndph_statebilling").parent().parent().parent();
        var stateOtherBilling = $("#ndph_stateotherbilling");
        var stateOtherBillingField = $("#ndph_stateotherbilling").parent().parent();
        var checkedCityOtherBilling = $("#ndph_citynotshownonlist");
        var checkedCityOtherBillingField = checkedCityOtherBilling.closest("td");
        var cityBilling = $("#ndph_citybilling");
        var cityBillingName = $("#ndph_citybilling_name");
        var cityBillingEntity = $("#ndph_citybilling_entityname");
        var cityBillingField = $("#ndph_citybilling").parent().parent().parent();
        var cityOtherBilling = $("#ndph_cityotherbilling");
        var cityOtherBillingField = $("#ndph_cityotherbilling").parent().parent();

        // Clear State Billing
        stateBilling.val("");
        stateBillingName.val("");
        stateBillingEntity.val("");
        // Clear State (Other)
        stateOtherBilling.val("");
        // Untick "Others" checkbox
        checkedStateOtherBilling.prop("checked", false);
        // Update (Other) visibility
        stateOtherBillingField.hide();
        stateBillingField.show();

        // Clear City
        cityBilling.val("");
        cityBillingName.val("");
        cityBillingEntity.val("");
        // Clear City (Other)
        cityOtherBilling.val("");
        // Untick "Others" checkbox
        checkedCityOtherBilling.prop("checked", false);
        // Update (Other) visibility 
        cityOtherBillingField.hide();
        cityBillingField.show();
            
        // Disable City
        cityBilling.prop("disabled", true);
        cityBilling.parent().find(".input-group-btn").hide();
        cityBilling.parent().css("display", "block");
        // Border radius
        $("#ndph_citybilling_name").css("border-bottom-right-radius","5px");
        $("#ndph_citybilling_name").css("border-top-right-radius","5px");
        // Disable City (Other)
        cityOtherBilling.prop("disabled", true);
        // Disable "Others" checkbox
        checkedCityOtherBillingField.hide();

        if (countryBilling) {
            // Enable State
            stateBilling.prop("disabled", false);
            stateBilling.parent().find(".input-group-btn").show();
            stateBilling.parent().css("display", "table");
            stateBilling.parent().css("width", "100%");
            // Border radius
            $("#ndph_statebilling_name").css("border-bottom-right-radius","0px");
            $("#ndph_statebilling_name").css("border-top-right-radius","0px");
            // Enable State (Other)
            stateOtherBilling.prop("disabled", false);
            // Enable "Other" checkbox
            checkedStateOtherBillingField.show();
        }
        else {
            // Disable State
            stateBilling.prop("disabled", true);
            stateBilling.parent().find(".input-group-btn").hide();
            stateBilling.parent().css("display", "block");
            // Border radius
            $("#ndph_statebilling_name").css("border-bottom-right-radius","5px");
            $("#ndph_statebilling_name").css("border-top-right-radius","5px");
            // Disable State (Other)
            stateOtherBilling.prop("disabled", true);
            // Disable "Others" checkbox
            checkedStateOtherBillingField.hide();
            // Update (Other) visibility 
            stateOtherBillingField.hide();
            stateBillingField.show();
        }
    }
    // Toggle Billing City based on whether Billing State has a value
    function toggleCityBilling() {
        var stateBilling = $("#ndph_statebilling").val();
        var stateOtherBilling = $("#ndph_stateotherbilling").val();
        var checkedStateOtherBilling = $("#ndph_statenotshownlist");
        var checkedCityOtherBilling = $("#ndph_citynotshownonlist");
        var checkedCityOtherBillingField = checkedCityOtherBilling.closest("td");
        var cityBilling = $("#ndph_citybilling");
        var cityBillingName = $("#ndph_citybilling_name");
        var cityBillingEntity = $("#ndph_citybilling_entityname");
        var cityBillingField = $("#ndph_citybilling").parent().parent().parent();
        var cityOtherBilling = $("#ndph_cityotherbilling");
        var cityOtherBillingField = $("#ndph_cityotherbilling").parent().parent();

        // Clear City
        cityBilling.val("");
        cityBillingName.val("");
        cityBillingEntity.val("");
        // Clear City (Other)
        cityOtherBilling.val("");
        // Untick City "Others" checkbox if State "Others" is not ticked
        if (!checkedStateOtherBilling.prop("checked")) {
            checkedCityOtherBilling.prop("checked", false);
            // Update (Other) visibility 
            cityOtherBillingField.hide();
            cityBillingField.show();
        }

        if (stateBilling || stateOtherBilling) {
            // Enable City
            cityBilling.prop("disabled", false);
            cityBilling.parent().find(".input-group-btn").show();
            cityBilling.parent().css("display", "table");
            cityBilling.parent().css("width", "100%");
            // Border radius
            $("#ndph_citybilling_name").css("border-bottom-right-radius","0px");
            $("#ndph_citybilling_name").css("border-top-right-radius","0px");
            // Enable City (Other)
            cityOtherBilling.prop("disabled", false);
            if (stateBilling && !checkedStateOtherBilling.prop("checked")) {
                // Enable "Others" checkbox only if State is populated and not locked to "Other"
                checkedCityOtherBillingField.show();
            }
        }
        else {
            // Disable City
            cityBilling.prop("disabled", true);
            cityBilling.parent().find(".input-group-btn").hide();
            cityBilling.parent().css("display", "block");
            // Border radius
            $("#ndph_citybilling_name").css("border-bottom-right-radius","5px");
            $("#ndph_citybilling_name").css("border-top-right-radius","5px");
            // Disable City (Other)
            cityOtherBilling.prop("disabled", true);
            // Disable "Others" checkbox
            checkedCityOtherBillingField.hide();
            if (!checkedStateOtherBilling.prop("checked")) {
                // Update (Other) visibility 
                cityOtherBillingField.hide();
                cityBillingField.show();
            }
            else {
                // Update (Other) visibility 
                cityOtherBillingField.show();
                cityBillingField.hide();
            }
        }
    }
    // Hide/show Billing State (Other) based on "Others" checkbox
    function toggleStateOtherBilling() {
        var checkedStateOtherBilling = $("#ndph_statenotshownlist");
        var stateBilling = $("#ndph_statebilling");
        var stateBillingName = $("#ndph_statebilling_name");
        var stateBillingEntity = $("#ndph_statebilling_entityname");
        var stateBillingField = stateBilling.parent().parent().parent();
        var stateOtherBilling = $("#ndph_stateotherbilling");
        var stateOtherBillingField = stateOtherBilling.parent().parent();

        var cityBilling = $("#ndph_citybilling");
        var cityOtherBilling = $("#ndph_cityotherbilling");
        var checkedCityOtherBilling = $("#ndph_citynotshownonlist");
        var checkedCityOtherBillingField = checkedCityOtherBilling.closest("td");

        if (checkedStateOtherBilling.prop("checked")) {
            stateBilling.val("");
            stateBillingName.val("");
            stateBillingEntity.val("");
            stateBillingField.hide();
            stateOtherBillingField.show();
            // Lock City to Other
            checkedCityOtherBillingField.hide();
            checkedCityOtherBilling.prop("checked", true);
            // Disable City (Other) until State is filled in
            cityOtherBilling.prop("disabled", true);
        }
        else {
            stateOtherBilling.val("");
            stateOtherBillingField.hide();
            stateBillingField.show();
            // Reset "Other" checkbox for City
            checkedCityOtherBilling.prop("checked", false);
            // Disable City until State is filled in
            cityBilling.prop("disabled", true);
            cityBilling.parent().find(".input-group-btn").hide();
            cityBilling.parent().css("display", "block");
            // Border radius
            $("#ndph_citybilling_name").css("border-bottom-right-radius","5px");
            $("#ndph_citybilling_name").css("border-top-right-radius","5px");
        }
        toggleCityOtherBilling();
    }
    // Hide/show Billing City (Other) based on "Others" checkbox
    function toggleCityOtherBilling() {
        var checkedCityOtherBilling = $("#ndph_citynotshownonlist");
        var cityBilling = $("#ndph_citybilling");
        var cityBilling = $("#ndph_citybilling_name");
        var cityBillingEntity = $("#ndph_citybilling_entityname");
        var cityBillingField = cityBilling.parent().parent().parent();
        var cityOtherBilling = $("#ndph_cityotherbilling");
        var cityOtherBillingField = cityOtherBilling.parent().parent();

        if (checkedCityOtherBilling.prop("checked")) {
            cityBilling.val("");
            cityBilling.val("");
            cityBillingEntity.val("");
            cityBillingField.hide();
            cityOtherBillingField.show();
        }
        else {
            cityOtherBilling.val("");
            cityOtherBillingField.hide();
            cityBillingField.show();
        }
    }

    function initializeBillingAddress() {
        var countryBilling = $("#ndph_countrybilling").val();
    
        var checkedStateOtherBilling = $("#ndph_statenotshownlist");
        var checkedStateOtherBillingField = checkedStateOtherBilling.closest("td");
        var stateBilling = $("#ndph_statebilling");
        var stateBillingField = stateBilling.parent().parent().parent();
        var stateOtherBilling = $("#ndph_stateotherbilling");
        var stateOtherBillingField = stateOtherBilling.parent().parent();
    
        var checkedCityOtherBilling = $("#ndph_citynotshownonlist");
        var checkedCityOtherBillingField = checkedCityOtherBilling.closest("td");
        var cityBilling = $("#ndph_citybilling");
        var cityBillingField = cityBilling.parent().parent().parent();
        var cityOtherBilling = $("#ndph_cityotherbilling");
        var cityOtherBillingField = cityOtherBilling.parent().parent();
    
        if (!countryBilling) {
            // Disable State
            stateBilling.prop("disabled", true);
            stateBilling.parent().find(".input-group-btn").hide();
            stateBilling.parent().css("display", "block");
            // Border radius
            $("#ndph_statebilling_name").css("border-bottom-right-radius","5px");
            $("#ndph_statebilling_name").css("border-top-right-radius","5px");
            // Disable and hide State (Other)
            stateOtherBilling.prop("disabled", true);
            stateOtherBillingField.hide();
            // Reset and disable "Other" checkbox for State
            checkedStateOtherBilling.prop("checked", false);
            checkedStateOtherBillingField.hide();
            // Disable City
            cityBilling.prop("disabled", true);
            cityBilling.parent().find(".input-group-btn").hide();
            cityBilling.parent().css("display", "block");
            // Border radius
            $("#ndph_citybilling_name").css("border-bottom-right-radius","5px");
            $("#ndph_citybilling_name").css("border-top-right-radius","5px");
            // Disable and hide City (Other)
            cityOtherBilling.prop("disabled", true);
            cityOtherBillingField.hide();
            // Reset and disable "Other" checkbox for City 
            checkedCityOtherBilling.prop("checked", false);
            checkedCityOtherBillingField.hide();
        }
        else if (checkedStateOtherBilling.prop("checked")) {
            // Hide State
            stateBillingField.hide();
            // Hide City
            cityBillingField.hide();
            // Reset and disable "Other" checkbox for City 
            checkedCityOtherBilling.prop("checked", true);
            checkedCityOtherBillingField.hide();
            if (!stateBilling) {
                // Disable City
                cityBilling.prop("disabled", true);
                cityBilling.parent().find(".input-group-btn").hide();
                cityBilling.parent().css("display", "block");
                // Border radius
                $("#ndph_citybilling_name").css("border-bottom-right-radius","5px");
                $("#ndph_citybilling_name").css("border-top-right-radius","5px");
            }
            if (!stateOtherBilling) {
                // Disable City (Other)
                cityOtherBilling.prop("disabled", true);
            }
        }
        else if (!stateBilling) {
            // Hide State (Other)
            stateOtherBillingField.hide();
            // Disable City
            cityBilling.prop("disabled", true);
            cityBilling.parent().find(".input-group-btn").hide();
            cityBilling.parent().css("display", "block");
            // Border radius
            $("#ndph_citybilling_name").css("border-bottom-right-radius","5px");
            $("#ndph_citybilling_name").css("border-top-right-radius","5px");
            // Disable and hide City (Other)
            cityOtherBilling.prop("disabled", true);
            cityOtherBillingField.hide();
            // Untick and disable "Others"
            checkedCityOtherBilling.prop("checked", false);
            checkedCityOtherBillingField.hide();
        }
        else if (checkedCityOtherBilling.prop("checked")) {
            // Hide State (Other)
            stateOtherBillingField.hide();
            // Hide City
            cityBillingField.hide();
        }
        else {
            // Hide State (Other)
            stateOtherBillingField.hide();
            // Hide City (Other)
            cityOtherBillingField.hide();
        }
    }

     // Hide/show Home State (Other) based on "Others" checkbox
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

    // Set default field and section visibility
    toggleStateOtherHome();
    toggleCityOtherHome();
    toggleStateBusiness();
    toggleCityBusiness();
    updateAddressSections();
    updatePersonICOTraining();
    initializeBillingAddress();

    // Check for field change
    $("#ndph_addresssameas").change(updateAddressSections);
    $("#ndph_otherpersoninchargeoftraining").change(updatePersonICOTraining);
    $("#ndph_addressnotshownonlist_city").change(toggleCityOtherHome);
    $("#ndph_addressnotshownonthelist").change(toggleStateOtherHome);
    $("#ndph_addressnotshownonlist_citybusiness").change(toggleCityBusiness);
    $("#ndph_addressnotshownonthelistbusiness").change(toggleStateBusiness);

    // Update Billing Addres 
    $("#ndph_countrybilling").change(toggleStateBilling);
    $("#ndph_statebilling").change(toggleCityBilling);
    $("#ndph_stateotherbilling").change(toggleCityBilling);
    $("#ndph_statenotshownlist").change(toggleStateOtherBilling);
    $("#ndph_citynotshownonlist").change(toggleCityOtherBilling);

    $("#ndph_countrybilling").parent().parent().parent().attr("colspan", "2");
    $("#ndph_countrybilling").parent().css("width", "100%");
    $("#ndph_statebilling").parent().parent().parent().attr("colspan", "2");
    $("#ndph_statebilling").parent().css("width", "100%");
    $("#ndph_citybilling").parent().parent().parent().attr("colspan", "2");
    $("#ndph_citybilling").parent().css("width", "100%");
    $("#ndph_stateotherbilling").parent().parent().attr("colspan", "2");
    $("#ndph_cityotherbilling").parent().parent().attr("colspan", "2");

    // Adjust Margin-top
    $("input#ndph_mobilenumberpersoninchargeoftraining.text.form-control").css( { "margin-top" : "5px" } );
    $("input#ndph_mobilenumberbilling.text.form-control").css( { "margin-top" : "5px" } );
    $("fieldset[aria-label='Billing Address']").css( { "margin-top" : "15px" } );
    $("fieldset[aria-label='Person In Charge of Training']").css( { "margin-top" : "15px" } );
    
    // hide and activate fields
    $("#ndph_addressnotshownonthelist").prop("disabled", false);
    $("#ndph_addressnotshownonthelist").parent().parent().parent().hide();
    $("#ndph_addressnotshownonlist_city").prop("disabled", false);
    $("#ndph_addressnotshownonlist_city").parent().parent().parent().hide();
    $("#ndph_addressnotshownonthelistbusiness").prop("disabled", false);
    $("#ndph_addressnotshownonthelistbusiness").parent().parent().parent().hide();
    $("#ndph_addressnotshownonlist_citybusiness").prop("disabled", false);
    $("#ndph_addressnotshownonlist_citybusiness").parent().parent().parent().hide();

    // initiate validators
    // Address validator
    var AddressValidator = document.createElement('span');
    AddressValidator.style.display = "none";
    AddressValidator.id = "ndph_street1_validator";
    AddressValidator.controltovalidate = "ndph_street1";
    AddressValidator.errormessage = "<a href='#ndph_street1'>Address is a required field.</a>";
    AddressValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
    AddressValidator.initialvalue = "";
    AddressValidator.evaluationfunction = function () {
        var addressDropdown = $("#ndph_addresssameas").val();
        if (addressDropdown == "649840002"){
    
        var address = $("#ndph_street1").val();
        if (address == null || address == "") {
            return false;
        } else {
            return true;
        }
        }
        else 
        {return true;}

    };

      // Country validator
      var CountryValidator = document.createElement('span');
      CountryValidator.style.display = "none";
      CountryValidator.id = "ndph_countrybilling_validator";
      CountryValidator.controltovalidate = "ndph_countrybilling";
      CountryValidator.errormessage = "<a href='#ndph_countrybilling_name'>Country is a required field.</a>";
      CountryValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
      CountryValidator.initialvalue = "";
      CountryValidator.evaluationfunction = function () {
          var addressDropdown = $("#ndph_addresssameas").val();
          if (addressDropdown == "649840002"){
        
          var country = $("#ndph_countrybilling").val();
          if (country == null || country == "") {
              return false;
          } else {
              return true;
          }
          }
          else 
          {return true;}

      };

      // Person In Charge Of Training Validators
      // First Name validator
      var FirstNameValidator = document.createElement('span');
      FirstNameValidator.style.display = "none";
      FirstNameValidator.id = "ndph_firstnamepersoninchargeoftraining_validator";
      FirstNameValidator.controltovalidate = "ndph_firstnamepersoninchargeoftraining";
      FirstNameValidator.errormessage = "<a href='#ndph_firstnamepersoninchargeoftraining'>First Name is a required field.</a>";
      FirstNameValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
      FirstNameValidator.initialvalue = "";
      FirstNameValidator.evaluationfunction = function () {
          var otherPICOT = $("#ndph_otherpersoninchargeoftraining").prop("checked");
          if (otherPICOT){
          var firstname = $("#ndph_firstnamepersoninchargeoftraining").val();
          if (firstname == null || firstname == "") {
              return false;
          } else {
              return true;
          }
          }
          else 
          {return true;}

      };
      // Middle Name Validator
    //   var MiddleNameValidator = document.createElement('span');
    //   MiddleNameValidator.style.display = "none";
    //   MiddleNameValidator.id = "ndph_middlenamepersoninchargeoftraining_validator";
    //   MiddleNameValidator.controltovalidate = "ndph_middlenamepersoninchargeoftraining";
    //   MiddleNameValidator.errormessage = "<a href='#ndph_middlenamepersoninchargeoftraining'>Middle Name is a required field.</a>";
    //   MiddleNameValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
    //   MiddleNameValidator.initialvalue = "";
    //   MiddleNameValidator.evaluationfunction = function () {
    //       var otherPICOT = $("#ndph_otherpersoninchargeoftraining").prop("checked");
    //       if (otherPICOT){
    //       var middlename = $("#ndph_middlenamepersoninchargeoftraining").val();
    //       if (middlename == null || middlename == "") {
    //           return false;
    //       } else {
    //           return true;
    //       }
    //       }
    //       else 
    //       {return true;}

    //   };
      // Last Name Validator
      var LastNameValidator = document.createElement('span');
      LastNameValidator.style.display = "none";
      LastNameValidator.id = "ndph_lastnamepersoninchargeoftraining_validator";
      LastNameValidator.controltovalidate = "ndph_lastnamepersoninchargeoftraining";
      LastNameValidator.errormessage = "<a href='#ndph_lastnamepersoninchargeoftraining'>Last Name is a required field.</a>";
      LastNameValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
      LastNameValidator.initialvalue = "";
      LastNameValidator.evaluationfunction = function () {
          var otherPICOT = $("#ndph_otherpersoninchargeoftraining").prop("checked");
          if (otherPICOT){
          var lastname = $("#ndph_lastnamepersoninchargeoftraining").val();
          if (lastname == null || lastname == "") {
              return false;
          } else {
              return true;
          }
          }
          else 
          {return true;}
      };
      // Email Address Validator
      var EmailAddressValidator = document.createElement('span');
      EmailAddressValidator.style.display = "none";
      EmailAddressValidator.id = "ndph_emailpersoninchargeoftraining_validator";
      EmailAddressValidator.controltovalidate = "ndph_emailpersoninchargeoftraining";
      EmailAddressValidator.errormessage = "<a href='#ndph_emailpersoninchargeoftraining'>Email Address is a required field. (Person In Charge Of Training)</a>";
      EmailAddressValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
      EmailAddressValidator.initialvalue = "";
      EmailAddressValidator.evaluationfunction = function () {
          var otherPICOT = $("#ndph_otherpersoninchargeoftraining").prop("checked");
          if (otherPICOT){
          var email = $("#ndph_emailpersoninchargeoftraining").val();
          if (email == null || email == "") {
              return false;
          } else {
              return true;
          }
          }
          else 
          {return true;}

      };
      // Position Title Address Validator
      var PositionTitleValidator = document.createElement('span');
      PositionTitleValidator.style.display = "none";
      PositionTitleValidator.id = "ndph_positiontitlepersoninchargeoftraining_validator";
      PositionTitleValidator.controltovalidate = "ndph_positiontitlepersoninchargeoftraining";
      PositionTitleValidator.errormessage = "<a href='#ndph_positiontitlepersoninchargeoftraining'>Position Title is a required field. (Person In Charge Of Training)</a>";
      PositionTitleValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
      PositionTitleValidator.initialvalue = "";
      PositionTitleValidator.evaluationfunction = function () {
          var otherPICOT = $("#ndph_otherpersoninchargeoftraining").prop("checked");
          if (otherPICOT){
          var positionTitle = $("#ndph_positiontitlepersoninchargeoftraining").val();
          if (positionTitle == null || positionTitle == "") {
              return false;
          } else {
              return true;
          }
          }
          else 
          {return true;}

      };      
      // Mobile Number Address Validator
      var MobileNumberValidator = document.createElement('span');
      MobileNumberValidator.style.display = "none";
      MobileNumberValidator.id = "ndph_mobilenumberpersoninchargeoftraining_validator";
      MobileNumberValidator.controltovalidate = "ndph_mobilenumberpersoninchargeoftraining";
      MobileNumberValidator.errormessage = "<a href='#ndph_mobilenumberpersoninchargeoftraining'>Mobile Number is a required field. (Person In Charge Of Training)</a>";
      MobileNumberValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
      MobileNumberValidator.initialvalue = "";
      MobileNumberValidator.evaluationfunction = function () {
          var otherPICOT = $("#ndph_otherpersoninchargeoftraining").prop("checked");
          if (otherPICOT){
          var mobile = $("#ndph_mobilenumberpersoninchargeoftraining").val();
          if (mobile == null || mobile == "") {
              return false;
          } else {
              return true;
          }
          }
          else 
          {return true;}

      };
      // Country Code Address Validator
      var CountryCodeValidator = document.createElement('span');
      CountryCodeValidator.style.display = "none";
      CountryCodeValidator.id = "ndph_countrycodepersoninchargeoftraining2_validator";
      CountryCodeValidator.controltovalidate = "ndph_countrycodepersoninchargeoftraining2";
      CountryCodeValidator.errormessage = "<a href='#ndph_countrycodepersoninchargeoftraining2_name'>Country Code is a required field. (Person In Charge Of Training)</a>";
      CountryCodeValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
      CountryCodeValidator.initialvalue = "";
      CountryCodeValidator.evaluationfunction = function () {
          var otherPICOT = $("#ndph_otherpersoninchargeoftraining").prop("checked");
          if (otherPICOT){
          var countryCode = $("#ndph_countrycodepersoninchargeoftraining2").val();
          if (countryCode == null || countryCode == "") {
              return false;
          } else {
              return true;
          }
          }
          else 
          {return true;}

      };

      // End of Person In Charge of Training Validator Code

    // Add the new validator to the page validators array:
    Page_Validators.push(AddressValidator);
    Page_Validators.push(CountryValidator);
    Page_Validators.push(FirstNameValidator);
    // Page_Validators.push(MiddleNameValidator);
    Page_Validators.push(LastNameValidator);
    Page_Validators.push(EmailAddressValidator);
    Page_Validators.push(PositionTitleValidator);
    Page_Validators.push(CountryCodeValidator);
    Page_Validators.push(MobileNumberValidator);


     
});