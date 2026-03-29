interface PostTitleProps{
    children: React.ReactNode;
}

const PostTitle = ({ children }: PostTitleProps) => {
    return (
    <p className='text-lg'>{children}</p>
    )
}

export default PostTitle 