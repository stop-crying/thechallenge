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
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const accordionBtns = document.querySelectorAll(".panel-one");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("active");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});

var svg = document.querySelector(".svg");
svg.addEventListener("click", () => {
  svg.innerHTML = `
  <circle cx="16" cy="16" r="15" fill="#303030"></circle>
  <path
   transform="translate(3.3, 3.3)"
    d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
    fill="#fff"
  ></path>  `;
});

var two = document.querySelector(".two");
two.addEventListener("click", () => {
  two.innerHTML = `
          <circle cx="16" cy="16" r="15" fill="#303030"></circle>
  <path
   transform="translate(3.3, 3.3)"
    d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
    fill="#fff"
  ></path>
            `;
});
var three = document.querySelector(".three");
three.addEventListener("click", () => {
  three.innerHTML = `
           <circle cx="16" cy="16" r="15" fill="#303030"></circle>
  <path
   transform="translate(3.3, 3.3)"
    d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
    fill="#fff"
  ></path>
            `;
});
var four = document.querySelector(".four");
four.addEventListener("click", () => {
  four.innerHTML = `
           <circle cx="16" cy="16" r="15" fill="#303030"></circle>
  <path
   transform="translate(3.3, 3.3)"
    d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
    fill="#fff"
  ></path>
            `;
});
var five = document.querySelector(".five");
five.addEventListener("click", () => {
  five.innerHTML = `
           <circle cx="16" cy="16" r="15" fill="#303030"></circle>
  <path
   transform="translate(3.3, 3.3)"
    d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
    fill="#fff"
  ></path>
            `;
});
