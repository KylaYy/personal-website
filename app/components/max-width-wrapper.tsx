interface MaxWidthWrapperProps {
    children: React.ReactNode;
}

const MaxWidthWrapper = ({children} : MaxWidthWrapperProps) => {
    return (
        <div className="max-w-screen-3xl mx-auto w-full px-4 sm:px-24 lg:px-56">
            {children}
        </div>
    );
}; 

export default MaxWidthWrapper;