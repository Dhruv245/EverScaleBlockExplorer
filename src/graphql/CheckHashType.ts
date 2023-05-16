import { gql } from "@/__generated__";

export const CheckHashTypes = gql(`query CheckHashType($hash:String!){
	blockchain{
    block(hash: $hash){
      flags
    }
    transaction(hash: $hash){
      boc
    }
    message(hash: $hash){
      dst
    }
  }
}
`);
