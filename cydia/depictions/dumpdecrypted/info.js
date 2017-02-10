var description = "Dumps decrypted iPhone Applications to a file - better solution than those GDB scripts for non working GDB versions<br>(C) Copyright 2011-2014 Stefan Esser<br><br>Usage:<br>iPod:~ root# DYLD_INSERT_LIBRARIES=dumpdecrypted.dylib /var/mobile/Applications/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/Scan.app/Scan<br>mach-o decryption dumper<br><br>DISCLAIMER: This tool is only meant for security research purposes, not for application crackers.<br><br>[+] Found encrypted data at address 00002000 of length 1826816 bytes - type 1.<br>[+] Opening /private/var/mobile/Applications/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/Scan.app/Scan for reading.<br><br>[+] Reading header<br>[+] Detecting header type<br>[+] Executable is a FAT image - searching for right architecture<br>[+] Correct arch is at offset 2408224 in the file<br>[+] Opening Scan.decrypted for writing.<br>[-] Failed opening. Most probably a sandbox issue. Trying something different.<br>[+] Opening /private/var/mobile/Applications/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/tmp/Scan.decrypted for writing.<br>[+] Copying the not encrypted start of the file<br>[+] Dumping the decrypted data into the file<br>[+] Copying the not encrypted remainder of the file<br>[+] Closing original file<br>[+] Closing dump file";
addView("Description", "", description)

var object = ["Author", "Category", "Updated","Version","Compatibility"];
var key = ["Stefan Esser","Library","13 Feb. 2014", "1.0","iPhone, iPad, iPod iOS 5 to iOS 9"];
addViewWithTable("Informations", object, key)
addButtonWithImage("dumpdecrypted on Github", "https://github.com/stefanesser/dumpdecrypted", "github.png")
