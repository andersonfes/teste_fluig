function enableFields(form) {

    var WKNumState = getValue("WKNumState")

    form.setEnabled('bairro_empresa', false);
    form.setEnabled('cidade_empresa', false);
    form.setEnabled('estado_empresa', false);
    form.setEnabled('logradouro_empresa', false);

    if (WKNumState != 0) {

        form.setEnabled('nome_empresa', false);
        form.setEnabled('email_empresa', false);
        form.setEnabled('Tele_empresa', false);
        form.setEnabled('contato_empresa', false);
        form.setEnabled('cep_empresa', false);
        form.setEnabled('bairro_empresa', false);
        form.setEnabled('cidade_empresa', false);
        form.setEnabled('estado_empresa', false);
        form.setEnabled('logradouro_empresa', false);
        form.setEnabled('numero_empresa', false);
        form.setEnabled('infoAdicional_empresa', false);

    }

    if (WKNumState != 2) {

        form.setEnabled('aprovacao_leads', false);

    }

}