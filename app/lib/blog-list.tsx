import Blog from "../(home)/posts/page";
import BlogThumbnail from "../components/blog-thumbnail";

interface Post {
    key: number;
    title: string;
    slug: string;
    date: string;
    desc: string;
}

// List containing all blog posts and slugs
const postList: Post[] = [
    {key: 1, title: "blog post 1", slug: "/1", date: "valid/date/day", desc: "This is a test description form the posts list"},
    {key: 2, title: "blog post 2", slug: "/2", date: "valid/date/day", desc: "This is a test description form the posts list"},
    {key: 3, title: "blog post 3", slug: "/3", date: "valid/date/day", desc: "This is a test description form the posts list"}
];

// Checks whether the current slug is valid
// returns a 
const BlogList = () => {
    return (
        <>
        {postList.map((post: Post) => (
        <BlogThumbnail
        key={post.key}
        headerTitle={post.title}
        slug={post.slug}
        date={post.date}
        description={post.desc}/>
    ))}
        </>
    )
}

export default BlogList