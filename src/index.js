let input = document.querySelector("#gsp");
let output = document.querySelector(".answer");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let arr = [
  "0123456789",
  "qwertyuiopasdfghjklzxcvbnm",
  "!@#$%^&*(){}[]=+,.",
  "QWERTYUIOPASDFGHJKLZXCVBNM"
];

let generateStrongPassword = () => {
  let len = +input.value;
  let password = "";
  if (len > 7 && len < 21)
    while (len--)
      password += arr[len % arr.length].charAt(
        getRandomInt(arr[len % arr.length].length)
      );
  else password = "Choose within 8 and 20";
  output.innerHTML = password;
};

document
  .getElementById("out")
  .addEventListener("click", generateStrongPassword);
