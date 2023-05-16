/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A scalar that can represent any JSON Object value. */
  JSONObject: any;
  RempReceiptJson: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

/**
 * # Account type
 *
 * Recall that a smart contract and an account are the same thing in the context
 * of the TON Blockchain, and that these terms can be used interchangeably, at
 * least as long as only small (or “usual”) smart contracts are considered. A large
 * smart-contract may employ several accounts lying in different shardchains of
 * the same workchain for load balancing purposes.
 *
 * An account is identified by its full address and is completely described by
 * its state. In other words, there is nothing else in an account apart from its
 * address and state.
 *
 * Complexity 10
 */
export type Account = {
  __typename?: 'Account';
  /**
   * Returns the current status of the account.
   * ```
   * {
   *   accounts(filter: {acc_type:{eq:1}}){
   *     id
   *     acc_type
   *   }
   * }
   * ```
   *
   * - 0 – uninit
   * - 1 – active
   * - 2 – frozen
   * - 3 – nonExist
   *
   * Complexity 0
   */
  acc_type?: Maybe<Scalars['Int']>;
  acc_type_name?: Maybe<AccountStatusEnum>;
  /**
   * ```
   * {
   *   accounts(orderBy:{path:"balance",direction:DESC}){
   *     balance
   *   }
   * }
   * ```
   *
   * Complexity 0
   */
  balance?: Maybe<Scalars['String']>;
  balance_other?: Maybe<Array<Maybe<OtherCurrency>>>;
  /**
   * Contains sum of all the bits used by the cells of the account. Used in storage fee calculation
   *
   * Complexity 0
   */
  bits?: Maybe<Scalars['String']>;
  /**
   * Bag of cells with the account struct encoded as base64.
   *
   * Complexity 5
   */
  boc?: Maybe<Scalars['String']>;
  /**
   * Contains number of the cells of the account. Used in storage fee calculation
   *
   * Complexity 0
   */
  cells?: Maybe<Scalars['String']>;
  /**
   * If present, contains smart-contract code encoded with in base64.
   * ```
   * {
   *   accounts (filter:{code:{eq:null}}){
   *     id
   *     acc_type
   *   }
   * }
   * ```
   *
   * Complexity 2
   */
  code?: Maybe<Scalars['String']>;
  /**
   * `code` field root hash.
   *
   * Complexity 0
   */
  code_hash?: Maybe<Scalars['String']>;
  /**
   * If present, contains smart-contract data encoded with in base64.
   *
   * Complexity 3
   */
  data?: Maybe<Scalars['String']>;
  /**
   * `data` field root hash.
   *
   * Complexity 0
   */
  data_hash?: Maybe<Scalars['String']>;
  /**
   * If present, accumulates the storage payments that could not be exacted from the balance of the account, represented by a strictly positive amount of nano tokens; it can be present only for uninitialized or frozen accounts that have a balance of zero Grams (but may have non-zero balances in non gram cryptocurrencies). When due_payment becomes larger than the value of a configurable parameter of the blockchain, the ac- count is destroyed altogether, and its balance, if any, is transferred to the zero account.
   * ```
   * {
   *   accounts(filter: { due_payment: { ne: null } })
   *     {
   *       id
   *     }
   * }
   * ```
   *
   * Complexity 0
   */
  due_payment?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  id?: Maybe<Scalars['String']>;
  /**
   * account 's initial code hash (when it was deployed)
   *
   * Complexity 0
   */
  init_code_hash?: Maybe<Scalars['String']>;
  /**
   * Contains either the unixtime of the most recent storage payment
   * collected (usually this is the unixtime of the most recent transaction),
   * or the unixtime when the account was created (again, by a transaction).
   * ```
   * query{
   *   accounts(filter: {
   *     last_paid:{ge:1567296000}
   *   }) {
   *   id
   *   last_paid}
   * }
   * ```
   *
   * Complexity 0
   */
  last_paid?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  last_trans_lt?: Maybe<Scalars['String']>;
  /**
   * If present, contains library code used in smart-contract.
   *
   * Complexity 0
   */
  library?: Maybe<Scalars['String']>;
  /**
   * `library` field root hash.
   *
   * Complexity 0
   */
  library_hash?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  prev_code_hash?: Maybe<Scalars['String']>;
  /**
   * Merkle proof that account is a part of shard state it cut from as a bag of cells with Merkle proof struct encoded as base64.
   *
   * Complexity 0
   */
  proof?: Maybe<Scalars['String']>;
  /**
   * Contains the number of public cells of the account. Used in storage fee calculation.
   *
   * Complexity 0
   */
  public_cells?: Maybe<Scalars['String']>;
  /**
   * Is present and non-zero only in instances of large smart contracts.
   *
   * Complexity 0
   */
  split_depth?: Maybe<Scalars['Int']>;
  /**
   * Contains the representation hash of an instance of `StateInit` when an account is frozen.
   *
   * Complexity 0
   */
  state_hash?: Maybe<Scalars['String']>;
  /**
   * May be present only in the masterchain—and within the masterchain, only in some fundamental smart contracts required for the whole system to function.
   *
   * Complexity 0
   */
  tick?: Maybe<Scalars['Boolean']>;
  /**
   * May be present only in the masterchain—and within the masterchain, only in some fundamental smart contracts required for the whole system to function.
   * ```
   * {
   *   accounts (filter:{tock:{ne:null}}){
   *     id
   *     tock
   *     tick
   *   }
   * }
   * ```
   *
   * Complexity 0
   */
  tock?: Maybe<Scalars['Boolean']>;
  tokenHolder?: Maybe<FungibleTokenHolder>;
  /**
   * Workchain id of the account address (id field).
   *
   * Complexity 0
   */
  workchain_id?: Maybe<Scalars['Int']>;
};


/**
 * # Account type
 *
 * Recall that a smart contract and an account are the same thing in the context
 * of the TON Blockchain, and that these terms can be used interchangeably, at
 * least as long as only small (or “usual”) smart contracts are considered. A large
 * smart-contract may employ several accounts lying in different shardchains of
 * the same workchain for load balancing purposes.
 *
 * An account is identified by its full address and is completely described by
 * its state. In other words, there is nothing else in an account apart from its
 * address and state.
 *
 * Complexity 10
 */
export type AccountBalanceArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * # Account type
 *
 * Recall that a smart contract and an account are the same thing in the context
 * of the TON Blockchain, and that these terms can be used interchangeably, at
 * least as long as only small (or “usual”) smart contracts are considered. A large
 * smart-contract may employ several accounts lying in different shardchains of
 * the same workchain for load balancing purposes.
 *
 * An account is identified by its full address and is completely described by
 * its state. In other words, there is nothing else in an account apart from its
 * address and state.
 *
 * Complexity 10
 */
export type AccountBitsArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * # Account type
 *
 * Recall that a smart contract and an account are the same thing in the context
 * of the TON Blockchain, and that these terms can be used interchangeably, at
 * least as long as only small (or “usual”) smart contracts are considered. A large
 * smart-contract may employ several accounts lying in different shardchains of
 * the same workchain for load balancing purposes.
 *
 * An account is identified by its full address and is completely described by
 * its state. In other words, there is nothing else in an account apart from its
 * address and state.
 *
 * Complexity 10
 */
export type AccountCellsArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * # Account type
 *
 * Recall that a smart contract and an account are the same thing in the context
 * of the TON Blockchain, and that these terms can be used interchangeably, at
 * least as long as only small (or “usual”) smart contracts are considered. A large
 * smart-contract may employ several accounts lying in different shardchains of
 * the same workchain for load balancing purposes.
 *
 * An account is identified by its full address and is completely described by
 * its state. In other words, there is nothing else in an account apart from its
 * address and state.
 *
 * Complexity 10
 */
export type AccountDue_PaymentArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * # Account type
 *
 * Recall that a smart contract and an account are the same thing in the context
 * of the TON Blockchain, and that these terms can be used interchangeably, at
 * least as long as only small (or “usual”) smart contracts are considered. A large
 * smart-contract may employ several accounts lying in different shardchains of
 * the same workchain for load balancing purposes.
 *
 * An account is identified by its full address and is completely described by
 * its state. In other words, there is nothing else in an account apart from its
 * address and state.
 *
 * Complexity 10
 */
export type AccountLast_Trans_LtArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * # Account type
 *
 * Recall that a smart contract and an account are the same thing in the context
 * of the TON Blockchain, and that these terms can be used interchangeably, at
 * least as long as only small (or “usual”) smart contracts are considered. A large
 * smart-contract may employ several accounts lying in different shardchains of
 * the same workchain for load balancing purposes.
 *
 * An account is identified by its full address and is completely described by
 * its state. In other words, there is nothing else in an account apart from its
 * address and state.
 *
 * Complexity 10
 */
export type AccountPublic_CellsArgs = {
  format?: InputMaybe<BigIntFormat>;
};

/**
 * # Account type
 *
 * Recall that a smart contract and an account are the same thing in the context
 * of the TON Blockchain, and that these terms can be used interchangeably, at
 * least as long as only small (or “usual”) smart contracts are considered. A large
 * smart-contract may employ several accounts lying in different shardchains of
 * the same workchain for load balancing purposes.
 *
 * An account is identified by its full address and is completely described by
 * its state. In other words, there is nothing else in an account apart from its
 * address and state.
 */
export type AccountFilter = {
  OR?: InputMaybe<AccountFilter>;
  /**
   * Returns the current status of the account.
   * ```
   * {
   *   accounts(filter: {acc_type:{eq:1}}){
   *     id
   *     acc_type
   *   }
   * }
   * ```
   *
   * - 0 – uninit
   * - 1 – active
   * - 2 – frozen
   * - 3 – nonExist
   */
  acc_type?: InputMaybe<IntFilter>;
  acc_type_name?: InputMaybe<AccountStatusEnumFilter>;
  /**
   * ```
   * {
   *   accounts(orderBy:{path:"balance",direction:DESC}){
   *     balance
   *   }
   * }
   * ```
   */
  balance?: InputMaybe<StringFilter>;
  balance_other?: InputMaybe<OtherCurrencyArrayFilter>;
  /** Contains sum of all the bits used by the cells of the account. Used in storage fee calculation */
  bits?: InputMaybe<StringFilter>;
  /** Bag of cells with the account struct encoded as base64. */
  boc?: InputMaybe<StringFilter>;
  /** Contains number of the cells of the account. Used in storage fee calculation */
  cells?: InputMaybe<StringFilter>;
  /**
   * If present, contains smart-contract code encoded with in base64.
   * ```
   * {
   *   accounts (filter:{code:{eq:null}}){
   *     id
   *     acc_type
   *   }
   * }
   * ```
   */
  code?: InputMaybe<StringFilter>;
  /** `code` field root hash. */
  code_hash?: InputMaybe<StringFilter>;
  /** If present, contains smart-contract data encoded with in base64. */
  data?: InputMaybe<StringFilter>;
  /** `data` field root hash. */
  data_hash?: InputMaybe<StringFilter>;
  /**
   * If present, accumulates the storage payments that could not be exacted from the balance of the account, represented by a strictly positive amount of nano tokens; it can be present only for uninitialized or frozen accounts that have a balance of zero Grams (but may have non-zero balances in non gram cryptocurrencies). When due_payment becomes larger than the value of a configurable parameter of the blockchain, the ac- count is destroyed altogether, and its balance, if any, is transferred to the zero account.
   * ```
   * {
   *   accounts(filter: { due_payment: { ne: null } })
   *     {
   *       id
   *     }
   * }
   * ```
   */
  due_payment?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  /** account 's initial code hash (when it was deployed) */
  init_code_hash?: InputMaybe<StringFilter>;
  /**
   * Contains either the unixtime of the most recent storage payment
   * collected (usually this is the unixtime of the most recent transaction),
   * or the unixtime when the account was created (again, by a transaction).
   * ```
   * query{
   *   accounts(filter: {
   *     last_paid:{ge:1567296000}
   *   }) {
   *   id
   *   last_paid}
   * }
   * ```
   */
  last_paid?: InputMaybe<FloatFilter>;
  last_trans_lt?: InputMaybe<StringFilter>;
  /** If present, contains library code used in smart-contract. */
  library?: InputMaybe<StringFilter>;
  /** `library` field root hash. */
  library_hash?: InputMaybe<StringFilter>;
  prev_code_hash?: InputMaybe<StringFilter>;
  /** Merkle proof that account is a part of shard state it cut from as a bag of cells with Merkle proof struct encoded as base64. */
  proof?: InputMaybe<StringFilter>;
  /** Contains the number of public cells of the account. Used in storage fee calculation. */
  public_cells?: InputMaybe<StringFilter>;
  /** Is present and non-zero only in instances of large smart contracts. */
  split_depth?: InputMaybe<IntFilter>;
  /** Contains the representation hash of an instance of `StateInit` when an account is frozen. */
  state_hash?: InputMaybe<StringFilter>;
  /** May be present only in the masterchain—and within the masterchain, only in some fundamental smart contracts required for the whole system to function. */
  tick?: InputMaybe<BooleanFilter>;
  /**
   * May be present only in the masterchain—and within the masterchain, only in some fundamental smart contracts required for the whole system to function.
   * ```
   * {
   *   accounts (filter:{tock:{ne:null}}){
   *     id
   *     tock
   *     tick
   *   }
   * }
   * ```
   */
  tock?: InputMaybe<BooleanFilter>;
  /** Workchain id of the account address (id field). */
  workchain_id?: InputMaybe<IntFilter>;
};

export enum AccountStatusChangeEnum {
  Deleted = 'Deleted',
  Frozen = 'Frozen',
  Unchanged = 'Unchanged'
}

export type AccountStatusChangeEnumFilter = {
  eq?: InputMaybe<AccountStatusChangeEnum>;
  ge?: InputMaybe<AccountStatusChangeEnum>;
  gt?: InputMaybe<AccountStatusChangeEnum>;
  in?: InputMaybe<Array<InputMaybe<AccountStatusChangeEnum>>>;
  le?: InputMaybe<AccountStatusChangeEnum>;
  lt?: InputMaybe<AccountStatusChangeEnum>;
  ne?: InputMaybe<AccountStatusChangeEnum>;
  notIn?: InputMaybe<Array<InputMaybe<AccountStatusChangeEnum>>>;
};

export enum AccountStatusEnum {
  Active = 'Active',
  Frozen = 'Frozen',
  NonExist = 'NonExist',
  Uninit = 'Uninit'
}

export type AccountStatusEnumFilter = {
  eq?: InputMaybe<AccountStatusEnum>;
  ge?: InputMaybe<AccountStatusEnum>;
  gt?: InputMaybe<AccountStatusEnum>;
  in?: InputMaybe<Array<InputMaybe<AccountStatusEnum>>>;
  le?: InputMaybe<AccountStatusEnum>;
  lt?: InputMaybe<AccountStatusEnum>;
  ne?: InputMaybe<AccountStatusEnum>;
  notIn?: InputMaybe<Array<InputMaybe<AccountStatusEnum>>>;
};

/**
 *
 * Complexity 100
 */
export type AccountsStatisticsQuery = {
  __typename?: 'AccountsStatisticsQuery';
  /**
   * Count of different contract code hashes deployed
   *
   * Complexity 0
   */
  accountTypesCount?: Maybe<Scalars['Int']>;
  /**
   * Remaining tokens amount on givers
   *
   * Complexity 0
   */
  amountOnGivers?: Maybe<Scalars['String']>;
  /**
   * Circulating supply TON
   *
   * Complexity 0
   */
  circulatingSupply?: Maybe<Scalars['String']>;
  /**
   * New accounts in 24 hours
   *
   * Complexity 0
   */
  lastDayCount?: Maybe<Scalars['Int']>;
  /**
   * Count of active accounts
   *
   * Complexity 0
   */
  totalActiveCount?: Maybe<Scalars['Int']>;
  /**
   * Count of all accounts
   *
   * Complexity 0
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * Network total supply
   *
   * Complexity 0
   */
  totalSupply?: Maybe<Scalars['String']>;
};

/** Aggregation function used to collect aggregated value */
export enum AggregationFn {
  /** Returns an average value for a field in filtered records */
  Average = 'AVERAGE',
  /** Returns count of filtered record */
  Count = 'COUNT',
  /** Returns the maximal value for a field in filtered records */
  Max = 'MAX',
  /** Returns the minimal value for a field in filtered records */
  Min = 'MIN',
  /** Returns a sum of values for a field in filtered records */
  Sum = 'SUM'
}

/**
 * Due to GraphQL limitations big numbers are returned as a string.
 * You can specify format used to string representation for big integers.
 */
export enum BigIntFormat {
  /**  Decimal representation  */
  Dec = 'DEC',
  /**  Hexadecimal representation started with 0x (default)  */
  Hex = 'HEX'
}

/**
 * This is Block
 *
 * Complexity 15
 */
export type Block = {
  __typename?: 'Block';
  account_blocks?: Maybe<Array<Maybe<BlockAccountBlocks>>>;
  /**
   *
   * Complexity 0
   */
  after_merge?: Maybe<Scalars['Boolean']>;
  /**
   *
   * Complexity 0
   */
  after_split?: Maybe<Scalars['Boolean']>;
  /**
   *
   * Complexity 0
   */
  before_split?: Maybe<Scalars['Boolean']>;
  /**
   * Serialized bag of cells of this block encoded with base64
   *
   * Complexity 10
   */
  boc?: Maybe<Scalars['String']>;
  /**
   * Collection-unique field for pagination and sorting. This field is designed to retain logical order.
   *
   * Complexity 0
   */
  chain_order?: Maybe<Scalars['String']>;
  /**
   * Public key of the collator who produced this block.
   *
   * Complexity 0
   */
  created_by?: Maybe<Scalars['String']>;
  /**
   * Logical creation time automatically set by the block formation end.
   *
   * Complexity 0
   */
  end_lt?: Maybe<Scalars['String']>;
  /**
   * Block file hash
   *
   * Complexity 0
   */
  file_hash?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  flags?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  gen_catchain_seqno?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  gen_software_capabilities?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  gen_software_version?: Maybe<Scalars['Float']>;
  /**
   * uint 32 generation time stamp
   *
   * Complexity 0
   */
  gen_utime?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  gen_utime_string?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  gen_validator_list_hash_short?: Maybe<Scalars['Float']>;
  /**
   * uint32 global block ID
   *
   * Complexity 0
   */
  global_id?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  id?: Maybe<Scalars['String']>;
  in_msg_descr?: Maybe<Array<Maybe<InMsg>>>;
  /**
   * true if this block is a key block
   *
   * Complexity 0
   */
  key_block?: Maybe<Scalars['Boolean']>;
  master?: Maybe<BlockMaster>;
  master_ref?: Maybe<ExtBlkRef>;
  /**
   * Returns last known master block at the time of shard generation.
   *
   * Complexity 0
   */
  min_ref_mc_seqno?: Maybe<Scalars['Float']>;
  out_msg_descr?: Maybe<Array<Maybe<OutMsg>>>;
  /** External block reference for previous block in case of shard merge. */
  prev_alt_ref?: Maybe<ExtBlkRef>;
  /**
   * Returns a number of a previous key block.
   *
   * Complexity 0
   */
  prev_key_block_seqno?: Maybe<Scalars['Float']>;
  /** External block reference for previous block. */
  prev_ref?: Maybe<ExtBlkRef>;
  prev_vert_alt_ref?: Maybe<ExtBlkRef>;
  /** External block reference for previous block in case of vertical blocks. */
  prev_vert_ref?: Maybe<ExtBlkRef>;
  /**
   *
   * Complexity 0
   */
  rand_seed?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  seq_no?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  shard?: Maybe<Scalars['String']>;
  signatures?: Maybe<BlockSignatures>;
  /**
   * Logical creation time automatically set by the block formation start.
   * Logical time is a component of the TON Blockchain that also plays an important role in message delivery is the logical time, usually denoted by Lt. It is a non-negative 64-bit integer, assigned to certain events. For more details, see the TON blockchain specification
   *
   * Complexity 0
   */
  start_lt?: Maybe<Scalars['String']>;
  state_update?: Maybe<BlockStateUpdate>;
  /**
   * Returns block processing status
   * - 0 – unknown
   * - 1 – proposed
   * - 2 – finalized
   * - 3 – refused
   *
   * Complexity 0
   */
  status?: Maybe<Scalars['Int']>;
  status_name?: Maybe<BlockProcessingStatusEnum>;
  /**
   *
   * Complexity 0
   */
  tr_count?: Maybe<Scalars['Int']>;
  value_flow?: Maybe<BlockValueFlow>;
  /**
   * uin32 block version identifier
   *
   * Complexity 0
   */
  version?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  vert_seq_no?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  want_merge?: Maybe<Scalars['Boolean']>;
  /**
   *
   * Complexity 0
   */
  want_split?: Maybe<Scalars['Boolean']>;
  /**
   * uint32 workchain identifier
   *
   * Complexity 0
   */
  workchain_id?: Maybe<Scalars['Int']>;
};


/**
 * This is Block
 *
 * Complexity 15
 */
export type BlockEnd_LtArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * This is Block
 *
 * Complexity 15
 */
export type BlockGen_Software_CapabilitiesArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * This is Block
 *
 * Complexity 15
 */
export type BlockSignaturesArgs = {
  timeout?: InputMaybe<Scalars['Int']>;
  when?: InputMaybe<BlockFilter>;
};


/**
 * This is Block
 *
 * Complexity 15
 */
export type BlockStart_LtArgs = {
  format?: InputMaybe<BigIntFormat>;
};

/**
 *
 * Complexity 3
 */
export type BlockAccountBlocks = {
  __typename?: 'BlockAccountBlocks';
  /**
   *
   * Complexity 0
   */
  account_addr?: Maybe<Scalars['String']>;
  /**
   * new version of block hashes
   *
   * Complexity 0
   */
  new_hash?: Maybe<Scalars['String']>;
  /**
   * old version of block hashes
   *
   * Complexity 0
   */
  old_hash?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  tr_count?: Maybe<Scalars['Int']>;
  transactions?: Maybe<Array<Maybe<BlockAccountBlocksTransactions>>>;
};

export type BlockAccountBlocksArrayFilter = {
  all?: InputMaybe<BlockAccountBlocksFilter>;
  any?: InputMaybe<BlockAccountBlocksFilter>;
};

export type BlockAccountBlocksFilter = {
  OR?: InputMaybe<BlockAccountBlocksFilter>;
  account_addr?: InputMaybe<StringFilter>;
  /** new version of block hashes */
  new_hash?: InputMaybe<StringFilter>;
  /** old version of block hashes */
  old_hash?: InputMaybe<StringFilter>;
  tr_count?: InputMaybe<IntFilter>;
  transactions?: InputMaybe<BlockAccountBlocksTransactionsArrayFilter>;
};

/**
 *
 * Complexity 0
 */
export type BlockAccountBlocksTransactions = {
  __typename?: 'BlockAccountBlocksTransactions';
  /**
   *
   * Complexity 0
   */
  lt?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  total_fees?: Maybe<Scalars['String']>;
  total_fees_other?: Maybe<Array<Maybe<OtherCurrency>>>;
  /**
   *
   * Complexity 0
   */
  transaction_id?: Maybe<Scalars['String']>;
};


/**
 *
 * Complexity 0
 */
export type BlockAccountBlocksTransactionsLtArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type BlockAccountBlocksTransactionsTotal_FeesArgs = {
  format?: InputMaybe<BigIntFormat>;
};

export type BlockAccountBlocksTransactionsArrayFilter = {
  all?: InputMaybe<BlockAccountBlocksTransactionsFilter>;
  any?: InputMaybe<BlockAccountBlocksTransactionsFilter>;
};

export type BlockAccountBlocksTransactionsFilter = {
  OR?: InputMaybe<BlockAccountBlocksTransactionsFilter>;
  lt?: InputMaybe<StringFilter>;
  total_fees?: InputMaybe<StringFilter>;
  total_fees_other?: InputMaybe<OtherCurrencyArrayFilter>;
  transaction_id?: InputMaybe<StringFilter>;
};

/** This is Block */
export type BlockFilter = {
  OR?: InputMaybe<BlockFilter>;
  account_blocks?: InputMaybe<BlockAccountBlocksArrayFilter>;
  after_merge?: InputMaybe<BooleanFilter>;
  after_split?: InputMaybe<BooleanFilter>;
  before_split?: InputMaybe<BooleanFilter>;
  /** Serialized bag of cells of this block encoded with base64 */
  boc?: InputMaybe<StringFilter>;
  /** Collection-unique field for pagination and sorting. This field is designed to retain logical order. */
  chain_order?: InputMaybe<StringFilter>;
  /** Public key of the collator who produced this block. */
  created_by?: InputMaybe<StringFilter>;
  /** Logical creation time automatically set by the block formation end. */
  end_lt?: InputMaybe<StringFilter>;
  /** Block file hash */
  file_hash?: InputMaybe<StringFilter>;
  flags?: InputMaybe<IntFilter>;
  gen_catchain_seqno?: InputMaybe<FloatFilter>;
  gen_software_capabilities?: InputMaybe<StringFilter>;
  gen_software_version?: InputMaybe<FloatFilter>;
  /** uint 32 generation time stamp */
  gen_utime?: InputMaybe<FloatFilter>;
  gen_validator_list_hash_short?: InputMaybe<FloatFilter>;
  /** uint32 global block ID */
  global_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  in_msg_descr?: InputMaybe<InMsgArrayFilter>;
  /** true if this block is a key block */
  key_block?: InputMaybe<BooleanFilter>;
  master?: InputMaybe<BlockMasterFilter>;
  master_ref?: InputMaybe<ExtBlkRefFilter>;
  /** Returns last known master block at the time of shard generation. */
  min_ref_mc_seqno?: InputMaybe<FloatFilter>;
  out_msg_descr?: InputMaybe<OutMsgArrayFilter>;
  /** External block reference for previous block in case of shard merge. */
  prev_alt_ref?: InputMaybe<ExtBlkRefFilter>;
  /** Returns a number of a previous key block. */
  prev_key_block_seqno?: InputMaybe<FloatFilter>;
  /** External block reference for previous block. */
  prev_ref?: InputMaybe<ExtBlkRefFilter>;
  prev_vert_alt_ref?: InputMaybe<ExtBlkRefFilter>;
  /** External block reference for previous block in case of vertical blocks. */
  prev_vert_ref?: InputMaybe<ExtBlkRefFilter>;
  rand_seed?: InputMaybe<StringFilter>;
  seq_no?: InputMaybe<FloatFilter>;
  shard?: InputMaybe<StringFilter>;
  signatures?: InputMaybe<BlockSignaturesFilter>;
  /**
   * Logical creation time automatically set by the block formation start.
   * Logical time is a component of the TON Blockchain that also plays an important role in message delivery is the logical time, usually denoted by Lt. It is a non-negative 64-bit integer, assigned to certain events. For more details, see the TON blockchain specification
   */
  start_lt?: InputMaybe<StringFilter>;
  state_update?: InputMaybe<BlockStateUpdateFilter>;
  /**
   * Returns block processing status
   * - 0 – unknown
   * - 1 – proposed
   * - 2 – finalized
   * - 3 – refused
   */
  status?: InputMaybe<IntFilter>;
  status_name?: InputMaybe<BlockProcessingStatusEnumFilter>;
  tr_count?: InputMaybe<IntFilter>;
  value_flow?: InputMaybe<BlockValueFlowFilter>;
  /** uin32 block version identifier */
  version?: InputMaybe<FloatFilter>;
  vert_seq_no?: InputMaybe<FloatFilter>;
  want_merge?: InputMaybe<BooleanFilter>;
  want_split?: InputMaybe<BooleanFilter>;
  /** uint32 workchain identifier */
  workchain_id?: InputMaybe<IntFilter>;
};

/**
 *
 * Complexity 0
 */
export type BlockLimits = {
  __typename?: 'BlockLimits';
  bytes?: Maybe<BlockLimitsBytes>;
  gas?: Maybe<BlockLimitsGas>;
  lt_delta?: Maybe<BlockLimitsLtDelta>;
};

/**
 *
 * Complexity 0
 */
export type BlockLimitsBytes = {
  __typename?: 'BlockLimitsBytes';
  /**
   *
   * Complexity 0
   */
  hard_limit?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  soft_limit?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  underload?: Maybe<Scalars['Float']>;
};

export type BlockLimitsBytesFilter = {
  OR?: InputMaybe<BlockLimitsBytesFilter>;
  hard_limit?: InputMaybe<FloatFilter>;
  soft_limit?: InputMaybe<FloatFilter>;
  underload?: InputMaybe<FloatFilter>;
};

export type BlockLimitsFilter = {
  OR?: InputMaybe<BlockLimitsFilter>;
  bytes?: InputMaybe<BlockLimitsBytesFilter>;
  gas?: InputMaybe<BlockLimitsGasFilter>;
  lt_delta?: InputMaybe<BlockLimitsLtDeltaFilter>;
};

/**
 *
 * Complexity 0
 */
export type BlockLimitsGas = {
  __typename?: 'BlockLimitsGas';
  /**
   *
   * Complexity 0
   */
  hard_limit?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  soft_limit?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  underload?: Maybe<Scalars['Float']>;
};

export type BlockLimitsGasFilter = {
  OR?: InputMaybe<BlockLimitsGasFilter>;
  hard_limit?: InputMaybe<FloatFilter>;
  soft_limit?: InputMaybe<FloatFilter>;
  underload?: InputMaybe<FloatFilter>;
};

/**
 *
 * Complexity 0
 */
export type BlockLimitsLtDelta = {
  __typename?: 'BlockLimitsLtDelta';
  /**
   *
   * Complexity 0
   */
  hard_limit?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  soft_limit?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  underload?: Maybe<Scalars['Float']>;
};

export type BlockLimitsLtDeltaFilter = {
  OR?: InputMaybe<BlockLimitsLtDeltaFilter>;
  hard_limit?: InputMaybe<FloatFilter>;
  soft_limit?: InputMaybe<FloatFilter>;
  underload?: InputMaybe<FloatFilter>;
};

/**
 *
 * Complexity 10
 */
export type BlockMaster = {
  __typename?: 'BlockMaster';
  config?: Maybe<Config>;
  /**
   *
   * Complexity 0
   */
  config_addr?: Maybe<Scalars['String']>;
  /**
   * Max block generation time of shards
   *
   * Complexity 0
   */
  max_shard_gen_utime?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  max_shard_gen_utime_string?: Maybe<Scalars['String']>;
  /**
   * Min block generation time of shards
   *
   * Complexity 0
   */
  min_shard_gen_utime?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  min_shard_gen_utime_string?: Maybe<Scalars['String']>;
  prev_blk_signatures?: Maybe<Array<Maybe<BlockMasterPrevBlkSignatures>>>;
  recover_create_msg?: Maybe<InMsg>;
  shard_fees?: Maybe<Array<Maybe<BlockMasterShardFees>>>;
  shard_hashes?: Maybe<Array<Maybe<BlockMasterShardHashes>>>;
};

export type BlockMasterFilter = {
  OR?: InputMaybe<BlockMasterFilter>;
  config?: InputMaybe<ConfigFilter>;
  config_addr?: InputMaybe<StringFilter>;
  /** Max block generation time of shards */
  max_shard_gen_utime?: InputMaybe<FloatFilter>;
  /** Min block generation time of shards */
  min_shard_gen_utime?: InputMaybe<FloatFilter>;
  prev_blk_signatures?: InputMaybe<BlockMasterPrevBlkSignaturesArrayFilter>;
  recover_create_msg?: InputMaybe<InMsgFilter>;
  shard_fees?: InputMaybe<BlockMasterShardFeesArrayFilter>;
  shard_hashes?: InputMaybe<BlockMasterShardHashesArrayFilter>;
};

/**
 *
 * Complexity 0
 */
export type BlockMasterPrevBlkSignatures = {
  __typename?: 'BlockMasterPrevBlkSignatures';
  /**
   *
   * Complexity 0
   */
  node_id?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  r?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  s?: Maybe<Scalars['String']>;
};

