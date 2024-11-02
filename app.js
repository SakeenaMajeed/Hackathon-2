function navigateToResumePage() {
  const button = document.querySelector(".lets-go-btn");

  button.style.transform = "scale(0.95)";

  setTimeout(() => {
    button.style.transform = "scale(1)";
    alert("Navigating to the Resume Page!");
  }, 200);
}
