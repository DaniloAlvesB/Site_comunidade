function header1(){
    header.innerHTML = `
    <div  id="head" class="bg-realy-dark text-light text-left p-3 pt-4 d-flex flex-wrap" style="text-decoration: none;">
        <a href="index.html" style="text-decoration: none;">
            <h4 class="text-light">< Voltar</h4>
        </a>
        <h2 class="colorify-text" style="margin-left: 41%;">Follows</h2>
    </div>
    `
}

function header2(){
    header.innerHTML = `
    <div  id="head" class="bg-realy-dark text-light text-left p-3 pt-4 d-flex flex-wrap" style="text-decoration: none;">
        <a href="index.html" style="text-decoration: none;">
            <h4 class="text-light">< Voltar</h4>
        </a>
        <h2 class="colorify-text" style="margin-left: 41%;">Subs</h2>
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