export type BlockMasterPrevBlkSignaturesArrayFilter = {
  all?: InputMaybe<BlockMasterPrevBlkSignaturesFilter>;
  any?: InputMaybe<BlockMasterPrevBlkSignaturesFilter>;
};

export type BlockMasterPrevBlkSignaturesFilter = {
  OR?: InputMaybe<BlockMasterPrevBlkSignaturesFilter>;
  node_id?: InputMaybe<StringFilter>;
  r?: InputMaybe<StringFilter>;
  s?: InputMaybe<StringFilter>;
};

/**
 *
 * Complexity 0
 */
export type BlockMasterShardFees = {
  __typename?: 'BlockMasterShardFees';
  /**
   * Amount of fees created during shard
   *
   * Complexity 0
   */
  create?: Maybe<Scalars['String']>;
  /** Amount of non gram fees created in non gram crypto currencies during the block. */
  create_other?: Maybe<Array<Maybe<OtherCurrency>>>;
  /**
   * Amount of fees in grams
   *
   * Complexity 0
   */
  fees?: Maybe<Scalars['String']>;
  /** Array of fees in non gram crypto currencies */
  fees_other?: Maybe<Array<Maybe<OtherCurrency>>>;
  /**
   *
   * Complexity 0
   */
  shard?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  workchain_id?: Maybe<Scalars['Int']>;
};


/**
 *
 * Complexity 0
 */
export type BlockMasterShardFeesCreateArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type BlockMasterShardFeesFeesArgs = {
  format?: InputMaybe<BigIntFormat>;
};

export type BlockMasterShardFeesArrayFilter = {
  all?: InputMaybe<BlockMasterShardFeesFilter>;
  any?: InputMaybe<BlockMasterShardFeesFilter>;
};

export type BlockMasterShardFeesFilter = {
  OR?: InputMaybe<BlockMasterShardFeesFilter>;
  /** Amount of fees created during shard */
  create?: InputMaybe<StringFilter>;
  /** Amount of non gram fees created in non gram crypto currencies during the block. */
  create_other?: InputMaybe<OtherCurrencyArrayFilter>;
  /** Amount of fees in grams */
  fees?: InputMaybe<StringFilter>;
  /** Array of fees in non gram crypto currencies */
  fees_other?: InputMaybe<OtherCurrencyArrayFilter>;
  shard?: InputMaybe<StringFilter>;
  workchain_id?: InputMaybe<IntFilter>;
};

/**
 *
 * Complexity 0
 */
export type BlockMasterShardHashes = {
  __typename?: 'BlockMasterShardHashes';
  /** Shard description */
  descr?: Maybe<BlockMasterShardHashesDescr>;
  /**
   * Shard ID
   *
   * Complexity 0
   */
  shard?: Maybe<Scalars['String']>;
  /**
   * Uint32 workchain ID
   *
   * Complexity 0
   */
  workchain_id?: Maybe<Scalars['Int']>;
};

export type BlockMasterShardHashesArrayFilter = {
  all?: InputMaybe<BlockMasterShardHashesFilter>;
  any?: InputMaybe<BlockMasterShardHashesFilter>;
};

/**
 * Shard description
 *
 * Complexity 0
 */
export type BlockMasterShardHashesDescr = {
  __typename?: 'BlockMasterShardHashesDescr';
  /**
   *
   * Complexity 0
   */
  before_merge?: Maybe<Scalars['Boolean']>;
  /**
   * TON Blockchain supports dynamic sharding, so the shard configuration may change from block to block because of shard merge and split events. Therefore, we cannot simply say that each shardchain corresponds to a fixed set of account chains.
   * A shardchain block and its state may each be classified into two distinct parts. The parts with the ISP-dictated form of will be called the split parts of the block and its state, while the remainder will be called the non-split parts.
   * The masterchain cannot be split or merged.
   *
   * Complexity 0
   */
  before_split?: Maybe<Scalars['Boolean']>;
  /**
   * Logical time of the shardchain end
   *
   * Complexity 0
   */
  end_lt?: Maybe<Scalars['String']>;
  /**
   * Amount of fees collected int his shard in grams.
   *
   * Complexity 0
   */
  fees_collected?: Maybe<Scalars['String']>;
  /** Amount of fees collected int his shard in non gram currencies. */
  fees_collected_other?: Maybe<Array<Maybe<OtherCurrency>>>;
  /**
   * Shard block file hash.
   *
   * Complexity 0
   */
  file_hash?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  flags?: Maybe<Scalars['Int']>;
  /**
   * Amount of funds created in this shard in grams.
   *
   * Complexity 0
   */
  funds_created?: Maybe<Scalars['String']>;
  /** Amount of funds created in this shard in non gram currencies. */
  funds_created_other?: Maybe<Array<Maybe<OtherCurrency>>>;
  /**
   * Generation time in uint32
   *
   * Complexity 0
   */
  gen_utime?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  gen_utime_string?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  min_ref_mc_seqno?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  next_catchain_seqno?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  next_validator_shard?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  nx_cc_updated?: Maybe<Scalars['Boolean']>;
  /**
   * Returns last known master block at the time of shard generation.
   *
   * Complexity 0
   */
  reg_mc_seqno?: Maybe<Scalars['Float']>;
  /**
   * Returns last known master block at the time of shard generation. The shard block configuration is derived from that block.
   *
   * Complexity 0
   */
  root_hash?: Maybe<Scalars['String']>;
  /**
   * uint32 sequence number
   *
   * Complexity 0
   */
  seq_no?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  split?: Maybe<Scalars['Float']>;
  /**
   * - 0 – none
   * - 2 – split
   * - 3 – merge
   *
   * Complexity 0
   */
  split_type?: Maybe<Scalars['Int']>;
  split_type_name?: Maybe<SplitTypeEnum>;
  /**
   * Logical time of the shardchain start
   *
   * Complexity 0
   */
  start_lt?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  want_merge?: Maybe<Scalars['Boolean']>;
  /**
   *
   * Complexity 0
   */
  want_split?: Maybe<Scalars['Boolean']>;
};


/**
 * Shard description
 *
 * Complexity 0
 */
export type BlockMasterShardHashesDescrEnd_LtArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * Shard description
 *
 * Complexity 0
 */
export type BlockMasterShardHashesDescrFees_CollectedArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * Shard description
 *
 * Complexity 0
 */
export type BlockMasterShardHashesDescrFunds_CreatedArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * Shard description
 *
 * Complexity 0
 */
export type BlockMasterShardHashesDescrStart_LtArgs = {
  format?: InputMaybe<BigIntFormat>;
};

/** Shard description */
export type BlockMasterShardHashesDescrFilter = {
  OR?: InputMaybe<BlockMasterShardHashesDescrFilter>;
  before_merge?: InputMaybe<BooleanFilter>;
  /**
   * TON Blockchain supports dynamic sharding, so the shard configuration may change from block to block because of shard merge and split events. Therefore, we cannot simply say that each shardchain corresponds to a fixed set of account chains.
   * A shardchain block and its state may each be classified into two distinct parts. The parts with the ISP-dictated form of will be called the split parts of the block and its state, while the remainder will be called the non-split parts.
   * The masterchain cannot be split or merged.
   */
  before_split?: InputMaybe<BooleanFilter>;
  /** Logical time of the shardchain end */
  end_lt?: InputMaybe<StringFilter>;
  /** Amount of fees collected int his shard in grams. */
  fees_collected?: InputMaybe<StringFilter>;
  /** Amount of fees collected int his shard in non gram currencies. */
  fees_collected_other?: InputMaybe<OtherCurrencyArrayFilter>;
  /** Shard block file hash. */
  file_hash?: InputMaybe<StringFilter>;
  flags?: InputMaybe<IntFilter>;
  /** Amount of funds created in this shard in grams. */
  funds_created?: InputMaybe<StringFilter>;
  /** Amount of funds created in this shard in non gram currencies. */
  funds_created_other?: InputMaybe<OtherCurrencyArrayFilter>;
  /** Generation time in uint32 */
  gen_utime?: InputMaybe<FloatFilter>;
  min_ref_mc_seqno?: InputMaybe<FloatFilter>;
  next_catchain_seqno?: InputMaybe<FloatFilter>;
  next_validator_shard?: InputMaybe<StringFilter>;
  nx_cc_updated?: InputMaybe<BooleanFilter>;
  /** Returns last known master block at the time of shard generation. */
  reg_mc_seqno?: InputMaybe<FloatFilter>;
  /** Returns last known master block at the time of shard generation. The shard block configuration is derived from that block. */
  root_hash?: InputMaybe<StringFilter>;
  /** uint32 sequence number */
  seq_no?: InputMaybe<FloatFilter>;
  split?: InputMaybe<FloatFilter>;
  /**
   * - 0 – none
   * - 2 – split
   * - 3 – merge
   */
  split_type?: InputMaybe<IntFilter>;
  split_type_name?: InputMaybe<SplitTypeEnumFilter>;
  /** Logical time of the shardchain start */
  start_lt?: InputMaybe<StringFilter>;
  want_merge?: InputMaybe<BooleanFilter>;
  want_split?: InputMaybe<BooleanFilter>;
};

export type BlockMasterShardHashesFilter = {
  OR?: InputMaybe<BlockMasterShardHashesFilter>;
  /** Shard description */
  descr?: InputMaybe<BlockMasterShardHashesDescrFilter>;
  /** Shard ID */
  shard?: InputMaybe<StringFilter>;
  /** Uint32 workchain ID */
  workchain_id?: InputMaybe<IntFilter>;
};

export enum BlockProcessingStatusEnum {
  Finalized = 'Finalized',
  Proposed = 'Proposed',
  Refused = 'Refused',
  Unknown = 'Unknown'
}

export type BlockProcessingStatusEnumFilter = {
  eq?: InputMaybe<BlockProcessingStatusEnum>;
  ge?: InputMaybe<BlockProcessingStatusEnum>;
  gt?: InputMaybe<BlockProcessingStatusEnum>;
  in?: InputMaybe<Array<InputMaybe<BlockProcessingStatusEnum>>>;
  le?: InputMaybe<BlockProcessingStatusEnum>;
  lt?: InputMaybe<BlockProcessingStatusEnum>;
  ne?: InputMaybe<BlockProcessingStatusEnum>;
  notIn?: InputMaybe<Array<InputMaybe<BlockProcessingStatusEnum>>>;
};

/**
 * Set of validator's signatures for the Block with correspond id
 *
 * Complexity 5
 */
export type BlockSignatures = {
  __typename?: 'BlockSignatures';
  block?: Maybe<Block>;
  /**
   *
   * Complexity 0
   */
  catchain_seqno?: Maybe<Scalars['Float']>;
  /**
   * Signed block's gen_utime
   *
   * Complexity 0
   */
  gen_utime?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  gen_utime_string?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  id?: Maybe<Scalars['String']>;
  /**
   * Signed block's merkle proof
   *
   * Complexity 0
   */
  proof?: Maybe<Scalars['String']>;
  /**
   * Signed block's seq_no
   *
   * Complexity 0
   */
  seq_no?: Maybe<Scalars['Float']>;
  /**
   * Signed block's shard
   *
   * Complexity 0
   */
  shard?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  sig_weight?: Maybe<Scalars['String']>;
  /** Array of signatures from block's validators */
  signatures?: Maybe<Array<Maybe<BlockSignaturesSignatures>>>;
  /**
   *
   * Complexity 0
   */
  validator_list_hash_short?: Maybe<Scalars['Float']>;
  /**
   * Signed block's workchain_id
   *
   * Complexity 0
   */
  workchain_id?: Maybe<Scalars['Int']>;
};


/**
 * Set of validator's signatures for the Block with correspond id
 *
 * Complexity 5
 */
export type BlockSignaturesBlockArgs = {
  timeout?: InputMaybe<Scalars['Int']>;
  when?: InputMaybe<BlockSignaturesFilter>;
};


/**
 * Set of validator's signatures for the Block with correspond id
 *
 * Complexity 5
 */
export type BlockSignaturesSig_WeightArgs = {
  format?: InputMaybe<BigIntFormat>;
};

/** Set of validator's signatures for the Block with correspond id */
export type BlockSignaturesFilter = {
  OR?: InputMaybe<BlockSignaturesFilter>;
  block?: InputMaybe<BlockFilter>;
  catchain_seqno?: InputMaybe<FloatFilter>;
  /** Signed block's gen_utime */
  gen_utime?: InputMaybe<FloatFilter>;
  id?: InputMaybe<StringFilter>;
  /** Signed block's merkle proof */
  proof?: InputMaybe<StringFilter>;
  /** Signed block's seq_no */
  seq_no?: InputMaybe<FloatFilter>;
  /** Signed block's shard */
  shard?: InputMaybe<StringFilter>;
  sig_weight?: InputMaybe<StringFilter>;
  /** Array of signatures from block's validators */
  signatures?: InputMaybe<BlockSignaturesSignaturesArrayFilter>;
  validator_list_hash_short?: InputMaybe<FloatFilter>;
  /** Signed block's workchain_id */
  workchain_id?: InputMaybe<IntFilter>;
};

/**
 *
 * Complexity 0
 */
export type BlockSignaturesSignatures = {
  __typename?: 'BlockSignaturesSignatures';
  /**
   *
   * Complexity 0
   */
  node_id?: Maybe<Scalars['String']>;
  /**
   * 'R' part of signature
   *
   * Complexity 0
   */
  r?: Maybe<Scalars['String']>;
  /**
   * 's' part of signature
   *
   * Complexity 0
   */
  s?: Maybe<Scalars['String']>;
};

export type BlockSignaturesSignaturesArrayFilter = {
  all?: InputMaybe<BlockSignaturesSignaturesFilter>;
  any?: InputMaybe<BlockSignaturesSignaturesFilter>;
};

export type BlockSignaturesSignaturesFilter = {
  OR?: InputMaybe<BlockSignaturesSignaturesFilter>;
  node_id?: InputMaybe<StringFilter>;
  /** 'R' part of signature */
  r?: InputMaybe<StringFilter>;
  /** 's' part of signature */
  s?: InputMaybe<StringFilter>;
};

/**
 *
 * Complexity 0
 */
export type BlockStateUpdate = {
  __typename?: 'BlockStateUpdate';
  /**
   *
   * Complexity 0
   */
  new?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  new_depth?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  new_hash?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  old?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  old_depth?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  old_hash?: Maybe<Scalars['String']>;
};

export type BlockStateUpdateFilter = {
  OR?: InputMaybe<BlockStateUpdateFilter>;
  new?: InputMaybe<StringFilter>;
  new_depth?: InputMaybe<IntFilter>;
  new_hash?: InputMaybe<StringFilter>;
  old?: InputMaybe<StringFilter>;
  old_depth?: InputMaybe<IntFilter>;
  old_hash?: InputMaybe<StringFilter>;
};

/**
 *
 * Complexity 7
 */
export type BlockValueFlow = {
  __typename?: 'BlockValueFlow';
  /**
   *
   * Complexity 0
   */
  created?: Maybe<Scalars['String']>;
  created_other?: Maybe<Array<Maybe<OtherCurrency>>>;
  /**
   * Amount of grams exported.
   *
   * Complexity 0
   */
  exported?: Maybe<Scalars['String']>;
  /** Amount of non gram cryptocurrencies exported. */
  exported_other?: Maybe<Array<Maybe<OtherCurrency>>>;
  /**
   *
   * Complexity 0
   */
  fees_collected?: Maybe<Scalars['String']>;
  fees_collected_other?: Maybe<Array<Maybe<OtherCurrency>>>;
  /**
   * Amount of import fees in grams
   *
   * Complexity 0
   */
  fees_imported?: Maybe<Scalars['String']>;
  /** Amount of import fees in non gram currencies. */
  fees_imported_other?: Maybe<Array<Maybe<OtherCurrency>>>;
  /**
   * Amount of grams transferred from previous block.
   *
   * Complexity 0
   */
  from_prev_blk?: Maybe<Scalars['String']>;
  /** Amount of non gram cryptocurrencies transferred from previous block. */
  from_prev_blk_other?: Maybe<Array<Maybe<OtherCurrency>>>;
  /**
   * Amount of grams imported.
   *
   * Complexity 0
   */
  imported?: Maybe<Scalars['String']>;
  /** Amount of non gram cryptocurrencies imported. */
  imported_other?: Maybe<Array<Maybe<OtherCurrency>>>;
  /**
   * Amount of grams minted in this block.
   *
   * Complexity 0
   */
  minted?: Maybe<Scalars['String']>;
  minted_other?: Maybe<Array<Maybe<OtherCurrency>>>;
  /**
   * Amount of grams amount to the next block.
   *
   * Complexity 0
   */
  to_next_blk?: Maybe<Scalars['String']>;
  /** Amount of non gram cryptocurrencies to the next block. */
  to_next_blk_other?: Maybe<Array<Maybe<OtherCurrency>>>;
};


/**
 *
 * Complexity 7
 */
export type BlockValueFlowCreatedArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 7
 */
export type BlockValueFlowExportedArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 7
 */
export type BlockValueFlowFees_CollectedArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 7
 */
export type BlockValueFlowFees_ImportedArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 7
 */
export type BlockValueFlowFrom_Prev_BlkArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 7
 */
export type BlockValueFlowImportedArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 7
 */
export type BlockValueFlowMintedArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 7
 */
export type BlockValueFlowTo_Next_BlkArgs = {
  format?: InputMaybe<BigIntFormat>;
};

export type BlockValueFlowFilter = {
  OR?: InputMaybe<BlockValueFlowFilter>;
  created?: InputMaybe<StringFilter>;
  created_other?: InputMaybe<OtherCurrencyArrayFilter>;
  /** Amount of grams exported. */
  exported?: InputMaybe<StringFilter>;
  /** Amount of non gram cryptocurrencies exported. */
  exported_other?: InputMaybe<OtherCurrencyArrayFilter>;
  fees_collected?: InputMaybe<StringFilter>;
  fees_collected_other?: InputMaybe<OtherCurrencyArrayFilter>;
  /** Amount of import fees in grams */
  fees_imported?: InputMaybe<StringFilter>;
  /** Amount of import fees in non gram currencies. */
  fees_imported_other?: InputMaybe<OtherCurrencyArrayFilter>;
  /** Amount of grams transferred from previous block. */
  from_prev_blk?: InputMaybe<StringFilter>;
  /** Amount of non gram cryptocurrencies transferred from previous block. */
  from_prev_blk_other?: InputMaybe<OtherCurrencyArrayFilter>;
  /** Amount of grams imported. */
  imported?: InputMaybe<StringFilter>;
  /** Amount of non gram cryptocurrencies imported. */
  imported_other?: InputMaybe<OtherCurrencyArrayFilter>;
  /** Amount of grams minted in this block. */
  minted?: InputMaybe<StringFilter>;
  minted_other?: InputMaybe<OtherCurrencyArrayFilter>;
  /** Amount of grams amount to the next block. */
  to_next_blk?: InputMaybe<StringFilter>;
  /** Amount of non gram cryptocurrencies to the next block. */
  to_next_blk_other?: InputMaybe<OtherCurrencyArrayFilter>;
};

/**
 * # Account type
 *
 * Recall that a smart contract and an account are the same thing in the context
 * of the TON Blockchain, and that these terms can be used interchangeably, at
 * least as long as only small (or “usual”) smart contracts are considered. A large
 * smart-contract may employ several accounts lying in different shardchains of
 * the same workchain for load balancing purposes.
 *
 * An account is identified by its full address and is completely described by
 * its state. In other words, there is nothing else in an account apart from its
 * address and state.
 *
 * Complexity 5
 */
export type BlockchainAccount = Node & {
  __typename?: 'BlockchainAccount';
  /**
   * Returns the current status of the account.
   *
   * - 0 – uninit
   * - 1 – active
   * - 2 – frozen
   * - 3 – nonExist
   *
   * Complexity 0
   */
  acc_type?: Maybe<Scalars['Int']>;
  acc_type_name?: Maybe<AccountStatusEnum>;
  /**
   *
   * Complexity 0
   */
  address?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  balance?: Maybe<Scalars['String']>;
  balance_other?: Maybe<Array<Maybe<OtherCurrency>>>;
  /**
   * Contains sum of all the bits used by the cells of the account. Used in storage fee calculation
   *
   * Complexity 0
   */
  bits?: Maybe<Scalars['String']>;
  /**
   * Bag of cells with the account struct encoded as base64.
   *
   * Complexity 5
   */
  boc?: Maybe<Scalars['String']>;
  /**
   * Contains number of the cells of the account. Used in storage fee calculation
   *
   * Complexity 0
   */
  cells?: Maybe<Scalars['String']>;
  /**
   * If present, contains smart-contract code encoded with in base64.
   *
   * Complexity 2
   */
  code?: Maybe<Scalars['String']>;
  /**
   * `code` field root hash.
   *
   * Complexity 0
   */
  code_hash?: Maybe<Scalars['String']>;
  /**
   * If present, contains smart-contract data encoded with in base64.
   *
   * Complexity 3
   */
  data?: Maybe<Scalars['String']>;
  /**
   * `data` field root hash.
   *
   * Complexity 0
   */
  data_hash?: Maybe<Scalars['String']>;
  /**
   * If present, accumulates the storage payments that could not be exacted from
   * the balance of the account, represented by a strictly positive amount of nano
   * tokens; it can be present only for uninitialized or frozen accounts that have
   * a balance of zero Grams (but may have non-zero balances in non gram
   * cryptocurrencies). When due_payment becomes larger than the value of a
   * configurable parameter of the blockchain, the ac- count is destroyed
   * altogether, and its balance, if any, is transferred to the zero account.
   *
   * Complexity 0
   */
  due_payment?: Maybe<Scalars['String']>;
  /**
   * BlockchainAccount.id is "account/"-prefixed Account.id.
   * For id without prefix see "address".
   *
   * Complexity 0
   */
  id: Scalars['ID'];
  /**
   * account 's initial code hash (when it was deployed)
   *
   * Complexity 0
   */
  init_code_hash?: Maybe<Scalars['String']>;
  /**
   * Contains either the unixtime of the most recent storage payment
   * collected (usually this is the unixtime of the most recent transaction),
   * or the unixtime when the account was created (again, by a transaction).
   *
   * Complexity 0
   */
  last_paid?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  last_trans_lt?: Maybe<Scalars['String']>;
  /**
   * If present, contains library code used in smart-contract.
   *
   * Complexity 0
   */
  library?: Maybe<Scalars['String']>;
  /**
   * `library` field root hash.
   *
   * Complexity 0
   */
  library_hash?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  prev_code_hash?: Maybe<Scalars['String']>;
  /**
   * Merkle proof that account is a part of shard state it cut from as a bag of cells with Merkle proof struct encoded as base64.
   *
   * Complexity 0
   */
  proof?: Maybe<Scalars['String']>;
  /**
   * Contains the number of public cells of the account. Used in storage fee calculation.
   *
   * Complexity 0
   */
  public_cells?: Maybe<Scalars['String']>;
  /**
   * Is present and non-zero only in instances of large smart contracts.
   *
   * Complexity 0
   */
  split_depth?: Maybe<Scalars['Int']>;
  /**
   * Contains the representation hash of an instance of `StateInit` when an account is frozen.
   *
   * Complexity 0
   */
  state_hash?: Maybe<Scalars['String']>;
  /**
   * May be present only in the masterchain—and within the masterchain, only in some
   * fundamental smart contracts required for the whole system to function.
   *
   * Complexity 0
   */
  tick?: Maybe<Scalars['Boolean']>;
  /**
   * May be present only in the masterchain—and within the masterchain, only in some
   * fundamental smart contracts required for the whole system to function.
   *
   * Complexity 0
   */
  tock?: Maybe<Scalars['Boolean']>;
  tokenHolder?: Maybe<FungibleTokenHolder>;
  /**
   * Workchain id of the account address (id field).
   *
   * Complexity 0
   */
  workchain_id?: Maybe<Scalars['Int']>;
};


/**
 * # Account type
 *
 * Recall that a smart contract and an account are the same thing in the context
 * of the TON Blockchain, and that these terms can be used interchangeably, at
 * least as long as only small (or “usual”) smart contracts are considered. A large
 * smart-contract may employ several accounts lying in different shardchains of
 * the same workchain for load balancing purposes.
 *
 * An account is identified by its full address and is completely described by
 * its state. In other words, there is nothing else in an account apart from its
 * address and state.
 *
 * Complexity 5
 */
export type BlockchainAccountBalanceArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * # Account type
 *
 * Recall that a smart contract and an account are the same thing in the context
 * of the TON Blockchain, and that these terms can be used interchangeably, at
 * least as long as only small (or “usual”) smart contracts are considered. A large
 * smart-contract may employ several accounts lying in different shardchains of
 * the same workchain for load balancing purposes.
 *
 * An account is identified by its full address and is completely described by
 * its state. In other words, there is nothing else in an account apart from its
 * address and state.
 *
 * Complexity 5
 */
export type BlockchainAccountBitsArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * # Account type
 *
 * Recall that a smart contract and an account are the same thing in the context
 * of the TON Blockchain, and that these terms can be used interchangeably, at
 * least as long as only small (or “usual”) smart contracts are considered. A large
 * smart-contract may employ several accounts lying in different shardchains of
 * the same workchain for load balancing purposes.
 *
 * An account is identified by its full address and is completely described by
 * its state. In other words, there is nothing else in an account apart from its
 * address and state.
 *
 * Complexity 5
 */
export type BlockchainAccountCellsArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * # Account type
 *
 * Recall that a smart contract and an account are the same thing in the context
 * of the TON Blockchain, and that these terms can be used interchangeably, at
 * least as long as only small (or “usual”) smart contracts are considered. A large
 * smart-contract may employ several accounts lying in different shardchains of
 * the same workchain for load balancing purposes.
 *
 * An account is identified by its full address and is completely described by
 * its state. In other words, there is nothing else in an account apart from its
 * address and state.
 *
 * Complexity 5
 */
export type BlockchainAccountDue_PaymentArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * # Account type
 *
 * Recall that a smart contract and an account are the same thing in the context
 * of the TON Blockchain, and that these terms can be used interchangeably, at
 * least as long as only small (or “usual”) smart contracts are considered. A large
 * smart-contract may employ several accounts lying in different shardchains of
 * the same workchain for load balancing purposes.
 *
 * An account is identified by its full address and is completely described by
 * its state. In other words, there is nothing else in an account apart from its
 * address and state.
 *
 * Complexity 5
 */
export type BlockchainAccountLast_Trans_LtArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * # Account type
 *
 * Recall that a smart contract and an account are the same thing in the context
 * of the TON Blockchain, and that these terms can be used interchangeably, at
 * least as long as only small (or “usual”) smart contracts are considered. A large
 * smart-contract may employ several accounts lying in different shardchains of
 * the same workchain for load balancing purposes.
 *
 * An account is identified by its full address and is completely described by
 * its state. In other words, there is nothing else in an account apart from its
 * address and state.
 *
 * Complexity 5
 */
export type BlockchainAccountPublic_CellsArgs = {
  format?: InputMaybe<BigIntFormat>;
};

/**
 *
 * Complexity 0
 */
export type BlockchainAccountQuery = {
  __typename?: 'BlockchainAccountQuery';
  /** Account information (e.g. boc). */
  info?: Maybe<BlockchainAccount>;
  /** This node could be used for a cursor-based pagination of account messages. */
  messages?: Maybe<BlockchainMessagesConnection>;
  /** This node could be used for a cursor-based pagination of account transactions. */
  transactions?: Maybe<BlockchainTransactionsConnection>;
};


/**
 *
 * Complexity 0
 */
export type BlockchainAccountQueryMessagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  allow_latest_inconsistent_data?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  counterparties?: InputMaybe<Array<Scalars['String']>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  master_seq_no_range?: InputMaybe<BlockchainMasterSeqNoFilter>;
  min_value?: InputMaybe<Scalars['String']>;
  msg_type?: InputMaybe<Array<BlockchainMessageTypeFilterEnum>>;
};


/**
 *
 * Complexity 0
 */
export type BlockchainAccountQueryTransactionsArgs = {
  aborted?: InputMaybe<Scalars['Boolean']>;
  after?: InputMaybe<Scalars['String']>;
  allow_latest_inconsistent_data?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  master_seq_no_range?: InputMaybe<BlockchainMasterSeqNoFilter>;
  max_balance_delta?: InputMaybe<Scalars['String']>;
  min_balance_delta?: InputMaybe<Scalars['String']>;
};

/**
 * Block
 *
 * Complexity 10
 */
export type BlockchainBlock = Node & {
  __typename?: 'BlockchainBlock';
  account_blocks?: Maybe<Array<Maybe<BlockAccountBlocks>>>;
  /**
   *
   * Complexity 0
   */
  after_merge?: Maybe<Scalars['Boolean']>;
  /**
   *
   * Complexity 0
   */
  after_split?: Maybe<Scalars['Boolean']>;
  /**
   *
   * Complexity 0
   */
  before_split?: Maybe<Scalars['Boolean']>;
  /**
   * Serialized bag of cells of this block encoded with base64
   *
   * Complexity 10
   */
  boc?: Maybe<Scalars['String']>;
  /**
   * Collection-unique field for pagination and sorting. This field is designed to retain logical order.
   *
   * Complexity 0
   */
  chain_order?: Maybe<Scalars['String']>;
  /**
   * Public key of the collator who produced this block.
   *
   * Complexity 0
   */
  created_by?: Maybe<Scalars['String']>;
  /**
   * Logical creation time automatically set by the block formation end.
   *
   * Complexity 0
   */
  end_lt?: Maybe<Scalars['String']>;
  /**
   * Block file hash
   *
   * Complexity 0
   */
  file_hash?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  flags?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  gen_catchain_seqno?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  gen_software_capabilities?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  gen_software_version?: Maybe<Scalars['Float']>;
  /**
   * uint 32 generation time stamp
   *
   * Complexity 0
   */
  gen_utime?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  gen_utime_string?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  gen_validator_list_hash_short?: Maybe<Scalars['Float']>;
  /**
   * uint32 global block ID
   *
   * Complexity 0
   */
  global_id?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  hash?: Maybe<Scalars['String']>;
  /**
   * BlockchainBlock.id is "block/"-prefixed Block.id.
   * For id without prefix see "hash".
   *
   * Complexity 0
   */
  id: Scalars['ID'];
  in_msg_descr?: Maybe<Array<Maybe<InMsg>>>;
  /**
   * true if this block is a key block
   *
   * Complexity 0
   */
  key_block?: Maybe<Scalars['Boolean']>;
  master?: Maybe<BlockMaster>;
  master_ref?: Maybe<ExtBlkRef>;
  /**
   * Returns last known master block at the time of shard generation.
   *
   * Complexity 0
   */
  min_ref_mc_seqno?: Maybe<Scalars['Float']>;
  out_msg_descr?: Maybe<Array<Maybe<OutMsg>>>;
  /** External block reference for previous block in case of shard merge. */
  prev_alt_ref?: Maybe<ExtBlkRef>;
  /**
   * Returns a number of a previous key block.
   *
   * Complexity 0
   */
  prev_key_block_seqno?: Maybe<Scalars['Float']>;
  /** External block reference for previous block. */
  prev_ref?: Maybe<ExtBlkRef>;
  prev_vert_alt_ref?: Maybe<ExtBlkRef>;
  /** External block reference for previous block in case of vertical blocks. */
  prev_vert_ref?: Maybe<ExtBlkRef>;
  /**
   *
   * Complexity 0
   */
  rand_seed?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  seq_no?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  shard?: Maybe<Scalars['String']>;
  /**
   * Logical creation time automatically set by the block formation start.
   * Logical time is a component of the TON Blockchain that also plays an important role in message delivery is the logical time, usually denoted by Lt. It is a non-negative 64-bit integer, assigned to certain events. For more details, see the TON blockchain specification
   *
   * Complexity 0
   */
  start_lt?: Maybe<Scalars['String']>;
  state_update?: Maybe<BlockStateUpdate>;
  /**
   * Returns block processing status
   * - 0 – unknown
   * - 1 – proposed
   * - 2 – finalized
   * - 3 – refused
   *
   * Complexity 0
   */
  status?: Maybe<Scalars['Int']>;
  status_name?: Maybe<BlockProcessingStatusEnum>;
  /**
   *
   * Complexity 0
   */
  tr_count?: Maybe<Scalars['Int']>;
  value_flow?: Maybe<BlockValueFlow>;
  /**
   * uin32 block version identifier
   *
   * Complexity 0
   */
  version?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  vert_seq_no?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  want_merge?: Maybe<Scalars['Boolean']>;
  /**
   *
   * Complexity 0
   */
  want_split?: Maybe<Scalars['Boolean']>;
  /**
   * uint32 workchain identifier
   *
   * Complexity 0
   */
  workchain_id?: Maybe<Scalars['Int']>;
};


