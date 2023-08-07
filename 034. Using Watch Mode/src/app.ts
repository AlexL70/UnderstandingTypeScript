const button = document.querySelector("button");

function clicked(message: string) {
  console.log(message);
}

//  some test comment
if (button) {
  button.addEventListener("click", clicked.bind(this, "Button clicked!"));
}
