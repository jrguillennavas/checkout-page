import equations from "./ equations.js";
import total from "./total.js";
import saveData from "./saveData.js";
import resetForm from "./resetForm.js";
import showDataFrom from "./showDataForm.js";
import showMessage from "./showMessage.js";
import resetCountItem from "./resetCountItem";

const main = () => {
  const add1 = document.getElementById("add1");
  const less1 = document.getElementById("less1");
  const add2 = document.getElementById("add2");
  const less2 = document.getElementById("less2");
  const sendForm = document.getElementById("send-form");

  showDataFrom();

  add1.addEventListener("click", () => {
    equations("plus", "count1");
    total();
  });
  less1.addEventListener("click", () => {
    equations("less", "count1");
    total();
  });
  add2.addEventListener("click", () => {
    equations("plus", "count2");
    total();
  });
  less2.addEventListener("click", () => {
    equations("less", "count2");
    total();
  });

  sendForm.onsubmit = (e) => {
    e.preventDefault();
    saveData();
    resetForm();
    showMessage();
    resetCountItem();
  };
};
export default main;
