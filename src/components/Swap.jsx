import { useState } from 'react';
import { setting, arrowDown, swapArrows } from '../assets';
import { ether } from '../assets/crypto-icons';
import { Popover, Radio, Tooltip, Switch, InputNumber } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const Swap = ({ title }) => {
  const [slippage, setSlippage] = useState(2.5);
  const [expertMode, setExpertMode] = useState(false);
  const [multihops, setMultihops] = useState(false);
  const [transactionDeadline, setTransactionDeadline] = useState(20);
  const [tokenOneAmount, setTokenOneAmount] = useState(0);
  const [tokenTwoAmount, setTokenTwoAmount] = useState(0);

  const swapSettings = (
    <>
      <p className="pt-3 pb-1">
        Slippage Tolerance
        <Tooltip color={'#211e2c'} title="Your transaction will revert if the price changes unfavorably by more than this percentage.">
          <QuestionCircleOutlined className="pl-1" />
        </Tooltip>
      </p>
      <div>
        <Radio.Group value={slippage} onChange={(e) => setSlippage(e.target.value)}>
          <Radio.Button value={0.5}>0.5%</Radio.Button>
          <Radio.Button value={2.5}>2.5%</Radio.Button>
          <Radio.Button value={5}>5.0%</Radio.Button>
        </Radio.Group>
      </div>
      <p className="pt-6 pb-3">
        Transaction deadline
        <Tooltip color={'#211e2c'} title="Your transaction will revert if it is pending for more than this long">
          <QuestionCircleOutlined className="pl-1" />
        </Tooltip>
      </p>
      <div className="settings-input inline">
        <InputNumber min={1} max={10000} defaultValue={transactionDeadline} onChange={(e) => setTransactionDeadline(e)} /> <span className="pl-3">minutes</span>
      </div>
      <p className="py-6 text-xl font-semibold">Interface Settings</p>
      <div className="flex justify-between">
        <p>
          Toggle Expert Mode
          <Tooltip color={'#211e2c'} title="Bypasses confirmation modals and allows high slippage trades. Use at your own risk.">
            <QuestionCircleOutlined className="pl-1" />
          </Tooltip>
        </p>
        <Switch onChange={(e) => setExpertMode(e)} />
      </div>
      <div className="pt-5 pb-3 flex justify-between">
        <p>
          Disable Multihops
          <Tooltip color={'#211e2c'} title="Restricts swaps to direct pair only">
            <QuestionCircleOutlined className="pl-1" />
          </Tooltip>
        </p>
        <Switch onChange={(e) => setMultihops(e)} />
      </div>
    </>
  );

  return (
    <div className="items-start bg-[#121116] self-center flex w-[464px] max-w-full flex-col mt-16 mb-72 pt-6 pb-8 px-6 rounded-lg max-md:my-10">
      <div className="items-center self-stretch flex flex-col">
        <div className="items-start self-stretch flex flex-col py-px">
          <div className="w-full relative">
            <div className="text-white text-center text-m sm:text-xl font-bold leading-7 self-start">{title}</div>
            <Popover placement="bottomRight" title="Transaction Settings" content={swapSettings} trigger="click">
              <img loading="lazy" alt="settings-icon" src={setting} className="absolute right-0 top-[2px] cursor-pointer aspect-square object-cover object-center overflow-hidden" />
            </Popover>
          </div>

          <div className="items-start flex w-full grow flex-col mt-7 self-end gap-3">
            <div className="items-start self-stretch flex w-full justify-between gap-5">
              <div className="items-start self-stretch flex flex-col">
                <div className="text-white text-base leading-6 self-start whitespace-nowrap">Swap from</div>
                <div className="text-gray-400 font-bold text-2xl sm:text-4xl leading-7 sm:leading-10 mt-2 self-start whitespace-nowrap">0</div>
                <div className="text-gray-400 text-xs sm:text-base leading-3 sm:leading-6 mt-4 sm:mt-2 self-start whitespace-nowrap">Balance: 70.42</div>
              </div>
              <div className="items-start self-center flex gap-1 sm:gap-2 my-auto">
                <div className="items-start self-stretch flex justify-between gap-1 sm:gap-2">
                  <img loading="lazy" alt="ether-icon" src={ether} className="aspect-square object-cover object-center w-[32px] sm:w-full justify-center items-center overflow-hidden flex-1" />
                  <div className="text-white text-sm sm:text-lg font-medium leading-7 self-center my-auto whitespace-nowrap">ETH</div>
                </div>
                <img loading="lazy" alt="arrow-down-icon" src={arrowDown} className="aspect-square object-cover object-center w-6 overflow-hidden self-center max-w-full my-auto" />
              </div>
            </div>

            <div className="flex items-center justify-center me-6 rounded-full bg-[#1C1924] self-end w-[40px] h-[40px]">
              <img loading="lazy" src={swapArrows} alt="swap-icon" className="aspect-square object-cover object-center w-[24px] h-[24px]" />
            </div>

            <div className="items-start self-stretch flex w-full justify-between gap-5 mt-1">
              <div className="items-start self-stretch flex flex-col">
                <div className="text-white text-base leading-6 self-start whitespace-nowrap">Swap to</div>
                <div className="text-gray-400 font-bold text-2xl sm:text-4xl leading-7 sm:leading-10 mt-2 self-start whitespace-nowrap">0</div>
                <div className="text-gray-400 text-xs sm:text-base leading-3 sm:leading-6 mt-4 sm:mt-2 self-start whitespace-nowrap">Balance: -</div>
              </div>
              <div className="justify-center items-center bg-green-500 self-center flex max-w-full flex-col my-auto px-3 sm:px-4 py-2 sm:py-3 rounded-[100px]">
                <div className="items-center self-stretch flex justify-between gap-1">
                  <div className="text-white text-sm sm:text-base font-bold leading-4 sm:leading-6">Select a Token</div>
                  <img loading="lazy" src={arrowDown} alt="arrow-down-icon" className="aspect-square object-cover object-center w-5 overflow-hidden self-stretch max-w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="justify-center items-center bg-[#2F2A3C] self-center flex w-96 max-w-full grow flex-col mt-8 px-5 py-3 rounded-[100px]">
          <div className="text-zinc-900 text-base font-bold leading-6 self-center whitespace-nowrap">Enter an Amount</div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
