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

pesquisa.addEventListener("keyup",function(){

let texto = pesquisa.value.toLowerCase();

document.querySelectorAll(".card-mod").forEach(function(card){

let nome = card.querySelector("h3").textContent.toLowerCase();

card.style.display = nome.includes(texto) ? "" : "none";

});

});

}



// ===== PÁGINA DO MOD =====

const parametros = new URLSearchParams(window.location.search);

const id = Number(parametros.get("id"));

const mod = mods.find(m => m.id === id);

if(mod){

document.title = mod.nome;

document.getElementById("nome").textContent = mod.nome;

document.getElementById("categoria").textContent = mod.categoria;

document.getElementById("descricao").textContent = mod.descricao;

document.getElementById("capa").src = "../" + mod.imagem;

document.getElementById("download").href = mod.download;

const galeria = document.getElementById("galeria");

mod.galeria.forEach(function(foto){

galeria.innerHTML += `
<img src="../${foto}">
`;

});

}
