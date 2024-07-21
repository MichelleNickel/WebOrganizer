function toggleSideMenu() {
    var list = document.getElementById("sideMenuList");
    if (list.style.display === "none") {
        list.style.display = "block";
        window.setTimeout(function(){
            list.style.opacity = 1;
          },0);
    } else {
        list.style.opacity = 0;
        window.setTimeout(function(){
            list.style.display = 'none';
        },0); // timed to match animation-duration
    }
}

/**
 * not scale, but maybe opacity and moving from left to right? 
 * 
 */