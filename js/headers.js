function header1(){
    header.innerHTML = `
    <div  id="head" class="justify-content-between bg-realy-dark text-light text-left p-3 pt-4 d-flex flex-wrap" style="text-decoration: none;">
        <a href="index.html" style="text-decoration: none;">
            <h4 class="text-light">< Voltar</h4>
        </a>
        <h2 class="colorify-text" style="margin-left: 24%;">Follows</h2>
        <div class="d-flex" style="max-width: 30%; min-width: 30%;">
            <input id="txtBusca" type="text" class="input-group" style="border-radius: 5px 0px 0px 5px" placeholder="Buscar por nickname"></input>
            <button class="btn btn-primary" style="border-radius: 0px 5px 5px 0px" onclick="pesquisar()">Buscar</button>
        </div>
    </div>
    `
}

function header2(){
    header.innerHTML = `
    <div  id="head" class="justify-content-between bg-realy-dark text-light text-left p-3 pt-4 d-flex flex-wrap" style="text-decoration: none;">
        <a href="index.html" style="text-decoration: none;">
            <h4 class="text-light">< Voltar</h4>
        </a>
        <h2 class="colorify-text" style="margin-left: 24%;">Subs</h2>
        <div class="d-flex" style="max-width: 30%; min-width: 30%;">
            <input id="txtBusca" type="text" class="input-group" style="border-radius: 5px 0px 0px 5px" placeholder="Buscar por nickname"></input>
            <button class="btn btn-primary" style="border-radius: 0px 5px 5px 0px" onclick="pesquisar()">Buscar</button>
        </div>
    </div>
    `
}

function header3(nome){
    header.innerHTML = `
    <div  id="head" class="bg-realy-dark text-light text-left p-3 pt-4 d-flex flex-wrap" style="text-decoration: none;">
        <a href="index.html" style="text-decoration: none;">
            <h4 class="text-light">< Voltar</h4>
        </a>
        <h2 class="colorify-text" style="margin-left: 41%;">${nome}</h2>
    </div>
    `
}

