//loader
window.onload = function(){
    $('#load').fadeOut();
    $('body').removeClass('hidden');
}
// loader

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("mota").style.width = "100px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mota").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "#102626";
}