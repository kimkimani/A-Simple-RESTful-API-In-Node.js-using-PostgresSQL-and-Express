const db = require('../config/db');

class Todo {

    //get all todos.
    async getTodos(){

        let results = await db.query(
            `SELECT * FROM todos`
        ).catch(console.log);

        return results.rows;
    };

    //create a todo.
    async createTodo(todo){

        await db.query('INSERT INTO todos (title, checked) VALUES ($1, $2)',[todo.title,false])
        .catch(console.log);

        return;        
    };

    //update a todo.
    async updateTodo(todoId){

        //get the previous todo.
        let original_todo = await db.query(
            `SELECT * FROM todos WHERE id=$1`,[parseInt(todoId)]
        ).catch(console.log);

        //update
        await db.query(`UPDATE todos SET checked=$1 WHERE id=$2`,[!original_todo.rows[0].checked,parseInt(todoId)])
        .catch(console.log);

        return;
    };

    //delete a todo.
    async deleteTodo(todoId){
        
        //delete todo
        await db.query(`DELETE FROM todos WHERE id=$1`,[parseInt(todoId)])
        .catch(console.log);

        return;        
    };

};

module.exports = Todo;