/**
 * Block
 *
 * Complexity 10
 */
export type BlockchainBlockEnd_LtArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * Block
 *
 * Complexity 10
 */
export type BlockchainBlockGen_Software_CapabilitiesArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * Block
 *
 * Complexity 10
 */
export type BlockchainBlockStart_LtArgs = {
  format?: InputMaybe<BigIntFormat>;
};

/**
 *
 * Complexity 0
 */
export type BlockchainBlocksConnection = {
  __typename?: 'BlockchainBlocksConnection';
  edges: Array<BlockchainBlocksEdge>;
  pageInfo: PageInfo;
};

/**
 *
 * Complexity 0
 */
export type BlockchainBlocksEdge = {
  __typename?: 'BlockchainBlocksEdge';
  /**
   *
   * Complexity 0
   */
  cursor: Scalars['String'];
  node: BlockchainBlock;
};

export type BlockchainMasterSeqNoFilter = {
  /** Maximum exclusive seq_no of corresponding master blocks */
  end?: InputMaybe<Scalars['Int']>;
  /** Minimum inclusive seq_no of corresponding master blocks */
  start?: InputMaybe<Scalars['Int']>;
};

/**
 *
 * Complexity 0
 */
export type BlockchainMasterSeqNoRange = {
  __typename?: 'BlockchainMasterSeqNoRange';
  /**
   * EXCLUSIVE seq_no range border.
   * Masterchain block seq_no that corresponds to the specified time_end right border of
   * time interval.
   * Can be used to define pagination range in functions, providing cursor-based pagination.
   *
   * If no seq_no was found, returns `null`.
   * This may happen if there is no corresponding masterchain block yet for
   * the specified `time_end` timestamp when `time_end` is close to `now`. We recommend
   * ommiting the right border seq_no for recent data pagination.
   *
   * Complexity 0
   */
  end?: Maybe<Scalars['Int']>;
  /**
   * INCLUSIVE seq_no range border.
   * Masterchain block seq_no that corresponds to the specified time_start left border of
   * time interval.
   * Can be used to define pagination range in functions, providing cursor-based pagination.
   *
   * If no corresponding masterchain block was found, null is returned. It may happen when the
   * time_start timestamp refers to the historic data which is not available.
   *
   * Complexity 0
   */
  start?: Maybe<Scalars['Int']>;
};

/**
 * # Message type
 *
 * Message layout queries.  A message consists of its header followed by its
 * body or payload. The body is essentially arbitrary, to be interpreted by the
 * destination smart contract. It can be queried with the following fields:
 *
 * Complexity 3
 */
export type BlockchainMessage = Node & {
  __typename?: 'BlockchainMessage';
  /**
   * Merkle proof that account is a part of shard state it cut from as a bag of cells with Merkle proof struct encoded as base64.
   *
   * Complexity 0
   */
  block_id?: Maybe<Scalars['String']>;
  /**
   * A bag of cells with the message structure encoded as base64.
   *
   * Complexity 3
   */
  boc?: Maybe<Scalars['String']>;
  /**
   * Bag of cells with the message body encoded as base64.
   *
   * Complexity 0
   */
  body?: Maybe<Scalars['String']>;
  /**
   * `body` field root hash.
   *
   * Complexity 0
   */
  body_hash?: Maybe<Scalars['String']>;
  /**
   * Bounce flag. If the transaction has been aborted, and the inbound message has its bounce flag set, then it is “bounced” by automatically generating an outbound message (with the bounce flag clear) to its original sender.
   *
   * Complexity 0
   */
  bounce?: Maybe<Scalars['Boolean']>;
  /**
   * Bounced flag. If the transaction has been aborted, and the inbound message has its bounce flag set, then it is “bounced” by automatically generating an outbound message (with the bounce flag clear) to its original sender.
   *
   * Complexity 0
   */
  bounced?: Maybe<Scalars['Boolean']>;
  /**
   * Collection-unique field for pagination and sorting. This field is designed to retain logical output order (for logical input order use transaction.in_message).
   *
   * Complexity 0
   */
  chain_order?: Maybe<Scalars['String']>;
  /**
   * Represents contract code in deploy messages.
   *
   * Complexity 1
   */
  code?: Maybe<Scalars['String']>;
  /**
   * `code` field root hash.
   *
   * Complexity 0
   */
  code_hash?: Maybe<Scalars['String']>;
  /**
   * Creation unixtime automatically set by the generating transaction. The creation unixtime equals the creation unixtime of the block containing the generating transaction.
   *
   * Complexity 0
   */
  created_at?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  created_at_string?: Maybe<Scalars['String']>;
  /**
   * Logical creation time automatically set by the generating transaction.
   *
   * Complexity 0
   */
  created_lt?: Maybe<Scalars['String']>;
  /**
   * Represents initial data for a contract in deploy messages
   *
   * Complexity 2
   */
  data?: Maybe<Scalars['String']>;
  /**
   * `data` field root hash.
   *
   * Complexity 0
   */
  data_hash?: Maybe<Scalars['String']>;
  /**
   * Returns destination address string
   *
   * Complexity 0
   */
  dst?: Maybe<Scalars['String']>;
  /** The destination account */
  dst_account?: Maybe<BlockchainAccount>;
  /** The transaction in which this message is in_msg */
  dst_transaction?: Maybe<BlockchainTransaction>;
  /**
   * Workchain id of the destination address (dst field)
   *
   * Complexity 0
   */
  dst_workchain_id?: Maybe<Scalars['Int']>;
  /**
   * Original total forwarding fee paid for using the HR mechanism; it is automatically computed from some configuration parameters and the size of the message at the time the message is generated.
   *
   * Complexity 0
   */
  fwd_fee?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  hash?: Maybe<Scalars['String']>;
  /**
   * BlockchainMessage.id is "message/"-prefixed Message.id.
   * For id without prefix see "hash".
   *
   * Complexity 0
   */
  id: Scalars['ID'];
  /**
   * IHR is disabled for the message.
   *
   * Complexity 0
   */
  ihr_disabled?: Maybe<Scalars['Boolean']>;
  /**
   * This value is subtracted from the value attached to the message and awarded to the validators of the destination shardchain if they include the message by the IHR mechanism.
   *
   * Complexity 0
   */
  ihr_fee?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  import_fee?: Maybe<Scalars['String']>;
  /**
   * Represents contract library in deploy messages
   *
   * Complexity 0
   */
  library?: Maybe<Scalars['String']>;
  /**
   * `library` field root hash.
   *
   * Complexity 0
   */
  library_hash?: Maybe<Scalars['String']>;
  /**
   * Returns the type of message.
   * - 0 – internal
   * - 1 – extIn
   * - 2 – extOut
   *
   * Complexity 0
   */
  msg_type?: Maybe<Scalars['Int']>;
  msg_type_name?: Maybe<MessageTypeEnum>;
  /**
   * Merkle proof that message is a part of a block it cut from. It is a bag of cells with Merkle proof struct encoded as base64.
   *
   * Complexity 0
   */
  proof?: Maybe<Scalars['String']>;
  /**
   * This is only used for special contracts in masterchain to deploy messages.
   *
   * Complexity 0
   */
  split_depth?: Maybe<Scalars['Int']>;
  /**
   * Returns source address string
   *
   * Complexity 0
   */
  src?: Maybe<Scalars['String']>;
  /** The source account */
  src_account?: Maybe<BlockchainAccount>;
  /** The transaction in which this message is included to out_msgs */
  src_transaction?: Maybe<BlockchainTransaction>;
  /**
   * Workchain id of the source address (src field)
   *
   * Complexity 0
   */
  src_workchain_id?: Maybe<Scalars['Int']>;
  /**
   * Returns internal processing status according to the numbers shown.
   * - 0 – unknown
   * - 1 – queued
   * - 2 – processing
   * - 3 – preliminary
   * - 4 – proposed
   * - 5 – finalized
   * - 6 – refused
   * - 7 – transiting
   *
   * Complexity 0
   */
  status?: Maybe<Scalars['Int']>;
  status_name?: Maybe<MessageProcessingStatusEnum>;
  /**
   * This is only used for special contracts in masterchain to deploy messages.
   *
   * Complexity 0
   */
  tick?: Maybe<Scalars['Boolean']>;
  /**
   * This is only used for special contracts in masterchain to deploy messages
   *
   * Complexity 0
   */
  tock?: Maybe<Scalars['Boolean']>;
  tokenTransfer?: Maybe<FungibleTokenTransfer>;
  /**
   * May or may not be present
   *
   * Complexity 0
   */
  value?: Maybe<Scalars['String']>;
  /** May or may not be present. */
  value_other?: Maybe<Array<Maybe<OtherCurrency>>>;
};


/**
 * # Message type
 *
 * Message layout queries.  A message consists of its header followed by its
 * body or payload. The body is essentially arbitrary, to be interpreted by the
 * destination smart contract. It can be queried with the following fields:
 *
 * Complexity 3
 */
export type BlockchainMessageCreated_LtArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * # Message type
 *
 * Message layout queries.  A message consists of its header followed by its
 * body or payload. The body is essentially arbitrary, to be interpreted by the
 * destination smart contract. It can be queried with the following fields:
 *
 * Complexity 3
 */
export type BlockchainMessageFwd_FeeArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * # Message type
 *
 * Message layout queries.  A message consists of its header followed by its
 * body or payload. The body is essentially arbitrary, to be interpreted by the
 * destination smart contract. It can be queried with the following fields:
 *
 * Complexity 3
 */
export type BlockchainMessageIhr_FeeArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * # Message type
 *
 * Message layout queries.  A message consists of its header followed by its
 * body or payload. The body is essentially arbitrary, to be interpreted by the
 * destination smart contract. It can be queried with the following fields:
 *
 * Complexity 3
 */
export type BlockchainMessageImport_FeeArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * # Message type
 *
 * Message layout queries.  A message consists of its header followed by its
 * body or payload. The body is essentially arbitrary, to be interpreted by the
 * destination smart contract. It can be queried with the following fields:
 *
 * Complexity 3
 */
export type BlockchainMessageValueArgs = {
  format?: InputMaybe<BigIntFormat>;
};

/**
 *
 * Complexity 0
 */
export type BlockchainMessageEdge = {
  __typename?: 'BlockchainMessageEdge';
  /**
   *
   * Complexity 0
   */
  cursor: Scalars['String'];
  node: BlockchainMessage;
};

export enum BlockchainMessageTypeFilterEnum {
  /** External inbound */
  ExtIn = 'ExtIn',
  /** External outbound */
  ExtOut = 'ExtOut',
  /** Internal inbound */
  IntIn = 'IntIn',
  /** Internal outbound */
  IntOut = 'IntOut'
}

/**
 *
 * Complexity 0
 */
export type BlockchainMessagesConnection = {
  __typename?: 'BlockchainMessagesConnection';
  edges: Array<BlockchainMessageEdge>;
  pageInfo: PageInfo;
};

/**
 *
 * Complexity 0
 */
export type BlockchainQuery = {
  __typename?: 'BlockchainQuery';
  /** Account-related information */
  account?: Maybe<BlockchainAccountQuery>;
  block?: Maybe<BlockchainBlock>;
  block_by_seq_no?: Maybe<BlockchainBlock>;
  /** This node could be used for a cursor-based pagination of blocks. */
  blocks?: Maybe<BlockchainBlocksConnection>;
  /** This node could be used for a cursor-based pagination of key blocks. */
  key_blocks?: Maybe<BlockchainBlocksConnection>;
  /**
   * Returns masterchain seq_no range for the specified time range
   * to be used further in pagination functions.
   * If `time_start` and/or `time_end` is null, then the corresponding seq_no range border
   * is also null.
   */
  master_seq_no_range?: Maybe<BlockchainMasterSeqNoRange>;
  message?: Maybe<BlockchainMessage>;
  transaction?: Maybe<BlockchainTransaction>;
  /** This node could be used for a cursor-based pagination of transactions. */
  transactions?: Maybe<BlockchainTransactionsConnection>;
};


/**
 *
 * Complexity 0
 */
export type BlockchainQueryAccountArgs = {
  address: Scalars['String'];
};


/**
 *
 * Complexity 0
 */
export type BlockchainQueryBlockArgs = {
  hash: Scalars['String'];
};


/**
 *
 * Complexity 0
 */
export type BlockchainQueryBlock_By_Seq_NoArgs = {
  seq_no: Scalars['Float'];
  thread: Scalars['String'];
  workchain: Scalars['Int'];
};


/**
 *
 * Complexity 0
 */
export type BlockchainQueryBlocksArgs = {
  after?: InputMaybe<Scalars['String']>;
  allow_latest_inconsistent_data?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  master_seq_no_range?: InputMaybe<BlockchainMasterSeqNoFilter>;
  max_tr_count?: InputMaybe<Scalars['Int']>;
  min_tr_count?: InputMaybe<Scalars['Int']>;
  thread?: InputMaybe<Scalars['String']>;
  workchain?: InputMaybe<Scalars['Int']>;
};


/**
 *
 * Complexity 0
 */
export type BlockchainQueryKey_BlocksArgs = {
  after?: InputMaybe<Scalars['String']>;
  allow_latest_inconsistent_data?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  master_seq_no_range?: InputMaybe<BlockchainMasterSeqNoFilter>;
};


/**
 *
 * Complexity 0
 */
export type BlockchainQueryMaster_Seq_No_RangeArgs = {
  time_end?: InputMaybe<Scalars['Int']>;
  time_start?: InputMaybe<Scalars['Int']>;
};


/**
 *
 * Complexity 0
 */
export type BlockchainQueryMessageArgs = {
  hash: Scalars['String'];
};


/**
 *
 * Complexity 0
 */
export type BlockchainQueryTransactionArgs = {
  hash: Scalars['String'];
};


/**
 *
 * Complexity 0
 */
export type BlockchainQueryTransactionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  allow_latest_inconsistent_data?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  master_seq_no_range?: InputMaybe<BlockchainMasterSeqNoFilter>;
  max_balance_delta?: InputMaybe<Scalars['String']>;
  min_balance_delta?: InputMaybe<Scalars['String']>;
  workchain?: InputMaybe<Scalars['Int']>;
};

/**
 * Transaction
 *
 * Complexity 5
 */
export type BlockchainTransaction = Node & {
  __typename?: 'BlockchainTransaction';
  /**
   *
   * Complexity 0
   */
  aborted?: Maybe<Scalars['Boolean']>;
  account?: Maybe<BlockchainAccount>;
  /**
   *
   * Complexity 0
   */
  account_addr?: Maybe<Scalars['String']>;
  action?: Maybe<TransactionAction>;
  /**
   * Account balance change after transaction
   *
   * Complexity 0
   */
  balance_delta?: Maybe<Scalars['String']>;
  /** Account balance change after transaction */
  balance_delta_other?: Maybe<Array<Maybe<OtherCurrency>>>;
  /**
   *
   * Complexity 0
   */
  block_id?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 4
   */
  boc?: Maybe<Scalars['String']>;
  bounce?: Maybe<TransactionBounce>;
  /**
   * Collection-unique field for pagination and sorting. This field is designed to retain logical order.
   *
   * Complexity 0
   */
  chain_order?: Maybe<Scalars['String']>;
  compute?: Maybe<TransactionCompute>;
  credit?: Maybe<TransactionCredit>;
  /**
   *
   * Complexity 0
   */
  credit_first?: Maybe<Scalars['Boolean']>;
  /**
   *
   * Complexity 0
   */
  destroyed?: Maybe<Scalars['Boolean']>;
  /**
   * The end state of an account after a transaction, 1 is returned to indicate a finalized transaction at an active account
   * - 0 – uninit
   * - 1 – active
   * - 2 – frozen
   * - 3 – nonExist
   *
   * Complexity 0
   */
  end_status?: Maybe<Scalars['Int']>;
  end_status_name?: Maybe<AccountStatusEnum>;
  /**
   * Fee for inbound external message import.
   *
   * Complexity 0
   */
  ext_in_msg_fee?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  hash?: Maybe<Scalars['String']>;
  /**
   * BlockchainTransaction.id is "transaction/"-prefixed Transaction.id.
   * For id without prefix see "hash".
   *
   * Complexity 0
   */
  id: Scalars['ID'];
  in_message?: Maybe<BlockchainMessage>;
  /**
   *
   * Complexity 0
   */
  in_msg?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  installed?: Maybe<Scalars['Boolean']>;
  /**
   * Logical time. A component of the TON Blockchain that also plays an important role in message delivery is the logical time, usually denoted by Lt. It is a non-negative 64-bit integer, assigned to certain events. For more details, see [the TON blockchain specification](https://test.ton.org/tblkch.pdf).
   *
   * Complexity 0
   */
  lt?: Maybe<Scalars['String']>;
  /**
   * Merkle update field
   *
   * Complexity 0
   */
  new_hash?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  now?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  now_string?: Maybe<Scalars['String']>;
  /**
   * Merkle update field
   *
   * Complexity 0
   */
  old_hash?: Maybe<Scalars['String']>;
  /**
   * The initial state of account. Note that in this case the query may return 0, if the account was not active before the transaction and 1 if it was already active
   * - 0 – uninit
   * - 1 – active
   * - 2 – frozen
   * - 3 – nonExist
   *
   * Complexity 0
   */
  orig_status?: Maybe<Scalars['Int']>;
  orig_status_name?: Maybe<AccountStatusEnum>;
  out_messages?: Maybe<Array<Maybe<BlockchainMessage>>>;
  /**
   *
   * Complexity 0
   */
  out_msgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The number of generated outbound messages (one of the common transaction parameters defined by the specification)
   *
   * Complexity 0
   */
  outmsg_cnt?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  prepare_transaction?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  prev_trans_hash?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  prev_trans_lt?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  proof?: Maybe<Scalars['String']>;
  split_info?: Maybe<TransactionSplitInfo>;
  /**
   * Transaction processing status
   * - 0 – unknown
   * - 1 – preliminary
   * - 2 – proposed
   * - 3 – finalized
   * - 4 – refused
   *
   * Complexity 0
   */
  status?: Maybe<Scalars['Int']>;
  status_name?: Maybe<TransactionProcessingStatusEnum>;
  storage?: Maybe<TransactionStorage>;
  tokenTransfer?: Maybe<FungibleTokenTransfer>;
  /**
   * Total amount of fees collected by the validators.
   * Because fwd_fee is collected by the validators of the receiving shard,
   * total_fees value does not include Sum(out_msg.fwd_fee[]), but includes in_msg.fwd_fee.
   * The formula is:
   * total_fees = in_msg.value - balance_delta - Sum(out_msg.value[]) - Sum(out_msg.fwd_fee[])
   *
   * Complexity 0
   */
  total_fees?: Maybe<Scalars['String']>;
  /** Same as above, but reserved for non gram coins that may appear in the blockchain */
  total_fees_other?: Maybe<Array<Maybe<OtherCurrency>>>;
  /**
   * Transaction type according to the original blockchain specification, clause 4.2.4.
   * - 0 – ordinary
   * - 1 – storage
   * - 2 – tick
   * - 3 – tock
   * - 4 – splitPrepare
   * - 5 – splitInstall
   * - 6 – mergePrepare
   * - 7 – mergeInstall
   *
   * Complexity 0
   */
  tr_type?: Maybe<Scalars['Int']>;
  tr_type_name?: Maybe<TransactionTypeEnum>;
  /**
   *
   * Complexity 0
   */
  tt?: Maybe<Scalars['String']>;
  /**
   * Workchain id of the account address (account_addr field)
   *
   * Complexity 0
   */
  workchain_id?: Maybe<Scalars['Int']>;
};


/**
 * Transaction
 *
 * Complexity 5
 */
export type BlockchainTransactionBalance_DeltaArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * Transaction
 *
 * Complexity 5
 */
export type BlockchainTransactionExt_In_Msg_FeeArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * Transaction
 *
 * Complexity 5
 */
export type BlockchainTransactionLtArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * Transaction
 *
 * Complexity 5
 */
export type BlockchainTransactionPrev_Trans_LtArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * Transaction
 *
 * Complexity 5
 */
export type BlockchainTransactionTotal_FeesArgs = {
  format?: InputMaybe<BigIntFormat>;
};

/**
 *
 * Complexity 0
 */
export type BlockchainTransactionEdge = {
  __typename?: 'BlockchainTransactionEdge';
  /**
   *
   * Complexity 0
   */
  cursor: Scalars['String'];
  node: BlockchainTransaction;
};

/**
 *
 * Complexity 0
 */
export type BlockchainTransactionsConnection = {
  __typename?: 'BlockchainTransactionsConnection';
  edges: Array<BlockchainTransactionEdge>;
  pageInfo: PageInfo;
};

/**
 *
 * Complexity 100
 */
export type BlocksStatisticsQuery = {
  __typename?: 'BlocksStatisticsQuery';
  /**
   * Count of blocks created by current validator set
   *
   * Complexity 0
   */
  countByCurrentValidators?: Maybe<Scalars['Int']>;
  /**
   * Count of blocks with different versions by specified time period
   *
   * Complexity 0
   */
  countByVersion?: Maybe<Scalars['JSONObject']>;
  /**
   * Average blocks rate per second for last 2 minutes
   *
   * Complexity 0
   */
  ratePerSecond?: Maybe<Scalars['Float']>;
  /**
   * Count of all blocks
   *
   * Complexity 0
   */
  totalCount?: Maybe<Scalars['Int']>;
};


/**
 *
 * Complexity 100
 */
export type BlocksStatisticsQueryCountByVersionArgs = {
  period: CountByVersionPeriod;
};

export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ge?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  le?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export enum BounceTypeEnum {
  NegFunds = 'NegFunds',
  NoFunds = 'NoFunds',
  Ok = 'Ok'
}

