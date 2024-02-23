// Obtém referências para a caixa de entrada e o contêiner da lista

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Função para adicionar uma nova tarefa à lista

function addTask(){
        // Verifica se a caixa de entrada está vazia
    if(inputBox.value === ''){
        alert("Adicione uma tarefa");
    }
    else{
                // Cria um novo elemento <li> com o texto da caixa de entrada
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

                // Adiciona o novo <li> ao contêiner da lista
        listContainer.appendChild(li);

                // Cria um elemento <span> para o ícone de exclusão
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";

                // Adiciona o <span> ao <li>
        li.appendChild(span);
    }

        // Limpa o valor da caixa de entrada
    inputBox.value = "";
    
        // Salva os dados na memória local
    saveData();
}

// Adiciona um ouvinte de eventos ao contêiner da lista para tratar cliques
listContainer.addEventListener("click", function(e){

        // Verifica se o elemento clicado é um <li>
    if(e.target.tagName === "LI"){
        
                // Adiciona ou remove a classe "checked" para marcar ou desmarcar a tarefa
       e.target.classList.toggle("checked");
        
                // Salva os dados na memória local
       saveData();
    }
            // Verifica se o elemento clicado é um <span>
    else if(e.target.tagName === "SPAN"){
        
                // Remove o <li> pai do <span> clicado
            e.target.parentElement.remove();

                // Salva os dados na memória local
            saveData();
    }
}, false);

// Função para salvar os dados da lista na memória local
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Função para exibir as tarefas salvas ao carregar a página
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

// Chama a função para exibir as tarefas ao carregar a página
showTask();
