function DownloadDocumentTemplateAsPDF(primaryControl)
{
  // alert("Button is clicked.");
  // // var formContext = primaryControl.getFormContext();
  // console.log("Nakuha na si form context.");
  // var contactLookup = Xrm.Page.getAttribute("parentcontactid").getValue();
  // console.log("Nakuha na value ng contact lookup.");
  // var contactId = contactLookup[0].id;
  // alert("ETO YUNG CONTACT ID " + contactId);
  // You can pass dynamic values here // 
  var entity = {};
  entity.TemplateId = "19794b23-ce5a-eb11-a812-0022481631b1";
  entity.RecordId= "21057ffc-36bc-ea11-a812-000d3a8241a6";
  entity.TypeCode= "2";   // Entity type code for contact - 2

  
  var req = new XMLHttpRequest();
  req.open("POST", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/ndph_DownloadWordTemplateCustomAction", true);
  req.setRequestHeader("OData-MaxVersion", "4.0");
  req.setRequestHeader("OData-Version", "4.0");
  req.setRequestHeader("Accept", "application/json");
  req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  req.onreadystatechange = function() {
      if (this.readyState === 4) {
          req.onreadystatechange = null;
          if (this.status === 204) {
              // var uri = this.getResponseHeader("OData-EntityId");
              // var regExp = /\(([^)]+)\)/;
              // var matches = regExp.exec(uri);
              // var newEntityId = matches[1];
          } else {
              Xrm.Utility.alertDialog(this.statusText);
          }
      }
  };
  req.send(JSON.stringify(entity));

  console.log("Button is clicked.");
}