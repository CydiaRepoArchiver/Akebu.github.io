var description = "Smooth iOS 8 contact slider integration for iOS7 !<br>Optimized for the iPhone 4<br>Works on any iDevice.<br>Add contacts from Phone.app in the 'Favourite' section."
addView("Description", "", description)

generateWhatsNew()

var object = ["Author", "Category", "Updated","Version","Compatibility","Languages","Dependencies"];
var key = ["Tony Ciroussel","Tweaks",lastDate,tweakVersion,"iPhone, iPad, iPod with iOS 7", "English", "mobilesubstrate, preferenceloader"];
addViewWithTable("Informations", object, key)

addScreenshotButton()
addChangelogButton()