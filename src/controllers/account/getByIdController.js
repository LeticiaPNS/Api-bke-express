import { getByIdAccount, accountValidateId } from "../../models/accountModel.js"

const getById = async (req, res, next) => {
    //const id = req.params.id
    try{ 
        const {id} = req.params
<<<<<<< HEAD
        const account = await getByIdAccount(+id)

=======

        const accountValidated = accountValidateId(+id)

        if(accountValidated?.error)
            return res.status(401).json({
                error: "Erro ao buscar um serviço!",
                fieldErrors: accountValidated.error.flatten().fieldErrors
            })

        const account = await getByIdAccount(accountValidated.data.id)

>>>>>>> a562deb6d59a179d7ce7ad8fd9ffe57d9a56d7a3
        if(!account)
            return res.status(404).json({
                error: `Conta com o id ${id}, não encontrado!`
            })

        return res.json({
            success: "Conta encontrada com sucesso!",
            account
        })
    } catch(error) {
        next(error)
    }
}

export default getById