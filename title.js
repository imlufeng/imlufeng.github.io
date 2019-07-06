var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange',
function() {
    if (document.hidden) {
        document.title = '发呆- ( ゜- ゜)つロ ' + OriginTitile;
        clearTimeout(titleTime);
    } else {
        document.title = '( • ̀ω•́ )✧被发现了~ ' + OriginTitile;
        titleTime = setTimeout(function() {
            document.title = OriginTitile;
        },
        2000);
    }
});
