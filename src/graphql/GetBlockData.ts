import { gql } from "@/__generated__";

export const GetBlockData = gql(`query GetBlockData($hash:String!){
	blockchain{
    block(hash: $hash){
      id
      gen_utime
      workchain_id
      shard
      vert_seq_no
      want_merge
      want_split
    	gen_validator_list_hash_short
      tr_count
      prev_ref{
        end_lt
      }
      global_id
      end_lt
      start_lt
      after_merge
      after_split
      before_split
      gen_software_version
      key_block
      file_hash
      account_blocks{
        account_addr
        tr_count
        old_hash
        new_hash
      }
      in_msg_descr{
        msg_type
        transaction_id
        msg_id
      }
      
      out_msg_descr{
        msg_type
        transaction_id
        msg_id
      }
      value_flow{
        from_prev_blk
        to_next_blk
        exported
        imported
        created
        minted
      }
    }
  }
}
`);
