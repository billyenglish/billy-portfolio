type ButtonProps = {
    text?: string;
    className?: string;
    id?: string;
    icon?: React.ReactNode;
    onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}

const Button = ({
    text = "",
    className = "",
    id = "",
    icon,
    onClick
}: ButtonProps) => {
    
    return (
        <button
            type="button"
            className={className}
            id={id}
            onClick={onClick}
        >
            { text?.trim() ? text : icon }
        </button>
    );
};

export default Button;