import TextWrapper from "@/app/components/text-wrapper";
import Header from "@/app/components/text/h1";
import BlogList from "@/app/lib/blog-list";
import Link from "next/link";

export default function Blog() {
    return (
        <TextWrapper>
            <Header>Blog</Header>
            <Link href={"/blog/mdx-test"}>Mdx Test</Link>
            <BlogList></BlogList>
        </TextWrapper>
    );
}