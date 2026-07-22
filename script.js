// ================================
// PS3ModsGlobal 2.0
// ================================

if (typeof mods !== "undefined") {

    // ==========================
    // LISTA DE MODS
    // ==========================

    const listaMods =
    document.getElementById("lista-mods");

    if (listaMods && !window.location.href.includes("categoria.html")) {

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

    // ==========================
    // PESQUISA
    // ==========================

    const pesquisa =
    document.getElementById("pesquisa");

    if (pesquisa) {

        pesquisa.addEventListener("keyup", () => {

            let texto =
            pesquisa.value.toLowerCase();

            document
            .querySelectorAll(".card-mod")
            .forEach(card => {

                let nome =
                card.querySelector("h3")
                .textContent
                .toLowerCase();

                card.style.display =
                nome.includes(texto)
                ? ""
                : "none";

            });

        });

    }

    // ==========================
    // GERAR CATEGORIAS
    // ==========================

    const listaCategorias =
    document.getElementById("lista-categorias");

    if (listaCategorias) {

        const categorias =
        [...new Set(mods.map(mod => mod.categoria