export type BounceTypeEnumFilter = {
  eq?: InputMaybe<BounceTypeEnum>;
  ge?: InputMaybe<BounceTypeEnum>;
  gt?: InputMaybe<BounceTypeEnum>;
  in?: InputMaybe<Array<InputMaybe<BounceTypeEnum>>>;
  le?: InputMaybe<BounceTypeEnum>;
  lt?: InputMaybe<BounceTypeEnum>;
  ne?: InputMaybe<BounceTypeEnum>;
  notIn?: InputMaybe<Array<InputMaybe<BounceTypeEnum>>>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export enum CapabilitiesFlag {
  CapBounceMsgBody = 'CapBounceMsgBody',
  CapCopyleft = 'CapCopyleft',
  CapCreateStatsEnabled = 'CapCreateStatsEnabled',
  CapDElections = 'CapDElections',
  CapDiff = 'CapDiff',
  CapFastStorageStat = 'CapFastStorageStat',
  CapFastStorageStatBugfix = 'CapFastStorageStatBugfix',
  CapFixTupleIndexBug = 'CapFixTupleIndexBug',
  CapFullBodyInBounced = 'CapFullBodyInBounced',
  CapIhrEnabled = 'CapIhrEnabled',
  CapIndexAccounts = 'CapIndexAccounts',
  CapInitCodeHash = 'CapInitCodeHash',
  CapMbppEnabled = 'CapMbppEnabled',
  CapMyCode = 'CapMyCode',
  CapNone = 'CapNone',
  CapOffHypercube = 'CapOffHypercube',
  CapRemp = 'CapRemp',
  CapReportVersion = 'CapReportVersion',
  CapResolveMerkleCell = 'CapResolveMerkleCell',
  CapSetLibCode = 'CapSetLibCode',
  CapShortDequeue = 'CapShortDequeue',
  CapSignatureWithId = 'CapSignatureWithId',
  CapSplitMergeTransactions = 'CapSplitMergeTransactions',
  CapStcontNewFormat = 'CapStcontNewFormat',
  CapStorageFeeToTvm = 'CapStorageFeeToTvm',
  CapWorkchains = 'CapWorkchains',
  CapsTvmBugfixes2022 = 'CapsTvmBugfixes2022'
}

export enum ComputeTypeEnum {
  Skipped = 'Skipped',
  Vm = 'Vm'
}

export type ComputeTypeEnumFilter = {
  eq?: InputMaybe<ComputeTypeEnum>;
  ge?: InputMaybe<ComputeTypeEnum>;
  gt?: InputMaybe<ComputeTypeEnum>;
  in?: InputMaybe<Array<InputMaybe<ComputeTypeEnum>>>;
  le?: InputMaybe<ComputeTypeEnum>;
  lt?: InputMaybe<ComputeTypeEnum>;
  ne?: InputMaybe<ComputeTypeEnum>;
  notIn?: InputMaybe<Array<InputMaybe<ComputeTypeEnum>>>;
};

/**
 *
 * Complexity 0
 */
export type Config = {
  __typename?: 'Config';
  /**
   * Address of config smart contract in the masterchain
   *
   * Complexity 0
   */
  p0?: Maybe<Scalars['String']>;
  /**
   * Address of elector smart contract in the masterchain
   *
   * Complexity 0
   */
  p1?: Maybe<Scalars['String']>;
  /**
   * Address of minter smart contract in the masterchain
   *
   * Complexity 0
   */
  p2?: Maybe<Scalars['String']>;
  /**
   * Address of fee collector smart contract in the masterchain
   *
   * Complexity 0
   */
  p3?: Maybe<Scalars['String']>;
  /**
   * Address of TON DNS root smart contract in the masterchain
   *
   * Complexity 0
   */
  p4?: Maybe<Scalars['String']>;
  /** Configuration parameter 6 */
  p6?: Maybe<ConfigP6>;
  /** Configuration parameter 7 */
  p7?: Maybe<Array<Maybe<ConfigP7>>>;
  /** Global version */
  p8?: Maybe<ConfigP8>;
  /**
   * Mandatory params
   *
   * Complexity 0
   */
  p9?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /**
   * Critical params
   *
   * Complexity 0
   */
  p10?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** Config voting setup */
  p11?: Maybe<ConfigP11>;
  /** Array of all workchains descriptions */
  p12?: Maybe<Array<Maybe<ConfigP12>>>;
  /** Block create fees */
  p14?: Maybe<ConfigP14>;
  /** Election parameters */
  p15?: Maybe<ConfigP15>;
  /** Validators count */
  p16?: Maybe<ConfigP16>;
  /** Validator stake parameters */
  p17?: Maybe<ConfigP17>;
  /** Storage prices */
  p18?: Maybe<Array<Maybe<ConfigP18>>>;
  /** Gas limits and prices in the masterchain */
  p20?: Maybe<GasLimitsPrices>;
  /** Gas limits and prices in workchains */
  p21?: Maybe<GasLimitsPrices>;
  /** Block limits in the masterchain */
  p22?: Maybe<BlockLimits>;
  /** Block limits in workchains */
  p23?: Maybe<BlockLimits>;
  /** Message forward prices in the masterchain */
  p24?: Maybe<MsgForwardPrices>;
  /** Message forward prices in workchains */
  p25?: Maybe<MsgForwardPrices>;
  /** Catchain config */
  p28?: Maybe<ConfigP28>;
  /** Consensus config */
  p29?: Maybe<ConfigP29>;
  p30?: Maybe<ConfigP30>;
  /**
   * Array of fundamental smart contracts addresses
   *
   * Complexity 0
   */
  p31?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Previous validators set */
  p32?: Maybe<ValidatorSet>;
  /** Previous temporary validators set */
  p33?: Maybe<ValidatorSet>;
  /** Current validators set */
  p34?: Maybe<ValidatorSet>;
  /** Current temporary validators set */
  p35?: Maybe<ValidatorSet>;
  /** Next validators set */
  p36?: Maybe<ValidatorSet>;
  /** Next temporary validators set */
  p37?: Maybe<ValidatorSet>;
  /** Array of validator signed temporary keys */
  p39?: Maybe<Array<Maybe<ConfigP39>>>;
  p40?: Maybe<ConfigP40>;
  p42?: Maybe<ConfigP42>;
};

export type ConfigFilter = {
  OR?: InputMaybe<ConfigFilter>;
  /** Address of config smart contract in the masterchain */
  p0?: InputMaybe<StringFilter>;
  /** Address of elector smart contract in the masterchain */
  p1?: InputMaybe<StringFilter>;
  /** Address of minter smart contract in the masterchain */
  p2?: InputMaybe<StringFilter>;
  /** Address of fee collector smart contract in the masterchain */
  p3?: InputMaybe<StringFilter>;
  /** Address of TON DNS root smart contract in the masterchain */
  p4?: InputMaybe<StringFilter>;
  /** Configuration parameter 6 */
  p6?: InputMaybe<ConfigP6Filter>;
  /** Configuration parameter 7 */
  p7?: InputMaybe<ConfigP7ArrayFilter>;
  /** Global version */
  p8?: InputMaybe<ConfigP8Filter>;
  /** Mandatory params */
  p9?: InputMaybe<FloatArrayFilter>;
  /** Critical params */
  p10?: InputMaybe<FloatArrayFilter>;
  /** Config voting setup */
  p11?: InputMaybe<ConfigP11Filter>;
  /** Array of all workchains descriptions */
  p12?: InputMaybe<ConfigP12ArrayFilter>;
  /** Block create fees */
  p14?: InputMaybe<ConfigP14Filter>;
  /** Election parameters */
  p15?: InputMaybe<ConfigP15Filter>;
  /** Validators count */
  p16?: InputMaybe<ConfigP16Filter>;
  /** Validator stake parameters */
  p17?: InputMaybe<ConfigP17Filter>;
  /** Storage prices */
  p18?: InputMaybe<ConfigP18ArrayFilter>;
  /** Gas limits and prices in the masterchain */
  p20?: InputMaybe<GasLimitsPricesFilter>;
  /** Gas limits and prices in workchains */
  p21?: InputMaybe<GasLimitsPricesFilter>;
  /** Block limits in the masterchain */
  p22?: InputMaybe<BlockLimitsFilter>;
  /** Block limits in workchains */
  p23?: InputMaybe<BlockLimitsFilter>;
  /** Message forward prices in the masterchain */
  p24?: InputMaybe<MsgForwardPricesFilter>;
  /** Message forward prices in workchains */
  p25?: InputMaybe<MsgForwardPricesFilter>;
  /** Catchain config */
  p28?: InputMaybe<ConfigP28Filter>;
  /** Consensus config */
  p29?: InputMaybe<ConfigP29Filter>;
  p30?: InputMaybe<ConfigP30Filter>;
  /** Array of fundamental smart contracts addresses */
  p31?: InputMaybe<StringArrayFilter>;
  /** Previous validators set */
  p32?: InputMaybe<ValidatorSetFilter>;
  /** Previous temporary validators set */
  p33?: InputMaybe<ValidatorSetFilter>;
  /** Current validators set */
  p34?: InputMaybe<ValidatorSetFilter>;
  /** Current temporary validators set */
  p35?: InputMaybe<ValidatorSetFilter>;
  /** Next validators set */
  p36?: InputMaybe<ValidatorSetFilter>;
  /** Next temporary validators set */
  p37?: InputMaybe<ValidatorSetFilter>;
  /** Array of validator signed temporary keys */
  p39?: InputMaybe<ConfigP39ArrayFilter>;
  p40?: InputMaybe<ConfigP40Filter>;
  p42?: InputMaybe<ConfigP42Filter>;
};

/**
 * Configuration parameter 6
 *
 * Complexity 0
 */
export type ConfigP6 = {
  __typename?: 'ConfigP6';
  /**
   *
   * Complexity 0
   */
  mint_add_price?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  mint_new_price?: Maybe<Scalars['String']>;
};

/** Configuration parameter 6 */
export type ConfigP6Filter = {
  OR?: InputMaybe<ConfigP6Filter>;
  mint_add_price?: InputMaybe<StringFilter>;
  mint_new_price?: InputMaybe<StringFilter>;
};

/**
 *
 * Complexity 0
 */
export type ConfigP7 = {
  __typename?: 'ConfigP7';
  /**
   *
   * Complexity 0
   */
  currency?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  value?: Maybe<Scalars['String']>;
};

export type ConfigP7ArrayFilter = {
  all?: InputMaybe<ConfigP7Filter>;
  any?: InputMaybe<ConfigP7Filter>;
};

export type ConfigP7Filter = {
  OR?: InputMaybe<ConfigP7Filter>;
  currency?: InputMaybe<FloatFilter>;
  value?: InputMaybe<StringFilter>;
};

/**
 * Global version
 *
 * Complexity 0
 */
export type ConfigP8 = {
  __typename?: 'ConfigP8';
  /**
   * - 0x0 – CapNone
   * - 0x1 – CapIhrEnabled
   * - 0x2 – CapCreateStatsEnabled
   * - 0x4 – CapBounceMsgBody
   * - 0x8 – CapReportVersion
   * - 0x10 – CapSplitMergeTransactions
   * - 0x20 – CapShortDequeue
   * - 0x40 – CapMbppEnabled
   * - 0x80 – CapFastStorageStat
   * - 0x100 – CapInitCodeHash
   * - 0x200 – CapOffHypercube
   * - 0x400 – CapMyCode
   * - 0x800 – CapSetLibCode
   * - 0x1000 – CapFixTupleIndexBug
   * - 0x2000 – CapRemp
   * - 0x4000 – CapDElections
   * - 0x10000 – CapFullBodyInBounced
   * - 0x20000 – CapStorageFeeToTvm
   * - 0x40000 – CapCopyleft
   * - 0x80000 – CapIndexAccounts
   * - 0x100000 – CapDiff
   * - 0x200000 – CapsTvmBugfixes2022
   * - 0x400000 – CapWorkchains
   * - 0x800000 – CapStcontNewFormat
   * - 0x1000000 – CapFastStorageStatBugfix
   * - 0x2000000 – CapResolveMerkleCell
   * - 0x4000000 – CapSignatureWithId
   *
   * Complexity 0
   */
  capabilities?: Maybe<Scalars['String']>;
  capabilities_flags?: Maybe<Array<Maybe<CapabilitiesFlag>>>;
  /**
   *
   * Complexity 0
   */
  version?: Maybe<Scalars['Float']>;
};


/**
 * Global version
 *
 * Complexity 0
 */
export type ConfigP8CapabilitiesArgs = {
  format?: InputMaybe<BigIntFormat>;
};

/** Global version */
export type ConfigP8Filter = {
  OR?: InputMaybe<ConfigP8Filter>;
  /**
   * - 0x0 – CapNone
   * - 0x1 – CapIhrEnabled
   * - 0x2 – CapCreateStatsEnabled
   * - 0x4 – CapBounceMsgBody
   * - 0x8 – CapReportVersion
   * - 0x10 – CapSplitMergeTransactions
   * - 0x20 – CapShortDequeue
   * - 0x40 – CapMbppEnabled
   * - 0x80 – CapFastStorageStat
   * - 0x100 – CapInitCodeHash
   * - 0x200 – CapOffHypercube
   * - 0x400 – CapMyCode
   * - 0x800 – CapSetLibCode
   * - 0x1000 – CapFixTupleIndexBug
   * - 0x2000 – CapRemp
   * - 0x4000 – CapDElections
   * - 0x10000 – CapFullBodyInBounced
   * - 0x20000 – CapStorageFeeToTvm
   * - 0x40000 – CapCopyleft
   * - 0x80000 – CapIndexAccounts
   * - 0x100000 – CapDiff
   * - 0x200000 – CapsTvmBugfixes2022
   * - 0x400000 – CapWorkchains
   * - 0x800000 – CapStcontNewFormat
   * - 0x1000000 – CapFastStorageStatBugfix
   * - 0x2000000 – CapResolveMerkleCell
   * - 0x4000000 – CapSignatureWithId
   */
  capabilities?: InputMaybe<StringFilter>;
  version?: InputMaybe<FloatFilter>;
};

/**
 * Config voting setup
 *
 * Complexity 0
 */
export type ConfigP11 = {
  __typename?: 'ConfigP11';
  critical_params?: Maybe<ConfigProposalSetup>;
  normal_params?: Maybe<ConfigProposalSetup>;
};

/** Config voting setup */
export type ConfigP11Filter = {
  OR?: InputMaybe<ConfigP11Filter>;
  critical_params?: InputMaybe<ConfigProposalSetupFilter>;
  normal_params?: InputMaybe<ConfigProposalSetupFilter>;
};

/**
 *
 * Complexity 0
 */
export type ConfigP12 = {
  __typename?: 'ConfigP12';
  /**
   *
   * Complexity 0
   */
  accept_msgs?: Maybe<Scalars['Boolean']>;
  /**
   *
   * Complexity 0
   */
  active?: Maybe<Scalars['Boolean']>;
  /**
   *
   * Complexity 0
   */
  actual_min_split?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  addr_len_step?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  basic?: Maybe<Scalars['Boolean']>;
  /**
   *
   * Complexity 0
   */
  enabled_since?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  flags?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  max_addr_len?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  max_split?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  min_addr_len?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  min_split?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  version?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  vm_mode?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  vm_version?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  workchain_id?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  workchain_type_id?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  zerostate_file_hash?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  zerostate_root_hash?: Maybe<Scalars['String']>;
};

export type ConfigP12ArrayFilter = {
  all?: InputMaybe<ConfigP12Filter>;
  any?: InputMaybe<ConfigP12Filter>;
};

export type ConfigP12Filter = {
  OR?: InputMaybe<ConfigP12Filter>;
  accept_msgs?: InputMaybe<BooleanFilter>;
  active?: InputMaybe<BooleanFilter>;
  actual_min_split?: InputMaybe<IntFilter>;
  addr_len_step?: InputMaybe<IntFilter>;
  basic?: InputMaybe<BooleanFilter>;
  enabled_since?: InputMaybe<FloatFilter>;
  flags?: InputMaybe<IntFilter>;
  max_addr_len?: InputMaybe<IntFilter>;
  max_split?: InputMaybe<IntFilter>;
  min_addr_len?: InputMaybe<IntFilter>;
  min_split?: InputMaybe<IntFilter>;
  version?: InputMaybe<FloatFilter>;
  vm_mode?: InputMaybe<StringFilter>;
  vm_version?: InputMaybe<IntFilter>;
  workchain_id?: InputMaybe<IntFilter>;
  workchain_type_id?: InputMaybe<FloatFilter>;
  zerostate_file_hash?: InputMaybe<StringFilter>;
  zerostate_root_hash?: InputMaybe<StringFilter>;
};

/**
 * Block create fees
 *
 * Complexity 0
 */
export type ConfigP14 = {
  __typename?: 'ConfigP14';
  /**
   *
   * Complexity 0
   */
  basechain_block_fee?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  masterchain_block_fee?: Maybe<Scalars['String']>;
};


/**
 * Block create fees
 *
 * Complexity 0
 */
export type ConfigP14Basechain_Block_FeeArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * Block create fees
 *
 * Complexity 0
 */
export type ConfigP14Masterchain_Block_FeeArgs = {
  format?: InputMaybe<BigIntFormat>;
};

/** Block create fees */
export type ConfigP14Filter = {
  OR?: InputMaybe<ConfigP14Filter>;
  basechain_block_fee?: InputMaybe<StringFilter>;
  masterchain_block_fee?: InputMaybe<StringFilter>;
};

/**
 * Election parameters
 *
 * Complexity 0
 */
export type ConfigP15 = {
  __typename?: 'ConfigP15';
  /**
   *
   * Complexity 0
   */
  elections_end_before?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  elections_start_before?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  stake_held_for?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  validators_elected_for?: Maybe<Scalars['Float']>;
};

/** Election parameters */
export type ConfigP15Filter = {
  OR?: InputMaybe<ConfigP15Filter>;
  elections_end_before?: InputMaybe<FloatFilter>;
  elections_start_before?: InputMaybe<FloatFilter>;
  stake_held_for?: InputMaybe<FloatFilter>;
  validators_elected_for?: InputMaybe<FloatFilter>;
};

/**
 * Validators count
 *
 * Complexity 0
 */
export type ConfigP16 = {
  __typename?: 'ConfigP16';
  /**
   *
   * Complexity 0
   */
  max_main_validators?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  max_validators?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  min_validators?: Maybe<Scalars['Int']>;
};

/** Validators count */
export type ConfigP16Filter = {
  OR?: InputMaybe<ConfigP16Filter>;
  max_main_validators?: InputMaybe<IntFilter>;
  max_validators?: InputMaybe<IntFilter>;
  min_validators?: InputMaybe<IntFilter>;
};

/**
 * Validator stake parameters
 *
 * Complexity 0
 */
export type ConfigP17 = {
  __typename?: 'ConfigP17';
  /**
   *
   * Complexity 0
   */
  max_stake?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  max_stake_factor?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  min_stake?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  min_total_stake?: Maybe<Scalars['String']>;
};


/**
 * Validator stake parameters
 *
 * Complexity 0
 */
export type ConfigP17Max_StakeArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * Validator stake parameters
 *
 * Complexity 0
 */
export type ConfigP17Min_StakeArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * Validator stake parameters
 *
 * Complexity 0
 */
export type ConfigP17Min_Total_StakeArgs = {
  format?: InputMaybe<BigIntFormat>;
};

/** Validator stake parameters */
export type ConfigP17Filter = {
  OR?: InputMaybe<ConfigP17Filter>;
  max_stake?: InputMaybe<StringFilter>;
  max_stake_factor?: InputMaybe<FloatFilter>;
  min_stake?: InputMaybe<StringFilter>;
  min_total_stake?: InputMaybe<StringFilter>;
};

/**
 *
 * Complexity 0
 */
export type ConfigP18 = {
  __typename?: 'ConfigP18';
  /**
   *
   * Complexity 0
   */
  bit_price_ps?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  cell_price_ps?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  mc_bit_price_ps?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  mc_cell_price_ps?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  utime_since?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  utime_since_string?: Maybe<Scalars['String']>;
};


/**
 *
 * Complexity 0
 */
export type ConfigP18Bit_Price_PsArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type ConfigP18Cell_Price_PsArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type ConfigP18Mc_Bit_Price_PsArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type ConfigP18Mc_Cell_Price_PsArgs = {
  format?: InputMaybe<BigIntFormat>;
};

export type ConfigP18ArrayFilter = {
  all?: InputMaybe<ConfigP18Filter>;
  any?: InputMaybe<ConfigP18Filter>;
};

export type ConfigP18Filter = {
  OR?: InputMaybe<ConfigP18Filter>;
  bit_price_ps?: InputMaybe<StringFilter>;
  cell_price_ps?: InputMaybe<StringFilter>;
  mc_bit_price_ps?: InputMaybe<StringFilter>;
  mc_cell_price_ps?: InputMaybe<StringFilter>;
  utime_since?: InputMaybe<FloatFilter>;
};

/**
 * Catchain config
 *
 * Complexity 0
 */
export type ConfigP28 = {
  __typename?: 'ConfigP28';
  /**
   *
   * Complexity 0
   */
  mc_catchain_lifetime?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  shard_catchain_lifetime?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  shard_validators_lifetime?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  shard_validators_num?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  shuffle_mc_validators?: Maybe<Scalars['Boolean']>;
};

/** Catchain config */
export type ConfigP28Filter = {
  OR?: InputMaybe<ConfigP28Filter>;
  mc_catchain_lifetime?: InputMaybe<FloatFilter>;
  shard_catchain_lifetime?: InputMaybe<FloatFilter>;
  shard_validators_lifetime?: InputMaybe<FloatFilter>;
  shard_validators_num?: InputMaybe<FloatFilter>;
  shuffle_mc_validators?: InputMaybe<BooleanFilter>;
};

/**
 * Consensus config
 *
 * Complexity 0
 */
export type ConfigP29 = {
  __typename?: 'ConfigP29';
  /**
   *
   * Complexity 0
   */
  attempt_duration?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  catchain_max_deps?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  consensus_timeout_ms?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  fast_attempts?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  max_block_bytes?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  max_collated_bytes?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  new_catchain_ids?: Maybe<Scalars['Boolean']>;
  /**
   *
   * Complexity 0
   */
  next_candidate_delay_ms?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  round_candidates?: Maybe<Scalars['Float']>;
};

/** Consensus config */
export type ConfigP29Filter = {
  OR?: InputMaybe<ConfigP29Filter>;
  attempt_duration?: InputMaybe<FloatFilter>;
  catchain_max_deps?: InputMaybe<FloatFilter>;
  consensus_timeout_ms?: InputMaybe<FloatFilter>;
  fast_attempts?: InputMaybe<FloatFilter>;
  max_block_bytes?: InputMaybe<FloatFilter>;
  max_collated_bytes?: InputMaybe<FloatFilter>;
  new_catchain_ids?: InputMaybe<BooleanFilter>;
  next_candidate_delay_ms?: InputMaybe<FloatFilter>;
  round_candidates?: InputMaybe<FloatFilter>;
};

/**
 *
 * Complexity 0
 */
export type ConfigP30 = {
  __typename?: 'ConfigP30';
  /**
   *
   * Complexity 0
   */
  delections_step?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  staker_init_code_hash?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  validator_init_code_hash?: Maybe<Scalars['String']>;
};

export type ConfigP30Filter = {
  OR?: InputMaybe<ConfigP30Filter>;
  delections_step?: InputMaybe<FloatFilter>;
  staker_init_code_hash?: InputMaybe<StringFilter>;
  validator_init_code_hash?: InputMaybe<StringFilter>;
};

/**
 *
 * Complexity 0
 */
export type ConfigP39 = {
  __typename?: 'ConfigP39';
  /**
   *
   * Complexity 0
   */
  adnl_addr?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  map_key?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  seqno?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  signature_r?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  signature_s?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  temp_public_key?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  valid_until?: Maybe<Scalars['Float']>;
};

export type ConfigP39ArrayFilter = {
  all?: InputMaybe<ConfigP39Filter>;
  any?: InputMaybe<ConfigP39Filter>;
};

export type ConfigP39Filter = {
  OR?: InputMaybe<ConfigP39Filter>;
  adnl_addr?: InputMaybe<StringFilter>;
  map_key?: InputMaybe<StringFilter>;
  seqno?: InputMaybe<FloatFilter>;
  signature_r?: InputMaybe<StringFilter>;
  signature_s?: InputMaybe<StringFilter>;
  temp_public_key?: InputMaybe<StringFilter>;
  valid_until?: InputMaybe<FloatFilter>;
};

/**
 *
 * Complexity 0
 */
export type ConfigP40 = {
  __typename?: 'ConfigP40';
  /**
   *
   * Complexity 0
   */
  collations_score_weight?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  min_samples_count?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  min_slashing_protection_score?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  resend_mc_blocks_count?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  signing_score_weight?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  slashing_period_mc_blocks_count?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  z_param_denominator?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  z_param_numerator?: Maybe<Scalars['Float']>;
};

export type ConfigP40Filter = {
  OR?: InputMaybe<ConfigP40Filter>;
  collations_score_weight?: InputMaybe<FloatFilter>;
  min_samples_count?: InputMaybe<FloatFilter>;
  min_slashing_protection_score?: InputMaybe<FloatFilter>;
  resend_mc_blocks_count?: InputMaybe<FloatFilter>;
  signing_score_weight?: InputMaybe<FloatFilter>;
  slashing_period_mc_blocks_count?: InputMaybe<FloatFilter>;
  z_param_denominator?: InputMaybe<FloatFilter>;
  z_param_numerator?: InputMaybe<FloatFilter>;
};

/**
 *
 * Complexity 0
 */
export type ConfigP42 = {
  __typename?: 'ConfigP42';
  payouts?: Maybe<Array<Maybe<ConfigP42Payouts>>>;
  /**
   *
   * Complexity 0
   */
  threshold?: Maybe<Scalars['String']>;
};


/**
 *
 * Complexity 0
 */
export type ConfigP42ThresholdArgs = {
  format?: InputMaybe<BigIntFormat>;
};

export type ConfigP42Filter = {
  OR?: InputMaybe<ConfigP42Filter>;
  payouts?: InputMaybe<ConfigP42PayoutsArrayFilter>;
  threshold?: InputMaybe<StringFilter>;
};

/**
 *
 * Complexity 0
 */
export type ConfigP42Payouts = {
  __typename?: 'ConfigP42Payouts';
  /**
   *
   * Complexity 0
   */
  license_type?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  payout_percent?: Maybe<Scalars['Int']>;
};

export type ConfigP42PayoutsArrayFilter = {
  all?: InputMaybe<ConfigP42PayoutsFilter>;
  any?: InputMaybe<ConfigP42PayoutsFilter>;
};

export type ConfigP42PayoutsFilter = {
  OR?: InputMaybe<ConfigP42PayoutsFilter>;
  license_type?: InputMaybe<IntFilter>;
  payout_percent?: InputMaybe<IntFilter>;
};

/**
 *
 * Complexity 0
 */
export type ConfigProposalSetup = {
  __typename?: 'ConfigProposalSetup';
  /**
   *
   * Complexity 0
   */
  bit_price?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  cell_price?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  max_losses?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  max_store_sec?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  max_tot_rounds?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  min_store_sec?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  min_tot_rounds?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  min_wins?: Maybe<Scalars['Int']>;
};

export type ConfigProposalSetupFilter = {
  OR?: InputMaybe<ConfigProposalSetupFilter>;
  bit_price?: InputMaybe<FloatFilter>;
  cell_price?: InputMaybe<FloatFilter>;
  max_losses?: InputMaybe<IntFilter>;
  max_store_sec?: InputMaybe<FloatFilter>;
  max_tot_rounds?: InputMaybe<IntFilter>;
  min_store_sec?: InputMaybe<FloatFilter>;
  min_tot_rounds?: InputMaybe<IntFilter>;
  min_wins?: InputMaybe<IntFilter>;
};

/**
 *
 * Complexity 0
 */
export type Cost = {
  __typename?: 'Cost';
  /**
   *
   * Complexity 0
   */
  complexity?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  explain?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum CountByVersionPeriod {
  Day = 'DAY',
  Hour = 'HOUR'
}

/**
 * Counterparty
 *
 * Complexity 20
 */
export type Counterparty = {
  __typename?: 'Counterparty';
  /**
   *
   * Complexity 0
   */
  account?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  counterparty?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  last_message_at?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  last_message_id?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  last_message_is_reverse?: Maybe<Scalars['Boolean']>;
  /**
   *
   * Complexity 0
   */
  last_message_value?: Maybe<Scalars['String']>;
};


/**
 * Counterparty
 *
 * Complexity 20
 */
export type CounterpartyLast_Message_ValueArgs = {
  format?: InputMaybe<BigIntFormat>;
};

export type CounterpartyFilter = {
  account?: InputMaybe<StringFilter>;
  counterparty?: InputMaybe<StringFilter>;
  last_message_at?: InputMaybe<FloatFilter>;
  last_message_id?: InputMaybe<StringFilter>;
  last_message_is_reverse?: InputMaybe<BooleanFilter>;
  last_message_value?: InputMaybe<StringFilter>;
};

/**
 *
 * Complexity 100
 */
export type DepoolsStatisticsQuery = {
  __typename?: 'DepoolsStatisticsQuery';
  /**
   * Count of depools with stake > 0
   *
   * Complexity 0
   */
  activeDepoolCount?: Maybe<Scalars['Int']>;
  /**
   * Count of participants in all active depools
   *
   * Complexity 0
   */
  activeParticipantsCount?: Maybe<Scalars['Int']>;
  /**
   * Sum of rewards for active depools participants
   *
   * Complexity 0
   */
  totalRewards?: Maybe<Scalars['String']>;
  /**
   * Sum of stakes in all active depools
   *
   * Complexity 0
   */
  totalStaked?: Maybe<Scalars['String']>;
};

/**
 *
 * Complexity 10
 */
export type EverMarketCap = {
  __typename?: 'EverMarketCap';
  /**
   *
   * Complexity 0
   */
  usd: Scalars['Float'];
};

/**
 *
 * Complexity 10
 */
export type EverPrice = {
  __typename?: 'EverPrice';
  /**
   *
   * Complexity 0
   */
  usd: Scalars['Float'];
};

/**
 *
 * Complexity 10
 */
export type EverVolume = {
  __typename?: 'EverVolume';
  /**
   *
   * Complexity 0
   */
  usd: Scalars['Float'];
};

/**
 *
 * Complexity 0
 */
export type ExtBlkRef = {
  __typename?: 'ExtBlkRef';
  /**
   *
   * Complexity 0
   */
  end_lt?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  file_hash?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  root_hash?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  seq_no?: Maybe<Scalars['Float']>;
};


/**
 *
 * Complexity 0
 */
export type ExtBlkRefEnd_LtArgs = {
  format?: InputMaybe<BigIntFormat>;
};

export type ExtBlkRefFilter = {
  OR?: InputMaybe<ExtBlkRefFilter>;
  end_lt?: InputMaybe<StringFilter>;
  file_hash?: InputMaybe<StringFilter>;
  root_hash?: InputMaybe<StringFilter>;
  seq_no?: InputMaybe<FloatFilter>;
};

/** Specify field and aggregation function used to collect aggregated value */
export type FieldAggregation = {
  /** Dot separated path to field. Can be omitted for COUNT fn. */
  field?: InputMaybe<Scalars['String']>;
  /** Aggregation function. Default value is COUNT. */
  fn?: InputMaybe<AggregationFn>;
};

/**
 *
 * Complexity 0
 */
export type FlexExchangeConfig = {
  __typename?: 'FlexExchangeConfig';
  /** Fees configuration */
  fees?: Maybe<FlexFeesConfig>;
  /**
   * Version of exchange contracts (flex, pair, price)
   *
   * Complexity 0
   */
  version?: Maybe<Scalars['Int']>;
};

/**
 *
 * Complexity 0
 */
export type FlexFeesConfig = {
  __typename?: 'FlexFeesConfig';
  /**
   * Amount of EVERs transferred to the recipient tip3 wallet during all token transfers.
   * Needed to support wallet auto-deploy, so that the deployed wallet has enough funds
   * to process. Auto-deploy happens when tokens are transferred to a not existing wallet.
   *
   * Complexity 0
   */
  destWalletKeepEvers?: Maybe<Scalars['String']>;
  /**
   * To send answer message from PriceXchg
   *
   * Complexity 0
   */
  orderAnswer?: Maybe<Scalars['String']>;
  /**
   * To process processQueue function.
   * Also is used for buyTip3 / onTip3LendOwnership / cancelSell / cancelBuy estimations.
   *
   * Complexity 0
   */
  processQueue?: Maybe<Scalars['String']>;
  /**
   * To return tip3 ownership
   *
   * Complexity 0
   */
  returnOwnership?: Maybe<Scalars['String']>;
  /**
   * To send notification about completed deals (IFlexNotify)
   *
   * Complexity 0
   */
  sendNotify?: Maybe<Scalars['String']>;
  /**
   * For executing tip3 transfer
   *
   * Complexity 0
   */
  transferTip3?: Maybe<Scalars['String']>;
};

/**
 *
 * Complexity 0
 */
export type FlexGlobalConfig = {
  __typename?: 'FlexGlobalConfig';
  /**
   * Global config address
   *
   * Complexity 0
   */
  address?: Maybe<Scalars['String']>;
  /** Exchange Group version info */
  exchange?: Maybe<FlexExchangeConfig>;
  /** User config */
  user?: Maybe<FlexUserConfig>;
  /** Wallet, Exchange and User versions structure */
  version?: Maybe<FlexGlobalConfigVersion>;
  /** Wrapper config */
  wrapper?: Maybe<FlexWrapperConfig>;
};

/**
 *
 * Complexity 0
 */
export type FlexGlobalConfigVersion = {
  __typename?: 'FlexGlobalConfigVersion';
  /**
   * Version of exchange contracts (flex, pair, price)
   *
   * Complexity 0
   */
  exchange?: Maybe<Scalars['Int']>;
  /**
   * Version of user contracts and debots (FlexClient, etc)
   *
   * Complexity 0
   */
  user?: Maybe<Scalars['Int']>;
  /**
   * Version of token wrappers and wallets contracts
   *
   * Complexity 0
   */
  wallet?: Maybe<Scalars['Int']>;
};

/**
 *
 * Complexity 10
 */
export type FlexMarketQuery = {
  __typename?: 'FlexMarketQuery';
  /** Market price history for the last 24 hours */
  last24H: FlexPriceSummary;
  /** Order book. */
  orderBook: FlexOrderBook;
  /** Tokens pair */
  pair?: Maybe<FlexPair>;
  /**
   * Market price
   *
   * Complexity 0
   */
  price?: Maybe<Scalars['String']>;
  /** Price history. */
  priceHistory: FlexPriceHistory;
  /**
   * Price history resolutions.
   * Each resolution represented in seconds.
   *
   * Complexity 0
   */
  priceHistoryResolutions: Array<Scalars['Int']>;
  /** Recent trades */
  recentTrades: Array<FlexTrade>;
};


/**
 *
 * Complexity 10
 */
export type FlexMarketQueryOrderBookArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


/**
 *
 * Complexity 10
 */
export type FlexMarketQueryPriceHistoryArgs = {
  countBack?: InputMaybe<Scalars['Int']>;
  endTime?: InputMaybe<Scalars['Int']>;
  resolution?: InputMaybe<Scalars['Int']>;
  startTime?: InputMaybe<Scalars['Int']>;
};


/**
 *
 * Complexity 10
 */
export type FlexMarketQueryRecentTradesArgs = {
  after?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};

/**
 *
 * Complexity 10
 */
export type FlexOrderBook = {
  __typename?: 'FlexOrderBook';
  /** Sells */
  asks: Array<FlexOrderBookItem>;
  /** Buys */
  bids: Array<FlexOrderBookItem>;
};

/**
 * Market price summary for time range
 *
 * Complexity 0
 */
export type FlexOrderBookItem = {
  __typename?: 'FlexOrderBookItem';
  /**
   *
   * Complexity 0
   */
  amount?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  amountUnits?: Maybe<Scalars['String']>;
  /**
   * Major token price
   *
   * Complexity 0
   */
  price?: Maybe<Scalars['String']>;
  /**
   * Token price numerator
   *
   * Complexity 0
   */
  priceNum?: Maybe<Scalars['String']>;
  /**
   * Token price denominator
   *
   * Complexity 0
   */
  priceScale?: Maybe<Scalars['String']>;
  /**
   * Unit price denominator
   *
   * Complexity 0
   */
  priceScaleUnits?: Maybe<Scalars['String']>;
};

/**
 *
 * Complexity 10
 */
export type FlexPair = {
  __typename?: 'FlexPair';
  /**
   * Flex Pair account address
   *
   * Complexity 0
   */
  address?: Maybe<Scalars['String']>;
  /** Major token */
  major?: Maybe<FlexToken>;
  /**
   * Minimum amount of major token required for an order creation
   * in token units.
   *
   * Complexity 0
   */
  minAmount?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  minAmountUnits?: Maybe<Scalars['String']>;
  /**
   * Price tick size numerator
   *
   * Complexity 0
   */
  minMove?: Maybe<Scalars['String']>;
  /** Minor token */
  minor?: Maybe<FlexToken>;
  /**
   * Notification contract address
   *
   * Complexity 0
   */
  notifyAddress?: Maybe<Scalars['String']>;
  /**
   * Price contracts code BOC encoded with base64
   *
   * Complexity 0
   */
  priceCode?: Maybe<Scalars['String']>;
  /**
   * Code hash of price contracts for the pair
   *
   * Complexity 0
   */
  priceCodeHash?: Maybe<Scalars['String']>;
  /**
   * Token price denominator
   *
   * Complexity 0
   */
  priceScale?: Maybe<Scalars['String']>;
  /**
   * Unit price denominator
   *
   * Complexity 0
   */
  priceScaleUnits?: Maybe<Scalars['String']>;
  /**
   * Abbreviation used to identify pair.
   * Derived from major and minor root tickers, i.e. 'EVER/SOL'
   *
   * Complexity 0
   */
  ticker?: Maybe<Scalars['String']>;
};

/**
 *
 * Complexity 200
 */
export type FlexPriceHistory = {
  __typename?: 'FlexPriceHistory';
  /**
   * Returns next available time before the requested time range.
   * Returns null if there is no more prices.
   *
   * Complexity 0
   */
  nextTime?: Maybe<Scalars['Int']>;
  /** Prices */
  prices: Array<FlexPriceSummary>;
};

/**
 * Market price summary for time range
 *
 * Complexity 5
 */
export type FlexPriceSummary = {
  __typename?: 'FlexPriceSummary';
  /**
   * The last price in range (closing price)
   *
   * Complexity 0
   */
  close?: Maybe<Scalars['String']>;
  /**
   * Maximal price in range
   *
   * Complexity 0
   */
  high?: Maybe<Scalars['String']>;
  /**
   * Minimal price in range
   *
   * Complexity 0
   */
  low?: Maybe<Scalars['String']>;
  /**
   * The first price in range (opening price)
   *
   * Complexity 0
   */
  open?: Maybe<Scalars['String']>;
  /**
   * Range start time.
   * Range end time is `time` + `resolution`
   *
   * Complexity 0
   */
  time?: Maybe<Scalars['Int']>;
  /**
   * Total amount of all trades in range
   *
   * Complexity 0
   */
  volume?: Maybe<Scalars['String']>;
};

/**
 *
 * Complexity 0
 */
export type FlexQuery = {
  __typename?: 'FlexQuery';
  /**
   * Flag that indicates that a bug was found that encourages everyone
   * to cancel their orders and withdraw their funds from Flex wallets asap
   *
   * Complexity 0
   */
  abandonShip?: Maybe<Scalars['Boolean']>;
  /**
   * Super Root address
   *
   * Complexity 0
   */
  address: Scalars['String'];
  /** Flex beta version from Super Root */
  betaConfig?: Maybe<FlexGlobalConfig>;
  /** Current global config */
  config: FlexGlobalConfig;
  /** Returns Flex Pair */
  getPair?: Maybe<FlexPair>;
  /** Returns Flex Token */
  getToken?: Maybe<FlexToken>;
  /** Flex market related to specified token's pair */
  market: FlexMarketQuery;
  /** Returns Flex Token Pairs */
  pairs: Array<FlexPair>;
  /** Flex release version from Super Root */
  releaseConfig?: Maybe<FlexGlobalConfig>;
  /**
   * Super Root version
   *
   * Complexity 0
   */
  revision?: Maybe<Scalars['Int']>;
  /**
   * Flag that indicates that a bug was found in Exchange contracts,
   * you should stop trading and cancel all your orders.
   * Keep funds on your wallets, they are okay.
   *
   * Complexity 0
   */
  stopTrade?: Maybe<Scalars['Boolean']>;
  /** Returns Flex Tokens */
  tokens: Array<FlexToken>;
  /**
   * `True` means the beginning of upgrade process which forbids to list/unlist
   * new wrappers and pairs. Flag is reset to false when upgrade process is over.
   * `False` means the dex is not in the upgrade process and one can list/unlist
   * new wrappers and pairs.
   *
   * Complexity 0
   */
  updateStarted?: Maybe<Scalars['Boolean']>;
  /** Flex user orders */
  userOrders: Array<FlexUserOrder>;
  /** Flex user trades */
  userTrades: Array<FlexUserTrade>;
  /**
   * FLEX API version
   *
   * Complexity 0
   */
  version: Scalars['String'];
  /** Flex client wallet's */
  wallets: Array<FlexWallet>;
};


/**
 *
 * Complexity 0
 */
export type FlexQueryGetPairArgs = {
  address?: InputMaybe<Scalars['String']>;
  ticker?: InputMaybe<Scalars['String']>;
};


/**
 *
 * Complexity 0
 */
export type FlexQueryGetTokenArgs = {
  address?: InputMaybe<Scalars['String']>;
  ticker?: InputMaybe<Scalars['String']>;
};


/**
 *
 * Complexity 0
 */
export type FlexQueryMarketArgs = {
  pairAddress?: InputMaybe<Scalars['String']>;
  pairTicker?: InputMaybe<Scalars['String']>;
};


/**
 *
 * Complexity 0
 */
export type FlexQueryPairsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  tickerSubstringFilter?: InputMaybe<Scalars['String']>;
};


/**
 *
 * Complexity 0
 */
export type FlexQueryTokensArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  tickerSubstringFilter?: InputMaybe<Scalars['String']>;
};


