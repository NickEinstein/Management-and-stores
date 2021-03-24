import React, { useState, useContext } from 'react';
import { Table, Tag,Modal, Space, Button,Badge, Input } from 'antd';
import Page19 from './Page19'
import {
    HomeOutlined,
    SettingFilled,
    CloseOutlined,
    SearchOutlined,
    PlusOutlined  } from '@ant-design/icons';
import Page22 from './Page22';
import Page27 from './Page27';
import {ModalContext} from './Contexts/ModalContext'
import {SwapTableContext} from './Contexts/SwapTableContext'
import Page36 from './Page36';






const DashboardT = () => {
  const columns = [
    {
      title: 'Item',
      dataIndex: 'name',
      key: 'name',
      render:text=><a style={{textDecorationLine:"underline"}}>{text}</a>
     
    },
    {
      title: 'Requests Initiator',
      dataIndex: 'request',
      key: 'request',
    },
    {
      title: 'Request type',
      dataIndex: 'type',
      key: 'type',
    },
    // {
    //   title: 'status',
    //   key: 'details',
    //   dataIndex: 'details',
      
    // },
    // {
    //   title: 'Quantity',
    //   key: 'quantity',
    //   dataIndex: 'quantity',
     
    // },
    {
      title: 'Initiated Date',
      key: 'date',
      dataIndex: 'date',
     
    },
    {
      title: 'Review Status',
      // key: 'status',
      dataIndex: 'status',
     
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: text => <div className="flex">
        <Button  style={{backgroundColor:"#1C811C", border:"none", color:"white"}}>View Details</Button>
        <Button  style={{backgroundColor:"#1C811C", border:"none", color:"white", marginLeft:"5px"}}> Request</Button>,
      </div>
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      request: 32,
      type: 'New York No. 1 Lake Park',
      status:"ee",
      quantity:"ee",
      date:"ee"
     
    },
    {
      key: '2',
      name: 'Jim Green',
      request: 42,
      type: 'London No. 1 Lake Park',
      status:"ee",
      quantity:"ee",
      date:"ee"
   
    },
    {
      key: '3',
      name: 'Joe Black',
      request: 32,
      type: 'Sidney No. 1 Lake Park',
      status:"ee",
      quantity:"ee",
      date:"ee"
  
    },
    {
      key: '4',
      name: 'John Brown',
      request: 32,
      type: 'New York No. 1 Lake Park',
      status:"ee",
      quantity:"ee",
      date:"ee"
     
    },
    {
      key: '5',
      name: 'Jim Green',
      request: 42,
      type: 'London No. 1 Lake Park',
      status:"ee",
      quantity:"ee",
      date:"ee"
   
    },
    {
      key: '6',
      name: 'Joe Black',
      request: 32,
      type: 'Sidney No. 1 Lake Park',
      status:"ee",
      quantity:"ee",
      date:"ee"
  
    },
    {
      key: '7',
      name: 'Joe Black',
      request: 32,
      type: 'Sidney No. 1 Lake Park',  status:"ee",
      quantity:"ee",
      date:"ee"
  
    },
  ];
  
  

  

  return (
      
    <div >
        
        <div className="flex-between flex-align padding" style={{backgroundColor:"#D5FFD5", marginTop:"20px"}}>
          

              <Badge count={3}>
                  <Button  style={{fontWeight:"bold", borderRadius:"20px",backgroundColor:"transparent", border:"none"}}>Threshold Items</Button>
              </Badge>
              <Button style={{fontWeight:"bold", borderRadius:"20px", backgroundColor:"green", color:"white"}}>View more Items</Button>
              {/* <Button style={{fontWeight:"bold"}} icon={<PlusOutlined />}>Add Request</Button> */}
              
          </div>
        
       
<Table columns={columns} dataSource={data} />
{/* <Modal 
style={{backgroundColor:"transparent"}}
width="40%"
// confirmLoading
// okButtonProps={onclick=()=>{alert("How far")}}
footer={false}
okText={<p style={{maxWidth:"100px"}}>Boss</p>}
closeIcon={<CloseOutlined style={{fontSize:"25px", backgroundColor:"red",  color:"white", padding:"10px"}}/>}
 visible={show6} onOk={handleOk} onCancel={handleCancel}>
       <Page22/>

      </Modal> */}
      {/* <Modal 
style={{backgroundColor:"transparent"}}
width="40%"
// confirmLoading
// okButtonProps={onclick=()=>{alert("How far")}}
footer={false}
okText={<p style={{maxWidth:"100px"}}>Boss</p>}
closeIcon={<CloseOutlined style={{fontSize:"25px", backgroundColor:"red",  color:"white", padding:"10px"}}/>}
 visible={isModalVisible} onOk={handleOk} onCancel={handleCancel1} >
       <Page36/>
      </Modal> */}
    </div>

   
  );
};
export default DashboardT

// const cards = houseProperties.map(item => <div className= "houseMath4" style={{border:""}}><Link to = "/page3">
// <Picture_card card = {item} height = "200px"/> 
// </Link> </div> )