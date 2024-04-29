import Head from 'next/head';
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">

      <div className="relative overflow-y-auto scroll-smooth snap-mandatory h-screen w-screen snap-y flex min-h-screen flex-col items-center justify-between">

        {/* Main page */}

        <div className="sticky top-0 snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-background-pattern bg-cover">

          <div className='w-full h-2/3 bg-main-1 bg-cover absolute top-0 sm:bg-main-2 bg-center'>
            <div className='w-auto h-screen border rounded-md border-gray-500 m-5'>

            </div>
          </div>


          <div className="text-center absolute bottom-20 font-Hahmlet text-gray-500">
            <h1 className="text-4xl mb-8">이성연 | 김한은</h1>
            <h1 className="text-1xl mb-4">2024.7.20 SAT 12:00</h1>
            <h1 className="text-1xl">광명역사컨벤션웨딩홀</h1>
          </div>
        </div>

        <div className="sticky top-0 snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-background-pattern bg-cover">
          <div className="text-center text-wrap m-10">
            <h1 className="text-1xl font-Hi_Melody text-gray-500">
              결혼합니다<br></br><br></br>
              하나님의 사랑으로 만난 두 사람이<br></br>
              이제 새로운 가정을 이루는 아름다운 약속을 하려 합니다.<br></br>
              언제나 아름답고 주위에 사랑을 나누는<br></br>
              행복한 가정을 이루도록<br></br>
              오셔서 축복해 주시고 지켜봐 주십시오.<br></br>
              <br></br>
              이영우
              신신숙
              의 장남 <strong>이성연</strong><br></br>
              김규백
              김영정
              의 차녀 <strong>김한은</strong>
            </h1>
          </div>
        </div>

        <div className="sticky top-0 snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-background-pattern bg-cover">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black">날짜 달력 남은시간 카운팅</h1>
          </div>
        </div>

        <div className="sticky top-0 snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-background-pattern bg-cover">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black">갤러리, 사진 더보기</h1>
          </div>
        </div>

        <div className="sticky top-0 snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-background-pattern bg-cover">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black">오시는 길, 지도</h1>
          </div>
        </div>

        <div className="sticky top-0 snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-background-pattern bg-cover">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black">계좌번호</h1>
          </div>
        </div>

        <div className="sticky top-0 snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-background-pattern bg-cover">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black">방명록</h1>
            <script src="https://utteranc.es/client.js"
              repo="joshuajonghankim/wedding_invitation"
              issue-term="pathname"
              theme="github-light"
              crossorigin="anonymous"
              async>
            </script>
          </div>



        </div>

        <footer className='sticky top-0 snap-end'>
          Designed by joshuajonghankim
        </footer>

      </div>
    </main >
  );
}