import Paragraph from "./text/paragraph";
import PostDate from "./text/post-date";
import PostTitle from "./text/post-title";

interface BlogThumbnailProps {
    headerTitle: string;
    slug: string;
    date: string;
    description: string;
    // children: React.ReactNode;
    // Add in params for title, date, and description (title and date will also be used in blog post)
}

const BlogThumbnail = (Blog : BlogThumbnailProps) => {
    return (
        <a href={`blog${Blog.slug}`}>
            <div className="w-full outline">
            <PostTitle>{Blog.headerTitle}</PostTitle>
            <PostDate>{Blog.date}</PostDate>
            <Paragraph>{Blog.description}</Paragraph>
            </div>
        </a>
    );
}; 

export default BlogThumbnail;