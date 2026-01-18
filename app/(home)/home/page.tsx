import SubHeader from "@/app/components/text/h2";
import MaxWidthWrapper from "../../components/max-width-wrapper";
import Header from "../../components/text/h1";

export default function Home() {
  return (
    <div>
      <Header>Home</Header>
      <SubHeader>Subheader</SubHeader>
      <div className="">
        Test div
      </div>
    </div>
  );
}
