const pool = require('../../database/ConnectDB')


const createTask = async (req, res) => {
    const { user_id }= req.params;
    const { name, description,data,status } = req.body;

    const response = await pool.query('INSERT INTO tasks (name,description,data,status,user_id) VALUES ($1,$2,$3,$4,$5)',[
        name,
        description,
        data,
        status,
        user_id
    ])
    console.log(response)
    res.json({
        message: 'Task criada com sucesso',
        body: {
            user: { name,
                description,
                data,
                status,
                user_id}
        }
    })
}
const getTasks = async (req, res) => {
    const response = await pool.query('SELECT * FROM tasks');
    res.status(200).json(response.rows)
}
const getTaskById = async (req, res) => {
    const user_id = req.params.user_id;
    const response = await pool.query('SELECT * FROM tasks WHERE user_id=$1', [user_id]);
    res.json(response.rows)
}
const deleteTask = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM tasks WHERE id=$1', [id]);
    res.json(`Task ${id} foi Deletada com Sucesso!`)
}

const updateTask = async (req, res) => {
    const id = req.params.id;
    const { name, description,data,status } = req.body;
    const response = await pool.query('UPDATE tasks SET name =$1, description =$2,data=$3,status=$4 WHERE id =$5', [
        name,
        description,
        data,
        status,
        id
    ])
    res.json('Task Atualizada')
}
module.exports = {
    deleteTask,
    updateTask,
    getTaskById,
    createTask,
    getTasks
}