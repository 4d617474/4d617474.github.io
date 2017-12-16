toggleSP(1,1);
function toggleSP(p1, p2) {
	var spFrame = document.getElementById("spFrame");
	var spFrameIn = document.getElementById("spFrame-In");
	if (p1 == 1) {
		spFrameIn.src = "startpages/startpage1/hp4Nox.html";
	} else if (p1 == 2) {
		spFrameIn.src = "startpages/hpstarcitizen/hpsc.html";		
	}
	if (p2 == 0) {
		//expanding...
		spFrame.style.top = "20px";
	} else {
		//retracting...
		spFrame.style.top = "-100%";
	}
	}