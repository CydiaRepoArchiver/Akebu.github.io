var title = "Description"
var description = "Cydelete lets you uninstall Cydia applications directly from the SpringBoard. All you need is just hold an application and hit the X button<br/>You can as well hide every Apple's applications in the same way"
addView(title, "", description)

title = "What's new ?"
subtitle = "29 Dec. 2016"
description = "Stable version"
addView(title, subtitle, description)


title = "Informations"
var object = ["Author", "Category", "Updated","Version","Compatibility","Languages","Dependencies"];
var key = ["Tony Ciroussel","Tweaks","29 Dec. 2016","1.0 Beta","iPhone, iPad, iPod with iOS 9.0 or greater, not compatible with iOS 10", "English, Français", "mobilesubstrate, sudo, sed, preferenceloader"];
addViewWithTable(title, object, key)

addScreenshotButton()
addChangelogButton()