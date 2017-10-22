var description = "Launch Waze instead of Google maps in every web-browser"
addView("Description", "", description)
generateWhatsNew()

var object = ["Author", "Category", "Updated","Version","Compatibility","Dependencies"];
var key = ["Tony Ciroussel","Tweaks",lastDate, tweakVersion,"iPhone, iPad, iPod with iOS 9.0 or greater", "mobilesubstrate"];
addViewWithTable("Informations", object, key)

addScreenshotButton()
addChangelogButton()
