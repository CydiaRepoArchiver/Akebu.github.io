var description = "Cydelete lets you uninstall Cydia applications directly from the SpringBoard. All you need is just hold an application and hit the X button<br/>You can as well hide every Apple's applications in the same way"
addView("Description", "", description)
addView("What's new ?", "02 Jan. 2016", "- Traditional chinese and italian translation")

var object = ["Author", "Category", "Updated","Version","Compatibility","Languages","Dependencies"];
var key = ["Tony Ciroussel","Tweaks","31 Dec. 2016","1.1 Beta","iPhone, iPad, iPod with iOS 9.0 or greater, not compatible with iOS 10", "English, Français, العربية, Nederlands, Svenska, Italiano, 繁體中文", "mobilesubstrate, sudo, sed, preferenceloader"];
addViewWithTable("Informations", object, key)

addScreenshotButton()
addChangelogButton()