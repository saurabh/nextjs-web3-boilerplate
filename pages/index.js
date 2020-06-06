import React, { useState, useEffect } from 'react';
import { useStateValue } from '../state';
import web3 from '../utils/getWeb3';
import addrShortener from '../utils/addrShortener';

const Index = () => {
  const [{ dapp }, dispatch] = useStateValue();

  useEffect(() => {
    async function dispatchDapp() {
      dispatch({
        type: 'SET_WEB3',
        payload: web3
      });
      const [address] = await web3.eth.getAccounts();
      dispatch({
        type: 'SET_ADDRESS',
        payload: address
      });
      const network = await web3.eth.net.getId();
      dispatch({
        type: 'SET_NETWORK',
        payload: network
      });
      const balance = await web3.eth.getBalance(address);
      dispatch({
        type: 'SET_BALANCE',
        payload: balance
      });
    }

    dispatchDapp();
  }, []);
  
  return (
    <>
      { dapp.address && addrShortener(dapp.address) }
      <hr/>
      { dapp.web3 ? dapp.web3.utils.fromWei(String(dapp.balance), 'ether') : dapp.balance }
    </>
  )
}

export default Index;