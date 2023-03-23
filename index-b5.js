document.getElementById("meuBotao").addEventListener("click", function (event) {
  event.preventDefault();
  let metaDoDia = document.getElementById("meta");
  let porcentagem = metaDoDia.value;
  let batidasForm = document.getElementById("batidas");
  let batidasTotal = batidasForm.value;
  let strips = (batidasTotal * 3) / 2;
  let descarteForm = document.getElementById("descarte");
  let pesoDescarte = descarteForm.value;
  let descarteStrip = Math.round(pesoDescarte / 17.143);
  document.getElementById("resultado").innerHTML =
    "Total de strips: " +
    strips +
    "<br>" +
    "Total de strips de descartados: " +
    descarteStrip +
    "<br>" +
    "Total de Produção: " +
    (strips - descarteStrip) +
    "<br>" +
    "Total de Descarte em Cartuchos: " +
    Math.round(descarteStrip / 3) +
    "<br>" +
    "Total de Strips bons em Cartuchos: " +
    Math.round((strips - descarteStrip) / 3) +
    "<br>" +
    "Porcentagem: " +
    Math.round(((strips - descarteStrip) * 100) / porcentagem) +
    "%";
});
