import Paragraph from "./text/paragraph";
import PostDate from "./text/post-date";
import PostTitle from "./text/post-title";

interface BlogThumbnailProps {
    headerTitle: string;
    date: string;
    description: string;
    // children: React.ReactNode;
    // Add in params for title, date, and description (title and date will also be used in blog post)
}

const BlogThumbnail = (BlogTitle : BlogThumbnailProps) => {
    return (
        <div className="w-full outline">
            <PostTitle>{BlogTitle.headerTitle}</PostTitle>
            <PostDate>{BlogTitle.date}</PostDate>
            <Paragraph>{BlogTitle.description}</Paragraph>
        </div>
    );
}; 

export default BlogThumbnail;