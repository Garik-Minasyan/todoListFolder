import React from 'react';

import LastComponent from './lastComponent';



function SecondComponent(props) {
   return(
       <div style={styles.secondComponent}>
          SecondComponent
          <LastComponent team={props} /> 
       </div>
   );
};

const styles={
    secondComponent:{
        width:'50%',
        height:'400px',
        backgroundColor:'#33CAB8',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'15px',
        marginRight:'70px',
        userSelect:'none',
    },
    
};

export default SecondComponent;