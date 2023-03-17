
const originNum =document.querySelector(".originNum");
const chandgeNum = document.querySelector(".chandgeNum");
const cNumberResult = document.querySelector('.cNumberResult');

originNum.addEventListener("change", updateValue);
chandgeNum.addEventListener('change', updateValue);

let originNumSave ;
let chandgeNumSave ;
function updateValue(e){
  // log.textContent = e.target.value;
  if (e.target === originNum){
    originNumSave = e.target.value;
    calculating();
  } else if (e.target === chandgeNum){
    chandgeNumSave = e.target.value;
    calculating();
  } else {
    alert('다시입력해주세요')
  }
}

function calculating (){
  const cNumberCalculat = chandgeNumSave/originNumSave
  if (!(originNumSave === undefined || chandgeNumSave === undefined)){
    cNumberResult.textContent = `원래 레시피 개수 : ${originNumSave}
    변경 레시피 개수 : ${chandgeNumSave}
    배합: ${cNumberCalculat}배`
  }else{
    cNumberResult.textContent = `값을 입력해주세요`;
  }
}

