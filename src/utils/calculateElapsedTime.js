const calculateElapsedTime = (publishedTime) => {
	var elapsedTime = new Date() - Date.parse(publishedTime);

	// All time values are in miliseconds(ms)
	if(elapsedTime >= 31557600000) {
		elapsedTime = Math.floor(elapsedTime/31557600000).toLocaleString('en-US');
		return (elapsedTime >= 2) ? elapsedTime += ' years ago' : elapsedTime += ' year ago';
	} else if(elapsedTime >= 86400000) {
		elapsedTime = Math.floor(elapsedTime/86400000).toLocaleString('en-US');
		return (elapsedTime >= 2) ? elapsedTime += ' months ago' : elapsedTime += ' month ago';
	} else if(elapsedTime >= 3600000) {
		elapsedTime = Math.floor(elapsedTime/3600000).toLocaleString('en-US');
		return (elapsedTime >= 2) ? elapsedTime += ' hours ago' : elapsedTime += ' hour ago';
	} else {
		elapsedTime = Math.floor(elapsedTime/60000).toLocaleString('en-US');
		return (elapsedTime >= 2) ? elapsedTime += ' minutes ago' : elapsedTime += ' minute ago';
	}
}

export default calculateElapsedTime;