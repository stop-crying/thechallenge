function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");

  window.onclick = function (event) {
    if (!event.targer.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdowns = dropdowns[i];
        if (openDropdowns.classList.contains("show")) {
          openDropdowns.classList.remove("show");
        }
      }
    }
  };
}

function myFunc() {
  document.getElementById("mydc").classList.toggle("reveal");

  window.onclick = function (event) {
    if (!event.targer.matches(".span-text")) {
      var dropdowns = document.getElementsByClassName("dc");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdowns = dropdowns[i];
        if (openDropdowns.classList.contains("reveal")) {
          openDropdowns.classList.remove("reveal");
        }
      }
    }
  };
}

function myClear() {
  const element = document.getElementById("demo");
  element.remove();
}

var acc = document.getElementsByClassName("setup");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      // panel.style.minHeight = null;
    } else {
      // panel.style.minHeight = panel.scrollHeight + "px";
      panel.style.maxHeight = "1000px";
    }
  });
}

// Completed logic
let completedText = document.getElementById("completed");
completedText.innerHTML = "0 / 5 completed";

let completed = 0;

function completeTask(task) {
  if (task - completed > 1) {
    return;
  }
  completed = task;
  completedText.innerHTML = `${task} / 5 completed`;
}

const accordionBtns = document.querySelectorAll(".panel-one");

accordionBtns.forEach((accordion, index) => {
  console.log(index , completed)
 

  accordion.onclick = function () {
    if (index + 1 - completed > 1) {
      return;
    }
    this.classList.toggle("active");

    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
    closeAllAccordionExcept(index);
  };
});

function closeAllAccordionExcept(index) {
  for (let i = 0; i < accordionBtns.length; i++) {
    if (i !== index) {
      accordionBtns[i].classList.remove("active");
      let content = accordionBtns[i].nextElementSibling;
      content.style.maxHeight = null;
    }
  }
}

var svg = document.querySelector(".svg");
svg.addEventListener("click", () => {
  if (1 - completed > 1) {
    return;
  }
  svg.innerHTML = `
  <circle cx="16" cy="16" r="15" fill="#303030"></circle>
  <path
   transform="translate(3.3, 3.3)"
    d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
    fill="#fff"
  ></path>  `;

  completeTask(1);
  updateProgressBar();
});

var two = document.querySelector(".two");
two.addEventListener("click", () => {
  if (2 - completed > 1) {
    return;
  }
  two.innerHTML = `
          <circle cx="16" cy="16" r="15" fill="#303030"></circle>
  <path
   transform="translate(3.3, 3.3)"
    d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
    fill="#fff"
  ></path>
            `;
  completeTask(2);
  updateProgressBar();
});
var three = document.querySelector(".three");
three.addEventListener("click", () => {
  if (3 - completed > 1) {
    return;
  }
  three.innerHTML = `
           <circle cx="16" cy="16" r="15" fill="#303030"></circle>
  <path
   transform="translate(3.3, 3.3)"
    d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
    fill="#fff"
  ></path>
            `;
  completeTask(3);
  updateProgressBar();
});
var four = document.querySelector(".four");
four.addEventListener("click", () => {
  if (4 - completed > 1) {
    return;
  }
  four.innerHTML = `
           <circle cx="16" cy="16" r="15" fill="#303030"></circle>
  <path
   transform="translate(3.3, 3.3)"
    d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
    fill="#fff"
  ></path>
            `;
  completeTask(4);
  updateProgressBar();
});
var five = document.querySelector(".five");
five.addEventListener("click", () => {
  if (5 - completed > 1) {
    return;
  }
  five.innerHTML = `
           <circle cx="16" cy="16" r="15" fill="#303030"></circle>
  <path
   transform="translate(3.3, 3.3)"
    d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
    fill="#fff"
  ></path>
            `;
  completeTask(5);
  updateProgressBar();
});

function updateProgressBar() {
  var elem = document.getElementById("bar-p");
  var totalTasks = 5;

  let progressBarWidth = (completed / totalTasks) * 100 + "%";
  elem.style.width = progressBarWidth;
}
