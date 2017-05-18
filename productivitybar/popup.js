function click(e) {
  chrome.tabs.executeScript(null,
      {file: "scripts/prodBar.js"});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
	var divs = document.getElementById('start');
	divs.addEventListener('click', click);
});