/**
 *
 * Complexity 0
 */
export type FlexQueryUserOrdersArgs = {
  userId: Scalars['String'];
};


/**
 *
 * Complexity 0
 */
export type FlexQueryUserTradesArgs = {
  after?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  userId: Scalars['String'];
};


/**
 *
 * Complexity 0
 */
export type FlexQueryWalletsArgs = {
  after?: InputMaybe<Scalars['String']>;
  clientAddress: Scalars['String'];
  dappPubkey?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  token?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/**
 *
 * Complexity 10
 */
export type FlexToken = {
  __typename?: 'FlexToken';
  /**
   * Flex Tip3 root address (wrapper address)
   *
   * Complexity 0
   */
  address?: Maybe<Scalars['String']>;
  /**
   * Number of decimal places
   *
   * Complexity 0
   */
  decimals?: Maybe<Scalars['Int']>;
  /**
   * Wrapper account that locks and stores all external tokens
   *
   * Complexity 0
   */
  externalAddress?: Maybe<Scalars['String']>;
  /**
   * Full name
   *
   * Complexity 0
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Wallet that receives maker fees
   *
   * Complexity 0
   */
  reserveWallet?: Maybe<Scalars['String']>;
  /**
   * Token ticker, i.e. 'EVER'
   *
   * Complexity 0
   */
  ticker?: Maybe<Scalars['String']>;
  /**
   * Total allocated and granted tokens (in tokens).
   *
   * Complexity 0
   */
  totalAllocated?: Maybe<Scalars['String']>;
  /**
   * Total allocated and granted tokens (in token units).
   *
   * Complexity 0
   */
  totalAllocatedUnits?: Maybe<Scalars['String']>;
  /**
   * Flex wallet code hash
   *
   * Complexity 0
   */
  walletCodeHash?: Maybe<Scalars['String']>;
  /**
   * Type of the wrapper account
   *
   * Complexity 0
   */
  wrapperType?: Maybe<Scalars['Int']>;
};

/**
 *
 * Complexity 5
 */
export type FlexTrade = {
  __typename?: 'FlexTrade';
  /**
   * Amount of the major tokens in tokens
   *
   * Complexity 0
   */
  amount?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  amountUnits?: Maybe<Scalars['String']>;
  /** Bought token */
  buyToken?: Maybe<FlexToken>;
  /**
   *
   * Complexity 0
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * Price of the major token in tokens
   *
   * Complexity 0
   */
  price?: Maybe<Scalars['String']>;
  /**
   * Price numerator
   *
   * Complexity 0
   */
  priceNum?: Maybe<Scalars['String']>;
  /**
   * Token price denominator
   *
   * Complexity 0
   */
  priceScale?: Maybe<Scalars['String']>;
  /**
   * Unit price denominator
   *
   * Complexity 0
   */
  priceScaleUnits?: Maybe<Scalars['String']>;
  /** Sold token */
  sellToken?: Maybe<FlexToken>;
  /** Determines the type of the later order (taker) in trade. */
  side?: Maybe<FlexTradeSide>;
  /**
   * Trade time as a unix time stamp
   *
   * Complexity 0
   */
  time?: Maybe<Scalars['Int']>;
};

export enum FlexTradeLiquidity {
  Maker = 'MAKER',
  Taker = 'TAKER'
}

export enum FlexTradeSide {
  Buy = 'BUY',
  Sell = 'SELL'
}

/**
 *
 * Complexity 2
 */
export type FlexUserConfig = {
  __typename?: 'FlexUserConfig';
  /**
   * Version
   *
   * Complexity 0
   */
  version?: Maybe<Scalars['Int']>;
};

/**
 * Market price summary for time range
 *
 * Complexity 5
 */
export type FlexUserOrder = {
  __typename?: 'FlexUserOrder';
  /**
   * Amount of the major tokens left
   *
   * Complexity 0
   */
  amountLeft?: Maybe<Scalars['String']>;
  /**
   * Amount of the major token units left
   *
   * Complexity 0
   */
  amountLeftUnits?: Maybe<Scalars['String']>;
  /**
   * Amount of the major tokens processed
   *
   * Complexity 0
   */
  amountProcessed?: Maybe<Scalars['String']>;
  /**
   * Amount of the major token units processed
   *
   * Complexity 0
   */
  amountProcessedUnits?: Maybe<Scalars['String']>;
  /**
   * Finish time
   *
   * Complexity 0
   */
  finishTime?: Maybe<Scalars['Int']>;
  /**
   * Order id
   *
   * Complexity 0
   */
  orderId?: Maybe<Scalars['String']>;
  /** Flex market (pair) */
  pair?: Maybe<FlexPair>;
  /**
   * Price of the major token in minor tokens
   *
   * Complexity 0
   */
  price?: Maybe<Scalars['String']>;
  /**
   * Price numerator
   *
   * Complexity 0
   */
  priceNum?: Maybe<Scalars['String']>;
  /**
   * Token price denominator
   *
   * Complexity 0
   */
  priceScale?: Maybe<Scalars['String']>;
  /**
   * Unit price denominator
   *
   * Complexity 0
   */
  priceScaleUnits?: Maybe<Scalars['String']>;
  /** Determines the type of the order */
  side?: Maybe<FlexTradeSide>;
  /**
   * User id
   *
   * Complexity 0
   */
  userId?: Maybe<Scalars['String']>;
};

/**
 *
 * Complexity 5
 */
export type FlexUserTrade = {
  __typename?: 'FlexUserTrade';
  /**
   * Amount of the major tokens
   *
   * Complexity 0
   */
  amount?: Maybe<Scalars['String']>;
  /**
   * Amount of the major units
   *
   * Complexity 0
   */
  amountUnits?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * User fees for this trade. Measured in major tokens.
   *
   * If the user is a maker then fees is a value
   * received by user as a bonus for making order.
   * Note that in this case the fees is a negative value.
   *
   * If the user is a taker then fees is a value that
   * the user pays to the exchange and maker.
   *
   * Complexity 0
   */
  fees?: Maybe<Scalars['String']>;
  /** User fees token. */
  feesToken?: Maybe<FlexToken>;
  /**
   * User fees in `fees_token` units.
   *
   * Complexity 0
   */
  feesUnits?: Maybe<Scalars['String']>;
  /**
   * Determines the users position in trade. Maker or taker.
   * Maker is a trade counterparty whose order was earlier.
   * Taker is a counterparty with a later order.
   */
  liquidity?: Maybe<FlexTradeLiquidity>;
  /** Flex market (pair) */
  pair?: Maybe<FlexPair>;
  /**
   * Token price denominator
   *
   * Complexity 0
   */
  price?: Maybe<Scalars['String']>;
  /**
   * Price numerator
   *
   * Complexity 0
   */
  priceNum?: Maybe<Scalars['String']>;
  /**
   * Token price denominator
   *
   * Complexity 0
   */
  priceScale?: Maybe<Scalars['String']>;
  /**
   * Unit price denominator
   *
   * Complexity 0
   */
  priceScaleUnits?: Maybe<Scalars['String']>;
  /** Determines the type of the later order (taker) in trade. */
  side?: Maybe<FlexTradeSide>;
  /**
   * Trade time as a unix time stamp
   *
   * Complexity 0
   */
  time?: Maybe<Scalars['Int']>;
  /**
   * User's order id.
   *
   * Complexity 0
   */
  userOrderId?: Maybe<Scalars['String']>;
};

/**
 *
 * Complexity 10
 */
export type FlexWallet = {
  __typename?: 'FlexWallet';
  /**
   * Flex wallet address
   *
   * Complexity 0
   */
  address?: Maybe<Scalars['String']>;
  /**
   * Available balance in tokens
   *
   * Complexity 0
   */
  availableBalance?: Maybe<Scalars['String']>;
  /**
   * Available balance in units
   *
   * Complexity 0
   */
  availableBalanceUnits?: Maybe<Scalars['String']>;
  /**
   * Balance in orders
   *
   * Complexity 0
   */
  balanceInOrders?: Maybe<Scalars['String']>;
  /**
   * Balance in orders in units
   *
   * Complexity 0
   */
  balanceInOrdersUnits?: Maybe<Scalars['String']>;
  /**
   * Flex client account address
   *
   * Complexity 0
   */
  clientAddress?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * Dapp public key
   *
   * Complexity 0
   */
  dappPubkey?: Maybe<Scalars['String']>;
  /**
   * Option indicating that this wallet was deleted.
   * Now this option is always `false` if the wallet is returned by `userWallets` query.
   * In subscriptions this option can have value `true` if wallet was deleted.
   *
   * Complexity 0
   */
  deleted?: Maybe<Scalars['Boolean']>;
  /**
   * Balance of native currency of the wallet in EVERs
   *
   * Complexity 0
   */
  nativeCurrencyBalance?: Maybe<Scalars['String']>;
  /**
   * Balance of native currency of the wallet (in nano EVERs)
   *
   * Complexity 0
   */
  nativeCurrencyBalanceUnits?: Maybe<Scalars['String']>;
  /** Wallet token */
  token?: Maybe<FlexToken>;
  /**
   * Token balance of the wallet in tokens
   *
   * Complexity 0
   */
  totalBalance?: Maybe<Scalars['String']>;
  /**
   * Token balance of the wallet in units
   *
   * Complexity 0
   */
  totalBalanceUnits?: Maybe<Scalars['String']>;
  /**
   * Unsalted price code hash
   *
   * Complexity 0
   */
  unsaltedPriceCodeHash?: Maybe<Scalars['String']>;
  /**
   * User id the account owner
   *
   * Complexity 0
   */
  userId?: Maybe<Scalars['String']>;
};

/**
 *
 * Complexity 2
 */
export type FlexWrapperConfig = {
  __typename?: 'FlexWrapperConfig';
  /**
   * Version
   *
   * Complexity 0
   */
  version?: Maybe<Scalars['Int']>;
};

export type FloatArrayFilter = {
  all?: InputMaybe<FloatFilter>;
  any?: InputMaybe<FloatFilter>;
};

export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export enum Ftstandard {
  Tip_32 = 'TIP_32'
}

/**
 *
 * Complexity 20
 */
export type FungibleToken = {
  __typename?: 'FungibleToken';
  /**
   * Token root address
   *
   * Complexity 0
   */
  address?: Maybe<Scalars['String']>;
  /**
   * Token creation time
   *
   * Complexity 0
   */
  createdAt?: Maybe<Scalars['Int']>;
  /**
   * Number of decimal places
   *
   * Complexity 0
   */
  decimals?: Maybe<Scalars['Int']>;
  /**
   * Last transfer time
   *
   * Complexity 0
   */
  lastTransferTimestamp?: Maybe<Scalars['Int']>;
  /**
   * Full name
   *
   * Complexity 0
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Root owner address
   *
   * Complexity 0
   */
  rootOwner?: Maybe<Scalars['String']>;
  /** Token standard */
  standard?: Maybe<Ftstandard>;
  /** Token statistics */
  statistics?: Maybe<FungibleTokenStatistics>;
  /**
   * Token symbol, i.e. 'EVER'
   *
   * Complexity 0
   */
  symbol?: Maybe<Scalars['String']>;
  /**
   * Total allocated and granted tokens (in tokens)
   *
   * Complexity 0
   */
  totalSupply?: Maybe<Scalars['String']>;
  /** Token transfers */
  transfers: FungibleTokenTransferConnection;
  /**
   * Last update time
   *
   * Complexity 0
   */
  updateTime?: Maybe<Scalars['Int']>;
  /** Token wallets */
  wallets: FungibleTokenWalletConnection;
};


/**
 *
 * Complexity 20
 */
export type FungibleTokenTransfersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  transferTypes?: InputMaybe<Array<TokenTransferTypeFilter>>;
};


/**
 *
 * Complexity 20
 */
export type FungibleTokenWalletsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/**
 *
 * Complexity 0
 */
export type FungibleTokenConnection = {
  __typename?: 'FungibleTokenConnection';
  /** A list of edges. */
  edges: Array<FungibleTokenEdge>;
  /** A list of nodes. */
  nodes: Array<FungibleToken>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An edge in a connection.
 *
 * Complexity 0
 */
export type FungibleTokenEdge = {
  __typename?: 'FungibleTokenEdge';
  /**
   * A cursor for use in pagination
   *
   * Complexity 0
   */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: FungibleToken;
};

/**
 *
 * Complexity 2
 */
export type FungibleTokenHolder = {
  __typename?: 'FungibleTokenHolder';
  /**
   *
   * Complexity 0
   */
  address: Scalars['String'];
  /** Holder Transfers */
  transfers: FungibleTokenTransferConnection;
  /** Holder Wallets */
  wallets: FungibleTokenWalletConnection;
};


/**
 *
 * Complexity 2
 */
export type FungibleTokenHolderTransfersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  transferTypes?: InputMaybe<Array<TransferTypeFilter>>;
};


/**
 *
 * Complexity 2
 */
export type FungibleTokenHolderWalletsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  tokens?: InputMaybe<Array<Scalars['String']>>;
};

/**
 *
 * Complexity 0
 */
export type FungibleTokenQuery = {
  __typename?: 'FungibleTokenQuery';
  /** Returns Holder */
  holder: FungibleTokenHolder;
  /** Returns holders by addresses */
  holdersByAddresses: Array<FungibleTokenHolder>;
  /** Statistics over all fungible token standarts */
  statistics: Array<FungibleTokenStandardStatistics>;
  /** Returns Token */
  token?: Maybe<FungibleToken>;
  /** Returns Tokens */
  tokens: FungibleTokenConnection;
  /** Returns transfers by message ids */
  transfersByMessageIds: Array<FungibleTokenTransfer>;
  /**
   * Stat API version
   *
   * Complexity 0
   */
  version: Scalars['String'];
  /** Returns wallet */
  wallet?: Maybe<FungibleTokenWallet>;
};


/**
 *
 * Complexity 0
 */
export type FungibleTokenQueryHolderArgs = {
  address: Scalars['String'];
};


/**
 *
 * Complexity 0
 */
export type FungibleTokenQueryHoldersByAddressesArgs = {
  addresses: Array<Scalars['String']>;
};


/**
 *
 * Complexity 0
 */
export type FungibleTokenQueryTokenArgs = {
  address: Scalars['String'];
};


/**
 *
 * Complexity 0
 */
export type FungibleTokenQueryTokensArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namePrefix?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<TokenSort>;
  rootOwner?: InputMaybe<Scalars['String']>;
  symbolSubstring?: InputMaybe<Scalars['String']>;
};


/**
 *
 * Complexity 0
 */
export type FungibleTokenQueryTransfersByMessageIdsArgs = {
  messageIds: Array<Scalars['String']>;
};


/**
 *
 * Complexity 0
 */
export type FungibleTokenQueryWalletArgs = {
  address: Scalars['String'];
};

/**
 *
 * Complexity 100
 */
export type FungibleTokenStandardStatistics = {
  __typename?: 'FungibleTokenStandardStatistics';
  standard?: Maybe<Ftstandard>;
  /**
   *
   * Complexity 0
   */
  totalTokenCount?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  totalWalletCount?: Maybe<Scalars['Int']>;
};

/**
 *
 * Complexity 0
 */
export type FungibleTokenStatistics = {
  __typename?: 'FungibleTokenStatistics';
  /**
   *
   * Complexity 0
   */
  totalWalletCount?: Maybe<Scalars['Int']>;
};

/**
 *
 * Complexity 5
 */
export type FungibleTokenTransfer = {
  __typename?: 'FungibleTokenTransfer';
  /** Source holder */
  fromHolder?: Maybe<FungibleTokenHolder>;
  /** Source wallet */
  fromWallet?: Maybe<FungibleTokenWallet>;
  /**
   * Blockchain message ID related to this transfer
   *
   * Complexity 0
   */
  messageId?: Maybe<Scalars['String']>;
  /**
   * Transfer message time as a UNIX timestamp in seconds
   *
   * Complexity 0
   */
  timestamp?: Maybe<Scalars['Int']>;
  /** Destination holder */
  toHolder?: Maybe<FungibleTokenHolder>;
  /** Destination wallet */
  toWallet?: Maybe<FungibleTokenWallet>;
  /** Token */
  token?: Maybe<FungibleToken>;
  /** Transfer type */
  transferType?: Maybe<FungibleTokenTransferType>;
  /**
   * Transferred value of tokens.
   * Represented as a decimal string with an optional fractional part separated by `.`.
   *
   * Complexity 0
   */
  value?: Maybe<Scalars['String']>;
};

/**
 *
 * Complexity 0
 */
export type FungibleTokenTransferConnection = {
  __typename?: 'FungibleTokenTransferConnection';
  /** A list of edges. */
  edges: Array<FungibleTokenTransferEdge>;
  /** A list of nodes. */
  nodes: Array<FungibleTokenTransfer>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An edge in a connection.
 *
 * Complexity 0
 */
export type FungibleTokenTransferEdge = {
  __typename?: 'FungibleTokenTransferEdge';
  /**
   * A cursor for use in pagination
   *
   * Complexity 0
   */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: FungibleTokenTransfer;
};

export enum FungibleTokenTransferType {
  Burn = 'BURN',
  Mint = 'MINT',
  Receive = 'RECEIVE',
  RevertBurn = 'REVERT_BURN',
  RevertMint = 'REVERT_MINT',
  RevertReceive = 'REVERT_RECEIVE',
  RevertSend = 'REVERT_SEND',
  Transfer = 'TRANSFER'
}

/**
 *
 * Complexity 20
 */
export type FungibleTokenWallet = {
  __typename?: 'FungibleTokenWallet';
  /**
   *
   * Complexity 0
   */
  address?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  balance?: Maybe<Scalars['String']>;
  holder?: Maybe<FungibleTokenHolder>;
  /**
   *
   * Complexity 0
   */
  percentage?: Maybe<Scalars['Float']>;
  token?: Maybe<FungibleToken>;
  /** Wallet transfers */
  transfers: FungibleTokenTransferConnection;
};


/**
 *
 * Complexity 20
 */
export type FungibleTokenWalletTransfersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  transferTypes?: InputMaybe<Array<TransferTypeFilter>>;
};

/**
 *
 * Complexity 0
 */
