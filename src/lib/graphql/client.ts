import type { HoudiniClient, RequestHandlerArgs } from '$houdini';

async function fetchQuery({ fetch, text = '', variables = {}, metadata, session }: RequestHandlerArgs) {
	const url = 'https://kuzguni.hasura.app/v1/graphql';

	const result = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-Hasura-Admin-Secret': 'I07gjUBDgxH1GKjCLIu7umFv88jowuBECM4liYJB3B3URGAOtBOaI38r6fqF2eLe',
			'X-Hasura-Role': 'cg'
		},
		body: JSON.stringify({
			query: text,
			variables
		})
	});
	return await result.json();
};
export default new HoudiniClient(fetchQuery);

/*
export default new HoudiniClient({
    url: 'https://kuzguni.hasura.app/v1/graphql',
    fetchParams({ session }) {
        return {
            headers: {
				'Content-Type': 'application/json',
				'X-Hasura-Admin-Secret': 'I07gjUBDgxH1GKjCLIu7umFv88jowuBECM4liYJB3B3URGAOtBOaI38r6fqF2eLe',
				'X-Hasura-Role': 'cg'
            },
        }
    },
});
*/