import { graphql } from '$houdini'
import { error } from '@sveltejs/kit'

export const _houdini_load = graphql(`
query ShowUyeler {
    Users {
        userName
        email
    }
}
`)

/**
 * @param { import('./$houdini').BeforeLoadEvent }
 */
export function _houdini_beforeLoad({ data }) {
    if (!data) {
        throw error(404)
    }

    console.log(data);
    return {
        message: "Hello I'm",
    }
}