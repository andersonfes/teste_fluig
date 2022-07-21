function displayFields(form, customHTML) {

    var WKNumState = getValue("WKNumState")

    if (WKNumState == 0 || WKNumState == 1) {
        form.setVisibleById('painel_leads', false); // desabilita o painel
        form.setVisibleById('painel_comercial', false); // desabilita o painel
    }

    if (WKNumState == 2) {

        form.setVisibleById('painel_comercial', false); // desabilita o painel
    }


}