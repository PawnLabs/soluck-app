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
    </div>
  );
}
