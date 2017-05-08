var description = "Don't burn your eyes too fast !<br/>Nocturne is a simple tweak that make Apple's applications darker. For now, there are no option to configure<br/><br/><i>Features :</i><br/>Only Preference.app is supported.<br/>Automatically recognize dark images and make it light!<br/>Dynamically change label's colors"
addView("Description", "", description)
generateWhatsNew()

var object = ["Author", "Category", "Updated","Version","Compatibility","Languages","Dependencies"];
var key = ["Tony Ciroussel","Tweaks",lastDate, tweakVersion,"iPhone, iPad, iPod with iOS 7.0 or greater", "English", "mobilesubstrate"];
addViewWithTable("Informations", object, key)

addScreenshotButton()
addChangelogButton()

document.body.style.background = 'rgb(7,18,29)';
document.getElementById("mainView").style.backgroundColor = 'rgb(7,18,29)';

var buttons = document.getElementsByClassName("buttonView");
for(var i=0; i<buttons.length;i++){
	buttons[i].style.backgroundColor = 'rgb(7,18,29)';
	
	var allTitles = buttons[i].getElementsByTagName("h1");
	if(allTitles){
		for(var x=0; x<allTitles.length; x++){
			var title = allTitles[x]
			title.style.color = 'rgb(229,229,229)';
		}
	}
}

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
	var td = views[i].getElementsByTagName("td");
	if(td){
		for(var x=0; x<td.length; x++){
			var title = td[x]
			if(x%2){
				title.style.color = 'rgb(180,180,180)';
			}
			else
			{
				title.style.color = 'rgb(200,200,200)';
			}
		}
	}
}
