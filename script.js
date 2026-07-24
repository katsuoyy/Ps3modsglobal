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
