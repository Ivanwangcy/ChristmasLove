var docElement = document.documentElement;
var resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
var handleSize = function(){
  var container = document.querySelector(".container");

  var proportion = 900 / 1440;
  container.style.height = container.clientWidth * proportion + "px";
}
window.addEventListener(resizeEvent, handleSize, false);
document.addEventListener('DOMContentLoaded', handleSize, false);

/**
* 下拉选择页面
*/
var page = document.querySelector('#page');
// 层级
// var index = 10;
var currentPage = $(".page-a");

page.addEventListener('change', function(e) {
currentPage.addClass("effect-out").removeClass('effect-in');
currentPage = $("." + e.target.value).removeClass("effect-out").addClass('effect-in');
},false);
