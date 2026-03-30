"use client"; 

import Paragraph from "@/app/components/text/paragraph";
import Header from "@/app/components/text/h1";
import SubHeader from "@/app/components/text/h2";

export default function Blog1() {
    return (
        <div>
            <Header>Blog Post 1</Header>
            <SubHeader>Date</SubHeader>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi
                dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita
                tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i
                n reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exce
                teur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                 anim id est laborum. Click this <a href="https://www.w3schools.com/html/html_links.asp">link</a> to see!
                <br /><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi
                dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita
                tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i
                n reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exce
                teur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                 anim id est laborum.
            </Paragraph>
        </div>
    );
}