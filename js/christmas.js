var docElement = document.documentElement;
var resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
var handleSize = function(){
  var container = document.querySelector(".container");

  var proportion = 900 / 1440;
  container.style.height = container.clientWidth * proportion + "px";
}
window.addEventListener(resizeEvent, handleSize, false);
document.addEventListener('DOMContentLoaded', handleSize, false);

var changePage = function (page, effect, callback) {
  page.addClass(effect).
  one("animationend webkitAnimationEnd", function(){
    callback();
  });
};
/**
* 下拉选择页面
*/
// 层级
// var index = 10;
var $pageA = $(".page-a");
var $pageB = $(".page-b");
var $pageC = $(".page-c");

$('#choose').on('change', function(e) {
  var pageName = e.target.value;
  switch (pageName) {
    case "page-b":
      changePage($pageA, "effect-out", function(){
        new PageB();
      });
      break;
      case "page-c":
        changePage($pageC, "effect-in", function(){
          new PageC();
        });
        break;
    default:;
  }
});
