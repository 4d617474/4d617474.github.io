var r1 = 1;
toggleSP(1,1);
var currentPage = 0;
function toggleSP(p1, p2) {
	var spFrame = document.getElementById("spFrame");
	var spFrameIn = document.getElementById("spFrame-In");
	var spFrameLink = document.getElementById("spFrame-settings-github");
	if (p1 == 1) {
		spFrameIn.src = "startpages/startpage1/hp4Nox.html";
		spFrameLink.href = "https://github.com/4d617474/startpage1";
		currentPage = 1;
	} else if (p1 == 2) {
		spFrameIn.src = "startpages/hpstarcitizen/hpsc.html";
		spFrameLink.href = "https://github.com/4d617474/hpstarcitizen";
		currentPage = 2;
	} else if (p1 == 3) {
		spFrameIn.src = "startpages/startpage-Squared/Squared.html";
		spFrameLink.href = "https://github.com/4d617474/startpage-Squared";
		currentPage = 3;
	} else if (p1 == 4) {
		spFrameIn.src = "startpages/ko/Ko.html";
		spFrameLink.href = "https://github.com/4d617474/ko";
		currentPage = 4;
	}
	if (p2 == 0) {
		//expanding...
		//spFrame.style.top = "20px";
		spFrame.style.zIndex = "3";
		spFrame.style.opacity = "1";
		spFrame.style.transform = "scale(1,1)";
	} else {
		//retracting...
		//spFrame.style.top = "-100%";
		spFrame.style.zIndex = "-5";
		spFrame.style.opacity = "0";
		spFrame.style.transform = "scale(.9,.9)";
	}
}
function reloadSP() {
	if (currentPage == 1){
		toggleSP(1,0);
	}
	if (currentPage == 2){
		toggleSP(2,0);
	}
	if (currentPage == 3){
		toggleSP(3,0);
	}
	if (currentPage == 4){
		toggleSP(4,0);
	}
}
