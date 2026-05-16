const Todo = require('../model/Todo');

const getTodos = async (req, res) => {
  try{
    const todos = await Todo.find();
    res.json(todos);
  } catch (err){
    res.status(500).json({ message: err.message });
  }
}
const createTodo = async (req, res) => {
  const task = req.body.todo;
  if (!task) return res.status(400).json({message: 'Task is required'});
  try{
    const result = await Todo.create({
      "todo": task
    });
    console.log(result);
    res.status(201).json({success: `New task ${task} created!`});
  } catch (err){
    res.status(500).json({message: err.message});
  }
}
const getTodo = async (req, res) => {
  const id = req.params.id;
  try{
    const found = await Todo.findById(id);
    if(!found) return res.status(404).json({message: 'Task not found'});
    
  }
  

}

/*
router.get('/', todoController.getTodos);
router.post('/', todoController.createTodo);
router.get('/:id', todoController.getTodo);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
*/