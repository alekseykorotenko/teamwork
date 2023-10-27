let teamResultBlock = document.querySelector('.team-result__item');
let btnStart = document.querySelector('#wrap-btn');

btnStart.addEventListener('click', function () {
  let teamAmount = document.getElementById('teamAmount').value;
  let markAmount = document.getElementById('markAmount').value;

  let setTeamBlock =
    '<div class="teamBlock"> <input type="text" class="team" placeholder="Вкажи команду" />';

  let markAmountBlock = '';

  for (let i = 0; i < markAmount; i++) {
    markAmountBlock += `<div class="teamMark"><input type="text" class="mark" placeholder="Вкажи оцінку"/></div>`;
  }

  setTeamBlock += markAmountBlock;
  setTeamBlock += `<output class="result" name="result" rows="5" cols="33"> </output>`;
  setTeamBlock += '</div>';

  let resultBlock = '';
  for (let i = 0; i < teamAmount; i++) {
    resultBlock += setTeamBlock;
  }
  resultBlock += '<button class="result-btn">Порахувати</button>';

  teamResultBlock.innerHTML = resultBlock;

  let btnResult = document.querySelector('.result-btn');
  let teamResultArray = document.getElementsByClassName('team');
  let markResultArray = document.getElementsByClassName('mark');
  let sumResultArray = document.getElementsByClassName('result');

  btnResult.addEventListener('click', function () {
    let markList = [];

    for (let i = 0; i < markResultArray.length; i++) {
      let num = markResultArray[i].value;
      markList.push(num);
    }

    let arrMarks = [];
    for (let i = 0; i < teamResultArray.length; i++) {
      arrMarks = markList.splice(0, markAmount);
      console.log(arrMarks);
      let markSum = 0;
      for (let j = 0; j < arrMarks.length; j++) {
        markSum += Number(arrMarks[j]);
      }
      sumResultArray[i].innerHTML = `${markSum}`;
    }
  });
});
