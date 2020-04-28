// const input = document.getElementsByName("number");
// const dom = document.getElementById('btn-verify');
// const arr = [];

// for (let i = 0; i < input.length; i++) {
//     input[i].addEventListener('keyup', e => {
//         if (e.target.value !== '') {
//             input[i++].focus();
//             arr.push(e.target.value);
//             if (arr.length > 10) {
//                 dom.classList.remove('disable');
//             }
//         }
//     });
// }
let allInputs = document.getElementsByTagName('input');
let index = 0;
for(i=0;i<allInputs.length;i++) {
allInputs[i].onkeydown =trackInputandChangeFocus;
}

function trackInputandChangeFocus() {
let allInputsArr = Array.from(allInputs); 
let presentInput = allInputsArr.indexOf(this)
if(this.value.length == parseInt(this.getAttribute('maxlength'))) {
      let next;
      if(presentInput != 2) next = allInputsArr[presentInput+1]
      else next = allInputsArr[0]
      next.focus();
    }
}