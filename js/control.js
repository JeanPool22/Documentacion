function printOne() {
  const container = document.querySelector("p");
  fetch("etiqueta/modulo_uno.md")
    .then((res) => (res.ok ? res.text() : Promise.reject(res)))
    .then((text) => {
      container.innerHTML = new showdown.Converter().makeHtml(text);
    })
    .catch((err) => {
      let message = err.statusText || "Ocurrio un error";
      container.innerHTML = `Error ${err.status}: ${message}`;
    });
}

function printTwo() {
  const container = document.querySelector("p");
  fetch("etiqueta/modulo_dos.md")
    .then((res) => (res.ok ? res.text() : Promise.reject(res)))
    .then((text) => {
      container.innerHTML = new showdown.Converter().makeHtml(text);
    })
    .catch((err) => {
      let message = err.statusText || "Ocurrio un error";
      container.innerHTML = `Error ${err.status}: ${message}`;
    });
}

function printThree() {
  const container = document.querySelector("p");
  fetch("etiqueta/modulo_tres.md")
    .then((res) => (res.ok ? res.text() : Promise.reject(res)))
    .then((text) => {
      container.innerHTML = new showdown.Converter().makeHtml(text);
    })
    .catch((err) => {
      let message = err.statusText || "Ocurrio un error";
      container.innerHTML = `Error ${err.status}: ${message}`;
    });
}

function printFour() {
  const container = document.querySelector("p");
  fetch("etiqueta/modulo_cuatro.md")
    .then((res) => (res.ok ? res.text() : Promise.reject(res)))
    .then((text) => {
      container.innerHTML = new showdown.Converter().makeHtml(text);
    })
    .catch((err) => {
      let message = err.statusText || "Ocurrio un error";
      container.innerHTML = `Error ${err.status}: ${message}`;
    });
}

function printFive() {
  const container = document.querySelector("p");
  fetch("etiqueta/modulo_cinco.md")
    .then((res) => (res.ok ? res.text() : Promise.reject(res)))
    .then((text) => {
      container.innerHTML = new showdown.Converter().makeHtml(text);
    })
    .catch((err) => {
      let message = err.statusText || "Ocurrio un error";
      container.innerHTML = `Error ${err.status}: ${message}`;
    });
}
