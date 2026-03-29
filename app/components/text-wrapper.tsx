interface TextWrapperProps {
    children: React.ReactNode;
}

const TextWrapper = ({children} : TextWrapperProps) => {
    return (
        <div className="max-w-screen-3xl mx-auto">
            {children}
        </div>
    );
}; 

export default TextWrapper;