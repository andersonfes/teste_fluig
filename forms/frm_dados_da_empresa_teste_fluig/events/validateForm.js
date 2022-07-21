function validateForm(form) {
    var menssagem = "";
    /* 
        if (form.getValue('nome_empresa') == '') {
            menssagem += 'O campo: <b>Nome da Empresa</b>, não foi preenchido' + '<br>';
        }

        if (form.getValue('email_empresa') == '') {
            menssagem += 'O campo: <b>E-mail</b>, não foi preenchido' + '<br>';
        }

        if (form.getValue('Tele_empresa') == '') {
            menssagem += 'O campo: <b>Telefone</b>, não foi preenchido' + '<br>';
        }

        if (form.getValue('contato_empresa') == '') {
            menssagem += 'O campo: <b>Contato</b>, não foi preenchido' + '<br>';
        }

        if (form.getValue('cep_empresa') == '') {
            menssagem += 'O campo: <b>Cep</b>, não foi preenchido' + '<br>';
        }

        if (form.getValue('numero_empresa') == '') {
            menssagem += 'O campo: <b>Numero</b>, não foi preenchido' + '<br>';
        }
     */
    if (menssagem != "") {
        throw menssagem;
    }
}