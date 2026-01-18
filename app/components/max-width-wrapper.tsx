interface MaxWidthWrapperProps {
    children: React.ReactNode;
}

const MaxWidthWrapper = ({children} : MaxWidthWrapperProps) => {
    return (
        <div className="w-full px-70 sm:px-[50px] lg:px-[150px] sm:py-[10px] lg:py-[15px]">
            {children}
        </div>
    );
}; 

export default MaxWidthWrapper;