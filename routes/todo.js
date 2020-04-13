const {Router}=require('express')
const router=Router()
const Todo=require('../models/todo')


//Получение задач
router.get('/',(req,res)=>{
res.json({a:1})
})

//Создать задачу
router.post('/',(req,res)=>{

})

//Обновление задачи
router.put('/:id',(req,res)=>{

})

router.delete('/:id',(req,res)=>{

})

module.exports=router