import SubHeader from "@/app/components/text/h2";
import Header from "../components/text/h1";
import BlogThumbnailWrapper from "../components/blog-thumbnail";
import MaxWidthWrapper from "../components/max-width-wrapper";


export default function Home() {
  return (
    <MaxWidthWrapper>
            <Header>Home</Header>
            <p>
              Hello!
            </p>
            <p>
              I’m Kyla, a third year Systems Design Engineering student at the University of 
              Waterloo. I’m currently doing pavement asset management at York Region, and I’ve
               done previous transportation research co-ops at Waterloo’s <a href='https://uwaterloo.ca/planning/'>School of Planning</a> and the <a href='https://reactlab.civil.ubc.ca/'>UBC REACT Lab</a>. 
            </p>
            <p>
              As someone who regularly needs to move from one point in space to another, I’m deeply curious about the way 
              urban transportation systems develop. In particular, I want to know how policy, data, and technology shape 
              the way people move within their cities. Over the past few years I’ve spent exploring these topics, I’ve been 
              driven by a few core tenets:
            </p>
            <ol class='list-decimal'>
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
    </MaxWidthWrapper>
  );
}
