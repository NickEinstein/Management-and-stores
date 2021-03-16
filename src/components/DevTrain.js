import React, { useState, useContext } from 'react';
import { Table, Tag,Modal, Space, Button,Badge, Input } from 'antd';
import Page19 from './Page19'
import {
    HomeOutlined,
    SettingFilled,
    CloseOutlined,
    SearchOutlined,
    PlusOutlined  } from '@ant-design/icons';
    import {ModalContext} from './Contexts/ModalContext'





const DevTrain = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
     
    },
    {
      title: 'Requests',
      dataIndex: 'request',
      key: 'request',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Details',
      key: 'details',
      dataIndex: 'details',
      
    },
    {
      title: 'Quantity',
      key: 'quantity',
      dataIndex: 'quantity',
     
    },
    {
      title: 'Last Updated',
      key: 'updated',
      dataIndex: 'updated',
     
    },
    {
      title: 'Status',
      // key: 'status',
      dataIndex: 'status',
     
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: text => <Button onClick={showModal} style={{backgroundColor:"#1C811C", border:"none", color:"white"}}>View Request</Button>,
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      request: 32,
      category: 'New York No. 1 Lake Park',
      details:"ee",
      quantity:"ee",
      updated:"ee"
     
    },
    {
      key: '2',
      name: 'Jim Green',
      request: 42,
      category: 'London No. 1 Lake Park',
      details:"ee",
      quantity:"ee",
      updated:"ee"
   
    },
    {
      key: '3',
      name: 'Joe Black',
      request: 32,
      category: 'Sidney No. 1 Lake Park',
      details:"ee",
      quantity:"ee",
      updated:"ee"
  
    },
    {
      key: '4',
      name: 'John Brown',
      request: 32,
      category: 'New York No. 1 Lake Park',
      details:"ee",
      quantity:"ee",
      updated:"ee"
     
    },
    {
      key: '5',
      name: 'Jim Green',
      request: 42,
      category: 'London No. 1 Lake Park',
      details:"ee",
      quantity:"ee",
      updated:"ee"
   
    },
    {
      key: '6',
      name: 'Joe Black',
      request: 32,
      category: 'Sidney No. 1 Lake Park',
      details:"ee",
      quantity:"ee",
      updated:"ee"
  
    },
    {
      key: '7',
      name: 'Joe Black',
      request: 32,
      category: 'Sidney No. 1 Lake Park',  details:"ee",
      quantity:"ee",
      updated:"ee"
  
    },
  ];
  
// const {handleShow6} = useContext(ModalContext)
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
      
    <div >
         <div className="flex marginBottom" style={{width:"40%",marginLeft:"auto", backgroundColor:"white"}}>
             <Button style={{width:"38%", backgroundColor:"#1C811C", color:"white"}}>Filter Items By</Button>
             <div style={{width:"60%"}}>
                <Input style={{marginLeft:"5px" ,border: "1px solid #707070", backgroundColor: "#D5FFD5" }} suffix={<SearchOutlined />} placeholder="search" />
              </div>
           {/* <Input style={{marginLeft:"5px"}} icon={<SearchOutlined/>}/> */}
         </div>
        <div className="flex-between padding" style={{backgroundColor:"#D5FFD5"}}>
          <p style={{width:"60%"}}><b>Learning and Developement Trainig request</b></p>  
          <div className="flex-between" style={{minWidth:"350px", width:"35%"}} >
              <Badge count={5}>
                  <Button style={{fontWeight:"bold", borderRadius:"20px"}}>Request</Button>
              </Badge>
              <Badge count={5}>
                  <Button style={{fontWeight:"bold", backgroundColor:"transparent", border:"none"}}>Approve</Button>
              </Badge>
              <Button style={{fontWeight:"bold"}} icon={<PlusOutlined />}>Add Request</Button>
              
          </div>
        </div>
       
<Table columns={columns} dataSource={data} />
<Modal 
width="70%"
// confirmLoading
// okButtonProps={onclick=()=>{alert("How far")}}
// footer={false}
okText={<p style={{maxWidth:"100px"}}>Boss</p>}
closeIcon={<CloseOutlined style={{fontSize:"25px", backgroundColor:"red",  color:"white", padding:"10px"}}/>}
 visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
       <Page19 p = "Upload Supporting Documents"/>
      </Modal>
    </div>

   
  );
};
export default DevTrain

// const cards = houseProperties.map(item => <div className= "houseMath4" style={{border:""}}><Link to = "/page3">
// <Picture_card card = {item} height = "200px"/> 
// </Link> </div> )