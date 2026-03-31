import ProjThumbnail from "../components/project-thumbnail";

interface Post {
    key: number;
    title: string;
    slug: string;
    date: string;
    desc: string;
}

// List containing all blog posts and slugs
const postList: Post[] = [
    {key: 1, title: "proj 1", slug: "/1", date: "valid/date/day", desc: "This is a test description form the posts list"}
];

// Checks whether the current slug is valid
// returns a 
const ProjList = () => {
    return (
        <>
        {postList.map((post: Post) => (
        <ProjThumbnail
        key={post.key}
        headerTitle={post.title}
        slug={post.slug}
        date={post.date}
        description={post.desc}/>
    ))}
        </>
    )
}

export default ProjList