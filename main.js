function openTab(evt, tabName) {
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the link that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}

function openPlot(story) {
	var i, plotcontent, correctplotelements
	plotcontent = document.getElementsByClassName("plotcontent");
	for (i = 0; i < plotcontent.length; i++) {
		plotcontent[i].style.display = "none";
	}
	correctplotelements = document.getElementsByClassName(story);
	for(i = 0; i < correctplotelements.length; i++) {
		if(correctplotelements[i].tagName == 'P') {
			correctplotelements[i].style.display = "block";
		}
	}
	
}