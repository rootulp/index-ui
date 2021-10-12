import React, { useState, useEffect } from 'react'
import IndexComponent from "components/IndexComponent"
import IndexComponentsContext from "./IndexComponentsContext"
import { getSetDetails } from "utils/setjsApi"
import useWallet from "hooks/useWallet"
import { provider } from "web3-core"
import { dpiTokenAddress, mviTokenAddress, bedTokenAddress, eth2xfliTokenAddress, btc2xfliTokenAddress } from "../../constants/ethContractAddresses"

const IndexComponentsProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: provider } = useWallet()
  const [dpiComponents, setDpiComponents] = useState<IndexComponent[]>([])

  useEffect(() => {
    if (ethereum && dpiTokenAddress && mviTokenAddress && bedTokenAddress && eth2xfliTokenAddress && btc2xfliTokenAddress) {
      getSetDetails(ethereum, [dpiTokenAddress, mviTokenAddress, bedTokenAddress, eth2xfliTokenAddress, btc2xfliTokenAddress]).then(result => {
        const dpiDetails = result[0]
        console.log(dpiDetails)
      })
    }
  }, [ethereum])

  return (
    <IndexComponentsContext.Provider
      value={{ dpiComponents: dpiComponents }}
    >
      {children}
    </IndexComponentsContext.Provider>
  )
}

export default IndexComponentsProvider
