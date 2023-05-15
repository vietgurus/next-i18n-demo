import { Inter } from "next/font/google";
import { useContext, useEffect } from "react";
import { I18NContext } from "@/hooks/Contexts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const i18nContext = useContext(I18NContext);
  console.log(i18nContext);
  if (!i18nContext || !i18nContext.data) return null;

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div
        className="flex place-items-center items-baseline
        before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full 
        before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl 
        before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] 
        after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 
        after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent
         before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]"
      >
        <p className='dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert font-extrabold text-6xl mr-6'>
          {i18nContext.data.en.name}
        </p>
        <p className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert text-xl'>
          {i18nContext.data.en.location}
        </p>
      </div>
    </main>
  );
}
