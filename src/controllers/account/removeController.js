<<<<<<< HEAD
import { deleteAccount } from "../../models/accountModel.js"
=======
import { deleteAccount, accountValidateId } from "../../models/accountModel.js"
>>>>>>> a562deb6d59a179d7ce7ad8fd9ffe57d9a56d7a3

const remove = async (req, res, next) => {
    const {id} = req.params
    try{
<<<<<<< HEAD
        const account = await deleteAccount(+id)
=======
        const accountValidated = accountValidateId(+id)

        if(accountValidated?.error)
            return res.status(401).json({
                error: "Erro ao deletar um serviço!",
                fieldErrors: accountValidated.error.flatten().fieldErrors
            })

        const account = await deleteAccount(accountValidated.data.id)
>>>>>>> a562deb6d59a179d7ce7ad8fd9ffe57d9a56d7a3

        return res.json({
            success: "Conta removida com sucesso!",
            account
        }) 
    }catch(error){
        if(error?.code === 'P2025')
            return res.status(404).json({
                error: `Conta com o id ${id}, não encontrado!`
            })
        next(error)
    }
}

export default remove