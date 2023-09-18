https://new-man-24.hasura.app/v1/graphql
I07gjUBDgxH1GKjCLIu7umFv88jowuBECM4liYJB3B3URGAOtBOaI38r6fqF2eLe



query GetUsers @cached {
  Users_aggregate(where: {id: {_eq: 2}}) {
    nodes {
      id
      avatar
      birthday
      email
      firstName
      lastName
      password
      userName
      wallet
    }
  }
  CrossBindings_aggregate(where: {userID: {_eq: 2}}) {
    nodes {
      contentID
      userID
      id
      extra
      type
    }
  }
}





  $: numberOfItems = $AllItems.data?.allItems.edges.length || 0

{#if numberOfItems > 0}
{/if}
{#each $AllItems.data?.filteredItems.edges ?? [] as edge (edge.node?.id)}
  <ItemEntry item={edge.node} />
{/each}
