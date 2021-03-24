import React, { PureComponent } from 'react';
import Chartz from './Chartz'
import Example from './Example'
import DashboardT from './DashboardT'
import DashboardRequest from './DashboardRequest'



 function Chartings(props) {
 


    return (
    
        <div style={{marginTop:"100px"}}>
      <div className="flex-between flex-align" style={{backgroundColor:"white"}}>
          <Chartz/>
          <Chartz/>
          <Example/>
      </div>
     
      <DashboardT/>
      <DashboardRequest/>
      {/* <div>
<DashboardT/>
<DashboardRequest/>
      </div> */}
        </div>
    
    );

}export default Chartings
