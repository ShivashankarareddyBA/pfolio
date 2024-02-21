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

function  validateDate(){
    let inputDate = new Date(document.querySelector("#date"));
    let today= new Date();
    console.log(schedule_recall);
    document.querySelector("#date").setAttribute("min", formatDate(today));
    
  
    if(inputDate <today){
      document.querySelector("#date").value="";
      alert("plz select date form current date onwords." );
    }
  }
  
  function formatDate(){
    let year= date.getFullYear();
    let month= (date.getMonth()+1).toString();
    let date= date.getDate().toString();
    return `${year}-${month}-${date}`;
  
  }

  


