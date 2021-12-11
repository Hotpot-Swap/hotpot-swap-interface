import gql from 'graphql-tag'

export const barQuery = gql`
  query barQuery($id: String! = "0x8798249c2e607446efb7ad49ec89dd1865ff4272", $block: Block_height) {
    bar(id: $id, block: $block) {
      id
      totalSupply
      ratio
      xHotpotMinted
      xHotpotBurned
      sushiStaked
      sushiStakedUSD
      sushiHarvested
      sushiHarvestedUSD
      xHotpotAge
      xHotpotAgeDestroyed
      # histories(first: 1000) {
      #   id
      #   date
      #   timeframe
      #   sushiStaked
      #   sushiStakedUSD
      #   sushiHarvested
      #   sushiHarvestedUSD
      #   xHotpotAge
      #   xHotpotAgeDestroyed
      #   xHotpotMinted
      #   xHotpotBurned
      #   xHotpotSupply
      #   ratio
      # }
    }
  }
`

export const barHistoriesQuery = gql`
  query barHistoriesQuery {
    histories(first: 1000) {
      id
      date
      timeframe
      sushiStaked
      sushiStakedUSD
      sushiHarvested
      sushiHarvestedUSD
      xHotpotAge
      xHotpotAgeDestroyed
      xHotpotMinted
      xHotpotBurned
      xHotpotSupply
      ratio
    }
  }
`

export const barUserQuery = gql`
  query barUserQuery($id: String!) {
    user(id: $id) {
      id
      bar {
        totalSupply
        sushiStaked
      }
      xHotpot
      sushiStaked
      sushiStakedUSD
      sushiHarvested
      sushiHarvestedUSD
      xHotpotIn
      xHotpotOut
      xHotpotOffset
      xHotpotMinted
      xHotpotBurned
      sushiIn
      sushiOut
      usdIn
      usdOut
      createdAt
      createdAtBlock
    }
  }
`
