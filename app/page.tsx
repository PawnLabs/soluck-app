import { Collapsible } from "./_components/Foldable";
import { Header } from "./_components/Header";
import { LastWinners } from "./_components/LastWinners";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="h-[92px] w-full">
        <Header></Header>
      </div>
      <div className="h-[64px] w-full">
        <LastWinners></LastWinners>
      </div>
      <div className="flex flex-grow">
        <div className="flex h-full w-[511px] flex-col items-center justify-start gap-4 pt-4 text-white">
          <Collapsible style={"w-[383px]"}></Collapsible>
          <Collapsible style={"w-[383px]"}></Collapsible>
        </div>
        <div className="h-full w-[958px]"></div>
        <div className="h-full w-[511px] items-center justify-center pt-4">
          <Collapsible style={"w-[383px]"}></Collapsible>
        </div>
      </div>
    </div>
  );
}
