new fullpage("#fullpage", {
  anchors: [
    "Main",
    "Services",
    "Job-Portal",
    "Pricing",
    "About",
    "Partners",
    "Contact",
  ],
  scrollingSpeed: 1200,
  verticalCentered: false,
  scrollOverflow: true,
  navigation: true,
  navigationPosition: "right",
  navigationTooltips: [
    "Main",
    "Services",
    "Job Portal",
    "Pricing",
    "About",
    "Partners",
    "Contact",
  ],
  slidesNavigation: true,
  slidesNavPosition: "bottom",
});

// Typing Effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Developer", "Designer", "Marketer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

//Get total
function getNewTotal() {
  selectElement = document.querySelector("#quantity-1");

  output = parseInt(selectElement.value) * 550;

  document.querySelector(".output-1").textContent = output;
}

function getHotTotal() {
  selectElement = document.querySelector("#quantity-2");

  output = parseInt(selectElement.value) * 1000;

  document.querySelector(".output-2").textContent = output;
}

//email subscribe
function subscribe() {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var mail = document.querySelector("#email-input");
  var selectElement = document.querySelector(".alert");
  var alert_text = document.querySelector(".alert-text");
  var success_output = "Subscribed !";
  var failed_output = "Please Enter Valid Email Address !";
  if (mail.value.match(mailformat)) {
    if (selectElement.classList.contains("alert-danger")) {
      selectElement.classList.remove("alert-danger", "alert-show");
      selectElement.classList.add("alert-success", "alert-show");
      alert_text.innerHTML = success_output;
    } else {
      selectElement.classList.add("alert-success", "alert-show");
      alert_text.innerHTML = success_output;
    }
  } else {
    if (selectElement.classList.contains("alert-success")) {
      selectElement.classList.remove("alert-success", "alert-show");
      selectElement.classList.add("alert-danger", "alert-show");
      alert_text.innerHTML = failed_output;
    } else {
      selectElement.classList.add("alert-danger", "alert-show");
      alert_text.innerHTML = failed_output;
    }
  }
}
