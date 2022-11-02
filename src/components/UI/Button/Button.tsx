import { MouseEventHandler } from 'react';
import { ContainerComponent } from '../../../types/Components';
import './Button.css'

interface ButtonProps extends ContainerComponent {
    type?: "button" | "submit" | "reset"
    className?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}

function Button({ type, onClick, className, children }: ButtonProps) {
    return (
        <button type={type} className={`button ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;