const { Router } = require("express");
const router = Router();
const Todo = require("../models/todo");

//Получение задач
router.get("/",async (req, res) => {
    try {
      const todos= await Todo.findAll()
        res.json(todos);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "server error",
      });
    }
 
});

//Создать задачу
router.post("/", async(req, res) => {
  try {
  const todo= await Todo.create({
     title:req.body.title,
     done:false 
  })
res.status(201).json({todo})



  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "server error",
    });
  }
});

//Обновление задачи
router.put("/:id", (req, res) => {
    try {
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "server error",
      });
    }
});

router.delete("/:id", (req, res) => {
    try {
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "server error",
      });
    }
});

module.exports = router;
