import Paragraph from "./text/paragraph";
import PostDate from "./text/post-date";
import PostTitle from "./text/post-title";

interface ProjThumbnailProps {
    headerTitle: string;
    slug: string;
    date: string;
    description: string;
    // children: React.ReactNode;
    // Add in params for title, date, and description (title and date will also be used in blog post)
}

const ProjThumbnail = (Proj : ProjThumbnailProps) => {
    return (
        <a href={`projects${Proj.slug}`}>
            <div className="w-full outline">
            <PostTitle>{Proj.headerTitle}</PostTitle>
            <PostDate>{Proj.date}</PostDate>
            <Paragraph>{Proj.description}</Paragraph>
            </div>
        </a>
    );
}; 

export default ProjThumbnail;