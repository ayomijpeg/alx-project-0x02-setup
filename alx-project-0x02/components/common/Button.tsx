import React from "react"
import{ ButtonProps }from "@/interfaces"

const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
}
const Button: React.FC<ButtonProps> = ({ size, shape, children, onClick }) => {
    return (
        <button
        onClick={onClick}
        className={`bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${sizeClasses[size]} ${shape} transition`}
        >
        {children}
        </button>
    );
}
export default Button; 
