'use client';
import Image from "next/image";
import React from 'react';


function copyText(entryText) {
  navigator.clipboard.writeText(entryText);
  alert("복사되었습니다.");
}

export default function Home() {
  return (
    <main className="w-dvw">
      <div className="relative overflow-y-auto snap-mandatory h-screen w-screen snap-y flex flex-col items-center justify-between ">
        {/* Main page */}
        <div className="relative snap-center snap-always min-h-dvh min-w-full flex justify-center items-center bg-background-pattern bg-cover bg-center">

          <div className='absolute w-full h-2/3 bg-main-1 bg-cover top-0 sm:bg-main-2 bg-center bg-fixed'>

          </div>

          <div className='absolute w-full h-dvh border rounded-md border-gray-500'>

          </div>

          <div className="text-center absolute bottom-20 font-Hahmlet text-gray-500">
            <h1 className="text-4xl mb-8">이성연 | 김한은</h1>
            <h1 className="text-1xl mb-2">2024.7.20 토요일 낮 12시</h1>
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

        <div className="relative snap-center snap-always min-h-screen w-full flex justify-center items-center bg-background-pattern bg-cover bg-center">
          <h1 className="absolute top-20 flex text-center text-3xl font-Hahmlet font-bold text-gray-500">갤러리</h1>

          <div dir="ltr" className="absolute top-1/4 snap-x snap-mandatory overflow-x-auto flex flex-row scroll-ms-10">
            <Image
              src="/images/g0.jpg"
              alt="g0"
              className="snap-center snap-always mx-10 w-2/3 h-1/2"
              width={600}
              height={1200}
              priority
            />
            <Image
              src="/images/g1.jpg"
              alt="g1"
              className="snap-center snap-always mx-10 w-2/3 h-1/2"
              width={600}
              height={1200}
              p
            />
            <Image
              src="/images/g2.jpg"
              alt="g2"
              className="snap-center snap-always mx-10 w-2/3 h-1/2"
              width={600}
              height={1200}

            />
            <Image
              src="/images/g3.jpg"
              alt="g3"
              className="snap-center snap-always mx-10 w-2/3 h-1/2"
              width={600}
              height={1200}

            />
            <Image
              src="/images/g4.jpg"
              alt="g4"
              className="snap-center snap-always mx-10 w-2/3 h-1/2"
              width={600}
              height={1200}

            />
            <Image
              src="/images/g5.jpg"
              alt="g5"
              className="snap-center snap-always mx-10 w-2/3 h-1/2"
              width={600}
              height={1200}
            />

          </div>
        </div>

        <div className="relative snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-background-pattern bg-cover bg-center">
          <div className="absolute top-20 text-center">
            <h1 className="text-3xl font-bold font-Hahmlet text-gray-500">오시는 길</h1>
          </div>
        </div>

        <div className="relative snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-background-pattern bg-cover bg-center">
          <h1 className="absolute top-20 text-2xl font-Hahmlet text-gray-500">
            참석여부 알리기
          </h1>
          <a className="absolute top-32 text-1xl font-Hahmlet rounded-xl p-2 text-gray-500 border border-gray-400"
            href="https://forms.gle/S2SnGE7jT2SuxhF68"
            target="_blank"
            rel="noopener noreferrer"
          >
            알리기
          </a>

          <div className="absolute top-1/3 font-Hahmlet text-center">
            <h1 className="text-2xl font-Hahmlet text-gray-500">
              마음 전하실 곳
            </h1>
            <h1 className="text-1xl font-Hahmlet m-5 text-black">
              참석이 어려우신 분들을 위해 계좌번호를 기재하였습니다.<br></br>
              너그러운 마음으로 양해 부탁드립니다.
            </h1>
            <table className="table-auto bg-gray-200 border-separate border-gray-400 border-spacing-1 text-sm rounded text-black border w-10/12 m-10">
              <tbody>
                <tr>
                  <td>신랑</td>
                  <td>이성연</td>
                  <td>카카오뱅크</td>
                  <td>3333-10-5382056</td>
                  <td className="border border-gray-400 rounded-lg "><button className="px-1" onClick={() => copyText("3333105382056")}>복사</button></td>
                </tr>
                <tr>
                  <td>부</td>
                  <td>이영우</td>
                  <td>SC제일은행</td>
                  <td>600-20-373733</td>
                  <td className="border border-gray-400 rounded-lg"><button onClick={() => copyText("60020373733")}>복사</button></td>
                </tr>
                <tr>
                  <td>모</td>
                  <td>신신숙</td>
                  <td>국민은행</td>
                  <td>879802-93-115438</td>
                  <td className="border border-gray-400 rounded-lg"><button onClick={() => copyText("87980293115438")}>복사</button></td>
                </tr>
              </tbody>
            </table>

            <table class="table-auto bg-gray-200 border-separate border-gray-400 text-sm rounded text-black border w-10/12 m-10">
              <tbody>
                <tr>
                  <td>신부</td>
                  <td>김한은</td>
                  <td>카카오뱅크</td>
                  <td>3333-28-6191015</td>
                  <td className="border border-gray-400 rounded-lg"><button className="px-1" onClick={() => copyText("3333286191015")}>복사</button></td>
                </tr>
                <tr>
                  <td>부</td>
                  <td>김규백</td>
                  <td>농협</td>
                  <td>702076-52-131271</td>
                  <td className="border border-gray-400 rounded-lg"><button onClick={() => copyText("70207652131271")}>복사</button></td>
                </tr>
                <tr>
                  <td>모</td>
                  <td>김영정</td>
                  <td>대구은행</td>
                  <td>009-08-312442</td>
                  <td className="border border-gray-400 rounded-lg"><button onClick={() => copyText("00908312442")}>복사</button></td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

        <div className="relative overflow-y-auto snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-background-pattern bg-cover bg-center">
          <div className="absolute top-20 text-center ">
            <h1 className="text-3xl font-Hahmlet font-bold text-gray-500">방명록</h1>

          </div>
          <div className='absolute top-30 text-black'>
            <div id="cusdis_thread"
              data-host="https://cusdis.com"
              data-app-id="9ced41cd-cd74-4956-8d5c-ba890376f822"
              data-page-id="{{ PAGE_ID }}"
              data-page-url="{{ PAGE_URL }}"
              data-page-title="{{ PAGE_TITLE }}"
            ></div>
            <script async defer src="https://cusdis.com/js/cusdis.es.js"></script>

          </div>


          {/*    <footer className='relative mt-auto bottom-0 text-sm text-black'>
                <p>&copy; 2024 joshuajonghankim. All rights reserved.</p>
                    </footer>
                        */}




        </div>
        {/* Speaker Image */}
        <button className="absolute right-3 top-3 border-2 border-black rounded-md">
          <Image
            src="/images/speaker-on.png"
            alt="Speaker"
            width={30}
            height={30}
          />
        </button>

      </div>
    </main>




  );
}

