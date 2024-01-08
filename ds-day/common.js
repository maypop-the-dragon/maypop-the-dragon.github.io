'use strict';

var IS_3DS = navigator.userAgent.indexOf("Nintendo 3DS") == -1 || (screen.pixelDepth == 16 && navigator.platform == "iPhone");

if (IS_3DS) {
	document.addEventListener("load", function(event) {
		// Put the header on the top screen.
		this.body.scrollTop = 215;
	});
}
