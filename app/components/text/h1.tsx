interface HeaderProps {
    children: React.ReactNode;
}

const Header = ({children} : HeaderProps) => {
    return(
        <h1 className="text-4xl text-black">{children}</h1>
    );
};

export default Header;