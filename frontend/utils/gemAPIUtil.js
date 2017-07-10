export const fetchGem = query => (
	$.ajax({
		method: 'GET',
		url: `gems/${query}`
	})
);