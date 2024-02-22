let tablinks = document.querySelectorAll(".tab_links");
let tabcontents = document.querySelectorAll(".tab-contents");

function opentab(tabname) {
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


  
  

  


