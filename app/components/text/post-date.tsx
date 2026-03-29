interface PostDateProps {
    children : React.ReactNode;
}

const PostDate = ({children}: PostDateProps) => {
    return(
    <p className="text-sm">{children}</p>
)
}

export default PostDate