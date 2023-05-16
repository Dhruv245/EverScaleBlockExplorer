import { gql } from "@/__generated__";

export const GetLatestTransactions = gql(`query GetLatestTransactions{
	blockchain{
    transactions(first: 10){
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