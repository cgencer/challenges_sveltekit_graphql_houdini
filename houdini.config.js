/** @type {import('houdini').ConfigFile} */
const config = {
    watchSchema: {
        url: 'https://kuzguni.hasura.app/v1/graphql',
		headers: {
			'x-hasura-role': 'cg',
		},
    },
	plugins: {
        // add your plugins here
        "houdini-svelte": {
            'client': "./src/lib/graphql/client"
        }
    },
    scalars: {
        DateTime: {
            type: 'Date',
            unmarshal(val) {
                return val ? new Date(val) : null
            },
            marshal(date) {
                return date && date.getTime()
            }
        }
    },
    quietQueryErrors: false
}

export default config
