///
// Dependencies
///


///
// Exports
///

export function stripProtocol(url) {
	return url.replace(/^[a-zA-Z]*:\/\//, '');
}

export function stripWWW(url) {
	return url.replace(/^www\./, '');
}

export function stripEndSlash(url) {
	return url.replace(/\/$/, '');
}

export function hasProtocol(url) {
	return url.match(/^[a-zA-Z]*:\/\//);
}
