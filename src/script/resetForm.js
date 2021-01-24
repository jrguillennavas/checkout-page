const resetForm = () => {
  const inputs = document.querySelectorAll("input");
  const save = document.getElementById("save");
  inputs.forEach((value, key) => {
    if (value.type !== "submit") {
      value.value = "";
      save.checked = false;
    }
  });
};
export default resetForm;
