const dropdownPop = document.getElementById("button-dropdown");
const dropdownProcessos = document.getElementById("button-processo");
const dropdownContainers =
  document.getElementsByClassName("dropdown-container");
const options = document.getElementsByClassName("dropdown-option");
const links = document.getElementById("link-pdf");
const images = document.getElementById("link-processo");
const mapValuePdf = {
  recrutamento:
    "http://hospitalespanhol.com.br/wp-content/uploads/2020/08/PO-RECRUTAMENTO-E-SELE%C3%87%C3%83O-PESSOAL-RH.pdf",
  treinamento:
    "https://www.saude.rj.gov.br/comum/code/MostrarArquivo.php?C=MTE5NTQ%2C",
  desempenho:
    "http://www.hu.ufsc.br/documentos/pop/enfermagem/administrativos/AVALIACOES/AVALIACAO_DESEMPENHO.pdf",
  desligamento:
    "http://ints.org.br/wp-content/uploads/2021/05/PO.GPO_.006.09-Admiss%C3%A3o-Demiss%C3%A3o-e-f%C3%A9rias.pdf",
};

const mapValueImg = {
  recrutamento:
    "http://rh.unis.edu.br/wp-content/uploads/sites/67/2015/09/Fluxograma-Recrutamento-e-Sele%C3%A7%C3%A3o2.pdf",
  treinamento:
    "http://saneatins.nucleoead.net/portaldoconhecimento/wp-content/uploads/2012/12/FLUXOGRAMA-TREINAMENTOS.pdf",
  desempenho: "https://www.docdroid.net/0n4Wk5H/imgpreview-pdf",
  desligamento: "https://www.docdroid.net/P4iehT5/publication-paginas-5-pdf",
};

function esconderDropdown(name) {
  for (let i = 0; i < dropdownContainers.length; i++) {
    const dropdown = dropdownContainers[i];
    if (dropdown.dataset.dropdown === name) dropdown.classList.add("hide");
  }
}

for (let i = 0; i < dropdownContainers.length; i++) {
  const dropdown = dropdownContainers[i];
  window.addEventListener("click", function (e) {
    if (dropdown.dataset.dropdown === "pops") {
      if (dropdownPop.contains(e.target)) {
        if (dropdown.className.indexOf("hide") === -1)
          dropdown.classList.add("hide");
        else dropdown.classList.remove("hide");
      } else if (
        dropdown.className.indexOf("hide") === -1 &&
        !dropdown.contains(e.target)
      )
        dropdown.classList.add("hide");
    } else if (dropdown.dataset.dropdown === "processos") {
      if (dropdownProcessos.contains(e.target)) {
        if (dropdown.className.indexOf("hide") === -1)
          dropdown.classList.add("hide");
        else dropdown.classList.remove("hide");
      } else if (
        dropdown.className.indexOf("hide") === -1 &&
        !dropdown.contains(e.target)
      )
        dropdown.classList.add("hide");
    }
  });
  window.addEventListener("blur", function () {
    if (dropdown.dataset.dropdown === "pops") {
      setTimeout(() => {
        if (document.activeElement.tagName === "IFRAME") {
          if (dropdown.className.indexOf("hide") === -1)
            dropdown.classList.add("hide");
        }
      });
    } else if (dropdown.dataset.dropdown === "processos") {
      setTimeout(() => {
        if (document.activeElement.tagName === "IFRAME") {
          if (dropdown.className.indexOf("hide") === -1)
            dropdown.classList.add("hide");
        }
      });
    }
  });
}
for (let index = 0; index < options.length; index++) {
  const opcao = options[index];
  opcao.addEventListener("click", function (event) {
    if (opcao.dataset.dropdown === "pops") {
      links.src = mapValuePdf[opcao.dataset.value];
      dropdownPop.textContent = opcao.textContent;
      esconderDropdown("pops");
    } else if (opcao.dataset.dropdown === "processos") {
      images.src = mapValueImg[opcao.dataset.value];
      dropdownProcessos.textContent = opcao.textContent;
      esconderDropdown("processos");
    }
  });
}
