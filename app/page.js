import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="relative overflow-y-auto scroll-smooth snap-mandatory h-screen w-screen snap-y flex min-h-screen flex-col items-center justify-between">
        
        <button class="rounded-full w-7 h-7 flex items-center justify-center pl-0.5 ring-1 ring-black focus:outline-none">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        </button>

        <button class="rounded-full w-7 h-7 flex items-center justify-center pl-0.5 ring-1 ring-black focus:outline-none">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="4" height="18"></rect><rect x="15" y="3" width="4" height="18"></rect></svg>
        </button>

        <div className="sticky top-0 snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-gray-300">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black">메인화면</h1>
          </div>
        </div>

        <div className="sticky top-0 snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-white">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black">결혼합니다 페이지</h1>
          </div>
        </div>

        <div className="sticky top-0 snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-red-300">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black">날짜 달력 남은시간 카운팅</h1>
          </div>
        </div>

        <div className="sticky top-0 snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-yellow-400">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black">갤러리, 사진 더보기</h1>
          </div>
        </div>

        <div className="sticky top-0 snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-green-300">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black">오시는 길, 지도</h1>
          </div>
        </div>

        <div className="sticky top-0 snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-blue-300">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black">계좌번호</h1>
          </div>
        </div>

        <div className="sticky top-0 snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-purple-300">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black">방명록</h1>
          </div>
        </div>

        <footer>
          Hello World

        </footer>

      </div>







    </main >
  );
}
