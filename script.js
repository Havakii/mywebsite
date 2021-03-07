window.onscroll = function (){modalHomePage()};
document.getElementById("leadModal");
var modal = document.getElementById("leadModal");
var btn = document.getElementById("btnNo");
console.log(modal, 'console log de modal');
function modalHomePage(){
	if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
	modal.style.display = "block";
	window.onscroll = null;
	}
}

btn.onclick= function(){
	modal.style.display = "none";
}