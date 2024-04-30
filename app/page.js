import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="">

      <div className="relative overflow-y-auto snap-mandatory h-screen w-screen snap-y flex flex-col items-center justify-between">


        {/* Main page */}
        <div className="relative snap-center snap-always min-h-dvh min-w-full flex justify-center items-center bg-background-pattern bg-cover bg-center">

          <div className='w-full h-dvh border rounded-md border-gray-500 m-5 inline-block'>

          </div>

          <div className='w-full h-2/3 bg-main-1 bg-cover absolute top-0 sm:bg-main-2 bg-center'>

          </div>



          <div className="text-center absolute bottom-20 font-Hahmlet text-gray-500">
            <h1 className="text-4xl mb-8">이성연 | 김한은</h1>
            <h1 className="text-1xl mb-4">2024.7.20 SAT 12:00</h1>
            <h1 className="text-1xl">광명역사컨벤션웨딩홀</h1>
          </div>
        </div>

        <div className="snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-background-pattern bg-cover bg-center">
          <div className="text-center text-wrap m-10">
            <h1 className="text-3xl font-Hi_Melody text-gray-500 font-bold">
              결혼합니다<br></br><br></br>
            </h1>
            <h1 className="text-2xl font-Hi_Melody text-gray-500">

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

        <div className="snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-background-pattern bg-cover bg-center">
          <div className="text-center">
            <h1 className="text-1xl text-black">
              2024.7.20<br></br>
              토요일 12시
            </h1>
          </div>
        </div>

        <div className="snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-background-pattern bg-cover bg-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black">갤러리, 사진 더보기</h1>
          </div>
        </div>

        <div className="snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-background-pattern bg-cover bg-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black">오시는 길, 지도</h1>
          </div>
        </div>

        <div className="snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-background-pattern bg-cover bg-center">
          <div className="text-center">
            <h1 className="text-1xl font-Hahmlet text-black">
              신랑 이성연 카카오뱅크 3333-10-5382056<br></br>
              부 이영우 SC제일은행 600-20-373733<br></br>
              모 신신숙 국민은행 879802-93-115438<br></br><br></br>

              신부 김한은 카카오뱅크 3333-28-6191015<br></br>
              부 김규백 농협 702076-52-131271<br></br>
              모 김영정 대구은행 009-08-312442
            </h1>
          </div>
        </div>

        <div className="relative snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-background-pattern bg-cover bg-center">
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

          <footer className='absolute bottom-0 text-sm text-black'>
            <p>&copy; 2024 joshuajonghankim. All rights reserved.</p>
          </footer>

        </div>

      </div>
    </main >
  );
}