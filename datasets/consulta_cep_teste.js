function createDataset(fields, constraints, sortFields) {

    var dataset = DatasetBuilder.newDataset();

    var cep = '13232283';

    if (constraints && constraints.length) {
        for (var i = 0; i < constraints.length; i++) {

            if (constraints[i].fieldName == "cep") {
                cep = constraints[i].initialValue;
            }
        }
    }

    try {
        var clientService = fluigAPI.getAuthorizeClientService();
        var data = {
            companyId: getValue("WKCompany") + '',
            serviceCode: 'viacep',
            endpoint: '/ws/' + cep + '/json/',
            method: 'get',
        }

        log.info("verificando o retorno da variavel data hora: 10:30");
        log.dir(data);

        var vo = clientService.invoke(JSON.stringify(data));

        log.info("verificando o retorno da variavel vo hora: 10:30");
        log.dir(vo);

        if (vo.getResult() == null || vo.getResult().isEmpty()) {
            throw new Exception("Retorno está vazio");
        } else {
            log.info(vo.getResult());

            dataset.addColumn("CEP");
            dataset.addColumn("Logradouro");
            dataset.addColumn("Bairro");
            dataset.addColumn("Cidade");
            dataset.addColumn("Estado");

            var json = JSON.parse(vo.getResult());

            dataset.addRow([json.cep, json.logradouro,
                json.bairro, json.localidade, json.uf
            ]);
        }
    } catch (err) {
        throw new Exception(err);
    }
    return dataset;
}