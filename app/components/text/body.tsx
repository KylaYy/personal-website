interface BodyProps{
    children: React.ReactNode;
}

const Body = ({children}: BodyProps) => {
    return(
        <p className="text-primary">{children}</p>
    );
};

export default Body;