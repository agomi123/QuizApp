import React from "react";


const CircluarButton = (props) => {
   const style= {
        width: '50px',
        height: '50px',
        border: 'none',
        borderRadius: '50%',
        color: 'white',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        outline: 'none',
        transition: 'background-color 0.3s ease'
   };
    return (
    <div>
      <button
        className="circular-button m-1"
        style={style}
        
      >{props.value}
      </button>
    </div>
  );
};

export default CircluarButton;
