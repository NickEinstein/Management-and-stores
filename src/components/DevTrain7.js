import React, { useState } from 'react';
import { Table, Tag,Modal, Space, Button,Badge, Input } from 'antd';
import Page19 from './Page19'
import {
    HomeOutlined,
    SettingFilled,
    CloseOutlined,
    SearchOutlined,
    PlusOutlined  } from '@ant-design/icons';
import Page14 from './Page14';
import Page37 from './Page37';







const DevTrain7 = () => {
  const columns = [
    {
      title: 'Item',
      dataIndex: 'name',
      key: 'name',
    render:text=><a onClick={showModal1} style={{textDecorationLine:"underline"}}>{text}</a>
    }, 
    {
      title: 'Supplier',
      dataIndex: 'supplier',
      key: 'supplier',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Stored City',
      key: 'stored',
      dataIndex: 'stored',
      
    },
    {
      title: 'Requested',
      key: 'requested',
      dataIndex: 'requested',
     
    },
    {
        title: 'Available',
        key: 'available',
        dataIndex: 'available',
       
      },
    {
      title: 'Last Updated',
      key: 'updated',
      dataIndex: 'updated',
     
    },
    // {
    //   title: 'Status',
    //   // key: 'status',
    //   dataIndex: 'status',
     
    // },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: text => <div style={{display:"flex"}}>
           <Button  style={{marginRight:"5px",backgroundColor:"#43425D", border:"none", color:"white"}}> Review</Button>
          <Button onClick={showModal} style={{backgroundColor:"#1C811C", border:"none", color:"white"}}> Review</Button>
      </div>,
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      supplier: 32,
      category: 'New York No. 1 Lake Park',
      stored:"ee",
      requested:"ee",
      updated:"ee",
      available:"available"
     
    },
    {
      key: '2',
      name: 'Jim Green',
      supplier: 42,
      category: 'London No. 1 Lake Park',
      stored:"ee",
      requested:"ee",
      updated:"ee",
      available:"available"
      
   
    },
    {
      key: '3',
      name: 'Joe Black',
      supplier: 32,
      category: 'Sidney No. 1 Lake Park',
      stored:"ee",
      requested:"ee",
      updated:"ee",
      available:"available"
  
    },
    {
      key: '4',
      name: 'John Brown',
      supplier: 32,
      category: 'New York No. 1 Lake Park',
      stored:"ee",
      requested:"ee",
      updated:"ee",
      available:"available"
     
    },
    {
      key: '5',
      name: 'Jim Green',
      supplier: 42,
      category: 'London No. 1 Lake Park',
      stored:"ee",
      requested:"ee",
      updated:"ee",
      available:"available"
   
    },
    {
      key: '6',
      name: 'Joe Black',
      supplier: 32,
      category: 'Sidney No. 1 Lake Park',
      stored:"ee",
      requested:"ee",
      updated:"ee",
      available:"available"
  
    },
    {
      key: '7',
      name: 'Joe Black',
      supplier: 32,
      category: 'Sidney No. 1 Lake Park',  
      stored:"ee",
      requested:"ee",
      updated:"ee",
      available:"available"
  
    },
  ];
  

  
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [isModalVisiblee, setIsModalVisiblee] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const showModal1 = () => {
    setIsModalVisible1(true);
  };

  const handleOk1 = () => {
    setIsModalVisible1(false);
  };

  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };



  return (
      
    <div >
         <div className="flex marginBottom" style={{width:"40%",marginLeft:"auto"}}>
             <Button style={{width:"38%", backgroundColor:"#1C811C", color:"white"}}>Filter Items By</Button>
             <div style={{width:"60%"}}>
                <Input style={{marginLeft:"5px" ,border: "1px solid #707070", backgroundColor: "#D5FFD5" }} suffix={<SearchOutlined />} placeholder="search" />
              </div>
           {/* <Input style={{marginLeft:"5px"}} icon={<SearchOutlined/>}/> */}
         </div>
        <div className="flex-between padding" style={{backgroundColor:"#D5FFD5"}}>
          <p style={{width:"60%"}}><b>Inventory Management</b></p>  
          <div className="flex-between" style={{minWidth:"250px" }} >
              <Badge count={5}>
                  <Button style={{fontWeight:"bold", borderRadius:"20px"}}>Request</Button>
              </Badge>
             
              <Button style={{fontWeight:"bold"}} icon={<PlusOutlined />}>Add Request</Button>
              
          </div>
        </div>
       
<Table columns={columns} dataSource={data} />
<Modal 
style={{backgroundColor:"transparent"}}
width="90%"
// confirmLoading
// okButtonProps={onclick=()=>{alert("How far")}}
footer={false}
okText={<p style={{maxWidth:"100px"}}>Boss</p>}
closeIcon={<CloseOutlined style={{fontSize:"25px", backgroundColor:"red",  color:"white", padding:"10px"}}/>}
 visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
       <Page14/>
      </Modal>

      <Modal 
style={{backgroundColor:"transparent"}}
width="50%"
// confirmLoading
// okButtonProps={onclick=()=>{alert("How far")}}
footer={false}
okText={<p style={{maxWidth:"100px"}}>Boss</p>}
closeIcon={<CloseOutlined style={{fontSize:"25px", backgroundColor:"red",  color:"white", padding:"10px"}}/>}
 visible={isModalVisible1} onOk={handleOk1} onCancel={handleCancel1}>
       <Page37/>
      </Modal>
    </div>

   
  );
};
export default DevTrain7

// const cards = houseProperties.map(item => <div className= "houseMath4" style={{border:""}}><Link to = "/page3">
// <Picture_card card = {item} height = "200px"/> 
// </Link> </div> )