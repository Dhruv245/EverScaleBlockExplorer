import { gql } from "@/__generated__";

export const GetPreviousTransactions = gql(`query GetPreviousTransactions($before:String!){
	blockchain{
    transactions(before:$before){
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