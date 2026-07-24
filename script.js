// ===============================
// PS3ModsGlobal Script v2.0
// ===============================

// ---------- TODOS OS MODS ----------

const listaMods = document.getElementById("lista-mods");

if (listaMods && typeof mods !== "undefined") {

    mods.forEach(mod => {

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

// ---------- PESQUISA ----------

const pesquisa = document.getElementById("pesquisa");

if (pesquisa) {

    pesquisa.addEventListener("keyup", () => {

        const texto = pesquisa.value.toLowerCase();

        document.querySelectorAll(".card-mod").forEach(card => {

            const nome = card.querySelector("h3").textContent.toLowerCase();

            card.style.display = nome.includes(texto)
                ? "block"
                : "none";

        });

    });

}
// ---------- PÁGINA DO MOD ----------

if (typeof mods !== "undefined") {

    const parametros = new URLSearchParams(window.location.search);

    const id = Number(parametros.get("id"));

    const mod = mods.find(m => m.id === id);

    if (mod && document.getElementById("nome")) {

        document.title = mod.nome;

        document.getElementById("nome").textContent = mod.nome;

        document.getElementById("categoria").textContent = mod.categoria;

        document.getElementById("descricao").textContent = mod.descricao;

        document.getElementById("capa").src = "../" + mod.imagem;

        document.getElementById("download").href = mod.download;

        const galeria = document.getElementById("galeria");

        if (galeria) {

            galeria.innerHTML = "";

            mod.galeria.forEach(foto => {

                galeria.innerHTML += `
                    <img src="../${foto}" alt="">
                `;

            });

        }

    }

}
// ---------- CATEGORIAS AUTOMÁTICAS ----------

const listaCategorias = document.getElementById("lista-categorias");

if (listaCategorias && typeof mods !== "undefined") {

    const categorias = [...new Set(mods.map(mod => mod.categoria))];

    categorias.sort();

    categorias.forEach(categoria => {

        listaCategorias.innerHTML += `

        <a class="card-categoria"
        href="categoria.html?nome=${encodeURIComponent(categoria)}">

            ${categoria}

        </a>

        `;

    });

}



// ---------- PÁGINA DA CATEGORIA ----------

const tituloCategoria = document.getElementById("titulo-categoria");

const nomeCategoria = document.getElementById("nome-categoria");

const listaCategoria = document.getElementById("lista-mods");

if (
    tituloCategoria &&
    listaCategoria &&
    typeof mods !== "undefined"
) {

    const parametros = new URLSearchParams(window.location.search);

    const categoria = parametros.get("nome");

    if (nomeCategoria)
        nomeCategoria.textContent = categoria;

    tituloCategoria.textContent = categoria;

    listaCategoria.innerHTML = "";

    mods
        .filter(mod => mod.categoria === categoria)
        .forEach(mod => {

            listaCategoria.innerHTML += `

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
