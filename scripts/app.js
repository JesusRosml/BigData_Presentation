window.onscroll = function() {
    const loadingBar = document.querySelector('.stripe');
    let calcScroll = Math.round(window.scrollY);

    if(calcScroll < 1449) loadingBar.style.marginTop = '0px';
    if(calcScroll >= 948 && calcScroll <= 1448) loadingBar.style.marginTop = '40px';
    if(calcScroll >= 1356 && calcScroll <= 1508) loadingBar.style.marginTop = '80px';

    if(calcScroll >= 2240 && calcScroll <= 2566) loadingBar.style.marginTop = '120px';
    if(calcScroll >= 2567 && calcScroll <= 2974) loadingBar.style.marginTop = '160px';
};