function moveHands() {
    with (new Date()) {
        //30 deg every hour
        h = 30 * ((getHours() %12) + getMinutes() / 60);
        //6 degree every minute
        m = 6 * getMinutes();
        s = 6 * getSeconds();

        //rotating the hands based on the above values:
        document.getElementById('seconds').style.cssText = "-webkit-transform:rotate(" + s + "deg);";
        document.getElementById('minutes').style.cssText = "-webkit-transform:rotate(" + m + "deg);";
        document.getElementById('hours').style.cssText = "-webkit-transform:rotate(" + h + "deg);";
    }
}
//making sure the function starts when the webpage laods
window.onload = moveHands; 