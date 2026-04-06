import TextWrapper from "@/app/components/text-wrapper";
import Header from "@/app/components/text/h1";
import Paragraph from "@/app/components/text/paragraph";
import Image from 'next/image'


export default function Contact() {
  return (
    <TextWrapper>
      <Header>Contact</Header>
      <Paragraph>Reach out!</Paragraph>
      <a href='https://www.linkedin.com/in/k--ylayu27/' target='_blank'>
      <Image src='/images/linkedin.JPG' alt='bear with text bubble containing linkedin logo' aria-label="i ate the linkedin profile, click me!" width={300} height={200}></Image>
      </a>
    </TextWrapper>
  );
}