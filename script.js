const listaMods = document.getElementById("lista-mods");

if (listaMods && typeof mods !== "undefined") {

    mods.forEach(function(mod) {

        listaMods.innerHTML += `
            <div class="card-mod">

                <img src="../${mod.imagem}" alt="${mod.nome}">

                <h3>${mod.nome}</h3>

                <p>${mod.descricao}</p>

                <a href="${mod.pagina}">
                    <button>VER MOD</button>
                </a>

            </div>
        `;

    });

}

const pesquisa = document.getElementById("pesquisa");

if (pesquisa) {

    pesquisa.addEventListener("keyup", function() {

        const texto = pesquisa.value.toLowerCase();

        document.querySelectorAll(".card-mod").forEach(function(card) {

            const nome = card.querySelector("h3").textContent.toLowerCase();

            if (nome.includes(texto)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

}
