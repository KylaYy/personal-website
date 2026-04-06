import EndSpace from "@/app/components/end-space";
import IntroSpace from "@/app/components/intro-space";
import TextWrapper from "@/app/components/text-wrapper";
import Header from "@/app/components/text/h1";
import ProjList from "@/app/lib/project-list";

export default function Projects() {
  return (
    <TextWrapper>
      <Header>Projects</Header>
      <IntroSpace/>
      <ProjList/>
      <EndSpace/>
    </TextWrapper>
  );
}