import { FlashSales } from "@/components/FlashSales";
import { WebTop } from "@/components/Webtop";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center px-[135px]">
      <WebTop />
      <FlashSales />
    </div>
  );
}
