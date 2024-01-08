'use strict';

// DS Day Official Site Common JS

alert("Script was run");

var IS_3DS = navigator.userAgent.indexOf("Nintendo 3DS") != -1 || (screen.pixelDepth == 16 && navigator.platform == "iPhone");

alert("IS_3DS was set");

if (IS_3DS) {
	alert("IS_3DS is true");
	document.addEventListener("load", function(event) {
		alert("load listener was executed");
		// Put the header on the top screen.
		window.scrollTo(0, 215);
	});
}
