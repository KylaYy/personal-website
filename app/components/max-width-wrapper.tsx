interface MaxWidthWrapperProps {
    children: React.ReactNode;
}

const MaxWidthWrapper = ({children} : MaxWidthWrapperProps) => {
    return (
        <div className="max-w-screen-3xl mx-auto w-full px-4 sm:px-10 md:px-60 lg:px-100">
            {children}
        </div>
    );
}; 

export default MaxWidthWrapper;