import React from 'react';

import SecondComponent from './secondComponent';

function FirsComponent(props){
    return(
        <div style={styles.firsComponent}>
           FirsComponent
           <SecondComponent team={props} />
        </div>
    );
};

const styles = {
    firsComponent:{
        width:'100%',
        height:'550px',
        backgroundColor:'#3A5E94',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'22px',
        userSelect:'none',
    }
}

export default FirsComponent;