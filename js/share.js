const url = "https://likefoodtest.netlify.app/"
//var conclusionContent = '<호불호 음식 테스트 결과>' + '\n🍎🍉🍓<'+conCal()+'>🍖🧀🥯🍒\n'+'🍭🍧🍡🍚🍝🍘🥫🍧🍮🧈🍕🍔'
//var content = '<호불호 음식 테스트 결과>' +'\n 🍭🍪🍧🍶🥣🥙🍔🥩'+ '\n 🍓⭐'+conCal()+'⭐🍒\n'+' 🍡🍚🍝🍘🥫🍧🍕🍮' + "\n\n" + url;

function kakaoShare() {
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
        title: '<호불호 음식 테스트 결과>',
        description: ' 🍓⭐'+conCal()+'⭐🥯\n'+' 🍭🍚🍝🍘🍮🧈🍔🍕',
        imageUrl:
            url + '/img/공유.jpg',
        link: {
            mobileWebUrl: 'https://likefoodtest.netlify.app/',
            webUrl: 'https://likefoodtest.netlify.app/',
        },
        },
        buttons: [
        {
            title: '테스트 하러 가기',
            link: {
            mobileWebUrl: 'https://likefoodtest.netlify.app/',
            webUrl: 'https://likefoodtest.netlify.app/',
            },
        },
        ],
    });
}

function conCal() {
    if (0<= score && score <= 3) {
        return grade[0].name; 
    } else if (4<= score && score <= 9) {
        return grade[1].name;
    } else if (10<= score && score <= 17) {
        return grade[2].name;
    } else if (18<= score && score <= 23) {
        return grade[3].name;
    } else if (24<= score && score <= 27) {
        return grade[4].name;
    } else if (score == 28) {
        return grade[5].name;
    }
}


var clipboard = new ClipboardJS( '.clip' );
      clipboard.on( 'success', function() {
        alert( '클립보드가 복사되었습니다.' );
      } );
      clipboard.on( 'error', function() {
        alert( '지원하지 않는 기종입니다.' );
      } );

