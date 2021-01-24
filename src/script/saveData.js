const saveData = () => {
  const inputs = document.querySelectorAll("input");
  const save = document.getElementById("save");
  if (save.checked) {
    let data = [];
    localStorage.clear();
    inputs.forEach((value, key) => {
      if (value.type !== "submit" && value.type !== "checkbox") {
        data.push(value.value);
      }
    });
    localStorage.setItem("datas", data);
  }
};
export default saveData;
