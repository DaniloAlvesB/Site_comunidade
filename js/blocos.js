/*

    Tipos:
        1 - follow;
        2 - sub;

*/

function card1(list, tipo) {
    if(list.length > 0){
        for(var i = 0; i < list.length; i++) {
            console.log(list.length)
            if(list[i][3] == tipo || tipo == 0){
                itens.innerHTML += `
                    <div class="bloco1 text-center bg-dark pt-3">
                        <h1 style="color: rgb(236, 0, 236)">Zegfy</h1>
                        <hr size="1">
                        <h4 class="text-light">Interagiu com 2.450 mensagens em uma live.</h4>
                        <hr size="1">
                        <h5 class="text-secondary">"Me sinto parte da comunidade! Espero que várias pessoas possam ver isso no futuro."</h5>
                    </div>
                `
            }

        }
    }else{
        console.log("Sem itens na lista")
        itens.innerHTML = `<h2>Parece que ainda não temos esse conteúdo!</h2>`
    }
}
