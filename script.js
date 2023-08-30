window.onscroll = function() {
    scrollFunction();
};
  function setNavlistTransparent() {
          document.getElementById("navlist").style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
      
        window.onload = function() {
          setNavlistTransparent();
        };
      
function scrollFunction() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        document.getElementById("navlist").style.padding = "2px";
        document.getElementsByClassName("logo1")[0].style.width = "13vh";
        document.getElementById("navlist").style.backgroundColor = "rgba(0, 0, 0, 1)";
    } else {
        
        document.getElementById("navlist").style.padding = "0px";
        document.getElementsByClassName("logo1")[0].style.width = "11vh";
        document.getElementById("navlist").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}
window.$crisp=[];window.CRISP_WEBSITE_ID="6874a8b5-8fea-4d43-b719-45330c791c4b";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
    
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
