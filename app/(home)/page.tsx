import SubHeader from "@/app/components/text/h2";
import Header from "../components/text/h1";
import BlogThumbnailWrapper from "../components/blog-thumbnail";
import MaxWidthWrapper from "../components/max-width-wrapper";
import Paragraph from "../components/text/paragraph";
import TextWrapper from "../components/text-wrapper";


export default function Home() {
  return (
    <TextWrapper>
            {/* <Header>Home</Header> */}
            <Paragraph>
              <b>Hello!</b>
            </Paragraph>
            <Paragraph>
              I’m Kyla, a third year Systems Design Engineering student at the University of 
              Waterloo. I’m currently doing pavement asset management at <a href='https://www.york.ca/'>York Region</a>, and I’ve
               done previous transportation research co-ops at the <a href='https://uwaterloo.ca/planning/'>UWaterloo School of Planning</a> and 
               the <a href='https://reactlab.civil.ubc.ca/'>UBC REACT Lab</a>. 
            </Paragraph>
            <Paragraph>
              As someone who has relied on public transit for the majority of my life, I’ve felt firsthand the limitations 
              of poor transportation systems, and the freedom granted by good ones. As a result, I’m deeply 
              curious about the way urban transportation systems develop. In particular, I want to know how policy, data, 
              and technology shape the way people move within their cities. Over the past few years I’ve spent exploring these 
              topics, I’ve been driven by a few core tenets:
            </Paragraph>
            <ol className='list-decimal'>
              <li>
                <b>Everyone is entitled to good transportation.</b> I’m motivated by the belief that transportation should be 
                accessible, cost-effective, and most importantly, safe for everyone.
              </li>
              <li>
                <b>Transportation systems are fundamentally dynamic.</b> Transportation needs change constantly, from day to day, 
                week to week, year to year and systems need to change to accommodate - there will never be a perfect 
                transportation system because people and their mode choices will inevitably shift over time.
              </li>
              <li>
                <b>Poor transportation has immense consequences.</b> A good transportation system can open up access to employment, 
                education, groceries, healthcare, and more, while a bad one can limit access to everything.
              </li>
            </ol>
            <Paragraph>
              These days, I find myself thinking more and more about the control municipal governments have 
              over transportation systems. My latest interest revolves around community engagement in 
              government projects. It’s a contentious topic amongst planners, and I want to know what is 
              working, what isn’t, and how government approval processes should change to best serve the 
              people they’re supposed to serve.
            </Paragraph>
            <Paragraph>
              If this sounds like something you’re interested in, feel free to reach out - I'd love to chat about these topics!
              You can find me on <a href='https://www.linkedin.com/in/k--ylayu27/' target='_blank'>Linkedin</a> or send me an  
              <a href='mailto:kjyu@uwaterloo.ca'> email</a>!
          </Paragraph>
    </TextWrapper>
  );
}
