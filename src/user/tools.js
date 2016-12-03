///
// Dependencies
///


///
// Methods
///

export function isLoggedIn(userState) {
	const user = userState.toJS();

	return (
		user.accessToken &&
		user.loginTimestamp &&
		user.loginTTL &&
		user.id &&
		user.email &&
		user.name &&
		! loginHasExpired(user)
	);
}


///
// Helpers
///

function loginHasExpired(user) {
	return user.loginTimestamp + user.loginTTL * 1000 < now();
}

function now() {
	if(Date.now) return Date.now();
	return new Date().getTime();
}
