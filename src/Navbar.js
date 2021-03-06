import React from 'react';


    
    const Navbar=(props)=>{
        return(
            
              <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon} src='https://cdn-icons-png.flaticon.com/128/2331/2331970.png' alt='cart-icon'/>
                    <span style={styles.cartCount}>{props.count}</span>
                </div>
              </div>
        );
    }

const styles={
    cartIcon:{
        height:32,
        marginRight:40
    },
    nav:{
        height:70,
        background:'yellow',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    cartIconContainer:{
        position:'relative'
    }
    ,
    cartCount:{
        background:'lightblue',
        borderRadius:'50%',
        padding:'4px 8px',
        position:'absolute',
        right:0,top:-9
    }

};

export default Navbar;