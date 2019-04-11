const time = 25;
const followersDiv = document.querySelectorAll("div[role='dialog'] > div")[1];
let followersButtons = [...document.querySelectorAll('li > div > div > button')];

setInterval(() => {
	if(followersButtons.length > 0){
		if(followersButtons[0].textContent == "Follow")
			button.click();
		else
			console.log("There were an error following this guy.");
		followersDiv.scrollTop += 50;
		followersButtons.shift();
	}else{
		followersButtons = [...document.querySelectorAll('li > div > div > button')];
	}
}, time * 1000);
