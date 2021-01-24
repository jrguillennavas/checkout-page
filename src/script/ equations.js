const equations = (ecu, id) => {
  const element = document.getElementById(id);
  let contador = parseInt(element.innerText);
  if (ecu === "plus") {
    contador += 1;
    element.innerText = contador;
  } else {
    if (contador <= 0) {
      contador = 0;
      element.innerText = contador;
    } else {
      contador -= 1;
      element.innerText = contador;
    }
  }
};

export default equations;
