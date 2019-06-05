export default class Utils {

    static initRem() {
        const docEl = document.documentElement,
            docBody = document.body,
            baseFontSize = 100,//为了方便，这样rem=px/100
            pageMaxWidth = 750,
            rootHtml = document.getElementsByTagName('html')[0],
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = clientWidth = docEl.clientWidth || docBody.clientWidht;

                //最大宽度显示为750的宽度
                if (clientWidth > pageMaxWidth) {
                    clientWidth = pageMaxWidth
                }

                if (!clientWidth) return;
                rootHtml.style.setProperty('font-size', baseFontSize * (clientWidth / pageMaxWidth) + 'px', 'important');
            };
        if (!window.addEventListener) return;

        window.addEventListener(resizeEvt, recalc, false);

        recalc();
    }
}