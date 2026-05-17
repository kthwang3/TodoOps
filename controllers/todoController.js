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
    res.json(found);
  } catch (err){
    res.status(500).json({message: err.message});
  }
}
const updateTodo = async (req, res) => {
  const id = req.params.id;
  const task = req.body.todo;
  const done = req.body.completed;
  try{
    const updateTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      {todo: task, completed: done},
      {new: true}
    )
    if(!updateTodo) return res.status(404).json({message: 'Task not found'});
    console.log(updateTodo);
    res.status(200).json({success: 'Task changed!'});
  } catch (err){
    res.status(500).json({message: err.message});
  }
}
const deleteTodo = async (req, res) => {
  const id = req.params.id;
  try{
    const deleteTodo = await Todo.findByIdAndDelete(id);
    if(!deleteTodo) return res.status(404).json({message: 'Task not found'});
    console.log(deleteTodo);
    res.status(204).send();
  } catch(err){
    res.status(500).json({message: err.message});
  }
}
module.exports = {getTodos, createTodo, getTodo, updateTodo, deleteTodo};
