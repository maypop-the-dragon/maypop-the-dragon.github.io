'use strict';

// DS Day Official Site Common JS

var IS_3DS = navigator.userAgent.indexOf("Nintendo 3DS") != -1 || (screen.pixelDepth == 16 && navigator.platform == "iPhone");

if (IS_3DS) {
	// Put the header on the top screen.
	window.scrollTo(0, 215);
}
