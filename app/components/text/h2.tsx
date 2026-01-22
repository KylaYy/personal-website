interface SubHeaderProps{
    children: React.ReactNode;
}

const SubHeader = ({children}: SubHeaderProps) => {
    return(
        <div className="py-1">
            <h2 className="italic text-lg">{children}</h2>
        </div>
    );
};

export default SubHeader;