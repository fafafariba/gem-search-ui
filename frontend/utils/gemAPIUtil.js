export let fetchGem = query => (
	$.ajax({
		method: 'GET',
		url: `gems/${query}`
	})
);