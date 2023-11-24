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
  acc[i].addEventListener("click", function() {
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


