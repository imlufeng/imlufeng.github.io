var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange',
function() {
  if (document.hidden) {
    document.title = '发呆 (●'◡'●)ﾉ ❤' + OriginTitile;
    clearTimeout(titleTime);
  } else {
  document.title = '被发现了 ✧٩(ˊωˋ*)و✧' + OriginTitile;
  titleTime = setTimeout(function() {
  document.title = OriginTitile;
    },
    2000);
  }
});
