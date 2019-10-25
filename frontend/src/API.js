const API_URL = 'http://localhost:8000/api';

const myheaders = {
	Origin: 'http://localhost:3000/'
};

export async function getVotes() {
	const response = await fetch(API_URL, { headers: myheaders });
	const body = await response.json();
	return body;
}

export async function getSingleVote(id) {
	const response = await fetch(`${API_URL}/${id}`);
	const body = await response.json();
	console.log('BODY', body);

	return body;
}
