(function(T, h, i, n, k, P, a, g, e) {
  g = function() {
    P = h.createElement(i);
    a = h.getElementsByTagName(i)[0];
    P.src = k;
    P.charset = "utf-8";
    P.async = 1;
    a.parentNode.insertBefore(P, a)
  };
  T["ThinkPageWeatherWidgetObject"] = n;
  T[n] || (T[n] = function() {
    (T[n].q = T[n].q || []).push(arguments)
  });
  T[n].l = +new Date();
  if (T.attachEvent) {
    T.attachEvent("onload", g)
  } else {
    T.addEventListener("load", g, false)
  }
}(window, document, "script", "tpwidget", "https://cdn.sencdn.com/widget/static/js/widget-cc5d550.js"))
