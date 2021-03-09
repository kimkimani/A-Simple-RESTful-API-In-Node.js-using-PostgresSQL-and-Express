//updating a todo.
function updateTodo(todoId){

    //contact server
    return $.ajax({
        method:'put',
        
        url:`/todos/${todoId}`,

        contentType:'application/json',

        cache:false,

        error: error => {

            console.error(error);

        }
                
    });

};

//deleting a todo.
function deleteTodo(todoId) {

    //contact server
    return $.ajax({
        method:'delete',

        url:`/todos/${todoId}`,

        contentType:'application/json',

        cache:false,

        success: () => {

            location.reload()

        },

        error: error => {

            console.error(error);

        }
    });
}