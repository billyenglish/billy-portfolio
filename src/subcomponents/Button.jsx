const defaultButtonStyle = {
        border: "1px solid red",
        height: "10rem",
        width: "10rem"
};

const Button = ({ className, content }) => {

    return (
        <button
            className={className}
            style={{defaultButtonStyle}}>
            {content}
        </button>
    );
};

export default Button;