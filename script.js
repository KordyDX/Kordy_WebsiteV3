var cssStyle = document.getElementById('style');

function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    document.getElementById("clock").innerText = h + ":" + m + ":" + s;
    setTimeout(showTime, 1000);
}

showTime();

function setStyle(newStyle) {
    cssStyle.href = newStyle;
}

function myFunction() {
    if (cssStyle.href.includes("lightmode.css")) {
        setStyle("darkmode.css");
    } else {
        setStyle("lightmode.css");
    }
    document.getElementById('modeSwitch').classList.add("ani");

    var audio = document.getElementById("audio");
    audio.play();

    function hamburger() {
        if (document.getElementById('modeSwitch').classList.contains("ani")) {
            document.getElementById('modeSwitch').classList.remove("ani");
        }
    }
    setTimeout(hamburger, 1000)
}