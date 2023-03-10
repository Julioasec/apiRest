const express = require('express');
const router = express.Router();



// RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next)=>{
    res.status(200).send({
        mensagem: "Retorna todos os produtos"
    })
})


// INSERE UM PRODUTO
router.post('/', (req, res, next)=>{
    res.status(201).send({
        mensagem: "Insere um produto"
    })
})

// RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produto', (req, res, next)=>{
    const id = req.params.id_produto

    if(id === 'especial'){
        res.status(200).send({
            mensagem: "Voce descobriu o ID especial",
            id: id
        })

    }else{
        res.status(200).send({
            mensagem: "Voce passou um ID"
        })
    }

})

router.patch('/', (req, res, next)=>{
    res.status(201).send({
        mensagem: "Usando o PATCH dentro da rota de produtos"
    })
})


router.delete('/', (req, res, next)=>{
    res.status(201).send({
        mensagem: "Usando o DELETE dentro da rota de produtos"
    })
})

module.exports = router;
