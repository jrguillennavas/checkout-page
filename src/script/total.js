const total = () => {
  const total = document.getElementById("total");
  const item1 = parseInt(document.getElementById("count1").innerText);
  const item2 = parseInt(document.getElementById("count2").innerText);

  let totalItem1 = 54.99 * item1;
  let totalItem2 = 74.99 * item2;

  total.innerText = (totalItem1 + totalItem2 + 19).toFixed(2);
};

export default total;
