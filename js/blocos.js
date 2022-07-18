
function card1(list, tipo) {
    if(list.length > 0){
        for(var i = 0; i < list.length; i++) {
            console.log(list.length)
            if(list[i][3] == tipo || list[i][3] == 2){
                itens.innerHTML += `
                    <div class="bloco1 text-center bg-dark pt-3">
                        <h1 style="color: rgb(236, 0, 236)">${list[i][0]}</h1>
                        <hr size="1">
                        <h4 class="text-light">${list[i][1]}</h4>
                        <hr size="1">
                        <h5 class="text-secondary">"${list[i][2]}"</h5>
                        <div class="d-flex flex-row text-center justify-content-center text-light">
                            <h5>XP</h5>
                            <progress value="${list[i][3]}" max="100" class="m-2">${list[i][3]}%</progress>
                        </div>
                    </div>
                `
            }

        }
    }else{
        console.log("Sem itens na lista")
        itens.innerHTML = `<h2>Parece que ainda não temos esse conteúdo!</h2>`
    }
}


function perfil1(lista, posicao){



}