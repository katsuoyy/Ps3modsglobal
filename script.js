// ===== LISTA DE MODS =====

const listaMods = document.getElementById("lista-mods");

if (listaMods && typeof mods !== "undefined") {

    mods.forEach(function(mod){

        listaMods.innerHTML += `

        <div class="card-mod">

            <img src="../${mod.imagem}" alt="${mod.nome}">

            <h3>${mod.nome}</h3>

            <p>${mod.descricao}</p>

            <a href="mod.html?id=${mod.id}">
                <button>VER MOD</button>
            </a>

        </div>

        `;

    });

}



// ===== PESQUISA =====

const pesquisa = document.getElementById("pesquisa");

if(pesquisa){

    pesquisa.addEventListener("keyup", function(){

        let texto = pesquisa.value.toLowerCase();


        document.querySelectorAll(".card-mod").forEach(function(card){

            let nome = card.querySelector("h3")
            .textContent.toLowerCase();


            card.style.display =
            nome.includes(texto) ? "" : "none";

        });

    });

}



// ===== PÁGINA DO MOD =====

if(typeof mods !== "undefined"){

    const parametros =
    new URLSearchParams(window.location.search);


    const id =
    Number(parametros.get("id"));


    const mod =
    mods.find(m => m.id === id);



    if(mod){


        document.title = mod.nome;



        if(document.getElementById("nome"))
        document.getElementById("nome").textContent = mod.nome;


        if(document.getElementById("categoria"))
        document.getElementById("categoria").textContent = mod.categoria;


        if(document.getElementById("descricao"))
        document.getElementById("descricao").textContent = mod.descricao;


        if(document.getElementById("capa"))
        document.getElementById("capa").src = "../" + mod.imagem;


        if(document.getElementById("download"))
        document.getElementById("download").href = mod.download;



        const galeria =
        document.getElementById("galeria");



        if(galeria && mod.galeria){


            mod.galeria.forEach(function(foto){


                galeria.innerHTML += `

                <img src="../${foto}">

                `;


            });


        }


    }

}



// ===== PÁGINA DE CATEGORIA =====

const tituloCategoria =
document.getElementById("titulo-categoria");



if(tituloCategoria && typeof mods !== "undefined"){


    const parametros =
    new URLSearchParams(window.location.search);



    const categoria =
    parametros.get("nome");



    tituloCategoria.textContent = categoria;



    if(document.getElementById("nome-categoria"))
    document.getElementById("nome-categoria").textContent = categoria;



    const lista =
    document.getElementById("lista-mods");



    mods
    .filter(mod => mod.categoria === categoria)
    .forEach(function(mod){


        lista.innerHTML += `


        <div class="card-mod">


            <img src="../${mod.imagem}" alt="${mod.nome}">


            <h3>${mod.nome}</h3>


            <p>${mod.descricao}</p>


            <a href="mod.html?id=${mod.id}">
                <button>VER MOD</button>
            </a>


        </div>


        `;


    });


}




// ===== CRIAR CATEGORIAS AUTOMATICAMENTE =====


const listaCategorias =
document.getElementById("lista-categorias");



if(listaCategorias && typeof mods !== "undefined"){


    const categorias =
    [...new Set(mods.map(mod => mod.categoria))];


    categorias.sort();



    categorias.forEach(function(categoria){


        listaCategorias.innerHTML += `


        <a class="card-categoria"
        href="categoria.html?nome=${encodeURIComponent(categoria)}">

            ${categoria}

        </a>


        `;


    });


}