export type FungibleTokenWalletConnection = {
  __typename?: 'FungibleTokenWalletConnection';
  /** A list of edges. */
  edges: Array<FungibleTokenWalletEdge>;
  /** A list of nodes. */
  nodes: Array<FungibleTokenWallet>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An edge in a connection.
 *
 * Complexity 0
 */
export type FungibleTokenWalletEdge = {
  __typename?: 'FungibleTokenWalletEdge';
  /**
   * A cursor for use in pagination
   *
   * Complexity 0
   */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: FungibleTokenWallet;
};

/**
 *
 * Complexity 0
 */
export type GasLimitsPrices = {
  __typename?: 'GasLimitsPrices';
  /**
   *
   * Complexity 0
   */
  block_gas_limit?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  delete_due_limit?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  flat_gas_limit?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  flat_gas_price?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  freeze_due_limit?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  gas_credit?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  gas_limit?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  gas_price?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  special_gas_limit?: Maybe<Scalars['String']>;
};


/**
 *
 * Complexity 0
 */
export type GasLimitsPricesBlock_Gas_LimitArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type GasLimitsPricesDelete_Due_LimitArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type GasLimitsPricesFlat_Gas_LimitArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type GasLimitsPricesFlat_Gas_PriceArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type GasLimitsPricesFreeze_Due_LimitArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type GasLimitsPricesGas_CreditArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type GasLimitsPricesGas_LimitArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type GasLimitsPricesGas_PriceArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type GasLimitsPricesSpecial_Gas_LimitArgs = {
  format?: InputMaybe<BigIntFormat>;
};

export type GasLimitsPricesFilter = {
  OR?: InputMaybe<GasLimitsPricesFilter>;
  block_gas_limit?: InputMaybe<StringFilter>;
  delete_due_limit?: InputMaybe<StringFilter>;
  flat_gas_limit?: InputMaybe<StringFilter>;
  flat_gas_price?: InputMaybe<StringFilter>;
  freeze_due_limit?: InputMaybe<StringFilter>;
  gas_credit?: InputMaybe<StringFilter>;
  gas_limit?: InputMaybe<StringFilter>;
  gas_price?: InputMaybe<StringFilter>;
  special_gas_limit?: InputMaybe<StringFilter>;
};

/**
 *
 * Complexity 10
 */
export type InMsg = {
  __typename?: 'InMsg';
  /**
   *
   * Complexity 0
   */
  fwd_fee?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  ihr_fee?: Maybe<Scalars['String']>;
  in_msg?: Maybe<MsgEnvelope>;
  /**
   *
   * Complexity 0
   */
  msg_id?: Maybe<Scalars['String']>;
  /**
   * - 0 – external
   * - 1 – ihr
   * - 2 – immediately
   * - 3 – final
   * - 4 – transit
   * - 5 – discardedFinal
   * - 6 – discardedTransit
   *
   * Complexity 0
   */
  msg_type?: Maybe<Scalars['Int']>;
  msg_type_name?: Maybe<InMsgTypeEnum>;
  out_msg?: Maybe<MsgEnvelope>;
  /**
   *
   * Complexity 0
   */
  proof_created?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  proof_delivered?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  transaction_id?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  transit_fee?: Maybe<Scalars['String']>;
};


/**
 *
 * Complexity 10
 */
export type InMsgFwd_FeeArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 10
 */
export type InMsgIhr_FeeArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 10
 */
export type InMsgTransit_FeeArgs = {
  format?: InputMaybe<BigIntFormat>;
};

export type InMsgArrayFilter = {
  all?: InputMaybe<InMsgFilter>;
  any?: InputMaybe<InMsgFilter>;
};

export type InMsgFilter = {
  OR?: InputMaybe<InMsgFilter>;
  fwd_fee?: InputMaybe<StringFilter>;
  ihr_fee?: InputMaybe<StringFilter>;
  in_msg?: InputMaybe<MsgEnvelopeFilter>;
  msg_id?: InputMaybe<StringFilter>;
  /**
   * - 0 – external
   * - 1 – ihr
   * - 2 – immediately
   * - 3 – final
   * - 4 – transit
   * - 5 – discardedFinal
   * - 6 – discardedTransit
   */
  msg_type?: InputMaybe<IntFilter>;
  msg_type_name?: InputMaybe<InMsgTypeEnumFilter>;
  out_msg?: InputMaybe<MsgEnvelopeFilter>;
  proof_created?: InputMaybe<StringFilter>;
  proof_delivered?: InputMaybe<StringFilter>;
  transaction_id?: InputMaybe<StringFilter>;
  transit_fee?: InputMaybe<StringFilter>;
};

export enum InMsgTypeEnum {
  DiscardedFinal = 'DiscardedFinal',
  DiscardedTransit = 'DiscardedTransit',
  External = 'External',
  Final = 'Final',
  Ihr = 'Ihr',
  Immediately = 'Immediately',
  Transit = 'Transit'
}

export type InMsgTypeEnumFilter = {
  eq?: InputMaybe<InMsgTypeEnum>;
  ge?: InputMaybe<InMsgTypeEnum>;
  gt?: InputMaybe<InMsgTypeEnum>;
  in?: InputMaybe<Array<InputMaybe<InMsgTypeEnum>>>;
  le?: InputMaybe<InMsgTypeEnum>;
  lt?: InputMaybe<InMsgTypeEnum>;
  ne?: InputMaybe<InMsgTypeEnum>;
  notIn?: InputMaybe<Array<InputMaybe<InMsgTypeEnum>>>;
};

/**
 *  GraphQL Server info
 *
 * Complexity 0
 */
export type Info = {
  __typename?: 'Info';
  /**
   *  Blocks latency in ms (server time - max of blocks.gen_utime * 1000)
   *
   * Complexity 0
   */
  blocksLatency?: Maybe<Scalars['Float']>;
  /**
   * **EXPERIMENTAL**
   * Reliable upper boundary for pagination by chain_order field. Before this boundary data inserts are almost impossible
   * (work in progress to make them fully impossible when the feature goes into production).
   *
   * Complexity 0
   */
  chainOrderBoundary?: Maybe<Scalars['String']>;
  /**
   *  Alternative endpoints of q-server
   *
   * Complexity 0
   */
  endpoints?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   *  Last block time in ms (maximum value of blocks.gen_utime * 1000)
   *
   * Complexity 0
   */
  lastBlockTime?: Maybe<Scalars['Float']>;
  /**
   *  Overall latency (maximum value of blocksLatency, messagesLatency and transactionsLatency)
   *
   * Complexity 0
   */
  latency?: Maybe<Scalars['Float']>;
  /**
   *  Messages latency in ms (server time - max of messages.created_at * 1000)
   *
   * Complexity 0
   */
  messagesLatency?: Maybe<Scalars['Float']>;
  /**
   * Shows whether rempReceipts subscription is enabled
   *
   * Complexity 0
   */
  rempEnabled?: Maybe<Scalars['Boolean']>;
  /**
   *  Server unix time in ms
   *
   * Complexity 0
   */
  time?: Maybe<Scalars['Float']>;
  /**
   *  Transactions latency in ms (server time - max of transactions.now * 1000)
   *
   * Complexity 0
   */
  transactionsLatency?: Maybe<Scalars['Float']>;
  /**
   *  Server version
   *
   * Complexity 0
   */
  version?: Maybe<Scalars['String']>;
};

export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

/**
 * # Message type
 *
 * Message layout queries.  A message consists of its header followed by its
 * body or payload. The body is essentially arbitrary, to be interpreted by the
 * destination smart contract. It can be queried with the following fields:
 *
 * Complexity 5
 */
export type Message = {
  __typename?: 'Message';
  block?: Maybe<Block>;
  /**
   * Merkle proof that account is a part of shard state it cut from as a bag of cells with Merkle proof struct encoded as base64.
   *
   * Complexity 0
   */
  block_id?: Maybe<Scalars['String']>;
  /**
   * A bag of cells with the message structure encoded as base64.
   *
   * Complexity 3
   */
  boc?: Maybe<Scalars['String']>;
  /**
   * Bag of cells with the message body encoded as base64.
   *
   * Complexity 0
   */
  body?: Maybe<Scalars['String']>;
  /**
   * `body` field root hash.
   *
   * Complexity 0
   */
  body_hash?: Maybe<Scalars['String']>;
  /**
   * Bounce flag. If the transaction has been aborted, and the inbound message has its bounce flag set, then it is “bounced” by automatically generating an outbound message (with the bounce flag clear) to its original sender.
   *
   * Complexity 0
   */
  bounce?: Maybe<Scalars['Boolean']>;
  /**
   * Bounced flag. If the transaction has been aborted, and the inbound message has its bounce flag set, then it is “bounced” by automatically generating an outbound message (with the bounce flag clear) to its original sender.
   *
   * Complexity 0
   */
  bounced?: Maybe<Scalars['Boolean']>;
  /**
   * Collection-unique field for pagination and sorting. This field is designed to retain logical output order (for logical input order use transaction.in_message).
   *
   * Complexity 0
   */
  chain_order?: Maybe<Scalars['String']>;
  /**
   * Represents contract code in deploy messages.
   *
   * Complexity 1
   */
  code?: Maybe<Scalars['String']>;
  /**
   * `code` field root hash.
   *
   * Complexity 0
   */
  code_hash?: Maybe<Scalars['String']>;
  /**
   * Creation unixtime automatically set by the generating transaction. The creation unixtime equals the creation unixtime of the block containing the generating transaction.
   *
   * Complexity 0
   */
  created_at?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  created_at_string?: Maybe<Scalars['String']>;
  /**
   * Logical creation time automatically set by the generating transaction.
   *
   * Complexity 0
   */
  created_lt?: Maybe<Scalars['String']>;
  /**
   * Represents initial data for a contract in deploy messages
   *
   * Complexity 2
   */
  data?: Maybe<Scalars['String']>;
  /**
   * `data` field root hash.
   *
   * Complexity 0
   */
  data_hash?: Maybe<Scalars['String']>;
  /**
   * Returns destination address string
   *
   * Complexity 0
   */
  dst?: Maybe<Scalars['String']>;
  dst_account?: Maybe<Account>;
  dst_transaction?: Maybe<Transaction>;
  /**
   * Workchain id of the destination address (dst field)
   *
   * Complexity 0
   */
  dst_workchain_id?: Maybe<Scalars['Int']>;
  /**
   * Original total forwarding fee paid for using the HR mechanism; it is automatically computed from some configuration parameters and the size of the message at the time the message is generated.
   *
   * Complexity 0
   */
  fwd_fee?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  id?: Maybe<Scalars['String']>;
  /**
   * IHR is disabled for the message.
   *
   * Complexity 0
   */
  ihr_disabled?: Maybe<Scalars['Boolean']>;
  /**
   * This value is subtracted from the value attached to the message and awarded to the validators of the destination shardchain if they include the message by the IHR mechanism.
   *
   * Complexity 0
   */
  ihr_fee?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  import_fee?: Maybe<Scalars['String']>;
  /**
   * Represents contract library in deploy messages
   *
   * Complexity 0
   */
  library?: Maybe<Scalars['String']>;
  /**
   * `library` field root hash.
   *
   * Complexity 0
   */
  library_hash?: Maybe<Scalars['String']>;
  /**
   * Returns the type of message.
   * - 0 – internal
   * - 1 – extIn
   * - 2 – extOut
   *
   * Complexity 0
   */
  msg_type?: Maybe<Scalars['Int']>;
  msg_type_name?: Maybe<MessageTypeEnum>;
  /**
   * Merkle proof that message is a part of a block it cut from. It is a bag of cells with Merkle proof struct encoded as base64.
   *
   * Complexity 0
   */
  proof?: Maybe<Scalars['String']>;
  /**
   * This is only used for special contracts in masterchain to deploy messages.
   *
   * Complexity 0
   */
  split_depth?: Maybe<Scalars['Int']>;
  /**
   * Returns source address string
   *
   * Complexity 0
   */
  src?: Maybe<Scalars['String']>;
  src_account?: Maybe<Account>;
  src_transaction?: Maybe<Transaction>;
  /**
   * Workchain id of the source address (src field)
   *
   * Complexity 0
   */
  src_workchain_id?: Maybe<Scalars['Int']>;
  /**
   * Returns internal processing status according to the numbers shown.
   * - 0 – unknown
   * - 1 – queued
   * - 2 – processing
   * - 3 – preliminary
   * - 4 – proposed
   * - 5 – finalized
   * - 6 – refused
   * - 7 – transiting
   *
   * Complexity 0
   */
  status?: Maybe<Scalars['Int']>;
  status_name?: Maybe<MessageProcessingStatusEnum>;
  /**
   * This is only used for special contracts in masterchain to deploy messages.
   *
   * Complexity 0
   */
  tick?: Maybe<Scalars['Boolean']>;
  /**
   * This is only used for special contracts in masterchain to deploy messages
   *
   * Complexity 0
   */
  tock?: Maybe<Scalars['Boolean']>;
  tokenTransfer?: Maybe<FungibleTokenTransfer>;
  /**
   * May or may not be present
   *
   * Complexity 0
   */
  value?: Maybe<Scalars['String']>;
  /** May or may not be present. */
  value_other?: Maybe<Array<Maybe<OtherCurrency>>>;
};


/**
 * # Message type
 *
 * Message layout queries.  A message consists of its header followed by its
 * body or payload. The body is essentially arbitrary, to be interpreted by the
 * destination smart contract. It can be queried with the following fields:
 *
 * Complexity 5
 */
export type MessageBlockArgs = {
  timeout?: InputMaybe<Scalars['Int']>;
  when?: InputMaybe<MessageFilter>;
};


/**
 * # Message type
 *
 * Message layout queries.  A message consists of its header followed by its
 * body or payload. The body is essentially arbitrary, to be interpreted by the
 * destination smart contract. It can be queried with the following fields:
 *
 * Complexity 5
 */
export type MessageCreated_LtArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * # Message type
 *
 * Message layout queries.  A message consists of its header followed by its
 * body or payload. The body is essentially arbitrary, to be interpreted by the
 * destination smart contract. It can be queried with the following fields:
 *
 * Complexity 5
 */
export type MessageDst_AccountArgs = {
  timeout?: InputMaybe<Scalars['Int']>;
  when?: InputMaybe<MessageFilter>;
};


/**
 * # Message type
 *
 * Message layout queries.  A message consists of its header followed by its
 * body or payload. The body is essentially arbitrary, to be interpreted by the
 * destination smart contract. It can be queried with the following fields:
 *
 * Complexity 5
 */
export type MessageDst_TransactionArgs = {
  timeout?: InputMaybe<Scalars['Int']>;
  when?: InputMaybe<MessageFilter>;
};


/**
 * # Message type
 *
 * Message layout queries.  A message consists of its header followed by its
 * body or payload. The body is essentially arbitrary, to be interpreted by the
 * destination smart contract. It can be queried with the following fields:
 *
 * Complexity 5
 */
export type MessageFwd_FeeArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * # Message type
 *
 * Message layout queries.  A message consists of its header followed by its
 * body or payload. The body is essentially arbitrary, to be interpreted by the
 * destination smart contract. It can be queried with the following fields:
 *
 * Complexity 5
 */
export type MessageIhr_FeeArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * # Message type
 *
 * Message layout queries.  A message consists of its header followed by its
 * body or payload. The body is essentially arbitrary, to be interpreted by the
 * destination smart contract. It can be queried with the following fields:
 *
 * Complexity 5
 */
export type MessageImport_FeeArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * # Message type
 *
 * Message layout queries.  A message consists of its header followed by its
 * body or payload. The body is essentially arbitrary, to be interpreted by the
 * destination smart contract. It can be queried with the following fields:
 *
 * Complexity 5
 */
export type MessageSrc_AccountArgs = {
  timeout?: InputMaybe<Scalars['Int']>;
  when?: InputMaybe<MessageFilter>;
};


/**
 * # Message type
 *
 * Message layout queries.  A message consists of its header followed by its
 * body or payload. The body is essentially arbitrary, to be interpreted by the
 * destination smart contract. It can be queried with the following fields:
 *
 * Complexity 5
 */
export type MessageSrc_TransactionArgs = {
  timeout?: InputMaybe<Scalars['Int']>;
  when?: InputMaybe<MessageFilter>;
};


/**
 * # Message type
 *
 * Message layout queries.  A message consists of its header followed by its
 * body or payload. The body is essentially arbitrary, to be interpreted by the
 * destination smart contract. It can be queried with the following fields:
 *
 * Complexity 5
 */
export type MessageValueArgs = {
  format?: InputMaybe<BigIntFormat>;
};

export type MessageArrayFilter = {
  all?: InputMaybe<MessageFilter>;
  any?: InputMaybe<MessageFilter>;
};

/**
 * # Message type
 *
 * Message layout queries.  A message consists of its header followed by its
 * body or payload. The body is essentially arbitrary, to be interpreted by the
 * destination smart contract. It can be queried with the following fields:
 */
export type MessageFilter = {
  OR?: InputMaybe<MessageFilter>;
  block?: InputMaybe<BlockFilter>;
  /** Merkle proof that account is a part of shard state it cut from as a bag of cells with Merkle proof struct encoded as base64. */
  block_id?: InputMaybe<StringFilter>;
  /** A bag of cells with the message structure encoded as base64. */
  boc?: InputMaybe<StringFilter>;
  /** Bag of cells with the message body encoded as base64. */
  body?: InputMaybe<StringFilter>;
  /** `body` field root hash. */
  body_hash?: InputMaybe<StringFilter>;
  /** Bounce flag. If the transaction has been aborted, and the inbound message has its bounce flag set, then it is “bounced” by automatically generating an outbound message (with the bounce flag clear) to its original sender. */
  bounce?: InputMaybe<BooleanFilter>;
  /** Bounced flag. If the transaction has been aborted, and the inbound message has its bounce flag set, then it is “bounced” by automatically generating an outbound message (with the bounce flag clear) to its original sender. */
  bounced?: InputMaybe<BooleanFilter>;
  /** Collection-unique field for pagination and sorting. This field is designed to retain logical output order (for logical input order use transaction.in_message). */
  chain_order?: InputMaybe<StringFilter>;
  /** Represents contract code in deploy messages. */
  code?: InputMaybe<StringFilter>;
  /** `code` field root hash. */
  code_hash?: InputMaybe<StringFilter>;
  /** Creation unixtime automatically set by the generating transaction. The creation unixtime equals the creation unixtime of the block containing the generating transaction. */
  created_at?: InputMaybe<FloatFilter>;
  /** Logical creation time automatically set by the generating transaction. */
  created_lt?: InputMaybe<StringFilter>;
  /** Represents initial data for a contract in deploy messages */
  data?: InputMaybe<StringFilter>;
  /** `data` field root hash. */
  data_hash?: InputMaybe<StringFilter>;
  /** Returns destination address string */
  dst?: InputMaybe<StringFilter>;
  dst_account?: InputMaybe<AccountFilter>;
  dst_transaction?: InputMaybe<TransactionFilter>;
  /** Workchain id of the destination address (dst field) */
  dst_workchain_id?: InputMaybe<IntFilter>;
  /** Original total forwarding fee paid for using the HR mechanism; it is automatically computed from some configuration parameters and the size of the message at the time the message is generated. */
  fwd_fee?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  /** IHR is disabled for the message. */
  ihr_disabled?: InputMaybe<BooleanFilter>;
  /** This value is subtracted from the value attached to the message and awarded to the validators of the destination shardchain if they include the message by the IHR mechanism. */
  ihr_fee?: InputMaybe<StringFilter>;
  import_fee?: InputMaybe<StringFilter>;
  /** Represents contract library in deploy messages */
  library?: InputMaybe<StringFilter>;
  /** `library` field root hash. */
  library_hash?: InputMaybe<StringFilter>;
  /**
   * Returns the type of message.
   * - 0 – internal
   * - 1 – extIn
   * - 2 – extOut
   */
  msg_type?: InputMaybe<IntFilter>;
  msg_type_name?: InputMaybe<MessageTypeEnumFilter>;
  /** Merkle proof that message is a part of a block it cut from. It is a bag of cells with Merkle proof struct encoded as base64. */
  proof?: InputMaybe<StringFilter>;
  /** This is only used for special contracts in masterchain to deploy messages. */
  split_depth?: InputMaybe<IntFilter>;
  /** Returns source address string */
  src?: InputMaybe<StringFilter>;
  src_account?: InputMaybe<AccountFilter>;
  src_transaction?: InputMaybe<TransactionFilter>;
  /** Workchain id of the source address (src field) */
  src_workchain_id?: InputMaybe<IntFilter>;
  /**
   * Returns internal processing status according to the numbers shown.
   * - 0 – unknown
   * - 1 – queued
   * - 2 – processing
   * - 3 – preliminary
   * - 4 – proposed
   * - 5 – finalized
   * - 6 – refused
   * - 7 – transiting
   */
  status?: InputMaybe<IntFilter>;
  status_name?: InputMaybe<MessageProcessingStatusEnumFilter>;
  /** This is only used for special contracts in masterchain to deploy messages. */
  tick?: InputMaybe<BooleanFilter>;
  /** This is only used for special contracts in masterchain to deploy messages */
  tock?: InputMaybe<BooleanFilter>;
  /** May or may not be present */
  value?: InputMaybe<StringFilter>;
  /** May or may not be present. */
  value_other?: InputMaybe<OtherCurrencyArrayFilter>;
};

export type MessageMonitoringParams = {
  /** Destination address of the external inbound message */
  address?: InputMaybe<Scalars['String']>;
  /** Message BOC in base64, needed to resolve an error in case of failed message processing */
  boc?: InputMaybe<Scalars['String']>;
  /** TVM hash of the message BOC */
  hash?: InputMaybe<Scalars['String']>;
  /** Wait for message finalization until waitUntil shard block time in UNIX time */
  waitUntil: Scalars['Int'];
};

/**
 *
 * Complexity 10
 */
export type MessageMonitoringResult = {
  __typename?: 'MessageMonitoringResult';
  /**
   * Contains an error message in case when status is TIMEOUT
   *
   * Complexity 0
   */
  error?: Maybe<Scalars['String']>;
  /**
   * TVM hash of the message BOC
   *
   * Complexity 0
   */
  hash: Scalars['String'];
  /** Shows message status, if it was or was not finalized until waitUntil block time */
  status: RecentExtInMsgStatusType;
  /**
   * Contains transaction.
   * In case of FINALIZED the transaction is extracted from the block.
   * In case of TIMEOUT the transaction is emulated using last known
   * account state.
   * Can be Null in case of emulation on non-existing account.
   */
  transaction?: Maybe<RecentExtInMsgTransaction>;
};

export enum MessageProcessingStatusEnum {
  Finalized = 'Finalized',
  Preliminary = 'Preliminary',
  Processing = 'Processing',
  Proposed = 'Proposed',
  Queued = 'Queued',
  Refused = 'Refused',
  Transiting = 'Transiting',
  Unknown = 'Unknown'
}

export type MessageProcessingStatusEnumFilter = {
  eq?: InputMaybe<MessageProcessingStatusEnum>;
  ge?: InputMaybe<MessageProcessingStatusEnum>;
  gt?: InputMaybe<MessageProcessingStatusEnum>;
  in?: InputMaybe<Array<InputMaybe<MessageProcessingStatusEnum>>>;
  le?: InputMaybe<MessageProcessingStatusEnum>;
  lt?: InputMaybe<MessageProcessingStatusEnum>;
  ne?: InputMaybe<MessageProcessingStatusEnum>;
  notIn?: InputMaybe<Array<InputMaybe<MessageProcessingStatusEnum>>>;
};

export enum MessageTypeEnum {
  ExtIn = 'ExtIn',
  ExtOut = 'ExtOut',
  Internal = 'Internal'
}

export type MessageTypeEnumFilter = {
  eq?: InputMaybe<MessageTypeEnum>;
  ge?: InputMaybe<MessageTypeEnum>;
  gt?: InputMaybe<MessageTypeEnum>;
  in?: InputMaybe<Array<InputMaybe<MessageTypeEnum>>>;
  le?: InputMaybe<MessageTypeEnum>;
  lt?: InputMaybe<MessageTypeEnum>;
  ne?: InputMaybe<MessageTypeEnum>;
  notIn?: InputMaybe<Array<InputMaybe<MessageTypeEnum>>>;
};

/**
 *
 * Complexity 100
 */
export type MessagesStatisticsQuery = {
  __typename?: 'MessagesStatisticsQuery';
  /**
   * Average messages rate per second for last 2 minutes
   *
   * Complexity 0
   */
  ratePerSecond?: Maybe<Scalars['Float']>;
  /**
   * Count of all messages
   *
   * Complexity 0
   */
  totalCount?: Maybe<Scalars['Int']>;
};

/**
 *
 * Complexity 0
 */
export type MsgEnvelope = {
  __typename?: 'MsgEnvelope';
  /**
   *
   * Complexity 0
   */
  cur_addr?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  fwd_fee_remaining?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  msg_id?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  next_addr?: Maybe<Scalars['String']>;
};


/**
 *
 * Complexity 0
 */
export type MsgEnvelopeFwd_Fee_RemainingArgs = {
  format?: InputMaybe<BigIntFormat>;
};

export type MsgEnvelopeFilter = {
  OR?: InputMaybe<MsgEnvelopeFilter>;
  cur_addr?: InputMaybe<StringFilter>;
  fwd_fee_remaining?: InputMaybe<StringFilter>;
  msg_id?: InputMaybe<StringFilter>;
  next_addr?: InputMaybe<StringFilter>;
};

/**
 *
 * Complexity 0
 */
export type MsgForwardPrices = {
  __typename?: 'MsgForwardPrices';
  /**
   *
   * Complexity 0
   */
  bit_price?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  cell_price?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  first_frac?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  ihr_price_factor?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  lump_price?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  next_frac?: Maybe<Scalars['Int']>;
};


/**
 *
 * Complexity 0
 */
export type MsgForwardPricesBit_PriceArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type MsgForwardPricesCell_PriceArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type MsgForwardPricesLump_PriceArgs = {
  format?: InputMaybe<BigIntFormat>;
};

export type MsgForwardPricesFilter = {
  OR?: InputMaybe<MsgForwardPricesFilter>;
  bit_price?: InputMaybe<StringFilter>;
  cell_price?: InputMaybe<StringFilter>;
  first_frac?: InputMaybe<IntFilter>;
  ihr_price_factor?: InputMaybe<FloatFilter>;
  lump_price?: InputMaybe<StringFilter>;
  next_frac?: InputMaybe<IntFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  cost?: Maybe<Cost>;
  /**
   * Post external inbound message to blockchain node.
   *
   * Complexity 10
   */
  postRequests?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MutationCostArgs = {
  dryRun?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPostRequestsArgs = {
  requests?: InputMaybe<Array<InputMaybe<Request>>>;
};

export type Node = {
  id: Scalars['ID'];
};

/**
 *
 * Complexity 0
 */
export type OtherCurrency = {
  __typename?: 'OtherCurrency';
  /**
   *
   * Complexity 0
   */
  currency?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  value?: Maybe<Scalars['String']>;
};


/**
 *
 * Complexity 0
 */
export type OtherCurrencyValueArgs = {
  format?: InputMaybe<BigIntFormat>;
};

export type OtherCurrencyArrayFilter = {
  all?: InputMaybe<OtherCurrencyFilter>;
  any?: InputMaybe<OtherCurrencyFilter>;
};

export type OtherCurrencyFilter = {
  OR?: InputMaybe<OtherCurrencyFilter>;
  currency?: InputMaybe<FloatFilter>;
  value?: InputMaybe<StringFilter>;
};

/**
 *
 * Complexity 10
 */
export type OutMsg = {
  __typename?: 'OutMsg';
  /**
   *
   * Complexity 0
   */
  import_block_lt?: Maybe<Scalars['String']>;
  imported?: Maybe<InMsg>;
  /**
   *
   * Complexity 0
   */
  msg_env_hash?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  msg_id?: Maybe<Scalars['String']>;
  /**
   * - 0 – external
   * - 1 – immediately
   * - 2 – outMsgNew
   * - 3 – transit
   * - 4 – dequeueImmediately
   * - 5 – dequeue
   * - 6 – transitRequired
   * - 7 – dequeueShort
   * - -1 – none
   *
   * Complexity 0
   */
  msg_type?: Maybe<Scalars['Int']>;
  msg_type_name?: Maybe<OutMsgTypeEnum>;
  /**
   *
   * Complexity 0
   */
  next_addr_pfx?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  next_workchain?: Maybe<Scalars['Int']>;
  out_msg?: Maybe<MsgEnvelope>;
  reimport?: Maybe<InMsg>;
  /**
   *
   * Complexity 0
   */
  transaction_id?: Maybe<Scalars['String']>;
};


/**
 *
 * Complexity 10
 */
export type OutMsgImport_Block_LtArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 10
 */
export type OutMsgNext_Addr_PfxArgs = {
  format?: InputMaybe<BigIntFormat>;
};

export type OutMsgArrayFilter = {
  all?: InputMaybe<OutMsgFilter>;
  any?: InputMaybe<OutMsgFilter>;
};

export type OutMsgFilter = {
  OR?: InputMaybe<OutMsgFilter>;
  import_block_lt?: InputMaybe<StringFilter>;
  imported?: InputMaybe<InMsgFilter>;
  msg_env_hash?: InputMaybe<StringFilter>;
  msg_id?: InputMaybe<StringFilter>;
  /**
   * - 0 – external
   * - 1 – immediately
   * - 2 – outMsgNew
   * - 3 – transit
   * - 4 – dequeueImmediately
   * - 5 – dequeue
   * - 6 – transitRequired
   * - 7 – dequeueShort
   * - -1 – none
   */
  msg_type?: InputMaybe<IntFilter>;
  msg_type_name?: InputMaybe<OutMsgTypeEnumFilter>;
  next_addr_pfx?: InputMaybe<StringFilter>;
  next_workchain?: InputMaybe<IntFilter>;
  out_msg?: InputMaybe<MsgEnvelopeFilter>;
  reimport?: InputMaybe<InMsgFilter>;
  transaction_id?: InputMaybe<StringFilter>;
};

export enum OutMsgTypeEnum {
  Dequeue = 'Dequeue',
  DequeueImmediately = 'DequeueImmediately',
  DequeueShort = 'DequeueShort',
  External = 'External',
  Immediately = 'Immediately',
  None = 'None',
  OutMsgNew = 'OutMsgNew',
  Transit = 'Transit',
  TransitRequired = 'TransitRequired'
}

export type OutMsgTypeEnumFilter = {
  eq?: InputMaybe<OutMsgTypeEnum>;
  ge?: InputMaybe<OutMsgTypeEnum>;
  gt?: InputMaybe<OutMsgTypeEnum>;
  in?: InputMaybe<Array<InputMaybe<OutMsgTypeEnum>>>;
  le?: InputMaybe<OutMsgTypeEnum>;
  lt?: InputMaybe<OutMsgTypeEnum>;
  ne?: InputMaybe<OutMsgTypeEnum>;
  notIn?: InputMaybe<Array<InputMaybe<OutMsgTypeEnum>>>;
};

/**
 *
 * Complexity 0
 */
export type PageInfo = {
  __typename?: 'PageInfo';
  /**
   *
   * Complexity 0
   */
  endCursor?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  hasNextPage: Scalars['Boolean'];
  /**
   *
   * Complexity 0
   */
  hasPreviousPage: Scalars['Boolean'];
  /**
   *
   * Complexity 0
   */
  startCursor?: Maybe<Scalars['String']>;
};

/**
 *
 * Complexity 0
 */
export type Price = {
  __typename?: 'Price';
  marketCap: EverMarketCap;
  price: EverPrice;
  /**
   *
   * Complexity 0
   */
  updatedAt: Scalars['Float'];
  /**
   *
   * Complexity 0
   */
  updatedISO: Scalars['String'];
  volume: EverVolume;
};

export type Query = {
  __typename?: 'Query';
  accounts?: Maybe<Array<Maybe<Account>>>;
  /**
   * Compute aggregated values for specified fields
   *
   * Complexity 100
   */
  aggregateAccounts?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Compute aggregated values for specified fields
   *
   * Complexity 100
   */
  aggregateBlockSignatures?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Compute aggregated values for specified fields
   *
   * Complexity 100
   */
  aggregateBlocks?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Compute aggregated values for specified fields
   *
   * Complexity 100
   */
  aggregateMessages?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Compute aggregated values for specified fields
   *
   * Complexity 100
   */
  aggregateTransactions?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Blockchain-related information (blocks, transactions, etc.) */
  blockchain?: Maybe<BlockchainQuery>;
  blocks?: Maybe<Array<Maybe<Block>>>;
  blocks_signatures?: Maybe<Array<Maybe<BlockSignatures>>>;
  cost?: Maybe<Cost>;
  /** Returns account counterparties */
  counterparties?: Maybe<Array<Maybe<Counterparty>>>;
  /** Flex API */
  flex: FlexQuery;
  /** FT API */
  ft: FungibleTokenQuery;
  info?: Maybe<Info>;
  /**
   * Version of the service that exposes recentExtInMessageStatuses query and
   * recentExtInMessageStatuses subscription
   *
   * Complexity 0
   */
  messageMonitorVersion: Scalars['String'];
  messages?: Maybe<Array<Maybe<Message>>>;
  price: Price;
  /**
   * Returns current processing status for each message.
   * Returns the result transaction if the message was successfully processed, in case of TIMEOUT
   * tries to return the result of transaction emulation.
   */
  recentExtInMessageStatuses: Array<MessageMonitoringResult>;
  /** Statistics API */
  statistics: StatisticsQuery;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
  zerostates?: Maybe<Array<Maybe<Zerostate>>>;
};


export type QueryAccountsArgs = {
  filter?: InputMaybe<AccountFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<QueryOrderBy>>>;
  timeout?: InputMaybe<Scalars['Float']>;
};


export type QueryAggregateAccountsArgs = {
  fields?: InputMaybe<Array<InputMaybe<FieldAggregation>>>;
  filter?: InputMaybe<AccountFilter>;
};


export type QueryAggregateBlockSignaturesArgs = {
  fields?: InputMaybe<Array<InputMaybe<FieldAggregation>>>;
  filter?: InputMaybe<BlockSignaturesFilter>;
};


export type QueryAggregateBlocksArgs = {
  fields?: InputMaybe<Array<InputMaybe<FieldAggregation>>>;
  filter?: InputMaybe<BlockFilter>;
};


export type QueryAggregateMessagesArgs = {
  fields?: InputMaybe<Array<InputMaybe<FieldAggregation>>>;
  filter?: InputMaybe<MessageFilter>;
};


export type QueryAggregateTransactionsArgs = {
  fields?: InputMaybe<Array<InputMaybe<FieldAggregation>>>;
  filter?: InputMaybe<TransactionFilter>;
};


export type QueryBlocksArgs = {
  filter?: InputMaybe<BlockFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<QueryOrderBy>>>;
  timeout?: InputMaybe<Scalars['Float']>;
};


export type QueryBlocks_SignaturesArgs = {
  filter?: InputMaybe<BlockSignaturesFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<QueryOrderBy>>>;
  timeout?: InputMaybe<Scalars['Float']>;
};


export type QueryCostArgs = {
  dryRun?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCounterpartiesArgs = {
  account: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryFlexArgs = {
  globalConfig?: InputMaybe<Scalars['String']>;
  superRoot?: InputMaybe<Scalars['String']>;
};


export type QueryMessagesArgs = {
  filter?: InputMaybe<MessageFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<QueryOrderBy>>>;
  timeout?: InputMaybe<Scalars['Float']>;
};


export type QueryRecentExtInMessageStatusesArgs = {
  messages: Array<MessageMonitoringParams>;
};


export type QueryTransactionsArgs = {
  filter?: InputMaybe<TransactionFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<QueryOrderBy>>>;
  timeout?: InputMaybe<Scalars['Float']>;
};


export type QueryZerostatesArgs = {
  filter?: InputMaybe<ZerostateFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<QueryOrderBy>>>;
  timeout?: InputMaybe<Scalars['Float']>;
};

/**
 * Specify how to sort results.
 * You can sort documents in result set using more than one field.
 */
export type QueryOrderBy = {
  /** Sort order direction */
  direction?: InputMaybe<QueryOrderByDirection>;
  /**
   * Path to field which must be used as a sort criteria.
   * If field resides deep in structure path items must be separated with dot (e.g. "foo.bar.baz").
   */
  path?: InputMaybe<Scalars['String']>;
};

/** Specify sort order direction */
export enum QueryOrderByDirection {
  /** Documents will be sorted in ascended order (e.g. from A to Z) */
  Asc = 'ASC',
  /** Documents will be sorted in descendant order (e.g. from Z to A) */
  Desc = 'DESC'
}

export enum RecentExtInMsgStatusType {
  /** Returned when the message was processed and included into finalized block before waitUntil block time */
  Finalized = 'FINALIZED',
  /** Reserved for future statuses. Is never returned. */
  Reserved = 'RESERVED',
  /** Returned when the message was not processed until waitUntil block time */
  Timeout = 'TIMEOUT'
}

/**
 *
 * Complexity 0
 */
export type RecentExtInMsgTransaction = {
  __typename?: 'RecentExtInMsgTransaction';
  /**
   *
   * Complexity 0
   */
  aborted: Scalars['Boolean'];
  compute?: Maybe<RecentExtInMsgTransactionCompute>;
  /**
   *
   * Complexity 0
   */
  hash?: Maybe<Scalars['String']>;
};

/**
 *
 * Complexity 0
 */
export type RecentExtInMsgTransactionCompute = {
  __typename?: 'RecentExtInMsgTransactionCompute';
  /**
   *
   * Complexity 0
   */
  exit_code: Scalars['Int'];
};

/**
 *
 * Complexity 10
 */
export type RempReceipt = {
  __typename?: 'RempReceipt';
  /**
   *
   * Complexity 0
   */
  json: Scalars['RempReceiptJson'];
  kind: RempReceiptKind;
  /**
   *
   * Complexity 0
   */
  messageId: Scalars['String'];
  /**
   *
   * Complexity 0
   */
  timestamp: Scalars['Float'];
};

export enum RempReceiptKind {
  Finalized = 'Finalized',
  IncludedIntoAcceptedBlock = 'IncludedIntoAcceptedBlock',
  IncludedIntoBlock = 'IncludedIntoBlock',
  Other = 'Other',
  RejectedByFullnode = 'RejectedByFullnode',
  SentToValidators = 'SentToValidators'
}

/** Request with external inbound message */
export type Request = {
  /** Serialized message in base64 */
  body?: InputMaybe<Scalars['String']>;
  /** Message expiration time (unix time in ms) */
  expireAt?: InputMaybe<Scalars['Float']>;
  /** 256-bit Hash of message in base64 */
  id?: InputMaybe<Scalars['String']>;
};

export enum SkipReasonEnum {
  BadState = 'BadState',
  NoGas = 'NoGas',
  NoState = 'NoState'
}

export type SkipReasonEnumFilter = {
  eq?: InputMaybe<SkipReasonEnum>;
  ge?: InputMaybe<SkipReasonEnum>;
  gt?: InputMaybe<SkipReasonEnum>;
  in?: InputMaybe<Array<InputMaybe<SkipReasonEnum>>>;
  le?: InputMaybe<SkipReasonEnum>;
  lt?: InputMaybe<SkipReasonEnum>;
  ne?: InputMaybe<SkipReasonEnum>;
  notIn?: InputMaybe<Array<InputMaybe<SkipReasonEnum>>>;
};

export enum SplitTypeEnum {
  Merge = 'Merge',
  None = 'None',
  Split = 'Split'
}

export type SplitTypeEnumFilter = {
  eq?: InputMaybe<SplitTypeEnum>;
  ge?: InputMaybe<SplitTypeEnum>;
  gt?: InputMaybe<SplitTypeEnum>;
  in?: InputMaybe<Array<InputMaybe<SplitTypeEnum>>>;
  le?: InputMaybe<SplitTypeEnum>;
  lt?: InputMaybe<SplitTypeEnum>;
  ne?: InputMaybe<SplitTypeEnum>;
  notIn?: InputMaybe<Array<InputMaybe<SplitTypeEnum>>>;
};

/**
 *
 * Complexity 0
 */
export type StatisticsQuery = {
  __typename?: 'StatisticsQuery';
  /** Statistics related to accounts */
  accounts: AccountsStatisticsQuery;
  /** Statistics related to blocks */
  blocks: BlocksStatisticsQuery;
  /** Statistics related to depools */
  depools: DepoolsStatisticsQuery;
  /** Statistics related to messages */
  messages: MessagesStatisticsQuery;
  /** Statistics related to transactions */
  transactions: TransactionsStatisticsQuery;
  /** Statistics related to validators */
  validators: ValidatorsStatisticsQuery;
  /**
   * Stat API version
   *
   * Complexity 0
   */
  version: Scalars['String'];
};

export type StringArrayFilter = {
  all?: InputMaybe<StringFilter>;
  any?: InputMaybe<StringFilter>;
};

export type StringFilter = {
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  accounts?: Maybe<Account>;
  blocks?: Maybe<Block>;
  blocks_signatures?: Maybe<BlockSignatures>;
  counterparties?: Maybe<Counterparty>;
  flexMarketOrderBook: FlexOrderBook;
  flexMarketPriceHistory: Array<FlexPriceSummary>;
  flexMarketRecentTrades: Array<FlexTrade>;
  flexUserOrders: Array<FlexUserOrder>;
  flexUserTrades: Array<FlexUserTrade>;
  flexWallets: Array<FlexWallet>;
  messages?: Maybe<Message>;
  /**
   * Subscribes for message processing results.
   * User will receive exactly one result per each message.
   */
  recentExtInMessageStatuses: MessageMonitoringResult;
  rempReceipts?: Maybe<RempReceipt>;
  transactions?: Maybe<Transaction>;
  zerostates?: Maybe<Zerostate>;
};


export type SubscriptionAccountsArgs = {
  filter?: InputMaybe<AccountFilter>;
};


export type SubscriptionBlocksArgs = {
  filter?: InputMaybe<BlockFilter>;
};


export type SubscriptionBlocks_SignaturesArgs = {
  filter?: InputMaybe<BlockSignaturesFilter>;
};


export type SubscriptionCounterpartiesArgs = {
  filter?: InputMaybe<CounterpartyFilter>;
};


export type SubscriptionFlexMarketOrderBookArgs = {
  globalConfig?: InputMaybe<Scalars['String']>;
  pairAddress?: InputMaybe<Scalars['String']>;
  pairTicker?: InputMaybe<Scalars['String']>;
  superRoot?: InputMaybe<Scalars['String']>;
};


export type SubscriptionFlexMarketPriceHistoryArgs = {
  countBack?: InputMaybe<Scalars['Int']>;
  globalConfig?: InputMaybe<Scalars['String']>;
  pairAddress?: InputMaybe<Scalars['String']>;
  pairTicker?: InputMaybe<Scalars['String']>;
  resolution?: InputMaybe<Scalars['Int']>;
  startTime?: InputMaybe<Scalars['Int']>;
  superRoot?: InputMaybe<Scalars['String']>;
};


export type SubscriptionFlexMarketRecentTradesArgs = {
  after?: InputMaybe<Scalars['String']>;
  globalConfig?: InputMaybe<Scalars['String']>;
  pairAddress?: InputMaybe<Scalars['String']>;
  pairTicker?: InputMaybe<Scalars['String']>;
  superRoot?: InputMaybe<Scalars['String']>;
};


export type SubscriptionFlexUserOrdersArgs = {
  globalConfig?: InputMaybe<Scalars['String']>;
  superRoot?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};


export type SubscriptionFlexUserTradesArgs = {
  after?: InputMaybe<Scalars['String']>;
  globalConfig?: InputMaybe<Scalars['String']>;
  superRoot?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};


export type SubscriptionFlexWalletsArgs = {
  after?: InputMaybe<Scalars['String']>;
  clientAddress: Scalars['String'];
  dappPubkey?: InputMaybe<Scalars['String']>;
  globalConfig?: InputMaybe<Scalars['String']>;
  superRoot?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type SubscriptionMessagesArgs = {
  filter?: InputMaybe<MessageFilter>;
};


export type SubscriptionRecentExtInMessageStatusesArgs = {
  messages: Array<MessageMonitoringParams>;
};


export type SubscriptionRempReceiptsArgs = {
  messageId: Scalars['String'];
};


export type SubscriptionTransactionsArgs = {
  filter?: InputMaybe<TransactionFilter>;
};


export type SubscriptionZerostatesArgs = {
  filter?: InputMaybe<ZerostateFilter>;
};

export enum TokenSort {
  LastTransferFirst = 'LAST_TRANSFER_FIRST',
  Name = 'NAME',
  NewestToOldest = 'NEWEST_TO_OLDEST'
}

export enum TokenTransferTypeFilter {
  Burn = 'BURN',
  Mint = 'MINT',
  RevertBurn = 'REVERT_BURN',
  RevertMint = 'REVERT_MINT',
  RevertTransfer = 'REVERT_TRANSFER',
  Transfer = 'TRANSFER'
}

/**
 * TON Transaction
 *
 * Complexity 10
 */
export type Transaction = {
  __typename?: 'Transaction';
  /**
   *
   * Complexity 0
   */
  aborted?: Maybe<Scalars['Boolean']>;
  account?: Maybe<Account>;
  /**
   *
   * Complexity 0
   */
  account_addr?: Maybe<Scalars['String']>;
  action?: Maybe<TransactionAction>;
  /**
   * Account balance change after the transaction.
   * Because fwd_fee is collected by the validators of the receiving shard,
   * total_fees value does not include Sum(out_msg.fwd_fee[]), but includes in_msg.fwd_fee.
   *
   * The formula is:
   * balance_delta = in_msg.value - total_fees - Sum(out_msg.value[]) - Sum(out_msg.fwd_fee[])
   *
   * Complexity 0
   */
  balance_delta?: Maybe<Scalars['String']>;
  /**
   * Account balance change after the transaction.
   * Because fwd_fee is collected by the validators of the receiving shard,
   * total_fees value does not include Sum(out_msg.fwd_fee[]), but includes in_msg.fwd_fee.
   *
   * The formula is:
   * balance_delta = in_msg.value - total_fees - Sum(out_msg.value[]) - Sum(out_msg.fwd_fee[])
   */
  balance_delta_other?: Maybe<Array<Maybe<OtherCurrency>>>;
  block?: Maybe<Block>;
  /**
   *
   * Complexity 0
   */
  block_id?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 4
   */
  boc?: Maybe<Scalars['String']>;
  bounce?: Maybe<TransactionBounce>;
  /**
   * Collection-unique field for pagination and sorting. This field is designed to retain logical order.
   *
   * Complexity 0
   */
  chain_order?: Maybe<Scalars['String']>;
  compute?: Maybe<TransactionCompute>;
  credit?: Maybe<TransactionCredit>;
  /**
   *
   * Complexity 0
   */
  credit_first?: Maybe<Scalars['Boolean']>;
  /**
   *
   * Complexity 0
   */
  destroyed?: Maybe<Scalars['Boolean']>;
  /**
   * The end state of an account after a transaction, 1 is returned to indicate a finalized transaction at an active account
   * - 0 – uninit
   * - 1 – active
   * - 2 – frozen
   * - 3 – nonExist
   *
   * Complexity 0
   */
  end_status?: Maybe<Scalars['Int']>;
  end_status_name?: Maybe<AccountStatusEnum>;
  /**
   * Fee for inbound external message import.
   *
   * Complexity 0
   */
  ext_in_msg_fee?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  id?: Maybe<Scalars['String']>;
  in_message?: Maybe<Message>;
  /**
   *
   * Complexity 0
   */
  in_msg?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  installed?: Maybe<Scalars['Boolean']>;
  /**
   * Logical time. A component of the TON Blockchain that also plays an important role in message delivery is the logical time, usually denoted by Lt. It is a non-negative 64-bit integer, assigned to certain events. For more details, see [the TON blockchain specification](https://test.ton.org/tblkch.pdf).
   *
   * Complexity 0
   */
  lt?: Maybe<Scalars['String']>;
  /**
   * Merkle update field
   *
   * Complexity 0
   */
  new_hash?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  now?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  now_string?: Maybe<Scalars['String']>;
  /**
   * Merkle update field
   *
   * Complexity 0
   */
  old_hash?: Maybe<Scalars['String']>;
  /**
   * The initial state of account. Note that in this case the query may return 0, if the account was not active before the transaction and 1 if it was already active
   * - 0 – uninit
   * - 1 – active
   * - 2 – frozen
   * - 3 – nonExist
   *
   * Complexity 0
   */
  orig_status?: Maybe<Scalars['Int']>;
  orig_status_name?: Maybe<AccountStatusEnum>;
  out_messages?: Maybe<Array<Maybe<Message>>>;
  /**
   *
   * Complexity 0
   */
  out_msgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The number of generated outbound messages (one of the common transaction parameters defined by the specification)
   *
   * Complexity 0
   */
  outmsg_cnt?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  prepare_transaction?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  prev_trans_hash?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  prev_trans_lt?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  proof?: Maybe<Scalars['String']>;
  split_info?: Maybe<TransactionSplitInfo>;
  /**
   * Transaction processing status
   * - 0 – unknown
   * - 1 – preliminary
   * - 2 – proposed
   * - 3 – finalized
   * - 4 – refused
   *
   * Complexity 0
   */
  status?: Maybe<Scalars['Int']>;
  status_name?: Maybe<TransactionProcessingStatusEnum>;
  storage?: Maybe<TransactionStorage>;
  tokenTransfer?: Maybe<FungibleTokenTransfer>;
  /**
   * Total amount of fees collected by the validators.
   * Because fwd_fee is collected by the validators of the receiving shard,
   * total_fees value does not include Sum(out_msg.fwd_fee[]), but includes in_msg.fwd_fee.
   * The formula is:
   * total_fees = in_msg.value - balance_delta - Sum(out_msg.value[]) - Sum(out_msg.fwd_fee[])
   *
   * Complexity 0
   */
  total_fees?: Maybe<Scalars['String']>;
  /** Same as above, but reserved for non gram coins that may appear in the blockchain */
  total_fees_other?: Maybe<Array<Maybe<OtherCurrency>>>;
  /**
   * Transaction type according to the original blockchain specification, clause 4.2.4.
   * - 0 – ordinary
   * - 1 – storage
   * - 2 – tick
   * - 3 – tock
   * - 4 – splitPrepare
   * - 5 – splitInstall
   * - 6 – mergePrepare
   * - 7 – mergeInstall
   *
   * Complexity 0
   */
  tr_type?: Maybe<Scalars['Int']>;
  tr_type_name?: Maybe<TransactionTypeEnum>;
  /**
   *
   * Complexity 0
   */
  tt?: Maybe<Scalars['String']>;
  /**
   * Workchain id of the account address (account_addr field)
   *
   * Complexity 0
   */
  workchain_id?: Maybe<Scalars['Int']>;
};


/**
 * TON Transaction
 *
 * Complexity 10
 */
export type TransactionAccountArgs = {
  timeout?: InputMaybe<Scalars['Int']>;
  when?: InputMaybe<TransactionFilter>;
};


/**
 * TON Transaction
 *
 * Complexity 10
 */
export type TransactionBalance_DeltaArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * TON Transaction
 *
 * Complexity 10
 */
export type TransactionBlockArgs = {
  timeout?: InputMaybe<Scalars['Int']>;
  when?: InputMaybe<TransactionFilter>;
};


/**
 * TON Transaction
 *
 * Complexity 10
 */
export type TransactionExt_In_Msg_FeeArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * TON Transaction
 *
 * Complexity 10
 */
export type TransactionIn_MessageArgs = {
  timeout?: InputMaybe<Scalars['Int']>;
  when?: InputMaybe<TransactionFilter>;
};


/**
 * TON Transaction
 *
 * Complexity 10
 */
export type TransactionLtArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * TON Transaction
 *
 * Complexity 10
 */
export type TransactionOut_MessagesArgs = {
  timeout?: InputMaybe<Scalars['Int']>;
  when?: InputMaybe<TransactionFilter>;
};


/**
 * TON Transaction
 *
 * Complexity 10
 */
export type TransactionPrev_Trans_LtArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 * TON Transaction
 *
 * Complexity 10
 */
export type TransactionTotal_FeesArgs = {
  format?: InputMaybe<BigIntFormat>;
};

/**
 *
 * Complexity 0
 */
export type TransactionAction = {
  __typename?: 'TransactionAction';
  /**
   *
   * Complexity 0
   */
  action_list_hash?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  msgs_created?: Maybe<Scalars['Int']>;
  /**
   * The flag indicates absence of funds required to create an outbound message
   *
   * Complexity 0
   */
  no_funds?: Maybe<Scalars['Boolean']>;
  /**
   *
   * Complexity 0
   */
  result_arg?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  result_code?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  skipped_actions?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  spec_actions?: Maybe<Scalars['Int']>;
  /**
   * - 0 – unchanged
   * - 1 – frozen
   * - 2 – deleted
   *
   * Complexity 0
   */
  status_change?: Maybe<Scalars['Int']>;
  status_change_name?: Maybe<AccountStatusChangeEnum>;
  /**
   *
   * Complexity 0
   */
  success?: Maybe<Scalars['Boolean']>;
  /**
   *
   * Complexity 0
   */
  tot_actions?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  total_action_fees?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  total_fwd_fees?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  total_msg_size_bits?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  total_msg_size_cells?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  valid?: Maybe<Scalars['Boolean']>;
};


/**
 *
 * Complexity 0
 */
export type TransactionActionTotal_Action_FeesArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type TransactionActionTotal_Fwd_FeesArgs = {
  format?: InputMaybe<BigIntFormat>;
};

export type TransactionActionFilter = {
  OR?: InputMaybe<TransactionActionFilter>;
  action_list_hash?: InputMaybe<StringFilter>;
  msgs_created?: InputMaybe<IntFilter>;
  /** The flag indicates absence of funds required to create an outbound message */
  no_funds?: InputMaybe<BooleanFilter>;
  result_arg?: InputMaybe<IntFilter>;
  result_code?: InputMaybe<IntFilter>;
  skipped_actions?: InputMaybe<IntFilter>;
  spec_actions?: InputMaybe<IntFilter>;
  /**
   * - 0 – unchanged
   * - 1 – frozen
   * - 2 – deleted
   */
  status_change?: InputMaybe<IntFilter>;
  status_change_name?: InputMaybe<AccountStatusChangeEnumFilter>;
  success?: InputMaybe<BooleanFilter>;
  tot_actions?: InputMaybe<IntFilter>;
  total_action_fees?: InputMaybe<StringFilter>;
  total_fwd_fees?: InputMaybe<StringFilter>;
  total_msg_size_bits?: InputMaybe<FloatFilter>;
  total_msg_size_cells?: InputMaybe<FloatFilter>;
  valid?: InputMaybe<BooleanFilter>;
};

/**
 *
 * Complexity 0
 */
export type TransactionBounce = {
  __typename?: 'TransactionBounce';
  /**
   * - 0 – negFunds
   * - 1 – noFunds
   * - 2 – ok
   *
   * Complexity 0
   */
  bounce_type?: Maybe<Scalars['Int']>;
  bounce_type_name?: Maybe<BounceTypeEnum>;
  /**
   *
   * Complexity 0
   */
  fwd_fees?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  msg_fees?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  msg_size_bits?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  msg_size_cells?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  req_fwd_fees?: Maybe<Scalars['String']>;
};


/**
 *
 * Complexity 0
 */
export type TransactionBounceFwd_FeesArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type TransactionBounceMsg_FeesArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type TransactionBounceReq_Fwd_FeesArgs = {
  format?: InputMaybe<BigIntFormat>;
};

export type TransactionBounceFilter = {
  OR?: InputMaybe<TransactionBounceFilter>;
  /**
   * - 0 – negFunds
   * - 1 – noFunds
   * - 2 – ok
   */
  bounce_type?: InputMaybe<IntFilter>;
  bounce_type_name?: InputMaybe<BounceTypeEnumFilter>;
  fwd_fees?: InputMaybe<StringFilter>;
  msg_fees?: InputMaybe<StringFilter>;
  msg_size_bits?: InputMaybe<FloatFilter>;
  msg_size_cells?: InputMaybe<FloatFilter>;
  req_fwd_fees?: InputMaybe<StringFilter>;
};

/**
 *
 * Complexity 0
 */
export type TransactionCompute = {
  __typename?: 'TransactionCompute';
  /**
   * The flag reflects whether this has resulted in the activation of a previously frozen, uninitialized or non-existent account.
   *
   * Complexity 0
   */
  account_activated?: Maybe<Scalars['Boolean']>;
  /**
   * - 0 – skipped
   * - 1 – vm
   *
   * Complexity 0
   */
  compute_type?: Maybe<Scalars['Int']>;
  compute_type_name?: Maybe<ComputeTypeEnum>;
  /**
   *
   * Complexity 0
   */
  exit_arg?: Maybe<Scalars['Int']>;
  /**
   * These parameter represents the status values returned by TVM; for a successful transaction, exit_code has to be 0 or 1
   *
   * Complexity 0
   */
  exit_code?: Maybe<Scalars['Int']>;
  /**
   * This parameter may be non-zero only for external inbound messages. It is the lesser of either the amount of gas that can be paid from the account balance or the maximum gas credit
   *
   * Complexity 0
   */
  gas_credit?: Maybe<Scalars['Int']>;
  /**
   * This parameter reflects the total gas fees collected by the validators for executing this transaction. It must be equal to the product of gas_used and gas_price from the current block header.
   *
   * Complexity 0
   */
  gas_fees?: Maybe<Scalars['String']>;
  /**
   * This parameter reflects the gas limit for this instance of TVM. It equals the lesser of either the Grams credited in the credit phase from the value of the inbound message divided by the current gas price, or the global per-transaction gas limit.
   *
   * Complexity 0
   */
  gas_limit?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  gas_used?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  mode?: Maybe<Scalars['Int']>;
  /**
   * This parameter reflects whether the state passed in the message has been used. If it is set, the account_activated flag is used (see below)This parameter reflects whether the state passed in the message has been used. If it is set, the account_activated flag is used (see below)
   *
   * Complexity 0
   */
  msg_state_used?: Maybe<Scalars['Boolean']>;
  /**
   * Reason for skipping the compute phase. According to the specification, the phase can be skipped due to the absence of funds to buy gas, absence of state of an account or a message, failure to provide a valid state in the message
   * - 0 – noState
   * - 1 – badState
   * - 2 – noGas
   *
   * Complexity 0
   */
  skipped_reason?: Maybe<Scalars['Int']>;
  skipped_reason_name?: Maybe<SkipReasonEnum>;
  /**
   * This flag is set if and only if exit_code is either 0 or 1.
   *
   * Complexity 0
   */
  success?: Maybe<Scalars['Boolean']>;
  /**
   * This parameter is the representation hashes of the resulting state of TVM.
   *
   * Complexity 0
   */
  vm_final_state_hash?: Maybe<Scalars['String']>;
  /**
   * This parameter is the representation hashes of the original state of TVM.
   *
   * Complexity 0
   */
  vm_init_state_hash?: Maybe<Scalars['String']>;
  /**
   * the total number of steps performed by TVM (usually equal to two plus the number of instructions executed, including implicit RETs)
   *
   * Complexity 0
   */
  vm_steps?: Maybe<Scalars['Float']>;
};


/**
 *
 * Complexity 0
 */
export type TransactionComputeGas_FeesArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type TransactionComputeGas_LimitArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type TransactionComputeGas_UsedArgs = {
  format?: InputMaybe<BigIntFormat>;
};

export type TransactionComputeFilter = {
  OR?: InputMaybe<TransactionComputeFilter>;
  /** The flag reflects whether this has resulted in the activation of a previously frozen, uninitialized or non-existent account. */
  account_activated?: InputMaybe<BooleanFilter>;
  /**
   * - 0 – skipped
   * - 1 – vm
   */
  compute_type?: InputMaybe<IntFilter>;
  compute_type_name?: InputMaybe<ComputeTypeEnumFilter>;
  exit_arg?: InputMaybe<IntFilter>;
  /** These parameter represents the status values returned by TVM; for a successful transaction, exit_code has to be 0 or 1 */
  exit_code?: InputMaybe<IntFilter>;
  /** This parameter may be non-zero only for external inbound messages. It is the lesser of either the amount of gas that can be paid from the account balance or the maximum gas credit */
  gas_credit?: InputMaybe<IntFilter>;
  /** This parameter reflects the total gas fees collected by the validators for executing this transaction. It must be equal to the product of gas_used and gas_price from the current block header. */
  gas_fees?: InputMaybe<StringFilter>;
  /** This parameter reflects the gas limit for this instance of TVM. It equals the lesser of either the Grams credited in the credit phase from the value of the inbound message divided by the current gas price, or the global per-transaction gas limit. */
  gas_limit?: InputMaybe<StringFilter>;
  gas_used?: InputMaybe<StringFilter>;
  mode?: InputMaybe<IntFilter>;
  /** This parameter reflects whether the state passed in the message has been used. If it is set, the account_activated flag is used (see below)This parameter reflects whether the state passed in the message has been used. If it is set, the account_activated flag is used (see below) */
  msg_state_used?: InputMaybe<BooleanFilter>;
  /**
   * Reason for skipping the compute phase. According to the specification, the phase can be skipped due to the absence of funds to buy gas, absence of state of an account or a message, failure to provide a valid state in the message
   * - 0 – noState
   * - 1 – badState
   * - 2 – noGas
   */
  skipped_reason?: InputMaybe<IntFilter>;
  skipped_reason_name?: InputMaybe<SkipReasonEnumFilter>;
  /** This flag is set if and only if exit_code is either 0 or 1. */
  success?: InputMaybe<BooleanFilter>;
  /** This parameter is the representation hashes of the resulting state of TVM. */
  vm_final_state_hash?: InputMaybe<StringFilter>;
  /** This parameter is the representation hashes of the original state of TVM. */
  vm_init_state_hash?: InputMaybe<StringFilter>;
  /** the total number of steps performed by TVM (usually equal to two plus the number of instructions executed, including implicit RETs) */
  vm_steps?: InputMaybe<FloatFilter>;
};

/**
 *
 * Complexity 0
 */
export type TransactionCredit = {
  __typename?: 'TransactionCredit';
  /**
   *
   * Complexity 0
   */
  credit?: Maybe<Scalars['String']>;
  credit_other?: Maybe<Array<Maybe<OtherCurrency>>>;
  /**
   * The sum of due_fees_collected and credit must equal the value of the message received, plus its ihr_fee if the message has not been received via Instant Hypercube Routing, IHR (otherwise the ihr_fee is awarded to the validators).
   *
   * Complexity 0
   */
  due_fees_collected?: Maybe<Scalars['String']>;
};


/**
 *
 * Complexity 0
 */
export type TransactionCreditCreditArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type TransactionCreditDue_Fees_CollectedArgs = {
  format?: InputMaybe<BigIntFormat>;
};

export type TransactionCreditFilter = {
  OR?: InputMaybe<TransactionCreditFilter>;
  credit?: InputMaybe<StringFilter>;
  credit_other?: InputMaybe<OtherCurrencyArrayFilter>;
  /** The sum of due_fees_collected and credit must equal the value of the message received, plus its ihr_fee if the message has not been received via Instant Hypercube Routing, IHR (otherwise the ihr_fee is awarded to the validators). */
  due_fees_collected?: InputMaybe<StringFilter>;
};

/** TON Transaction */
export type TransactionFilter = {
  OR?: InputMaybe<TransactionFilter>;
  aborted?: InputMaybe<BooleanFilter>;
  account?: InputMaybe<AccountFilter>;
  account_addr?: InputMaybe<StringFilter>;
  action?: InputMaybe<TransactionActionFilter>;
  /**
   * Account balance change after the transaction.
   * Because fwd_fee is collected by the validators of the receiving shard,
   * total_fees value does not include Sum(out_msg.fwd_fee[]), but includes in_msg.fwd_fee.
   *
   * The formula is:
   * balance_delta = in_msg.value - total_fees - Sum(out_msg.value[]) - Sum(out_msg.fwd_fee[])
   */
  balance_delta?: InputMaybe<StringFilter>;
  /**
   * Account balance change after the transaction.
   * Because fwd_fee is collected by the validators of the receiving shard,
   * total_fees value does not include Sum(out_msg.fwd_fee[]), but includes in_msg.fwd_fee.
   *
   * The formula is:
   * balance_delta = in_msg.value - total_fees - Sum(out_msg.value[]) - Sum(out_msg.fwd_fee[])
   */
  balance_delta_other?: InputMaybe<OtherCurrencyArrayFilter>;
  block?: InputMaybe<BlockFilter>;
  block_id?: InputMaybe<StringFilter>;
  boc?: InputMaybe<StringFilter>;
  bounce?: InputMaybe<TransactionBounceFilter>;
  /** Collection-unique field for pagination and sorting. This field is designed to retain logical order. */
  chain_order?: InputMaybe<StringFilter>;
  compute?: InputMaybe<TransactionComputeFilter>;
  credit?: InputMaybe<TransactionCreditFilter>;
  credit_first?: InputMaybe<BooleanFilter>;
  destroyed?: InputMaybe<BooleanFilter>;
  /**
   * The end state of an account after a transaction, 1 is returned to indicate a finalized transaction at an active account
   * - 0 – uninit
   * - 1 – active
   * - 2 – frozen
   * - 3 – nonExist
   */
  end_status?: InputMaybe<IntFilter>;
  end_status_name?: InputMaybe<AccountStatusEnumFilter>;
  /** Fee for inbound external message import. */
  ext_in_msg_fee?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  in_message?: InputMaybe<MessageFilter>;
  in_msg?: InputMaybe<StringFilter>;
  installed?: InputMaybe<BooleanFilter>;
  /** Logical time. A component of the TON Blockchain that also plays an important role in message delivery is the logical time, usually denoted by Lt. It is a non-negative 64-bit integer, assigned to certain events. For more details, see [the TON blockchain specification](https://test.ton.org/tblkch.pdf). */
  lt?: InputMaybe<StringFilter>;
  /** Merkle update field */
  new_hash?: InputMaybe<StringFilter>;
  now?: InputMaybe<FloatFilter>;
  /** Merkle update field */
  old_hash?: InputMaybe<StringFilter>;
  /**
   * The initial state of account. Note that in this case the query may return 0, if the account was not active before the transaction and 1 if it was already active
   * - 0 – uninit
   * - 1 – active
   * - 2 – frozen
   * - 3 – nonExist
   */
  orig_status?: InputMaybe<IntFilter>;
  orig_status_name?: InputMaybe<AccountStatusEnumFilter>;
  out_messages?: InputMaybe<MessageArrayFilter>;
  out_msgs?: InputMaybe<StringArrayFilter>;
  /** The number of generated outbound messages (one of the common transaction parameters defined by the specification) */
  outmsg_cnt?: InputMaybe<IntFilter>;
  prepare_transaction?: InputMaybe<StringFilter>;
  prev_trans_hash?: InputMaybe<StringFilter>;
  prev_trans_lt?: InputMaybe<StringFilter>;
  proof?: InputMaybe<StringFilter>;
  split_info?: InputMaybe<TransactionSplitInfoFilter>;
  /**
   * Transaction processing status
   * - 0 – unknown
   * - 1 – preliminary
   * - 2 – proposed
   * - 3 – finalized
   * - 4 – refused
   */
  status?: InputMaybe<IntFilter>;
  status_name?: InputMaybe<TransactionProcessingStatusEnumFilter>;
  storage?: InputMaybe<TransactionStorageFilter>;
  /**
   * Total amount of fees collected by the validators.
   * Because fwd_fee is collected by the validators of the receiving shard,
   * total_fees value does not include Sum(out_msg.fwd_fee[]), but includes in_msg.fwd_fee.
   * The formula is:
   * total_fees = in_msg.value - balance_delta - Sum(out_msg.value[]) - Sum(out_msg.fwd_fee[])
   */
  total_fees?: InputMaybe<StringFilter>;
  /** Same as above, but reserved for non gram coins that may appear in the blockchain */
  total_fees_other?: InputMaybe<OtherCurrencyArrayFilter>;
  /**
   * Transaction type according to the original blockchain specification, clause 4.2.4.
   * - 0 – ordinary
   * - 1 – storage
   * - 2 – tick
   * - 3 – tock
   * - 4 – splitPrepare
   * - 5 – splitInstall
   * - 6 – mergePrepare
   * - 7 – mergeInstall
   */
  tr_type?: InputMaybe<IntFilter>;
  tr_type_name?: InputMaybe<TransactionTypeEnumFilter>;
  tt?: InputMaybe<StringFilter>;
  /** Workchain id of the account address (account_addr field) */
  workchain_id?: InputMaybe<IntFilter>;
};

export enum TransactionProcessingStatusEnum {
  Finalized = 'Finalized',
  Preliminary = 'Preliminary',
  Proposed = 'Proposed',
  Refused = 'Refused',
  Unknown = 'Unknown'
}

export type TransactionProcessingStatusEnumFilter = {
  eq?: InputMaybe<TransactionProcessingStatusEnum>;
  ge?: InputMaybe<TransactionProcessingStatusEnum>;
  gt?: InputMaybe<TransactionProcessingStatusEnum>;
  in?: InputMaybe<Array<InputMaybe<TransactionProcessingStatusEnum>>>;
  le?: InputMaybe<TransactionProcessingStatusEnum>;
  lt?: InputMaybe<TransactionProcessingStatusEnum>;
  ne?: InputMaybe<TransactionProcessingStatusEnum>;
  notIn?: InputMaybe<Array<InputMaybe<TransactionProcessingStatusEnum>>>;
};

/**
 *
 * Complexity 0
 */
export type TransactionSplitInfo = {
  __typename?: 'TransactionSplitInfo';
  /**
   *
   * Complexity 0
   */
  acc_split_depth?: Maybe<Scalars['Int']>;
  /**
   * length of the current shard prefix
   *
   * Complexity 0
   */
  cur_shard_pfx_len?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  sibling_addr?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  this_addr?: Maybe<Scalars['String']>;
};

export type TransactionSplitInfoFilter = {
  OR?: InputMaybe<TransactionSplitInfoFilter>;
  acc_split_depth?: InputMaybe<IntFilter>;
  /** length of the current shard prefix */
  cur_shard_pfx_len?: InputMaybe<IntFilter>;
  sibling_addr?: InputMaybe<StringFilter>;
  this_addr?: InputMaybe<StringFilter>;
};

/**
 *
 * Complexity 0
 */
export type TransactionStorage = {
  __typename?: 'TransactionStorage';
  /**
   * This field represents account status change after the transaction is completed.
   * - 0 – unchanged
   * - 1 – frozen
   * - 2 – deleted
   *
   * Complexity 0
   */
  status_change?: Maybe<Scalars['Int']>;
  status_change_name?: Maybe<AccountStatusChangeEnum>;
  /**
   * This field defines the amount of storage fees collected in grams.
   *
   * Complexity 0
   */
  storage_fees_collected?: Maybe<Scalars['String']>;
  /**
   * This field represents the amount of due fees in grams, it might be empty.
   *
   * Complexity 0
   */
  storage_fees_due?: Maybe<Scalars['String']>;
};


/**
 *
 * Complexity 0
 */
export type TransactionStorageStorage_Fees_CollectedArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type TransactionStorageStorage_Fees_DueArgs = {
  format?: InputMaybe<BigIntFormat>;
};

export type TransactionStorageFilter = {
  OR?: InputMaybe<TransactionStorageFilter>;
  /**
   * This field represents account status change after the transaction is completed.
   * - 0 – unchanged
   * - 1 – frozen
   * - 2 – deleted
   */
  status_change?: InputMaybe<IntFilter>;
  status_change_name?: InputMaybe<AccountStatusChangeEnumFilter>;
  /** This field defines the amount of storage fees collected in grams. */
  storage_fees_collected?: InputMaybe<StringFilter>;
  /** This field represents the amount of due fees in grams, it might be empty. */
  storage_fees_due?: InputMaybe<StringFilter>;
};

export enum TransactionTypeEnum {
  MergeInstall = 'MergeInstall',
  MergePrepare = 'MergePrepare',
  Ordinary = 'Ordinary',
  SplitInstall = 'SplitInstall',
  SplitPrepare = 'SplitPrepare',
  Storage = 'Storage',
  Tick = 'Tick',
  Tock = 'Tock'
}

export type TransactionTypeEnumFilter = {
  eq?: InputMaybe<TransactionTypeEnum>;
  ge?: InputMaybe<TransactionTypeEnum>;
  gt?: InputMaybe<TransactionTypeEnum>;
  in?: InputMaybe<Array<InputMaybe<TransactionTypeEnum>>>;
  le?: InputMaybe<TransactionTypeEnum>;
  lt?: InputMaybe<TransactionTypeEnum>;
  ne?: InputMaybe<TransactionTypeEnum>;
  notIn?: InputMaybe<Array<InputMaybe<TransactionTypeEnum>>>;
};

/**
 *
 * Complexity 100
 */
export type TransactionsStatisticsQuery = {
  __typename?: 'TransactionsStatisticsQuery';
  /**
   * Count of all transactions by last 24 hours
   *
   * Complexity 0
   */
  lastDayCount?: Maybe<Scalars['Int']>;
  /**
   * Count of ordinary transactions by last 24 hours
   *
   * Complexity 0
   */
  lastDayOrdinaryCount?: Maybe<Scalars['Int']>;
  /**
   * Average transactions rate per second for last 2 minutes
   *
   * Complexity 0
   */
  ratePerSecond?: Maybe<Scalars['Float']>;
  /**
   * Count of all transactions
   *
   * Complexity 0
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * Count of ordinary transactions
   *
   * Complexity 0
   */
  totalOrdinaryCount?: Maybe<Scalars['Int']>;
};

export enum TransferTypeFilter {
  Burn = 'BURN',
  Mint = 'MINT',
  Receive = 'RECEIVE',
  RevertBurn = 'REVERT_BURN',
  RevertMint = 'REVERT_MINT',
  RevertReceive = 'REVERT_RECEIVE',
  RevertSend = 'REVERT_SEND',
  Send = 'SEND'
}

/**
 *
 * Complexity 0
 */
export type ValidatorSet = {
  __typename?: 'ValidatorSet';
  list?: Maybe<Array<Maybe<ValidatorSetList>>>;
  /**
   *
   * Complexity 0
   */
  main?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  total?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  total_weight?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  utime_since?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  utime_since_string?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  utime_until?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  utime_until_string?: Maybe<Scalars['String']>;
};


/**
 *
 * Complexity 0
 */
export type ValidatorSetTotal_WeightArgs = {
  format?: InputMaybe<BigIntFormat>;
};

export type ValidatorSetFilter = {
  OR?: InputMaybe<ValidatorSetFilter>;
  list?: InputMaybe<ValidatorSetListArrayFilter>;
  main?: InputMaybe<IntFilter>;
  total?: InputMaybe<IntFilter>;
  total_weight?: InputMaybe<StringFilter>;
  utime_since?: InputMaybe<FloatFilter>;
  utime_until?: InputMaybe<FloatFilter>;
};

/**
 *
 * Complexity 0
 */
export type ValidatorSetList = {
  __typename?: 'ValidatorSetList';
  /**
   *
   * Complexity 0
   */
  adnl_addr?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  public_key?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  weight?: Maybe<Scalars['String']>;
};


/**
 *
 * Complexity 0
 */
export type ValidatorSetListWeightArgs = {
  format?: InputMaybe<BigIntFormat>;
};

export type ValidatorSetListArrayFilter = {
  all?: InputMaybe<ValidatorSetListFilter>;
  any?: InputMaybe<ValidatorSetListFilter>;
};

export type ValidatorSetListFilter = {
  OR?: InputMaybe<ValidatorSetListFilter>;
  adnl_addr?: InputMaybe<StringFilter>;
  public_key?: InputMaybe<StringFilter>;
  weight?: InputMaybe<StringFilter>;
};

/**
 *
 * Complexity 100
 */
export type ValidatorsStatisticsQuery = {
  __typename?: 'ValidatorsStatisticsQuery';
  /**
   * Annual percentage rate
   *
   * Complexity 0
   */
  apr?: Maybe<Scalars['Float']>;
  /**
   * Last cycle validators count delta
   *
   * Complexity 0
   */
  lastCycleCountDelta?: Maybe<Scalars['Int']>;
  /**
   * Validators rewards for last 30 days
   *
   * Complexity 0
   */
  rewardsPer30Days?: Maybe<Scalars['String']>;
  /**
   * Count of active validator set
   *
   * Complexity 0
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * Staked tokens amount
   *
   * Complexity 0
   */
  totalStaked?: Maybe<Scalars['String']>;
};

/**
 * The initial state of the workchain before first block was generated
 *
 * Complexity 60
 */
export type Zerostate = {
  __typename?: 'Zerostate';
  /** Initial accounts state at the workchain start */
  accounts?: Maybe<Array<Maybe<ZerostateAccounts>>>;
  /**
   * Serialized bag of cells of this zerostate encoded with base64
   *
   * Complexity 20
   */
  boc?: Maybe<Scalars['String']>;
  /**
   * Zerostate file hash
   *
   * Complexity 0
   */
  file_hash?: Maybe<Scalars['String']>;
  /**
   * uint32 global network ID
   *
   * Complexity 0
   */
  global_id?: Maybe<Scalars['Int']>;
  /**
   *
   * Complexity 0
   */
  id?: Maybe<Scalars['String']>;
  /** Initial libraries at the workchain start */
  libraries?: Maybe<Array<Maybe<ZerostateLibraries>>>;
  master?: Maybe<ZerostateMaster>;
  /**
   * Zerostate root cell representation hash
   *
   * Complexity 0
   */
  root_hash?: Maybe<Scalars['String']>;
  /**
   * Overall balance of all accounts of the workchain
   *
   * Complexity 0
   */
  total_balance?: Maybe<Scalars['String']>;
  /** Overall balance of all accounts of the workchain in other currencies */
  total_balance_other?: Maybe<Array<Maybe<OtherCurrency>>>;
  /**
   * Zerostate workchain_id
   *
   * Complexity 0
   */
  workchain_id?: Maybe<Scalars['Int']>;
};


/**
 * The initial state of the workchain before first block was generated
 *
 * Complexity 60
 */
export type ZerostateTotal_BalanceArgs = {
  format?: InputMaybe<BigIntFormat>;
};

/**
 *
 * Complexity 0
 */
export type ZerostateAccounts = {
  __typename?: 'ZerostateAccounts';
  /**
   * Returns the current status of the account.
   * ```
   * {
   *   accounts(filter: {acc_type:{eq:1}}){
   *     id
   *     acc_type
   *   }
   * }
   * ```
   *
   * - 0 – uninit
   * - 1 – active
   * - 2 – frozen
   * - 3 – nonExist
   *
   * Complexity 0
   */
  acc_type?: Maybe<Scalars['Int']>;
  acc_type_name?: Maybe<AccountStatusEnum>;
  /**
   * ```
   * {
   *   accounts(orderBy:{path:"balance",direction:DESC}){
   *     balance
   *   }
   * }
   * ```
   *
   * Complexity 0
   */
  balance?: Maybe<Scalars['String']>;
  balance_other?: Maybe<Array<Maybe<OtherCurrency>>>;
  /**
   * Contains sum of all the bits used by the cells of the account. Used in storage fee calculation
   *
   * Complexity 0
   */
  bits?: Maybe<Scalars['String']>;
  /**
   * Bag of cells with the account struct encoded as base64.
   *
   * Complexity 30
   */
  boc?: Maybe<Scalars['String']>;
  /**
   * Contains number of the cells of the account. Used in storage fee calculation
   *
   * Complexity 0
   */
  cells?: Maybe<Scalars['String']>;
  /**
   * If present, contains smart-contract code encoded with in base64.
   * ```
   * {
   *   accounts (filter:{code:{eq:null}}){
   *     id
   *     acc_type
   *   }
   * }
   * ```
   *
   * Complexity 10
   */
  code?: Maybe<Scalars['String']>;
  /**
   * `code` field root hash.
   *
   * Complexity 0
   */
  code_hash?: Maybe<Scalars['String']>;
  /**
   * If present, contains smart-contract data encoded with in base64.
   *
   * Complexity 20
   */
  data?: Maybe<Scalars['String']>;
  /**
   * `data` field root hash.
   *
   * Complexity 0
   */
  data_hash?: Maybe<Scalars['String']>;
  /**
   * If present, accumulates the storage payments that could not be exacted from the balance of the account, represented by a strictly positive amount of nano tokens; it can be present only for uninitialized or frozen accounts that have a balance of zero Grams (but may have non-zero balances in non gram cryptocurrencies). When due_payment becomes larger than the value of a configurable parameter of the blockchain, the ac- count is destroyed altogether, and its balance, if any, is transferred to the zero account.
   * ```
   * {
   *   accounts(filter: { due_payment: { ne: null } })
   *     {
   *       id
   *     }
   * }
   * ```
   *
   * Complexity 0
   */
  due_payment?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  id?: Maybe<Scalars['String']>;
  /**
   * account 's initial code hash (when it was deployed)
   *
   * Complexity 0
   */
  init_code_hash?: Maybe<Scalars['String']>;
  /**
   * Contains either the unixtime of the most recent storage payment
   * collected (usually this is the unixtime of the most recent transaction),
   * or the unixtime when the account was created (again, by a transaction).
   * ```
   * query{
   *   accounts(filter: {
   *     last_paid:{ge:1567296000}
   *   }) {
   *   id
   *   last_paid}
   * }
   * ```
   *
   * Complexity 0
   */
  last_paid?: Maybe<Scalars['Float']>;
  /**
   *
   * Complexity 0
   */
  last_trans_lt?: Maybe<Scalars['String']>;
  /**
   * If present, contains library code used in smart-contract.
   *
   * Complexity 0
   */
  library?: Maybe<Scalars['String']>;
  /**
   * `library` field root hash.
   *
   * Complexity 0
   */
  library_hash?: Maybe<Scalars['String']>;
  /**
   *
   * Complexity 0
   */
  prev_code_hash?: Maybe<Scalars['String']>;
  /**
   * Merkle proof that account is a part of shard state it cut from as a bag of cells with Merkle proof struct encoded as base64.
   *
   * Complexity 0
   */
  proof?: Maybe<Scalars['String']>;
  /**
   * Contains the number of public cells of the account. Used in storage fee calculation.
   *
   * Complexity 0
   */
  public_cells?: Maybe<Scalars['String']>;
  /**
   * Is present and non-zero only in instances of large smart contracts.
   *
   * Complexity 0
   */
  split_depth?: Maybe<Scalars['Int']>;
  /**
   * Contains the representation hash of an instance of `StateInit` when an account is frozen.
   *
   * Complexity 0
   */
  state_hash?: Maybe<Scalars['String']>;
  /**
   * May be present only in the masterchain—and within the masterchain, only in some fundamental smart contracts required for the whole system to function.
   *
   * Complexity 0
   */
  tick?: Maybe<Scalars['Boolean']>;
  /**
   * May be present only in the masterchain—and within the masterchain, only in some fundamental smart contracts required for the whole system to function.
   * ```
   * {
   *   accounts (filter:{tock:{ne:null}}){
   *     id
   *     tock
   *     tick
   *   }
   * }
   * ```
   *
   * Complexity 0
   */
  tock?: Maybe<Scalars['Boolean']>;
  /**
   * Workchain id of the account address (id field).
   *
   * Complexity 0
   */
  workchain_id?: Maybe<Scalars['Int']>;
};


/**
 *
 * Complexity 0
 */
export type ZerostateAccountsBalanceArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type ZerostateAccountsBitsArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type ZerostateAccountsCellsArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type ZerostateAccountsDue_PaymentArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type ZerostateAccountsLast_Trans_LtArgs = {
  format?: InputMaybe<BigIntFormat>;
};


/**
 *
 * Complexity 0
 */
export type ZerostateAccountsPublic_CellsArgs = {
  format?: InputMaybe<BigIntFormat>;
};

export type ZerostateAccountsArrayFilter = {
  all?: InputMaybe<ZerostateAccountsFilter>;
  any?: InputMaybe<ZerostateAccountsFilter>;
};

export type ZerostateAccountsFilter = {
  OR?: InputMaybe<ZerostateAccountsFilter>;
  /**
   * Returns the current status of the account.
   * ```
   * {
   *   accounts(filter: {acc_type:{eq:1}}){
   *     id
   *     acc_type
   *   }
   * }
   * ```
   *
   * - 0 – uninit
   * - 1 – active
   * - 2 – frozen
   * - 3 – nonExist
   */
  acc_type?: InputMaybe<IntFilter>;
  acc_type_name?: InputMaybe<AccountStatusEnumFilter>;
  /**
   * ```
   * {
   *   accounts(orderBy:{path:"balance",direction:DESC}){
   *     balance
   *   }
   * }
   * ```
   */
  balance?: InputMaybe<StringFilter>;
  balance_other?: InputMaybe<OtherCurrencyArrayFilter>;
  /** Contains sum of all the bits used by the cells of the account. Used in storage fee calculation */
  bits?: InputMaybe<StringFilter>;
  /** Bag of cells with the account struct encoded as base64. */
  boc?: InputMaybe<StringFilter>;
  /** Contains number of the cells of the account. Used in storage fee calculation */
  cells?: InputMaybe<StringFilter>;
  /**
   * If present, contains smart-contract code encoded with in base64.
   * ```
   * {
   *   accounts (filter:{code:{eq:null}}){
   *     id
   *     acc_type
   *   }
   * }
   * ```
   */
  code?: InputMaybe<StringFilter>;
  /** `code` field root hash. */
  code_hash?: InputMaybe<StringFilter>;
  /** If present, contains smart-contract data encoded with in base64. */
  data?: InputMaybe<StringFilter>;
  /** `data` field root hash. */
  data_hash?: InputMaybe<StringFilter>;
  /**
   * If present, accumulates the storage payments that could not be exacted from the balance of the account, represented by a strictly positive amount of nano tokens; it can be present only for uninitialized or frozen accounts that have a balance of zero Grams (but may have non-zero balances in non gram cryptocurrencies). When due_payment becomes larger than the value of a configurable parameter of the blockchain, the ac- count is destroyed altogether, and its balance, if any, is transferred to the zero account.
   * ```
   * {
   *   accounts(filter: { due_payment: { ne: null } })
   *     {
   *       id
   *     }
   * }
   * ```
   */
  due_payment?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  /** account 's initial code hash (when it was deployed) */
  init_code_hash?: InputMaybe<StringFilter>;
  /**
   * Contains either the unixtime of the most recent storage payment
   * collected (usually this is the unixtime of the most recent transaction),
   * or the unixtime when the account was created (again, by a transaction).
   * ```
   * query{
   *   accounts(filter: {
   *     last_paid:{ge:1567296000}
   *   }) {
   *   id
   *   last_paid}
   * }
   * ```
   */
  last_paid?: InputMaybe<FloatFilter>;
  last_trans_lt?: InputMaybe<StringFilter>;
  /** If present, contains library code used in smart-contract. */
  library?: InputMaybe<StringFilter>;
  /** `library` field root hash. */
  library_hash?: InputMaybe<StringFilter>;
  prev_code_hash?: InputMaybe<StringFilter>;
  /** Merkle proof that account is a part of shard state it cut from as a bag of cells with Merkle proof struct encoded as base64. */
  proof?: InputMaybe<StringFilter>;
  /** Contains the number of public cells of the account. Used in storage fee calculation. */
  public_cells?: InputMaybe<StringFilter>;
  /** Is present and non-zero only in instances of large smart contracts. */
  split_depth?: InputMaybe<IntFilter>;
  /** Contains the representation hash of an instance of `StateInit` when an account is frozen. */
  state_hash?: InputMaybe<StringFilter>;
  /** May be present only in the masterchain—and within the masterchain, only in some fundamental smart contracts required for the whole system to function. */
  tick?: InputMaybe<BooleanFilter>;
  /**
   * May be present only in the masterchain—and within the masterchain, only in some fundamental smart contracts required for the whole system to function.
   * ```
   * {
   *   accounts (filter:{tock:{ne:null}}){
   *     id
   *     tock
   *     tick
   *   }
   * }
   * ```
   */
  tock?: InputMaybe<BooleanFilter>;
  /** Workchain id of the account address (id field). */
  workchain_id?: InputMaybe<IntFilter>;
};

/** The initial state of the workchain before first block was generated */
export type ZerostateFilter = {
  OR?: InputMaybe<ZerostateFilter>;
  /** Initial accounts state at the workchain start */
  accounts?: InputMaybe<ZerostateAccountsArrayFilter>;
  /** Serialized bag of cells of this zerostate encoded with base64 */
  boc?: InputMaybe<StringFilter>;
  /** Zerostate file hash */
  file_hash?: InputMaybe<StringFilter>;
  /** uint32 global network ID */
  global_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  /** Initial libraries at the workchain start */
  libraries?: InputMaybe<ZerostateLibrariesArrayFilter>;
  master?: InputMaybe<ZerostateMasterFilter>;
  /** Zerostate root cell representation hash */
  root_hash?: InputMaybe<StringFilter>;
  /** Overall balance of all accounts of the workchain */
  total_balance?: InputMaybe<StringFilter>;
  /** Overall balance of all accounts of the workchain in other currencies */
  total_balance_other?: InputMaybe<OtherCurrencyArrayFilter>;
  /** Zerostate workchain_id */
  workchain_id?: InputMaybe<IntFilter>;
};

/**
 *
 * Complexity 0
 */
export type ZerostateLibraries = {
  __typename?: 'ZerostateLibraries';
  /**
   * Library hash
   *
   * Complexity 0
   */
  hash?: Maybe<Scalars['String']>;
  /**
   * Serialized bag of cells of this library encoded with base64
   *
   * Complexity 0
   */
  lib?: Maybe<Scalars['String']>;
  /**
   * List of the accounts which use the library
   *
   * Complexity 0
   */
  publishers?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ZerostateLibrariesArrayFilter = {
  all?: InputMaybe<ZerostateLibrariesFilter>;
  any?: InputMaybe<ZerostateLibrariesFilter>;
};

export type ZerostateLibrariesFilter = {
  OR?: InputMaybe<ZerostateLibrariesFilter>;
  /** Library hash */
  hash?: InputMaybe<StringFilter>;
  /** Serialized bag of cells of this library encoded with base64 */
  lib?: InputMaybe<StringFilter>;
  /** List of the accounts which use the library */
  publishers?: InputMaybe<StringArrayFilter>;
};

/**
 *
 * Complexity 0
 */
export type ZerostateMaster = {
  __typename?: 'ZerostateMaster';
  config?: Maybe<Config>;
  /**
   *
   * Complexity 0
   */
  config_addr?: Maybe<Scalars['String']>;
  /**
   * Overall balance of all accounts
   *
   * Complexity 0
   */
  global_balance?: Maybe<Scalars['String']>;
  /** Overall balance of all accounts in other currencies */
  global_balance_other?: Maybe<Array<Maybe<OtherCurrency>>>;
  /**
   *
   * Complexity 0
   */
  validator_list_hash_short?: Maybe<Scalars['Float']>;
};


/**
 *
 * Complexity 0
 */
export type ZerostateMasterGlobal_BalanceArgs = {
  format?: InputMaybe<BigIntFormat>;
};

export type ZerostateMasterFilter = {
  OR?: InputMaybe<ZerostateMasterFilter>;
  config?: InputMaybe<ConfigFilter>;
  config_addr?: InputMaybe<StringFilter>;
  /** Overall balance of all accounts */
  global_balance?: InputMaybe<StringFilter>;
  /** Overall balance of all accounts in other currencies */
  global_balance_other?: InputMaybe<OtherCurrencyArrayFilter>;
  validator_list_hash_short?: InputMaybe<FloatFilter>;
};

export type CheckAccountExistQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type CheckAccountExistQuery = { __typename?: 'Query', blockchain?: { __typename?: 'BlockchainQuery', account?: { __typename?: 'BlockchainAccountQuery', info?: { __typename?: 'BlockchainAccount', id: string, last_paid?: number | null } | null } | null } | null };

export type CheckHashTypeQueryVariables = Exact<{
  hash: Scalars['String'];
}>;


export type CheckHashTypeQuery = { __typename?: 'Query', blockchain?: { __typename?: 'BlockchainQuery', block?: { __typename?: 'BlockchainBlock', flags?: number | null } | null, transaction?: { __typename?: 'BlockchainTransaction', boc?: string | null } | null, message?: { __typename?: 'BlockchainMessage', dst?: string | null } | null } | null };

export type GetAccountDetailsQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type GetAccountDetailsQuery = { __typename?: 'Query', blockchain?: { __typename?: 'BlockchainQuery', account?: { __typename?: 'BlockchainAccountQuery', info?: { __typename?: 'BlockchainAccount', state_hash?: string | null, balance?: string | null, last_paid?: number | null, id: string, code?: string | null, boc?: string | null, code_hash?: string | null, data?: string | null, acc_type_name?: AccountStatusEnum | null, data_hash?: string | null } | null } | null } | null };

export type GetBlockDataQueryVariables = Exact<{
  hash: Scalars['String'];
}>;


export type GetBlockDataQuery = { __typename?: 'Query', blockchain?: { __typename?: 'BlockchainQuery', block?: { __typename?: 'BlockchainBlock', id: string, gen_utime?: number | null, workchain_id?: number | null, shard?: string | null, vert_seq_no?: number | null, want_merge?: boolean | null, want_split?: boolean | null, gen_validator_list_hash_short?: number | null, tr_count?: number | null, global_id?: number | null, end_lt?: string | null, start_lt?: string | null, after_merge?: boolean | null, after_split?: boolean | null, before_split?: boolean | null, gen_software_version?: number | null, key_block?: boolean | null, file_hash?: string | null, prev_ref?: { __typename?: 'ExtBlkRef', end_lt?: string | null } | null, account_blocks?: Array<{ __typename?: 'BlockAccountBlocks', account_addr?: string | null, tr_count?: number | null, old_hash?: string | null, new_hash?: string | null } | null> | null, in_msg_descr?: Array<{ __typename?: 'InMsg', msg_type?: number | null, transaction_id?: string | null, msg_id?: string | null } | null> | null, out_msg_descr?: Array<{ __typename?: 'OutMsg', msg_type?: number | null, transaction_id?: string | null, msg_id?: string | null } | null> | null, value_flow?: { __typename?: 'BlockValueFlow', from_prev_blk?: string | null, to_next_blk?: string | null, exported?: string | null, imported?: string | null, created?: string | null, minted?: string | null } | null } | null } | null };

export type GetLatestTransactionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLatestTransactionsQuery = { __typename?: 'Query', blockchain?: { __typename?: 'BlockchainQuery', transactions?: { __typename?: 'BlockchainTransactionsConnection', edges: Array<{ __typename?: 'BlockchainTransactionEdge', node: { __typename?: 'BlockchainTransaction', block_id?: string | null, workchain_id?: number | null, id: string, account?: { __typename?: 'BlockchainAccount', address?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, startCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } | null } | null };

export type GetMessageDataQueryVariables = Exact<{
  hash: Scalars['String'];
}>;


export type GetMessageDataQuery = { __typename?: 'Query', blockchain?: { __typename?: 'BlockchainQuery', message?: { __typename?: 'BlockchainMessage', id: string, msg_type_name?: MessageTypeEnum | null, src?: string | null, hash?: string | null, body_hash?: string | null, status_name?: MessageProcessingStatusEnum | null, bounced?: boolean | null, dst?: string | null, created_at_string?: string | null } | null } | null };

export type GetNetworkInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNetworkInfoQuery = { __typename?: 'Query', statistics: { __typename?: 'StatisticsQuery', transactions: { __typename?: 'TransactionsStatisticsQuery', totalCount?: number | null, lastDayCount?: number | null, ratePerSecond?: number | null, totalOrdinaryCount?: number | null, lastDayOrdinaryCount?: number | null }, accounts: { __typename?: 'AccountsStatisticsQuery', totalActiveCount?: number | null, totalCount?: number | null }, depools: { __typename?: 'DepoolsStatisticsQuery', activeDepoolCount?: number | null }, validators: { __typename?: 'ValidatorsStatisticsQuery', totalCount?: number | null } }, price: { __typename?: 'Price', marketCap: { __typename?: 'EverMarketCap', usd: number } } };

export type GetNextTransactionsQueryVariables = Exact<{
  after: Scalars['String'];
}>;


export type GetNextTransactionsQuery = { __typename?: 'Query', blockchain?: { __typename?: 'BlockchainQuery', transactions?: { __typename?: 'BlockchainTransactionsConnection', edges: Array<{ __typename?: 'BlockchainTransactionEdge', node: { __typename?: 'BlockchainTransaction', block_id?: string | null, workchain_id?: number | null, id: string, account?: { __typename?: 'BlockchainAccount', address?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, startCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } | null } | null };

export type GetPreviousTransactionsQueryVariables = Exact<{
  before: Scalars['String'];
}>;


export type GetPreviousTransactionsQuery = { __typename?: 'Query', blockchain?: { __typename?: 'BlockchainQuery', transactions?: { __typename?: 'BlockchainTransactionsConnection', edges: Array<{ __typename?: 'BlockchainTransactionEdge', node: { __typename?: 'BlockchainTransaction', block_id?: string | null, workchain_id?: number | null, id: string, account?: { __typename?: 'BlockchainAccount', address?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, startCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } | null } | null };

export type GetTransactionDataQueryVariables = Exact<{
  hash: Scalars['String'];
}>;


export type GetTransactionDataQuery = { __typename?: 'Query', blockchain?: { __typename?: 'BlockchainQuery', transaction?: { __typename?: 'BlockchainTransaction', id: string, block_id?: string | null, lt?: string | null, destroyed?: boolean | null, proof?: string | null, aborted?: boolean | null, orig_status?: number | null, end_status?: number | null, old_hash?: string | null, balance_delta?: string | null, total_fees?: string | null, new_hash?: string | null, boc?: string | null, status?: number | null, account?: { __typename?: 'BlockchainAccount', id: string, address?: string | null } | null, tokenTransfer?: { __typename?: 'FungibleTokenTransfer', value?: string | null, token?: { __typename?: 'FungibleToken', decimals?: number | null, symbol?: string | null } | null, fromWallet?: { __typename?: 'FungibleTokenWallet', holder?: { __typename?: 'FungibleTokenHolder', address: string } | null } | null, toWallet?: { __typename?: 'FungibleTokenWallet', holder?: { __typename?: 'FungibleTokenHolder', address: string } | null } | null } | null, in_message?: { __typename?: 'BlockchainMessage', hash?: string | null, src?: string | null, dst?: string | null, value?: string | null, created_at_string?: string | null } | null, out_messages?: Array<{ __typename?: 'BlockchainMessage', hash?: string | null, src?: string | null, dst?: string | null, value?: string | null, created_at_string?: string | null } | null> | null, compute?: { __typename?: 'TransactionCompute', compute_type?: number | null, compute_type_name?: ComputeTypeEnum | null, mode?: number | null, gas_fees?: string | null, gas_used?: string | null, gas_limit?: string | null, gas_credit?: number | null, msg_state_used?: boolean | null, account_activated?: boolean | null, success?: boolean | null, exit_code?: number | null, vm_steps?: number | null, vm_init_state_hash?: string | null, vm_final_state_hash?: string | null } | null, action?: { __typename?: 'TransactionAction', success?: boolean | null, spec_actions?: number | null, valid?: boolean | null, no_funds?: boolean | null, result_code?: number | null, tot_actions?: number | null, action_list_hash?: string | null, msgs_created?: number | null, skipped_actions?: number | null, status_change?: number | null, status_change_name?: AccountStatusChangeEnum | null } | null, credit?: { __typename?: 'TransactionCredit', due_fees_collected?: string | null, credit?: string | null } | null, storage?: { __typename?: 'TransactionStorage', storage_fees_due?: string | null, status_change_name?: AccountStatusChangeEnum | null, storage_fees_collected?: string | null } | null } | null } | null };


export const CheckAccountExistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CheckAccountExist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockchain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"last_paid"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CheckAccountExistQuery, CheckAccountExistQueryVariables>;
export const CheckHashTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CheckHashType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hash"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockchain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"hash"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hash"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flags"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"hash"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hash"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"boc"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"hash"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hash"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dst"}}]}}]}}]}}]} as unknown as DocumentNode<CheckHashTypeQuery, CheckHashTypeQueryVariables>;
export const GetAccountDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAccountDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockchain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"state_hash"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"last_paid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"boc"}},{"kind":"Field","name":{"kind":"Name","value":"code_hash"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"acc_type_name"}},{"kind":"Field","name":{"kind":"Name","value":"data_hash"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAccountDetailsQuery, GetAccountDetailsQueryVariables>;
export const GetBlockDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlockData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hash"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockchain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"hash"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hash"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gen_utime"}},{"kind":"Field","name":{"kind":"Name","value":"workchain_id"}},{"kind":"Field","name":{"kind":"Name","value":"shard"}},{"kind":"Field","name":{"kind":"Name","value":"vert_seq_no"}},{"kind":"Field","name":{"kind":"Name","value":"want_merge"}},{"kind":"Field","name":{"kind":"Name","value":"want_split"}},{"kind":"Field","name":{"kind":"Name","value":"gen_validator_list_hash_short"}},{"kind":"Field","name":{"kind":"Name","value":"tr_count"}},{"kind":"Field","name":{"kind":"Name","value":"prev_ref"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"end_lt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"global_id"}},{"kind":"Field","name":{"kind":"Name","value":"end_lt"}},{"kind":"Field","name":{"kind":"Name","value":"start_lt"}},{"kind":"Field","name":{"kind":"Name","value":"after_merge"}},{"kind":"Field","name":{"kind":"Name","value":"after_split"}},{"kind":"Field","name":{"kind":"Name","value":"before_split"}},{"kind":"Field","name":{"kind":"Name","value":"gen_software_version"}},{"kind":"Field","name":{"kind":"Name","value":"key_block"}},{"kind":"Field","name":{"kind":"Name","value":"file_hash"}},{"kind":"Field","name":{"kind":"Name","value":"account_blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account_addr"}},{"kind":"Field","name":{"kind":"Name","value":"tr_count"}},{"kind":"Field","name":{"kind":"Name","value":"old_hash"}},{"kind":"Field","name":{"kind":"Name","value":"new_hash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"in_msg_descr"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"msg_type"}},{"kind":"Field","name":{"kind":"Name","value":"transaction_id"}},{"kind":"Field","name":{"kind":"Name","value":"msg_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"out_msg_descr"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"msg_type"}},{"kind":"Field","name":{"kind":"Name","value":"transaction_id"}},{"kind":"Field","name":{"kind":"Name","value":"msg_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value_flow"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from_prev_blk"}},{"kind":"Field","name":{"kind":"Name","value":"to_next_blk"}},{"kind":"Field","name":{"kind":"Name","value":"exported"}},{"kind":"Field","name":{"kind":"Name","value":"imported"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"minted"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetBlockDataQuery, GetBlockDataQueryVariables>;
export const GetLatestTransactionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLatestTransactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockchain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block_id"}},{"kind":"Field","name":{"kind":"Name","value":"workchain_id"}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetLatestTransactionsQuery, GetLatestTransactionsQueryVariables>;
export const GetMessageDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMessageData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hash"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockchain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"hash"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hash"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"msg_type_name"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"body_hash"}},{"kind":"Field","name":{"kind":"Name","value":"status_name"}},{"kind":"Field","name":{"kind":"Name","value":"bounced"}},{"kind":"Field","name":{"kind":"Name","value":"dst"}},{"kind":"Field","name":{"kind":"Name","value":"created_at_string"}}]}}]}}]}}]} as unknown as DocumentNode<GetMessageDataQuery, GetMessageDataQueryVariables>;
export const GetNetworkInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNetworkInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"lastDayCount"}},{"kind":"Field","name":{"kind":"Name","value":"ratePerSecond"}},{"kind":"Field","name":{"kind":"Name","value":"totalOrdinaryCount"}},{"kind":"Field","name":{"kind":"Name","value":"lastDayOrdinaryCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalActiveCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"depools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeDepoolCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"validators"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marketCap"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usd"}}]}}]}}]}}]} as unknown as DocumentNode<GetNetworkInfoQuery, GetNetworkInfoQueryVariables>;
export const GetNextTransactionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNextTransactions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockchain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block_id"}},{"kind":"Field","name":{"kind":"Name","value":"workchain_id"}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetNextTransactionsQuery, GetNextTransactionsQueryVariables>;
export const GetPreviousTransactionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPreviousTransactions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockchain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block_id"}},{"kind":"Field","name":{"kind":"Name","value":"workchain_id"}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPreviousTransactionsQuery, GetPreviousTransactionsQueryVariables>;
export const GetTransactionDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTransactionData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hash"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockchain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"hash"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hash"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"block_id"}},{"kind":"Field","name":{"kind":"Name","value":"lt"}},{"kind":"Field","name":{"kind":"Name","value":"destroyed"}},{"kind":"Field","name":{"kind":"Name","value":"proof"}},{"kind":"Field","name":{"kind":"Name","value":"aborted"}},{"kind":"Field","name":{"kind":"Name","value":"orig_status"}},{"kind":"Field","name":{"kind":"Name","value":"end_status"}},{"kind":"Field","name":{"kind":"Name","value":"old_hash"}},{"kind":"Field","name":{"kind":"Name","value":"balance_delta"}},{"kind":"Field","name":{"kind":"Name","value":"total_fees"}},{"kind":"Field","name":{"kind":"Name","value":"new_hash"}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"boc"}},{"kind":"Field","name":{"kind":"Name","value":"tokenTransfer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fromWallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"holder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"toWallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"holder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"in_message"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"dst"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"created_at_string"}}]}},{"kind":"Field","name":{"kind":"Name","value":"out_messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"dst"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"created_at_string"}}]}},{"kind":"Field","name":{"kind":"Name","value":"compute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"compute_type"}},{"kind":"Field","name":{"kind":"Name","value":"compute_type_name"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}},{"kind":"Field","name":{"kind":"Name","value":"gas_fees"}},{"kind":"Field","name":{"kind":"Name","value":"gas_used"}},{"kind":"Field","name":{"kind":"Name","value":"gas_limit"}},{"kind":"Field","name":{"kind":"Name","value":"gas_credit"}},{"kind":"Field","name":{"kind":"Name","value":"msg_state_used"}},{"kind":"Field","name":{"kind":"Name","value":"account_activated"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}},{"kind":"Field","name":{"kind":"Name","value":"exit_code"}},{"kind":"Field","name":{"kind":"Name","value":"vm_steps"}},{"kind":"Field","name":{"kind":"Name","value":"vm_init_state_hash"}},{"kind":"Field","name":{"kind":"Name","value":"vm_final_state_hash"}},{"kind":"Field","name":{"kind":"Name","value":"msg_state_used"}}]}},{"kind":"Field","name":{"kind":"Name","value":"action"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"spec_actions"}},{"kind":"Field","name":{"kind":"Name","value":"valid"}},{"kind":"Field","name":{"kind":"Name","value":"no_funds"}},{"kind":"Field","name":{"kind":"Name","value":"result_code"}},{"kind":"Field","name":{"kind":"Name","value":"spec_actions"}},{"kind":"Field","name":{"kind":"Name","value":"tot_actions"}},{"kind":"Field","name":{"kind":"Name","value":"action_list_hash"}},{"kind":"Field","name":{"kind":"Name","value":"msgs_created"}},{"kind":"Field","name":{"kind":"Name","value":"skipped_actions"}},{"kind":"Field","name":{"kind":"Name","value":"status_change"}},{"kind":"Field","name":{"kind":"Name","value":"status_change_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"credit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"due_fees_collected"}},{"kind":"Field","name":{"kind":"Name","value":"credit"}}]}},{"kind":"Field","name":{"kind":"Name","value":"storage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"storage_fees_due"}},{"kind":"Field","name":{"kind":"Name","value":"status_change_name"}},{"kind":"Field","name":{"kind":"Name","value":"storage_fees_collected"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTransactionDataQuery, GetTransactionDataQueryVariables>;