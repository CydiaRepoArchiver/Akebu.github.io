var title = "Description"
var description = "Smooth iOS 8 contact slider integration for iOS7 !<br>Optimized for the iPhone 4<br>Works on any iDevice.<br>Add contacts from Phone.app in the 'Favourite' section."
addView(title, "", description)

title = "What's new ?"
subtitle = "4 May 2015"
description = "- Compatibility fix<br>- Added better support for iPad<br>- Added fade out effect"
addView(title, subtitle, description)


title = "Informations"
var object = ["Author", "Category", "Updated","Version","Compatibility","Languages","Dependencies"];
var key = ["Tony Ciroussel","Tweaks","4 May. 2015","1.2.2","iPhone, iPad, iPod with iOS 7", "English", "mobilesubstrate, preferenceloader"];
addViewWithTable(title, object, key)

addScreenshotButton()
addChangelogButton()