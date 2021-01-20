function convertSpaces()
{ 
    var participantLink = Xrm.Page.getAttribute("ndph_participantenrollmentformlink").getValue();
    if (participantLink != null) {
        participantLink = participantLink.replace(/\s/g,"%20");
        var participantLinkValue = Xrm.Page.getAttribute("ndph_participantenrollmentformlink").setValue(participantLink);
    }  
}