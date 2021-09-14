const express = require('express')
const router = express.Router()
const HomeController = require('../controller/controller')


router.get('/',HomeController.listar)
router.get('/:id',HomeController.pesquisar)
router.post('/',HomeController.salvar)
router.put('/:id',HomeController.alterar)
router.delete('/:id',HomeController.deletar)


module.exports = router;
