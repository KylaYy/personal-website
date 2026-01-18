"use client"; 

import MaxWidthWrapper from "@/app/components/max-width-wrapper";
import Header from "@/app/components/text/h1";
import { useParams } from "next/navigation";

export default function Post1() {
    const {id} = useParams();

    return (
        <div>
            <Header>Blog Post {id}</Header>
        </div>
    );
}