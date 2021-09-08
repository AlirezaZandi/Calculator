const themes = document.querySelectorAll(".btn-select *");
const root = document.querySelector(":root");

for (let index = 0; index < 3; index++) {
  const element = themes[index];
  element.addEventListener("click", function () {
    setTheme(index);
  });
}

function setTheme(index) {
  setToggle(index);
  if (index === 0) {
    root.style.setProperty(
      "--Very-dark-desaturated-blue",
      "hsl(222, 26%, 31%)"
    );
    root.style.setProperty(
      "--Very-dark-desaturated-blue2",
      "hsl(223, 31%, 20%)"
    );
    root.style.setProperty(
      "--Very-dark-desaturated-blue3",
      "hsl(224, 36%, 15%)"
    );
    root.style.setProperty("--Desaturated-dark-blue", "hsl(225, 21%, 49%)");
    root.style.setProperty("--Desaturated-dark-blue2", "hsl(224, 28%, 35%)");
    root.style.setProperty("--Red", "hsl(6, 63%, 50%)");
    root.style.setProperty("--Dark-red", "hsl(6, 70%, 34%)");
    root.style.setProperty("--Light-grayish-orange", "hsl(30, 25%, 89%)");
    root.style.setProperty("--Grayish-orange", "hsl(28, 16%, 65%)");
    root.style.setProperty("--Very-dark-grayish-blue", "hsl(221, 14%, 31%)");
    root.style.setProperty("--White", "hsl(0, 0, 100%)");
    document.querySelector("html").style.color = "white";
    document.querySelectorAll("button.blue")[0].style.color = "white";
    document.querySelectorAll("button.blue")[1].style.color = "white";
    document.querySelector("button.red").style.color = "white";
  } else if (index === 1) {
    root.style.setProperty("--Very-dark-desaturated-blue", "hsl(0, 0%, 90%)");
    root.style.setProperty("--Very-dark-desaturated-blue2", "hsl(0, 5%, 81%)");
    root.style.setProperty("--Very-dark-desaturated-blue3", "hsl(0, 0%, 93%)");
    root.style.setProperty("--Desaturated-dark-blue", "hsl(185, 42%, 37%)");
    root.style.setProperty("--Desaturated-dark-blue2", "hsl(185, 58%, 25%)");
    root.style.setProperty("--Red", "hsl(25, 98%, 40%)");
    root.style.setProperty("--Dark-red", "hsl(25, 99%, 27%)");
    root.style.setProperty("--Light-grayish-orange", "hsl(45, 7%, 89%)");
    root.style.setProperty("--Grayish-orange", "hsl(35, 11%, 61%)");
    root.style.setProperty("--Very-dark-grayish-blue", "hsl(60, 10%, 19%)");
    root.style.setProperty("--White", "hsl(0, 0, 100%)");
    document.querySelector("html").style.color = "hsl(60, 10%, 19%)";
  } else {
    root.style.setProperty("--Very-dark-desaturated-blue", "hsl(268, 75%, 9%)");
    root.style.setProperty(
      "--Very-dark-desaturated-blue2",
      "hsl(268, 71%, 12%)"
    );
    root.style.setProperty(
      "--Very-dark-desaturated-blue3",
      "hsl(268, 71%, 12%)"
    );
    root.style.setProperty("--Desaturated-dark-blue", "hsl(281, 89%, 26%)");
    root.style.setProperty("--Desaturated-dark-blue2", "hsl(285, 91%, 52%)");
    root.style.setProperty("--Red", "hsl(176, 100%, 44%)");
    root.style.setProperty("--Dark-red", "hsl(177, 92%, 70%)");
    root.style.setProperty("--Light-grayish-orange", "hsl(268, 47%, 21%)");
    root.style.setProperty("--Grayish-orange", "hsl(290, 70%, 36%)");
    root.style.setProperty("--Very-dark-grayish-blue", "hsl(52, 100%, 62%)");
    root.style.setProperty("--White", "hsl(198, 20%, 13%)");
    document.querySelector("html").style.color = "hsl(52, 100%, 62%)";
    document.querySelectorAll("button.blue")[0].style.color = "white";
    document.querySelectorAll("button.blue")[1].style.color = "white";
    document.querySelector("button.red").style.color = "black";
  }
}

const toggleBall = document.querySelector(
  ".theme-selector .selector .red-circle"
);

function setToggle(index) {
  if (index === 0) {
    toggleBall.style.left = "8px";
  } else if (index === 1) {
    toggleBall.style.left = "32px";
  } else {
    toggleBall.style.left = "58px";
  }
}
