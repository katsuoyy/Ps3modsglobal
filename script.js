document.querySelector("button").addEventListener("click", function() {
    alert("Em breve o download estará disponível!");
});
const pesquisa = document.getElementById("pesquisa");

if (pesquisa) {
    pesquisa.addEventListener("keyup", function () {

        const texto = pesquisa.value.toLowerCase();
        const mods = document.querySelectorAll(".card-mod");

        mods.forEach(function (mod) {

            const nome = mod.querySelector("h3").textContent.toLowerCase();

            if (nome.includes(texto)) {
                mod.style.display = "";
            } else {
                mod.style.display = "none";
            }

        });

    });
}
