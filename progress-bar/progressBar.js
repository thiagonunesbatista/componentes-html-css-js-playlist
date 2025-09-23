const progressBar = document.querySelector(".progress-bar");
const progressBarIcon = document.querySelector(".progress-bar img");
const progressBarPercentage = document.querySelector(
  ".progress-bar__percentage"
);
const progressBarStatus = document.querySelector(".progress-bar__status");
const progressBarLine = document.querySelector(".progress-bar__line");

console.log(progressBarLine);

const dataFromApi = {
  percentage: 20,
  status: "warning"
};

const progressBarBaseStatus = {
  success: {
    icon: "./assets/success-icon.png",
    statusText: "Completed",
    cssClass: "progress-bar--success"
  },
  informative: {
    icon: "./assets/informative-icon.png",
    statusText: "Shipping ...",
    cssClass: "progress-bar--informative"
  },
  error: {
    icon: "./assets/error-icon.png",
    statusText: "Not Confirmed!",
    cssClass: "progress-bar--error"
  },
  warning: {
    icon: "./assets/warning-icon.png",
    statusText: "Payment has not been made!",
    cssClass: "progress-bar--warning"
  }
};

const chosenStatus = progressBarBaseStatus[dataFromApi.status];

progressBar.classList.add(chosenStatus.cssClass);
progressBarIcon.src = chosenStatus.icon;
progressBarPercentage.textContent = `${dataFromApi.percentage}%`;
progressBarStatus.textContent = chosenStatus.statusText;
progressBarLine.style = `width: ${dataFromApi.percentage}%;`;
