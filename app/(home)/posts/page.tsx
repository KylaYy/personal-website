import EndSpace from "@/app/components/end-space";
import IntroSpace from "@/app/components/intro-space";
import TextWrapper from "@/app/components/text-wrapper";
import Header from "@/app/components/text/h1";
import BlogList from "@/app/lib/blog-list";

export default function Blog() {
    return (
        <TextWrapper>
            <IntroSpace/>
            <Header>Posts</Header>
            <IntroSpace/>
            <BlogList/>
            <EndSpace/>
        </TextWrapper>
    );
}