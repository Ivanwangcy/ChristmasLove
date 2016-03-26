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
var Christmas = function(){
  var $pageA = $(".page-a");
  var $pageB = $(".page-b");
  var $pageC = $(".page-c");

  // 观察者
  var observer = new Observer();

  // A 场景页面开始
  new PageA(function(){
    observer.publish("completeA");
  })
  //进入B场景
  observer.subscribe("pageB", function() {
      new PageB(function() {
          observer.publish("completeB");
      })
  })
  //进入C场景
  observer.subscribe("pageC", function() {
      new PageC()
  })

  // 页面切换 A - B
  observer.subscribe("completeA", function(){
    changePage($pageA, "effect-out", function(){
      observer.publish("pageB");
    })
  })
  // 页面切换 B - C
  observer.subscribe("completeB", function(){
    changePage($pageC, "effect-in", function(){
      observer.publish("pageC");
    })
  })
};

$(function(){
  $("button").on('click',function(){
    Christmas();
  })
});
