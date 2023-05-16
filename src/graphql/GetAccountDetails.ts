import { gql } from "@/__generated__";

export const GetAccountDetails = gql(`query GetAccountDetails($address:String!){
	blockchain{
		account(address:$address){
      info{
        state_hash
        balance
        last_paid
        id
        code
        boc
        code_hash
        data
        acc_type_name
        data_hash
      }
    }
  }
}`)