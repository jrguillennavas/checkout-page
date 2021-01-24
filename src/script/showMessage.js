const showMessage = () => {
  const message = document.getElementById("message");
  message.style.display = "block";
  setTimeout(() => {
    message.style.opacity = 0;
  }, 1000);
};

export default showMessage;
