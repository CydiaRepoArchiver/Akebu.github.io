var description = "Smooth iOS 8 contact slider integration for iOS7 !<br>Optimized for the iPhone 4<br>Works on any iDevice.<br>Add contacts from Phone.app in the 'Favourite' section."
addView("Description", "", description)

description = "- Compatibility fix<br>- Added better support for iPad<br>- Added fade out effect"
addView("What's new ?", "4 May 2015", description)

var object = ["Author", "Category", "Updated","Version","Compatibility","Languages","Dependencies"];
var key = ["Tony Ciroussel","Tweaks","4 May. 2015","1.2.2","iPhone, iPad, iPod with iOS 7", "English", "mobilesubstrate, preferenceloader"];
addViewWithTable("Informations", object, key)

addScreenshotButton()
addChangelogButton()