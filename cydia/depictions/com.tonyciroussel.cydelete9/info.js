var description = "Cydelete lets you uninstall Cydia applications directly from the SpringBoard. All you need is just hold an application and hit the X button<br/>You can as well hide every Apple's applications in the same way"
addView("Description", "", description)
addView("What's new ?", "30 Dec. 2016", "- Arabic & Dutch translations<br>- Fixed a bug")

var object = ["Author", "Category", "Updated","Version","Compatibility","Languages","Dependencies"];
var key = ["Tony Ciroussel","Tweaks","29 Dec. 2016","1.0 Beta","iPhone, iPad, iPod with iOS 9.0 or greater, not compatible with iOS 10", "English, Français, العربية, Nederlands", "mobilesubstrate, sudo, sed, preferenceloader"];
addViewWithTable("Informations", object, key)

addScreenshotButton()
addChangelogButton()