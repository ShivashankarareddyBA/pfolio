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


  const scriptURL = '<https://script.google.com/macros/s/AKfycbwDU6b5UAi1v7DnTo1m2ftxjNSxAvu_bipP0mn-qO_QjGRLnFoqPLwHDSyoMVfhB_EPIw/exec>'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })


