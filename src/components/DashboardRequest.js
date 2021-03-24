import React, { PureComponent } from 'react';
import { Table,Button } from 'antd';
import { BsFillCircleFill,  } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";



 function DashboardRequest(props) {

//  const myObj = [{
// button: <Button>Hello</Button>,
// button2:<Button>Hi</Button>

//  },
//  {
//     text: "hello Boss",
//     text2:"Hi Boss"
    
//      }

// ]
// const t = {
//     button: <Button>Hello</Button>,
//     button2:<Button>Hi</Button>
    
//      }

// const text = myObj.map(obj=>{

//     if( obj.button){
//   return  <div style={{border:"2px solid red"}}>{obj.button}</div>
  
//     }
//     else
//    { return
// <div style={{border:"2px solid green"}}>{obj.text2}</div>}
// })



    return (
    
    //    (t.button)&& <div style={{marginTop:"100px", border:"2px solid red"}}>
         
    //        {t.button}
        
        
    //     </div>
    <div style={{marginTop:"100px", width:"100%"}}>

<div className="flex-between padding border" style={{marginTop:"20px", backgroundColor:"#D5FFD5"}}>
            
            <p>Mainteinance Request</p>
            <p><b>Action</b></p>
          {/* <Input style={{marginLeft:"5px"}} icon={<SearchOutlined/>}/> */}
        </div>
        <div style={{display:"flex",padding:"5px 10px",marginBottom:"10px", backgroundColor:"white", justifyContent:"space-between", alignItems:"center"}}>
            <div style={{width:"70%"}}>
                <p>Request for proposal of Chemical flasks</p>
            </div>
            <p><Button  style={{borderRadius:"20px", backgroundColor:"green", color:"white"}}>Submit Request</Button></p>
            <p><AiFillEdit fontSize="26px" color="green" /></p>
            <p>Delete</p>
        </div>
        <div style={{display:"flex",padding:"5px 10px",marginBottom:"10px", backgroundColor:"white", justifyContent:"space-between", alignItems:"center"}}>
            <div style={{width:"70%"}}>
                <p>Request for proposal of Chemical flasks</p>
            </div>
            <p><Button style={{borderRadius:"20px", backgroundColor:"green", color:"white"}}>Submit Request</Button></p>
            <AiFillEdit fontSize="27px" color="green" />
            <p>Delete</p>
        </div>
        <div style={{display:"flex",padding:"5px 10px",marginBottom:"10px", backgroundColor:"white", justifyContent:"space-between", alignItems:"center"}}>
            <div style={{width:"50%"}}>
            <p>Request for proposal of Chemical flasks</p>
            </div>
            <div style={{marginRight:"auto",}} className="flex-align">
                <BsFillCircleFill color="yellow" style={{marginRight:"5px",}}  />
                <p>Currently with Anthony Ogboku</p>
            </div>
           
           
            <p><b>Last treated:</b> <span style={{opacity:"0.4"}}>08.06.2020</span></p>
        </div>
        <div style={{display:"flex",padding:"5px 10px",marginBottom:"10px", backgroundColor:"white", justifyContent:"space-between", alignItems:"center"}}>
            <div style={{width:"50%", }}>
            <p>Request for proposal of 1000 Chemical flasks</p>
            </div>
            <div style={{marginRight:"auto",}}  className="flex-align">
            <BsFillCircleFill color="green" style={{marginRight:"5px",}} />
                <p>Approved</p>
            </div>
            <p><b>Last treated:</b> <span style={{opacity:"0.4"}}>08.06.2020</span></p>
        </div>
    </div>
    
    
    );

}export default DashboardRequest
