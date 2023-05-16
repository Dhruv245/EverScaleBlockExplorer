import { gql } from "@/__generated__";

export const CheckAccountExist = gql(`query CheckAccountExist($address:String!){
    blockchain{
          account(address:$address){
        info{
          id
          last_paid
        }
      }
    }
  }
  `)