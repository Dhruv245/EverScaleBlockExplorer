import { gql } from "@/__generated__";

export const GetNextTransactions = gql(`query GetNextTransactions($after:String!){
	blockchain{
    transactions(first: 10, after:$after){
      edges{
        node{
          block_id
          workchain_id
          account{
            address
          }
        	id
        }
      }
      pageInfo{
        endCursor
        startCursor
        hasPreviousPage
        hasNextPage
      }
    }
  }
}`)