import TextWrapper from "@/app/components/text-wrapper";
import Header from "@/app/components/text/h1";
import BlogList from "@/app/lib/blog-list";

export default function Blog() {
    return (
        <TextWrapper>
            <Header>Posts</Header>
            <BlogList/>
        </TextWrapper>
    );
}