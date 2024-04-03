const todo_array = [];
function todoinput() {
    const inputelement = document.querySelector('.todo-input');
    const inputelement1 = document.querySelector('.date-times');
    const value1 = inputelement.value;
    const value2 = inputelement1.value
    todo_array.push({ name: value1, duedate: value2 });
    console.log(todo_array);
    inputelement.value = "";
    Render_todo();
}
Render_todo()

function Render_todo() {
    todo1=todo_array;
    let todohtmllist = '';
    todo_array.forEach(function(todo1,index){
        const { name, duedate } = todo1
            const html = `<div>
            <p>${name} </p>
            </div>
            <div><p>${duedate}</p></div>
            <div>
            <button class="del-button
             js-del-button">Delete</button>
            </div>
            `;
            todohtmllist += html
        })
    document.querySelector('.print-array').innerHTML = todohtmllist;

    document.querySelectorAll('.js-del-button')
    .forEach((delbutton,index)=>{
        delbutton.addEventListener('click',()=>{
            todo_array.splice(index,1)
            Render_todo()
        })
    })
}

