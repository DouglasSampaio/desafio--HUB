
const pool = require('../../database/ConnectDB')

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    res.status(200).json(response.rows)
}


const createUser = async (req, res) => {
    const { name, email,password } = req.body;

    const response = await pool.query('INSERT INTO users (name,email,password) VALUES ($1,$2,$3)', [name, email,password])
   // console.log(response)
    res.json({
        message: 'Usuario criado com sucesso',
        body: {
            user: { name, email, password}
        }
    })
}


const getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id=$1', [id]);
    res.json(response.rows)
}

const findUser = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id=$1', [id]);
   // console.log("oi",response)
    if(response.rowCount==1){
        aux = id 
        
    }
    if(response.rowCount==0){
        aux = id
        //console.log("usuario", aux ," não encontrado")
    }
    res.json(response.rows)

    
}


module.exports = {
    getUsers,
    createUser,
    getUserById,
    findUser
}