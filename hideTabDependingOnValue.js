    function HideTabs()
{
        var oppType = Xrm.Page.getAttribute("ndph_opportunitytype").getText();
        var activeStage = Xrm.Page.data.process.getActiveStage();
        var stagename = activeStage.getName();
        var GUID_SEELL = "{F15B7CE7-0F17-EA11-A811-000D3A82BEC6}";


        if (oppType == "Program") 
        {    if(stagename == "Lead")
    {
        Xrm.Page.data.process.addOnStageChange(refreshpage);
        Xrm.Page.ui.tabs.get('requirements_opptab').setVisible(true);
    }

           else if(stagename =="Prospect")
           {
            Xrm.Page.getControl("ndph_opportunitytype").setDisabled(true);
            Xrm.Page.getControl("ndph_school").setDisabled(true);
            Xrm.Page.getControl("ndph_program").setDisabled(true);
            Xrm.Page.getControl("transactioncurrencyid").setDisabled(true);
            Xrm.Page.getControl("ndph_seellprogramtype").setDisabled(true);
            Xrm.Page.getControl("ndph_seellapplicanttype").setDisabled(true);
            Xrm.Page.getControl("ndph_programopen").setDisabled(false);
            Xrm.Page.getControl("ndph_programcustom").setDisabled(false);
            Xrm.Page.getControl("ndph_programbatch").setDisabled(false);
            Xrm.Page.getControl("name").setDisabled(true);

                Xrm.Page.data.process.addOnStageChange(refreshpage);
                Xrm.Page.ui.tabs.get("tab_6").setVisible(false);    
                Xrm.Page.ui.tabs.get('appadtestinterview_opptab').setVisible(false);
                Xrm.Page.ui.tabs.get('fundingregistration_opptab').setVisible(false);   
                Xrm.Page.getAttribute('ndph_programbatch').setRequiredLevel("required");       
            }      
            else if (stagename == "Applicant")
            { 

                Xrm.Page.getControl("ndph_programcustom").setDisabled(true);
                Xrm.Page.data.process.addOnStageChange(refreshpage);
                Xrm.Page.ui.tabs.get("BasicInfo_Tab").setVisible(true);
                Xrm.Page.ui.tabs.get('requirements_opptab').setVisible(true);
                Xrm.Page.ui.tabs.get('requirements_opptab').sections.get("requirements_opptab_section_7").setVisible(true);
                Xrm.Page.ui.tabs.get('fundingregistration_opptab').setVisible(false); 
                if(Xrm.Page.getAttribute('ndph_school').getValue()[0].id == GUID_SEELL)
                {
                Xrm.Page.ui.tabs.get('appadtestinterview_opptab').setVisible(false);
                Xrm.Page.ui.tabs.get('tab_6').setVisible(false);
                }
                else 
                {
                    Xrm.Page.ui.tabs.get('appadtestinterview_opptab').setVisible(true);
                    Xrm.Page.ui.tabs.get('tab_6').setVisible(true);
                }
            } 
            else if (stagename == "Registration")
            {

                Xrm.Page.getControl("ndph_programcustom").setDisabled(true);
                Xrm.Page.data.process.addOnStageChange(refreshpage);
                if(Xrm.Page.getAttribute('ndph_school').getValue()[0].id != GUID_SEELL)
                {
                Xrm.Page.ui.tabs.get("BasicInfo_Tab").setVisible(true);
                Xrm.Page.ui.tabs.get('tab_6').setVisible(true);
                Xrm.Page.ui.tabs.get('requirements_opptab').setVisible(true);
                Xrm.Page.ui.tabs.get('requirements_opptab').sections.get("requirements_opptab_section_7").setVisible(true);
                Xrm.Page.ui.tabs.get('fundingregistration_opptab').setVisible(true);             
                Xrm.Page.ui.tabs.get('appadtestinterview_opptab').setVisible(true);
                }
                else
                {
                Xrm.Page.ui.tabs.get('appadtestinterview_opptab').setVisible(false);
                Xrm.Page.ui.tabs.get('tab_6').setVisible(false);
                }
            } 
        }
        else if(oppType == "Partnership")
        {
            Xrm.Page.ui.tabs.get("BasicInfo_Tab").setVisible(true);
            Xrm.Page.ui.tabs.get("tab_6").setVisible(false);
            Xrm.Page.ui.tabs.get("requirements_opptab").setVisible(true);
            Xrm.Page.ui.tabs.get("APPLICATION_INFORMATION").setVisible(false);
            Xrm.Page.ui.tabs.get("appadtestinterview_opptab").setVisible(false);
            Xrm.Page.ui.tabs.get("fundingregistration_opptab").setVisible(false);  
        }
    
        else
        {
            Xrm.Page.ui.tabs.get('tab_6').setVisible(false);
            Xrm.Page.ui.tabs.get('requirements_opptab').setVisible(false);
            Xrm.Page.ui.tabs.get('appadtestinterview_opptab').setVisible(false);
            Xrm.Page.ui.tabs.get('fundingregistration_opptab').setVisible(false);  
        } 
}
function refreshpage()
{
    parent.location.reload();
}

function saves()
{
    Xrm.Page.data.entity.save();
    Xrm.Page.data.process.addOnStageChange(refreshpage);
}

function setAccept()
{  
    Xrm.Page.data.process.addOnStageChange(refreshpage);
    if (Xrm.Page.getAttribute("ndph_approvalstatus").getValue() == 649840000)
    {
        if (Xrm.Page.getAttribute("ndph_acceptedoffer").getValue() == 1)
        {
            Xrm.Page.getAttribute("ndph_devfieldacceptedoffer").setValue(1);
        }
        else if (Xrm.Page.getAttribute("ndph_acceptedoffer").getValue() == 0)
        {
            Xrm.Page.getAttribute("ndph_devfieldacceptedoffer").setValue(0);
        }
    }
}