const cookieBox = document.querySelector(".wrapper"),
    buttons = document.querySelectorAll(".button");

const executeCodes = () => {
    if(document.cookie.includes("kelvin")) return;
    cookieBox.classList.add("show");

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            cookieBox.classList.remove("show");

            if(button.id === "accept-btn") {
                document.cookie = "codedBy=kelvin; max-age=" + 60 * 60 * 24 * 30;
            }
        });
    });
}

window.addEventListener('load', executeCodes);

/*
const cookieContainer = document.querySelector(".consent-container");
const acceptCookieBtn = document.getElementById("accept-cookie-btn");


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();

    document.cookie = `${cname}=${cvalue};${expires};path=/`;
}

function getCookie(cname) {
    let name = `${cname}=`;
    let decodeCookie = decodeURIComponent(document.cookie);
    let cookieArr = decodeCookie.split(";");

    for(let i = 0; i <cookieArr.length; i++) {
    let c = cookieArr[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let username = getCookie("username");
  if (username === "") {
    cookieContainer.style.display = "block";
  }
}

document.addEventListener('DOMContentLoaded', checkCookie);

acceptCookieBtn.addEventListener("click", () => {
    setCookie("username", "kelvin", 3);
    cookieContainer.style.display = "none";
});
*/