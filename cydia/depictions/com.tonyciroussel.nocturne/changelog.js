addView("0.1b", "8 May 2017", "- Beta version<br>First public release")

document.body.style.background = 'rgb(7,18,29)';
document.getElementById("mainView").style.backgroundColor = 'rgb(7,18,29)';

var views = document.getElementsByClassName("descriptionView");
for(var i=0; i<views.length;i++){
	views[i].style.backgroundColor = 'rgb(7,18,29)';
	
	var allTitles = views[i].getElementsByTagName("h1");
	if(allTitles){
		for(var x=0; x<allTitles.length; x++){
			var title = allTitles[x]
			title.style.color = 'rgb(229,229,229)';
		}
	}
	var allSndTitles = views[i].getElementsByTagName("h2");
	if(allSndTitles){
		for(var x=0; x<allSndTitles.length; x++){
			var title = allSndTitles[x]
			title.style.color = 'rgb(200,200,200)';
		}
	}
	var p = views[i].getElementsByTagName("p");
	if(p){
		for(var x=0; x<p.length; x++){
			var title = p[x]
			title.style.color = 'rgb(200,200,200)';
		}
	}
}
