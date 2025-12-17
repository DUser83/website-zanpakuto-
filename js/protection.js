document.oncontextmenu = function(event) {
    event = event || window.event;
    event.preventDefault();
    alert('⛔ Правая кнопка заблокирована Сообществом Душ!');
    return false;
};


document.onkeydown = function(e) {
    e = e || window.event;
    

    if (e.keyCode == 123) {
        alert('⛔ Доступ к инструментам разработчика запрещен!');
        return false;
    }


    if (e.ctrlKey) {
        var c = e.which || e.keyCode;

        if (c == 85 || c == 83 || c == 65 || c == 80 || c == 67) {
            e.preventDefault();
            e.stopPropagation();
            alert('⚔️ Банкай! Это действие запрещено капитаном отряда.');
            return false;
        }
    }
};


document.addEventListener('copy', function(e) {
    e.preventDefault();
    e.clipboardData.setData('text/plain', 'Вы попытались украсть секретную технику синигами, но у вас не вышло.');
    alert('⚠️ Копирование текста невозможно!');
});


(function() {
    var checkStatus = function() {
        var start = performance.now();
        

        debugger; 
        

        if (performance.now() - start > 100) {

            document.body.innerHTML = '<div style="display:flex;justify-content:center;align-items:center;height:100vh;background:black;color:red;font-size:30px;font-family:sans-serif;text-align:center;">' +
                '☠️ ОБНАРУЖЕНО ВМЕШАТЕЛЬСТВО!<br>КОНТЕНТ УНИЧТОЖЕН КАПИТАНОМ 12 ОТРЯДА.' + 
                '</div>';
            

            document.body.style.overflow = 'hidden';
            

            throw "BAN KAI"; 
        }
    };


    setInterval(checkStatus, 500);
})();

