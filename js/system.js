const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const conclusion = document.querySelector('#conclusion');
let score = 0;
let choice = []
const foods = ["마라","브로콜리","민트초코","번데기","닭발","양고기","생강","홍어","피망","굴","선지","고수","파인애플피자","두리안"]
const grade = [
    {
      name: '호불호 뉴비',
      content: '이 어려운 세상에서 살아남으려면 오로지 단련밖에 없습니다!'
    },
    {
      name: '호불호 초보',
      content: '어느 정도 호불호 음식에 발을 떼셨군요! 계속 단련하도록 하세요!'
    },
    {
      name: '호불호 중수',
      content: '당신은 평균이군요! 무난한 입맛을 가졌습니다!'
    },
    {
      name: '호불호 고수',
      content: '당신은 평균이상입니다! 거의 웬만한 음식은 드실 수 있다니 부럽습니다 ㅠㅠ'
    },
    {
      name: '호불호 고인물',
      content: '고인물... 어떤 유전자를 타고 나신 거죠? 아니 못 먹는 게 있나요??'
    },
    {
      name: '호불호 마왕',
      content: '그 이름... 마왕, 한 세대에 나타나 모든 것을 집어삼키는 전설적인 존재. 당신이 그 호불호 계의 마왕님이셨군요. 예의를 갖춰 인사드립니다. 혹시 거미, 악어 고기, 개미 같은 것도 잘 드시나요??'
    },
]

const qnaList = ['<span class="tword">●</span> 아주 잘 먹어요!! 😆😆', '<span class="tword">▲</span> 먹을 수는... 있어요! 😅😅', '<span class="tword">X</span> 그게... 먹는 건가요? 😱😱']

function start() {
    main.style.display = "none";
    qna.style.display = "block";

    let count = 0;
    question(count);
}

function cal() {
    var conclusionResult = document.querySelector(".conclusionResult");
    var conclusionDesc = document.querySelector(".conclusionDesc");
    var resultBar = document.querySelector(".resultBar");

    resultBar.style.width = (100/28) * (score) + '%';
    resultBar.innerHTML =  ((100/28) * (score)).toFixed(2).toString() + '%';

    if (0<= score && score <= 3) {
        conclusionResult.innerHTML=grade[0].name;
        conclusionDesc.innerHTML=grade[0].content;
    } else if (4<= score && score <= 9) {
        conclusionResult.innerHTML=grade[1].name;
        conclusionDesc.innerHTML=grade[1].content;
    } else if (10<= score && score <= 17) {
        conclusionResult.innerHTML=grade[2].name;
        conclusionDesc.innerHTML=grade[2].content;
    } else if (18<= score && score <= 23) {
        conclusionResult.innerHTML=grade[3].name;
        conclusionDesc.innerHTML=grade[3].content;
    } else if (24<= score && score <= 27) {
        conclusionResult.innerHTML=grade[4].name;
        conclusionDesc.innerHTML=grade[4].content;
    } else if (score == 28) {
        conclusionResult.innerHTML=grade[5].name;
        conclusionDesc.innerHTML=grade[5].content;
    }



    var reportp = document.querySelector('.rt');
    var report = document.createElement("TABLE");
    report.id = "report";

    reportp.appendChild(report);

    // var report = document.querySelector("#report");
    var row = " ";

    for(var i = 0; i<choice.length; i += 2){
        row += '<tr>';
        row += '<td>' + foods[i] + '</td>';
        row += '<td class="tword">' + addClass(choice[i]) + '</td>';
        row += '<td>' + foods[i+1] + '</td>';
        row += '<td class="tword">' + addClass(choice[i+1]) + '</td>';
        row += '</tr>';


        // document.getElementsById('t'+i.toString()).innerHTML = foods[i];
        // document.getElementsById('t'+(i+1).toString()).innerHTML = addClass(choice[i]);
    }

    delete(row[0]);
    report.innerHTML = row;
}

function addClass(a) {
    if (a == 2) {
        return "X";
    } else if (a == 1) {
        return "▲";
    } else if (a == 0) {
        return "●";
    }
}

function question(count) {
    const c = count;
    if (count == 14) {
        qna.style.display = "none";
        conclusion.style.display = "block";
        cal();
        var content = '<호불호 음식 테스트 결과>' +'\n 🍭🍪🍧🍶🥣🥙🍔🥩'+ '\n 🍓⭐'+conCal()+'⭐🍒\n'+' 🍡🍚🍝🍘🥫🍧🍕🍮' + "\n\n" + url;
        document.getElementById('in').innerText = content;
        return;
    }
    var qnaTopic = document.querySelector(".qnaTopic");
    var qnaImg = document.querySelector(".qnaImg");
    var img = document.createElement('img');
    var continueBar = document.querySelector(".continueBar");

    qnaTopic.innerHTML = foods[count];
    img.src = './img/' + foods[count] + '.jpg';
    img.classList.add('img-fluid');
    img.classList.add('qnaImgSlide');
    img.style.height= "220px"
    img.style.width= "auto"
    qnaImg.appendChild(img);

    for(var i = 0; i < qnaList.length; i++) {
        var qnaButton = document.createElement('button');
        const index = i;
        qnaButton.innerHTML = qnaList[i];
        qnaButton.classList.add('answer');
        qnaButton.classList.add('mx-auto');
        qnaButton.classList.add('p-3');
        qnaButton.classList.add('my-3');

        qnaButton.addEventListener('click', function() {
            if (index == 2) {
                score += 0;
            } else if (index == 0) {
                score += 2;
            } else {
                score += index;
            }
            choice.push(index);
            img.remove();
            
            var qnaListO = document.querySelectorAll('.answer');
            for(let j =0; j < qnaListO.length; j++){
                qnaListO[j].remove();
            }

            question(++count);
        })

        qna.appendChild(qnaButton);
    }

    continueBar.style.width = (100/14) * (c+1) + '%';
    continueBar.innerHTML =  (c+1).toString() + '/14';
}

function restart() {
    main.style.display = "block";
    conclusion.style.display = "none";
    score = 0;
    choice.splice(0,choice.length);
    document.getElementById("report").remove();
}



//이미지 로드
function preloading (imageArray) {
    let n = imageArray.length;
    for (let i = 0; i < n; i++) {
        let img = new Image();
        img.src = imageArray[i];
    }
}

preloading(
  ["./img/고수.jpg",
  "./img/굴.jpg",
  "./img/닭발.jpg",
  "./img/두리안.jpg",
  "./img/마라.jpg",
  "./img/민트초코.jpg",
  "./img/번데기.jpg",
  "./img/브로콜리.jpg",
  "./img/생강.jpg",
  "./img/선지.jpg",
  "./img/양고기.jpg",
  "./img/파인애플피자.jpg",
  "./img/피망.jpg",
  "./img/홍어.jpg"]
)