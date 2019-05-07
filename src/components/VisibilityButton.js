import React from 'react';
function VisibilityButton({handleClick, labels}){
    const allButtons =  labels.map((label, i)=> {
        return(
            <button key={i} onClick={() => handleClick(label)}>
                {label}
            </button>
        )
    })
    return(
        <div>
            {allButtons}
        </div>
    )
}
export default VisibilityButton;