new Vue({
    el: '#app'
    , data: {
        subtitluri: [
            {
                text: '1. Cum va arata noul meu site'
            }
            , {
                text: '2. Cum poti folosi aceste features pentru site-ul tau '
            }]
        , subtitlu: 'Cum va arata noul meu site'
        , descriere: 'In acest articol va voi prezenta sectiunile noului meu site.'
        , textalign: 'text-right'
        , articol: 'In acest articol va voi prezenta sectiunile noului meu site. In acest articol va voi prezenta sectiunile noului meu site. In acest articol va prezenta sectiunile noului meu site. In acest articol va voi prezenta sectiunile noului meu site. In acest articol va voi prezenta sectiunile noului meu site. In acest articol va voi prezenta sectiunile noului meu site. In acest articol va voi prezenta sectiunile noului meu site. In acest articol va voi prezenta sectiunile noului meu site. In acest articol va voi prezenta sectiunile noului meu site. In acest articol va voi prezenta sectiunile noului meu site. In acest articol va voi prezenta sectiunile noului meu site. In acest articol va voi prezenta sectiunile noului meu site. In acest articol va voi prezenta sectiunile noului meu site. In acest articol va voi prezenta sectiunile noului meu site. In acest articol va voi prezenta sectiunile noului meu site. In acest articol va voi prezenta sectiunile noului meu site. '
    }
});

function startReady() {
    //setTimeout(afiseazaMesaj, 1000);
    $(document).ready(afiseazaMesaj);
}

function afiseazaMesaj() {
    alert("pagina s-a incarcat!");
}
var i = 100;

function startRepeat() {
    setInterval(function () {
        console.log("bauuu");
        console.info("bauuu");
        console.warn("bauuu");
        console.error("bauuu: " + --i);
    }, 1000);
}
startReady();
startRepeat();
