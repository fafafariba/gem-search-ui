export const queryGem = query => (
	$.ajax({
		method: 'GET',
		url: `gem/${query}`
	})
);