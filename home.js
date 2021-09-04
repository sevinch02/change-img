let rasm = document.getElementsByTagName('div')

let i = 0;
setInterval(() => {
    if (i == rasm.length) {
        i = 0;
        for (div of rasm) {
            div.style.opacity = '0';
        }
    }
    rasm[i].style.opacity = '1';

    i++;
  

},2000);

