export function load({ setHeaders }) {
	setHeaders({
		'x-hasura-role': 'cg',
	});
}