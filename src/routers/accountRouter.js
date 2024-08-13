import express from 'express'
import createController from '../controllers/account/createController'
import getByIdController from '../controllers/account/getByIdController'
import listController from '../controllers/account/listController'
import removeController from '../controllers/account/removeController'
import uptadeController from '../controllers/account/updateController'



const router = express.Router()

router.post('/' , (req, res) => {
    res.json({menssage: "Rota de POST Account",
        
    })
})
router.get('/list' , (req, res) => {
    res.json({menssage: "Rota de GET Account/List",
        
    })
})
router.get('/:id' , (req, res) => {
    res.json({menssage: "Rota de GET Accout ID ",
        
    })
})
router.put('/:id' , (req, res) => {
    res.json({menssage: "Rota de PUT Account",
        
    })
})

 
router.delete('/:id' , (req, res) => {
    res.json({menssage: "Rota de DELETE account",
        
    })
})

export default router