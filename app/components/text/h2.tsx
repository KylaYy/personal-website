interface SubHeaderProps{
    children: React.ReactNode;
}

const SubHeader = ({children}: SubHeaderProps) => {
    return(
        <h2 className="italic text-lg">{children}</h2>
    );
};

export default SubHeader;