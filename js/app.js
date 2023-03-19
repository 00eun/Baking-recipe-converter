
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
    timesCalculating();
  } else if (e.target === chandgeNum){
    chandgeNumSave = e.target.value;
    timesCalculating();
  } else {
    alert('다시입력해주세요')
  }
}

let cNumberCalculat; 
function timesCalculating (){
  cNumberCalculat = chandgeNumSave/originNumSave
  if (!(originNumSave === undefined || chandgeNumSave === undefined)){
    cNumberResult.textContent = `원래 레시피 개수 : ${originNumSave}
    변경 레시피 개수 : ${chandgeNumSave}
    배합: ${cNumberCalculat}배`
  }else{
    cNumberResult.textContent = `값을 입력해주세요`;
  }
}

// 기본값에서 결과값 출력하기
const originGram = document.querySelectorAll('.originGram');
const resultGram = document.querySelectorAll('.resultGram');

originGram.forEach(value => {
  value.addEventListener('change', logEvent);
});

function logEvent(e) {
  let userGram = e.target.value;
  const targetId = e.currentTarget.parentElement.id;
  console.log(targetId, userGram);
  console.log(cNumberCalculat);
  gramCalculating(userGram, targetId);
}

function gramCalculating(userGram, targetId) {
  console.log(resultGram);
  resultGram.forEach(gram => {
    if (targetId === gram.parentElement.id){
      gram.innerText = `${cNumberCalculat * userGram}`
    }
  });
  console.log(cNumberCalculat * userGram);
}