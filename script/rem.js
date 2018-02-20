! function(a) {
    var b = window.document,
        c = b.documentElement,
        d = a ? ~~a.dataset.psd : 1920,
        e = 1,
        f = 1 / e,
        g = "orientationchange" in window ? "orientationchange" : "resize",
        h = b.createElement("meta"); //把缩放比改为0.5在手机可以缩放
    h.name = "viewport", h.content = "width=device-width, user-scalable=no, initial-scale=" + 0.5 + ", maximum-scale=" + 0.5 + ", minimum-scale=" + 0.5, c.firstElementChild.appendChild(h);
    var i = function() {
        var a = c.clientWidth;
        a / e > d && (a = d * e), c.dataset.width = a, c.dataset.persent = 100 * (a / d), c.style.fontSize = 100 * (a / d) + "px"
    };
    i(), b.addEventListener && window.addEventListener(g, i, !1)
}(document.querySelector("script[data-psd]"));