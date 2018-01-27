toggleSP(1,1);
function toggleSP(p1, p2) {
	var spFrame = document.getElementById("spFrame");
	var spFrameIn = document.getElementById("spFrame-In");
	var spFrameLink = document.getElementById("spFrame-settings-github");
	if (p1 == 1) {
		spFrameIn.src = "startpages/startpage1/hp4Nox.html";
		spFrameLink.href = "https://github.com/4d617474/startpage1";
	} else if (p1 == 2) {
		spFrameIn.src = "startpages/hpstarcitizen/hpsc.html";	
		spFrameLink.href = "https://github.com/4d617474/hpstarcitizen";
	} else if (p1 == 3) {
		spFrameIn.src = "startpages/hpOwo/hpOwo.html";	
		spFrameLink.href = "https://github.com/4d617474/hpOwo";
	}
	if (p2 == 0) {
		//expanding...
		//spFrame.style.top = "20px";
		spFrame.style.zIndex = "3";
		spFrame.style.opacity = "1";
	} else {
		//retracting...
		//spFrame.style.top = "-100%";
		spFrame.style.zIndex = "-5";
		spFrame.style.opacity = "0";
	}
	}
