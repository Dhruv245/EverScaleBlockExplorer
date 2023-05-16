import { gql } from "@/__generated__";

export const GetNetworkInfoQuery = gql(`
    query GetNetworkInfo{
      statistics {
        transactions {
          totalCount
          lastDayCount
          ratePerSecond
          totalOrdinaryCount
          lastDayOrdinaryCount
        }
        accounts {
          totalActiveCount
          totalCount
        }
        depools {
          activeDepoolCount
        }
        validators {
          totalCount
        }
      }
      price {
        marketCap {
          usd
        }
      }
    }
  `)