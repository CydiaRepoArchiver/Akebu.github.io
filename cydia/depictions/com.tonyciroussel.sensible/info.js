var description = "Sensible lets you use the TouchID sensor as Home button. A simple & free alternative to virtualhome.<br>There is no option to configure<br>No screenshot for this item."
addView("Description", "", description)
generateWhatsNew()

var object = ["Author", "Category", "Updated","Version","Compatibility","Dependencies"];
var key = ["Tony Ciroussel","Tweaks",lastDate, tweakVersion,"iPhone, iPad, iPod with iOS 9.0 or greater<br>Not tested on iOS 10", "mobilesubstrate"];
addViewWithTable("Informations", object, key)

addChangelogButton()
