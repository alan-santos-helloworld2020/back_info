var TransActions = require('../database/transactions')

class HomeController {

    listar = TransActions.listar;

    pesquisar = TransActions.pesquisar;

    salvar = TransActions.salvar;

    alterar = TransActions.alterar;

    deletar = TransActions.deletar;

}

module.exports = new HomeController()