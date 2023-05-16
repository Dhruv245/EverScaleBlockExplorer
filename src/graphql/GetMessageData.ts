import { gql } from "@/__generated__";

export const GetMessageData = gql(`query GetMessageData($hash:String!){
    blockchain{
      message(hash: $hash){
        id
        msg_type_name
        src
        hash
        body_hash
        status_name
        bounced
        dst
        created_at_string
      }
    }
  }
  `);
