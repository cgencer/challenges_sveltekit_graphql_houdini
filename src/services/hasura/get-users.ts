import type { User } from '$lib/user/types';
import { hasura } from './hasura';
import { json } from '@sveltejs/kit'
import { env as dynPubEnv } from '$env/dynamic/public';
import type { RequestHandlerArgs } from '$houdini';
import { MyQueryStore, graphql } from '$houdini';
import { HoudiniClient } from '$houdini';



//	const result = await unsplash.search.getPhotos({ query, perPage: 30 });


async function fetchQuery({ fetch, text = '', variables = {}, metadata, session }: RequestHandlerArgs) {
	const url = dynPubEnv.PUBLIC_CONFY_API_ENDPOINT;
	const result = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			// Authorization: `Bearer ${session?.user.token}`
			'X-Hasura-Admin-Secret': dynPubEnv.PUBLIC_CONFY_API_TOKEN
		},
		body: JSON.stringify({
			query: text,
			variables
		})
	});
	return await result.json();
}
export default new HoudiniClient(fetchQuery);



/*
export async function getUsers(query: string) {
	if (result.type === 'error') throw new Error(result.errors[0]);

	const users: User[] = result.response.results.map((user) => ({
		id: user.id,
		description: user.description ?? undefined,
		alt_description: user.alt_description ?? undefined,
		urls: {
			full: user.urls.full,
			small: user.urls.small,
			thumb: user.urls.thumb
		},
		likes: user.likes,
		user: {
			name: user.userName,
			portfolio_url: user.portfolio_url ?? undefined,
			profile_image: { medium: user.profile_image.medium }
		},
		links: { html: user.links }
	}));

	return users;
}
*/