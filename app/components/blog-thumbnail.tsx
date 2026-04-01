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
        <div className="w-full rounded-lg fill-red-500 py-2 opacity-100">
        <a href={`posts${Blog.slug}`}>
             <PostTitle>{Blog.headerTitle}</PostTitle>
        </a>
        <PostDate>{Blog.date}</PostDate>
        <Paragraph>{Blog.description}</Paragraph>
        </div>
    );
}; 

export default BlogThumbnail;