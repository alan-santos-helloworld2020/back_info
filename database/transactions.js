const { sql, conexao } = require('./conexao')
// console.log(conexao.then(pool => console.log(pool)))

class TransActions {

   listar = async (req, res) => {

      await conexao.then((pool) => pool.request()
         .query('SELECT * FROM veiculos')
      )
         .then(async (resp) => await res.json(resp.recordset))
         .catch(err => console.log(err))

   }
   //************************************************* */
   pesquisar = async (req, res) => {
      var id = parseInt(req.params.id);
      await conexao.then((pool) => pool.request()
         .input('id', sql.Int, id)
         .query('SELECT * FROM veiculos WHERE id=@id')
      )
         .then(async (resp) => await res.json(resp.recordset))
         .catch(err => console.log(err))

   }
   //************************************************* */
   salvar = async (req,res) => {
      var dados = {...req.body}
      await conexao.then((pool) => pool.request()
         .input('placa', sql.VarChar, dados.placa)
         .input('chassi', sql.VarChar, dados.chassi)
         .input('renavam', sql.VarChar, dados.renavam)
         .input('modelo', sql.VarChar, dados.modelo)
         .input('marca', sql.VarChar, dados.marca)
         .input('ano', sql.VarChar, dados.ano)
         .query('INSERT INTO veiculos(placa,chassi,renavam,modelo,marca,ano)VALUES(@placa,@chassi,@renavam,@modelo,@marca,@ano)')
      )
         .then(async (resp) => {
            if(resp.rowsAffected.length > 0){
              res.json({msg:true})
            }else{
              res.json({msg:false})
            }
         })
         .catch(err => console.log(err))

   }
   //************************************************* */
   alterar = async (req,res) => {
      var dados = { ...req.body }
      var id = req.params.id
      await conexao.then((pool) => pool.request()
         .input('placa', sql.VarChar, dados.placa)
         .input('chassi', sql.VarChar, dados.chassi)
         .input('renavam', sql.VarChar, dados.renavam)
         .input('modelo', sql.VarChar, dados.modelo)
         .input('marca', sql.VarChar, dados.marca)
         .input('ano', sql.VarChar, dados.ano)
         .input('id', sql.Int, parseInt(id))
         .query('UPDATE veiculos SET placa=@placa,chassi=@chassi,renavam=@renavam,modelo=@modelo,marca=@marca,ano=@ano WHERE id=@id')
      )
         .then(async (resp) => {
            if(resp.rowsAffected.length > 0){
              res.json({msg:true})
            }else{
              res.json({msg:false})
            }
         })
         .catch(err => console.log(err))

   }
   //************************************************* */
   deletar = async (req,res) => {
      var id = req.params.id
      await conexao.then((pool) => pool.request()
      .input("id",sql.Int,parseInt(id))
      .query("DELETE FROM veiculos WHERE id=@id")
      )
      .then(async (resp) => {
         console.log(resp)
         if(resp.rowsAffected.length > 0){
           res.json({msg:true})
         }else{
           res.json({msg:false})
         }
      })
      .catch(err => console.log(err))
   }


}

module.exports = new TransActions()