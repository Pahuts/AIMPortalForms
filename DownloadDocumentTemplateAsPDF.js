function DownloadDocumentTemplateAsPDF(e)
{
// You can pass dynamic values here // 
var formContext = e.getFormContext();
var contactLookup = formContext.getAttribute("parentcontactid").getValue();
var contactId = contactLookup[0].id;
console.log("ETO YUNG CONTACT ID" + contactId);
var parameters = {};
parameters.TemplateId = "19794b23-ce5a-eb11-a812-0022481631b1";
parameters.RecordId= contactId;
parameters.TypeCode= "2";   // Entity type code for contact - 1, Entity type code for oppty - 3, Entity type code for lead - 4


var req = new XMLHttpRequest();
req.open("POST", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/new_DownloadDocumentTemplatePDF", true);
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.onreadystatechange = function() {
    if (this.readyState === 4) {
        req.onreadystatechange = null;
        if (this.status === 204) {
            //Success - No Return Data - Do Something
        } else {
            Xrm.Utility.alertDialog(this.statusText);
        }
    }
};
req.send(JSON.stringify(parameters));
}