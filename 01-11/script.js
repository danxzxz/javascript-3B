const input = document.querySelector('input')

const botao = document.querySelector('button')

const lista = document.querySelector('ul')

botao.addEventListener('click', () => {

    let tarefa = input.value;


    if(tarefa != ""){
        addToList(tarefa)
        salvar(tarefa);
        input.value = "";
    }
        

});



    function addToList(tarefa){
        let novaTarefa = document.createElement('li');
        novaTarefa.textContent = tarefa;
        

        //botao de exclusao da tarefa
        let excluir = document.createElement('button')
        excluir.textContent = 'excluir';

        excluir.addEventListener('click', ()=>{
            novaTarefa.remove()
        })
        
        novaTarefa.appendChild(excluir)

        lista.appendChild(novaTarefa);
    }



    function salvar(tarefa){

        const tarefas =  obterTarefas();

        tarefas.push(tarefa);

        localStorage.setItem('tarefas', JSON.stringify(tarefas))

}

    function obterTarefas(tarefa){
    const tarefas =  localStorage.getItem('tarefas')
    return tarefas ? JSON.parse(tarefas) : [];


        //              |
        //              v
        // if (tarefas ) {
        //     tarefas = JSON.parse(tarefas)
        // }
        // else{
        //     tarefas = []
        // }
            
    }