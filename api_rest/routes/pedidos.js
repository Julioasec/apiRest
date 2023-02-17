const express = require('express');
const router = express.Router();



// RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next)=>{
    res.status(200).send({
        mensagem: "Retorna os pedidos"
    })
})


// INSERE UM PEDIDO
router.post('/', (req, res, next)=>{
    res.status(201).send({
        mensagem: "O pedido foi criado siiim"
    })
})

// RETORNA OS DADOS DE UM PEDIDO
router.get('/:id_pedido', (req, res, next)=>{
    const id = req.params.id_pedido

    if(id === 'especial'){
        res.status(200).send({
            mensagem: "Detalhes do pedido",
            id_pedido: id
        })
    }

})

router.delete('/', (req, res, next)=>{
    res.status(201).send({
        mensagem: "Pedido excluído"
    })
})

module.exports = router;
