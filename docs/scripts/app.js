window.onscroll = function() {
    const loadingBar = document.querySelector('.stripe');
    let calcScroll = Math.round(window.scrollY);

    if(calcScroll < 1449) loadingBar.style.marginTop = '0px';
    if(calcScroll >= 845 && calcScroll <= 1448) loadingBar.style.marginTop = '40px';
    if(calcScroll >= 1262 && calcScroll <= 1508) loadingBar.style.marginTop = '80px';

    if(calcScroll >= 2142 && calcScroll <= 2566) loadingBar.style.marginTop = '120px';
    if(calcScroll >= 2439 && calcScroll <= 2974) loadingBar.style.marginTop = '160px';

    if(calcScroll >= 2764 && calcScroll <= 3246) loadingBar.style.marginTop = '200px';
    if(calcScroll >= 3254 && calcScroll <= 4273) loadingBar.style.marginTop = '240px';

    if(calcScroll >= 4287 && calcScroll <= 4676) loadingBar.style.marginTop = '280px';
    if(calcScroll >= 4681 && calcScroll <= 5419) loadingBar.style.marginTop = '320px';
    if(calcScroll >= 5430 && calcScroll <= 5938) loadingBar.style.marginTop = '350px';
};