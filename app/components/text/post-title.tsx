interface PostTitleProps{
    children: React.ReactNode;
}

const PostTitle = ({ children }: PostTitleProps) => {
    return (
    <p className='text-xl font-bold'>{children}</p>
    )
}

export default PostTitle 