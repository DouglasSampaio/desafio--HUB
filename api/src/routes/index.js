const { Router } = require('express');
const router = Router();

const { getUsers, createUser, getUserById, findUser} = require('../controllers/UsersControl')
const {deleteTask, updateTask,createTask,getTaskById,getTasks } = require('../controllers/TaskControl')

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.get('/loginUser/:id', findUser);
router.post('/users', createUser);


router.get('/tasks', getTasks);
router.get('/tasks/:user_id', getTaskById);
router.post('/task/:user_id', createTask);
router.delete('/tasks/:id', deleteTask);
router.put('/tasks/:id', updateTask);

// router.post('./authenticate', async (req,res))=>{
//     const{email,password} = req.body;
//     const user = await 
// }

module.exports = router;