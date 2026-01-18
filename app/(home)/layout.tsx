import NavBar from "../components/navbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    ); 
}