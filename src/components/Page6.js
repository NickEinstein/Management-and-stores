import React, { useState, useContext, createContext } from 'react';
import { Table, Tag, Space, Button,Badge, Input } from 'antd';
import DevTrain6 from './DevTrain6'
import DevTrain13 from './DevTrain13'
import'./index.css'
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SearchOutlined,
    PlusOutlined  } from '@ant-design/icons';
import ModalContextProvider from './Contexts/ModalContext'
import {SwapTableContext} from './Contexts/SwapTableContext'



const Page6 = () => {
  const {table6, table10,handleTable6,handleTable10} = useContext(SwapTableContext)

  return (
      
    <ModalContextProvider>
    	<div className="width">
         { (table6) ?
         
         <DevTrain6/>
        :
       <DevTrain13/>}
    	</div>
    </ModalContextProvider>

   
  );
};
export default Page6