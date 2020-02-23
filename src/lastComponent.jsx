import React from 'react';

function LastComponent(props){
    const backgroundColor = {backgroundColor:props.team}
    return(
        <div style={styles.lastComponent}>
         LastComponent
         
         <button style={Object.assign({}, styles.btnclick, backgroundColor)}>
              Click MY
          </button>
        </div>
    );
   
};


const styles ={
    lastComponent:{
        width:'25%',
        height:'200px',
        backgroundColor:'#9D1B0F',
        display:'flex',
        fontSize:'12px',
        justifyContent:'center',
        alignItems:'center',
        marginRight:'100px',
        userSelect:'none',
    },
    btnclick:{
        width:'60px',
        height:'20px',
        border:'1px solid black',
        borderRadius:'8%',
        cursor:'pointer',
        color:'white',
        

    }
}

export default LastComponent;