const target = document.querySelector('#dynamic');

function randomString() {
  let stringArr = [
    'Learn to HTML',
    'Learn to CSS',
    'Learn to JavaScript',
    'Learn to Python',
  ];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split('');

  return selectStringArr;
}

function resetTyping() {
  target.textContent = '';
  dynamic(randomString());
} //1.5초 뒤 ''인 빈칸으로 다시 제출

//한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 1500);
  }
}

dynamic(randomString());
// 커서 깜빡임
function blink() {
  target.classList.toggle('active');
}
setInterval(blink, 500);
