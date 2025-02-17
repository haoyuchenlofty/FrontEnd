//获取全部img标签
var images = document.getElementsByTagName("img");
    
window.addEventListener("scroll", (e) => {
  ergodic();
});
function ergodic() {
  for (let i of images) {
    //计算方式和第一种方式不同
    if (i.getBoundingClientRect().top < window.innerHeight) {
      let trueSrc = i.getAttribute("data-src");
      i.setAttribute("src", trueSrc);
    }
  }
}
ergodic();