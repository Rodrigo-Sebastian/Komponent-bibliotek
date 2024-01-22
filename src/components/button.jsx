const Button = ({size, color, disable}) => {
    return(
        <button  
        style={{fontSize: size, 
            backgroundColor: color,
            cursor: disable ? 'not-allowed' : 'pointer',}}
            disabled={disable}>
            Click me        
        </button>
    )
};

export default Button;