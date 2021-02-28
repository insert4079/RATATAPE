//выводим рандомный текст

let text = document.querySelectorAll('.random-text'),
<<<<<<< HEAD
    container = document.querySelector(".text"),
    index = Math.trunc(Math.random() * 10),
=======
    container = document.querySelector(".text");

let index = Math.trunc(Math.random() * 10),
>>>>>>> 0384d114ddc9500ed46e5de29d645c244305d815
    randomText = text[index].textContent;

container.append(randomText);

//превращаем текст в набор спанов
let arr = container.innerHTML.split('');

for (let i = 0; i < arr.length; i++)
{
    if (arr[i]){
        arr[i] = '<span class = "letter">' + arr[i] + '</span>';
         
    }
}

container.innerHTML = arr.join('');

let letters = document.querySelectorAll('.letter'),
    p = 0, // отдельный индекс для letters
    interval; //если объявить его внутри вункции, то таймер не отключается, выходит за пределы видимости функции

window.addEventListener('keydown', function(e) { //подумать как можно сделать это условие адекватно выглядещим и шоб иде не ругался
    //Это сделано, чтобы специальные символы не влияли на код
    if (e.code == 'KeyA' || e.code == 'KeyB' || e.code == 'KeyC' || e.code == 'KeyD' || e.code == 'KeyE' || e.code == 'KeyF' 
    || e.code == 'KeyG' || e.code == 'KeyH' || e.code == 'KeyI' || e.code == 'KeyJ' || e.code == 'KeyK' || e.code == 'KeyL' 
    || e.code == 'KeyM' || e.code == 'KeyN' || e.code == 'KeyO' || e.code == 'KeyP' || e.code == 'KeyQ' || e.code == 'KeyR' 
    || e.code == 'Equal' || e.code == 'KeyS' || e.code == 'KeyT' || e.code == 'KeyU' || e.code == 'KeyV' || e.code == 'KeyW' 
    || e.code == 'KeyX' || e.code == 'KeyY' || e.code == 'KeyZ' || e.code == 'Backquote' ||  e.code == 'Minus' || e.code == 'Space' 
    || e.code == 'BracketLeft' || e.code == 'BracketRight' || e.code == 'Semicolon' || e.code == 'Quote' || e.code == 'Comma' 
    || e.code == 'Period' || e.code == 'Slash' || e.code == 'Digit1' || e.code == 'Digit2' || e.code == 'Digit3' || e.code == 'Digit4' 
    || e.code == 'Digit5' || e.code == 'Digit6' || e.code == 'Digit7' || e.code == 'Digit8' || e.code == 'Digit9' || e.code == 'Digit0'
    || e.code == 'Numpad1' || e.code == 'Numpad2' || e.code == 'Numpad3' || e.code == 'Numpad4' || e.code == 'Numpad5' 
    || e.code == 'Numpad6' || e.code == 'Numpad7' || e.code == 'Numpad8' || e.code == 'Numpad9' || e.code == 'Numpad0' 
    || e.code == 'NumpadDecimal' || e.code == 'NumpadSubtract' || e.code == 'NumpadAdd' || e.code == 'NumpadDivide') {
        
        if (letters[p].textContent == e.key) { //позволяет при каждом нажатии на клавишу проверять следующий символ
            letters[p].classList.add('correct'); //символ совпадает - добавляется класс коррект
            p++;
        } 
        else {
            letters[p].classList.add('incorrect');
        }
    } 
    else { //если нажатая кнопака не входит в условие сверху, сайт не считывает нажатие
        return false;
    }
    if (letters[0].classList.contains('correct')) {
        if (!(letters[1].classList.contains('correct') || letters[1].classList.contains('incorrect'))) { //запускает интервал, если первый 
            interval = setInterval(moveHand, 100);                                                       //символ correct, а второй еще
                                                                                                         //не обзавлеся классом, из-за чего
        }                                                                                                //таймер не ускоряется
        else if (letters[letters.length - 1].classList.contains('correct')) { //останавливает интервал, если последний символ correct
            clearInterval(interval);
            let resultSpeed = (letters.length / (min * 60 + sec) * 60).toFixed(0),
                mistakes = document.querySelectorAll('.incorrect').length,
                time = document.querySelector('.time'),
                speed = document.querySelector('.speed'),
                mistakesRes = document.querySelector('.mistakes');

            mistakes = ((mistakes / letters.length) * 100).toFixed(0);
            time.textContent = `Результат: ${min} мин ${sec} сек.`;
            speed.textContent = `Скорость: ${resultSpeed} зн/мин.`;
            mistakesRes.textContent = `Ошибок: ${mistakes}%`;

        }
    } 
});

//секундомер
let millisec = 0,
    sec = 0,
    min = 0,
    result = document.querySelector('.result');

function moveHand () {
        millisecond = document.querySelector('.ms'),
        second = document.querySelector('.sec'),
        minute = document.querySelector('.min');

    millisec++;
    if (millisec > 9) {
        sec++;
        millisec = 0;
    } else if (sec > 59) {
        sec = 0;
        min++;
    }
    minute.textContent = min;
    second.textContent = sec;
    millisecond.textContent = millisec;
}
