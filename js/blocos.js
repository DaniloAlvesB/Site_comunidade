
function card1(list, tipo) {
    if(list.length > 0){
        for(var i = 0; i < list.length; i++) {
            console.log(list.length)
            if(list[i][3] == tipo || list[i][3] == 2){

                //Primordial
                let primordial = "text-light";
                if(list[i][1] == "Primordial"){
                    primordial = " primordial";
                }

                //Raridade
                let raridade = 0;
                for(var a = 0; a < list.length; a++) {
                    if(list[i][1] == list[a][1]){
                        raridade++
                    }
                }
                raridade = raridade*100/list.length;

                itens.innerHTML += `
                    <div class="bloco1 text-center bg-dark pt-3">
                        <h1 style="color: rgb(236, 0, 236)">${list[i][0]}</h1>
                        <hr size="1">
                        <h4 class="${primordial}">${list[i][1]} - %${raridade.toFixed(2)}</h4>
                        <hr size="1">
                        <h5 class="text-secondary">"${list[i][2]}"</h5>
                        <div class="d-flex flex-row text-center justify-content-center text-light">
                            <h5>XP</h5>
                            <progress value="${list[i][4]}" max="100" class="m-2"></progress>
                            <h5 class="text-light">${list[i][4]}%</h5>
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

function fixado(list, nome) {
    if(list.length > 0){
        for(var i = 0; i < list.length; i++) {
            if(list[i][0] == nome){

                //Primordial
                let primordial = "text-light";
                if(list[i][1] == "Primordial"){
                    primordial = " primordial";
                }

                fixed.innerHTML += `
                    <div class="bloco1 text-center bg-realy-dark pt-3">
                        <h1 class="colorify-text">${list[i][0]}</h1>
                        <hr size="1">
                        <h4 class="${primordial}">${list[i][1]}</h4>
                        <hr size="1">
                        <h5 class="text-secondary">"${list[i][2]}"</h5>
                        <div class="d-flex flex-row text-center justify-content-center text-light">
                            <h5>XP</h5>
                            <progress value="${list[i][4]}" max="100" class="m-2">${list[i][4]}%</progress>
                        </div>
                    </div>
                `
                break;
            }
        }
    }
}


function recente(list) {
    if(list.length > 0){
        for(var i = 0; i < 5; i++) {

            //categoria
            let cat = "";
            if(list[i][3] == 0){
                cat = " - Follow";
            }else{
                cat = " - Sub";
            }

            //Primordial
            let primordial = "text-light";
            if(list[i][1] == "Primordial"){
                primordial = " primordial";
            }

            recent.innerHTML += `
                <div class="bloco1 text-center bg-realy-dark pt-3">
                    <h1 style="color: rgb(236, 0, 236)">${list[i][0] + cat}</h1>
                    <hr size="1">
                    <h4 class="${primordial}">${list[i][1]}</h4>
                    <hr size="1">
                    <h5 class="text-secondary ${primordial}">"${list[i][2]}"</h5>
                    <div class="d-flex flex-row text-center justify-content-center text-light">
                        <h5>XP</h5>
                        <progress value="${list[i][4]}" max="100" class="m-2">${list[i][4]}%</progress>
                    </div>
                </div>
            `
        }
    }
}