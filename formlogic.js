
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwDU6b5UAi1v7DnTo1m2ftxjNSxAvu_bipP0mn-qO_QjGRLnFoqPLwHDSyoMVfhB_EPIw/exec';
        const form = document.forms['submit-to-google-sheet'];
        const msg=document.getElementById("msg");
      
        form.addEventListener('submit', e => {
          e.preventDefault();
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML= "Message sent successfully"
                setTimeout(() => {
                    msg.innerHTML=""
                },5000 )
                form.reset()
            })
            .catch(error => console.error('Error!', error.message));
        });
      