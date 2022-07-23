function addTodo(){
    let input = document.getElementById('inputtodo').value
    let newli = document.createElement('li')
    let node = document.createTextNode(input)
    newli.className = "list-group-item"
    newli.appendChild(node)
    let elist = document.getElementById('todolist')
    elist.appendChild(newli)

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    newli.appendChild(span);

    let inputclear = document.getElementById('inputtodo')
    inputclear.value = ''
}

let cl = document.querySelector('ul')
cl.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
        let tdlist = document.querySelectorAll('.list-group-item').forEach(td => {
            td.addEventListener('click', () => {
                td.remove()
            })
        })
    }
})