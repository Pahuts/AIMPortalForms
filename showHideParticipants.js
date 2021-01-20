function showHideParticipants()
    {
            var activeStage = Xrm.Page.data.process.getActiveStage();
            var stagename = activeStage.getName();
            var school = Xrm.Page.getAttribute('ndph_school').getValue();
            if(school != null)
            {
                if(Xrm.Page.ui.tabs.get('participants_tab') != null && Xrm.Page.ui.tabs.get('participants_tab') != 'undefined') {
                    var school1 = Xrm.Page.getAttribute('ndph_school').getValue()[0].name;
                    if (school1 == "School of Executive Education and Lifelong Learning")
                    {
                        Xrm.Page.ui.tabs.get('tab_6').setVisible(true);
                        Xrm.Page.ui.tabs.get('requirements_opptab').setVisible(true);
                        Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('ME_application_form').setVisible(false);  
                        Xrm.Page.ui.tabs.get('appadtestinterview_opptab').setVisible(false);
                        Xrm.Page.ui.tabs.get('fundingregistration_opptab').setVisible(false);
                        
                        if (Xrm.Page.data.entity.attributes.get("ndph_seellprogramtype").getText() == "Open Program" &&
                        Xrm.Page.data.entity.attributes.get("ndph_seellapplicanttype").getText() == "Company/Group") // check seeell program type and seell applicant type
                            { 
                                Xrm.Page.ui.tabs.get('participants_tab').setVisible(true);
                                Xrm.Page.ui.tabs.get("participants_tab").sections.get("Participants_Section").setVisible(true);
                                
                            }
                        else if (Xrm.Page.data.entity.attributes.get("ndph_seellprogramtype").getText() == "Custom Program")
                            { 
                                Xrm.Page.ui.tabs.get('participants_tab').setVisible(true);
                                Xrm.Page.ui.tabs.get("participants_tab").sections.get("Participants_Section").setVisible(true);
                                
                            }
                        else 
                            {
                                Xrm.Page.ui.tabs.get('participants_tab').setVisible(false);
                                Xrm.Page.ui.tabs.get("participants_tab").sections.get("Participants_Section").setVisible(false);
                                
                            }
    
                        if(stagename == "Registration")
                        {
                            Xrm.Page.ui.tabs.get('fundingregistration_opptab').setVisible(true); 
                        }
                    } else {
                        Xrm.Page.ui.tabs.get('participants_tab').setVisible(false);
                        Xrm.Page.ui.tabs.get("participants_tab").sections.get("Participants_Section").setVisible(false);
                       
                    } 
                }
                
            }
        }
