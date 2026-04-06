import EndSpace from "../components/end-space";
import IntroSpace from "../components/intro-space";
import MaxWidthWrapper from "../components/max-width-wrapper";
import NavBar from "../components/navbar";
import TextWrapper from "../components/text-wrapper";

export default function HomeLayout({
children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <MaxWidthWrapper>
            <NavBar />
            <IntroSpace/>
            {children}
            <EndSpace/>
        </MaxWidthWrapper>
    ); 
}