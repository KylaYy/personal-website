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
            {children}
        </MaxWidthWrapper>
    ); 
}