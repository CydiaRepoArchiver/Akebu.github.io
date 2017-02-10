var bundleID;
var tweakVersion;
var lastDate;

function generateView(title, subtitle, description){
	var titleToAdd = ""
	var subtitleToAdd = ""
	var descriptionToAdd = ""
	
	if(title != ""){
		titleToAdd = '<h1 class="titre1">'+title+'</h1>'
	}
	if(subtitle != ""){
		subtitleToAdd = '<h2 class="titre2">'+subtitle+'</h2>'
	}
	if(description != ""){
		descriptionToAdd = '<p class="texte-gris">'+description+'</p>'
	}
	var html = '<div class="descriptionView">'+titleToAdd+subtitleToAdd+descriptionToAdd+'</div>'
	return html;
}

function addView(title, subtitle, description){
	var basehtml = generateView(title, subtitle, description)
	$(basehtml).appendTo('#mainView');
}

function addViewWithTable(title, object, key){
	var code = generateView(title, "", "")
	var basehtml = code.substr(0, code.indexOf('</div>'));
	basehtml = basehtml+'<table><tbody>'
	for(i in object){
		basehtml = basehtml+'<tr><td class="texte-gris-info">'+object[i]+'</td><td class="texte-noir-info">'+key[i]+'</td></tr>'
	}
	basehtml = basehtml+'</tbody></table></div>'
	$(basehtml).appendTo('#mainView');
}

function gotoURL(url)
{
	window.location.href = url;
}

function addButton(title, ref)
{
	$('<a href="'+ref+'" class="buttonView"><h1 class="titre-button">'+title+'<img class="chevron" src="images/chevron.png"></h1></a>').appendTo('#mainView');
}

function addButtonWithImage(title, ref, image)
{
	$('<a href="'+ref+'" class="buttonView"><h1 class="titre-button">'+title+'<img class="chevron" src="images/chevron.png"></img><img class="button-image" src="images/'+image+'"></img></h1></a>').appendTo('#mainView');
}

function addScreenshotButton(){
	var URL = "?s="+bundleID
	$('<a href="'+URL+'" class="buttonView"><h1 class="titre-button">Screenshots<img class="chevron" src="images/chevron.png"></img><img class="button-image" src="images/screenshot.png"></img></h1></a>').appendTo('#mainView');
}

function addChangelogButton(){
	var URL = "?c="+bundleID
	$('<a href="'+URL+'" class="buttonView"><h1 class="titre-button">Changelogs<img class="chevron" src="images/chevron.png"></img><img class="button-image" src="images/changelog.png"></img></h1></a>').appendTo('#mainView');
}

function generateWhatsNew(){
        $.ajax({
			type: 'GET',
			async: false,
			cache: false,
            url : bundleID+"/changelog.js",
            dataType: "text",
            success : function (data) {
			  var newData = data.slice(0, data.indexOf('\n'))
			  var textToScript = newData.replace(tweakVersion, "What's new ?")
			  eval(textToScript)
            }
        });
}

function getInfo(){
        $.ajax({
			type: 'GET',
			async: false,
			cache: false,
            url : bundleID+"/changelog.js",
            dataType: "text",
            success : function (data) {
			  var newData = data.slice(0, data.indexOf('\n'))
			  tweakVersion = newData.match( /"(.*?)"/ )[1];
			  newData = newData.replace('"'+tweakVersion+'"', "")
			  lastDate = newData.match( /"(.*?)"/ )[1];
            }
        });
}

function getURL(){
	var URL;
	bundleID = $.QueryString['p'];	// Load depiction
	if(bundleID != undefined){
		getInfo()
		URL = bundleID + "/info.js";
		return URL;
	}
	bundleID = $.QueryString['c'];		// Load changelog
	if(bundleID != undefined){
		URL = bundleID + "/changelog.js";
		document.title = "Changelogs"
		return URL;
	}
	bundleID = $.QueryString['s'];		// Load screenshot
	if(bundleID != undefined){
		URL = bundleID + "/screenshot.js";
		document.title = "Screenshots"
		return URL;
	}
}

function loadJS(){
	$.getScript(getURL(), null);
}

function showScreenshots(i)
{
	$('<center><img src="'+bundleID+'/screenshot/'+i+'" style="width:200px; heigth:auto;"></img></center>').appendTo('#mainView');
}
