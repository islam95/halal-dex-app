import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';

import { NavLinkDesktop, NavLinkMobile, ConnectButton } from './';
import { menu } from '../assets';
import { ether } from '../assets/crypto-icons';

const Nav = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [toggleDrawer, setToggleDrawer] = useState(false);

  useEffect(() => {
    currentWalletAddress();
    newWalletAddress();
  }, []);

  const currentWalletAddress = async () => {
    if (!window.ethereum) {
      console.warn('No ethereum wallet found');
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      if (accounts && accounts.length > 0) {
        setWalletAddress(accounts[0]);
        console.log('Current wallet address', accounts[0]);
      } else {
        console.log('No accounts found');
      }
    } catch (error) {
      console.error('Error getting current wallet address', error);
    }
  };

  const newWalletAddress = async () => {
    if (!window.ethereum) {
      setWalletAddress('');
      console.warn('No ethereum wallet found');
      return;
    }

    window.ethereum.on('accountsChanged', (accounts) => {
      if (accounts && accounts.length > 0) {
        setWalletAddress(accounts[0]);
        console.log('New wallet address', accounts[0]);
      } else {
        console.log('No accounts found');
      }
    });
  };

  const connectWallet = async () => {
    if (!window.ethereum) {
      console.warn('No ethereum wallet found');
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);

      if (accounts && accounts.length > 0) {
        setWalletAddress(accounts[0]);
      }
    } catch (error) {
      console.error('Error connecting wallet', error);
    }
  };

  return (
    <nav className="justify-between items-start self-center flex w-full max-w-[1312px] gap-5 mt-6 px-6 max-md:max-w-full max-md:flex-wrap">
      <div className="items-start self-stretch flex max-w-full justify-between gap-10">
        <Link to="/">
          <div className="text-center text-2xl font-medium text-white self-center my-auto">Halal Dex</div>
        </Link>

        {/* Desktop screen navigation */}
        <div className="sm:flex hidden items-start self-stretch flex grow shrink-0 basis-auto gap-4 max-md:justify-center">
          <NavLinkDesktop path="/" text="Swap" />
          <NavLinkDesktop path="/pool" text="Pool" />
        </div>
      </div>

      <div className="justify-end items-start self-stretch flex gap-4 max-md:justify-center">
        <img loading="lazy" alt="ether-icon" src={ether} className="aspect-square object-cover object-center w-[28px] self-center items-center overflow-hidden" />
        <span className="text-white self-center">Ethereum</span>
        <ConnectButton styles={'sm:flex hidden'} address={walletAddress} buttonText="Connect to MetaMask" handleClick={connectWallet} />

        {/* Mobile screen navigation */}
        <div className="sm:hidden flex justify-center items-center">
          <img src={menu} alt="menu" className="w-[24px] h-[24px] object-contain cursor-pointer" onClick={() => setToggleDrawer((prev) => !prev)} />

          <div className={`absolute top-[60px] right-0 left-0 bg-[#09080C] z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
            <ul className="mb-4">
              <NavLinkMobile path="/" text="Swap" handleClick={() => setToggleDrawer(false)} />
              <NavLinkMobile path="/pool" text="Pool" handleClick={() => setToggleDrawer(false)} />
            </ul>

            <div className="flex mx-4">
              <ConnectButton styles={''} address={walletAddress} buttonText="Connect to MetaMask" handleClick={connectWallet} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
