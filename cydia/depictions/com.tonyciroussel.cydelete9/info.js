var description = "Cydelete lets you uninstall Cydia applications directly from the SpringBoard. All you need is just hold an application and hit the X button<br/>You can as well hide every Apple's applications in the same way"
addView("Description", "", description)
generateWhatsNew()

var object = ["Author", "Category", "Updated","Version","Compatibility","Languages","Dependencies"];
var key = ["Tony Ciroussel","Tweaks",lastDate, tweakVersion,"iPhone, iPad, iPod with iOS 9.0 or greater<br>Not tested on iOS 10", "English, Français, Español, Italiano, Nederlands, Svenska, العربية, 繁體中文", "mobilesubstrate, sudo, sed, preferenceloader"];
addViewWithTable("Informations", object, key)

addScreenshotButton()
addChangelogButton()