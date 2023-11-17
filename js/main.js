let teamResultBlock = document.querySelector('.team-result__item');
let teamBlock = document.getElementsByClassName('teamBlock');
let teamResult = document.querySelector('.team-result');
let btnStart = document.querySelector('#wrap-btn');

btnStart.addEventListener('click', function () {
  let teamAmount = document.getElementById('teamAmount').value;
  let markAmount = document.getElementById('markAmount').value;

  console.log(markAmount);

  let setTeamBlock =
    '<div class="teamBlock"> <input type="text" class="team" placeholder="Вкажи команду" />';

  let markAmountBlock = '';
  let adjudicator =
    '<div class="adjudicatorBlock"> <div class="firstitem"></div>';

  for (let i = 0; i < markAmount; i++) {
    markAmountBlock += `<div class="teamMark"><input type="number" class="mark" placeholder="Вкажи оцінку" min="1"/></div>`;
    adjudicator += `<input type="text" class="adjudicator" placeholder="Вкажи жюрі"/>`;
  }

  adjudicator += '</div>';

  setTeamBlock += markAmountBlock;
  setTeamBlock += `<output class="result" name="result" rows="5" cols="33"> </output>`;
  setTeamBlock += '</div>';

  let resultBlock = adjudicator;
  let search = document.getElementById('wrap-container');

  if (markAmount > 7) {
    // search.style.position = 'relative';
    // search.style.left = '32%';
    teamResult.style.overflowX = 'scroll';
    teamResult.style.alignItems = 'flex-start';
    search.style.left = '32%';
  } else {
    teamResult.style.alignItems = 'center';
    search.style.left = '0';
  }

  for (let i = 0; i < teamAmount; i++) {
    resultBlock += setTeamBlock;
  }
  resultBlock += '<button class="result-btn">Порахувати</button>';

  teamResultBlock.innerHTML = resultBlock;

  let btnResult = document.querySelector('.result-btn');
  let teamResultArray = document.getElementsByClassName('team');
  let markResultArray = document.getElementsByClassName('mark');
  let sumResultArray = document.getElementsByClassName('result');

  for (let i = 0; i < markResultArray.length; i++) {
    markResultArray[i].addEventListener('change', function () {
      let v = parseInt(this.value);
      if (v < 1) this.value = 1;
      if (v > 100) this.value = 100;
    });
  }

  btnResult.addEventListener('click', function () {
    let result = document.createElement(`div`);
    result.className = `resultText`;
    result.innerHTML = `Результати`;
    teamResultBlock.prepend(result);

    let markList = [];

    for (let i = 0; i < markResultArray.length; i++) {
      let num = markResultArray[i].value;
      markList.push(num);
    }

    let arrMarks = [];
    for (let i = 0; i < teamResultArray.length; i++) {
      arrMarks = markList.splice(0, markAmount);
      let markSum = 0;
      for (let j = 0; j < arrMarks.length; j++) {
        markSum += Number(arrMarks[j]);
      }

      sumResultArray[i].innerHTML = `${markSum}`;
    }

    // let items = [];
    // for (let i = 0; i < list.length; i++) {
    //   items.push(list[i].childNodes);
    // }

    let sortedArr = Array.from(document.querySelectorAll('.teamBlock'));
    sortedArr.sort(function (a, b) {
      let aRes = Number(a.querySelector('.result').innerHTML);
      let bRes = Number(b.querySelector('.result').innerHTML);
      return bRes - aRes;
    });
    for (let i = 0; i < sortedArr.length; i++) {
      teamResultBlock.appendChild(sortedArr[i]);
    }
    btnResult.style.display = 'none';
    search.style.display = 'none';
  });
});
