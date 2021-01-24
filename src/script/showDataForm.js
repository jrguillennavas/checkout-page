const showDataFrom = () => {
  if (localStorage.getItem("datas").length > 0) {
    let data = localStorage.getItem("datas").split(",");
    const inputs = document.querySelectorAll("input");
    inputs.forEach((value, key) => {
      if (value.type !== "submit") {
        value.value = data[key];
      }
    });
  }
};
export default showDataFrom;
