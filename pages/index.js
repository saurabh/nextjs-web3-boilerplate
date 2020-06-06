import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'
import { useStateValue } from '../state';

const SignInArea = dynamic(() => import('../components/SignInArea'), { ssr: false })

const Index = () => {
  const [{ dapp }, dispatch] = useStateValue()

  return (
    <>
      <SignInArea />
      <hr/>
      { dapp.web3 ? dapp.web3.utils.fromWei(String(dapp.balance), 'ether') : dapp.balance }
    </>
  )
}

export default Index;