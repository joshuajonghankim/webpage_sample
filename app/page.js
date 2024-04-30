import Image from "next/image";

export default function Home() {
  return (
    <main className="">

      <div className="relative overflow-y-auto snap-mandatory h-screen w-screen snap-y flex flex-col items-center justify-between">


        {/* Main page */}
        <div className="relative snap-center snap-always min-h-dvh min-w-full flex justify-center items-center bg-background-pattern bg-cover bg-center">



          <div className='absolute w-full h-2/3 bg-main-1 bg-cover top-0 sm:bg-main-2 bg-center bg-fixed'>


          </div>
          <div className='absolute w-full h-dvh border rounded-md border-gray-500 m-5'>

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

        <div className="relative snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-background-pattern bg-cover bg-center">
          <div className="absolute top-20 size-auto text-center">
            <h1 className="text-3xl font-Hahmlet font-bold text-gray-500">갤러리</h1>
            <div className="mt-20 snap-x snap-mandatory overflow-x-auto flex flex-row fle">
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="snap-center snap-always mx-20"
                width={300}
                height={600}
                priority
              />
              <Image
                src="/images/g1.jpg"
                alt="g1"
                className="snap-center snap-always mx-20"
                width={300}
                height={600}
                priority
              />
              <Image
                src="/images/g1.jpg"
                alt="g1"
                className="snap-center snap-always mx-20"
                width={300}
                height={600}
                priority
              />

            </div>

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
          <a className="absolute top-1/4 text-1xl font-Hahmlet rounded-xl p-2 text-gray-500 border border-gray-400"
            href="https://forms.gle/S2SnGE7jT2SuxhF68"
            target="_blank"
            rel="noopener noreferrer"
          >
            알리기
          </a>

          <h1 className="absolute top-1/2 font-Hahmlet text-center">
            <h1 className=" text-2xl font-Hahmlet  text-gray-500">
              마음 전하실 곳
            </h1>
            <h1 className="text-1xl font-Hahmlet m-5 text-black">
              참석이 어려우신 분들을 위해 계좌번호를 기재하였습니다.<br></br>
              너그러운 마음으로 양해 부탁드립니다.
            </h1>
            <table class="table-auto border-separate border-gray-500 rounded-xl border-spacing-1 border w-full mt-10">
              <tbody>
                <tr>
                  <td>신랑</td>
                  <td>이성연</td>
                  <td>카카오뱅크</td>
                  <td>3333-10-5382056</td>
                  <td>복사</td>
                </tr>
                <tr>
                  <td>부</td>
                  <td>이영우</td>
                  <td>SC제일은행</td>
                  <td>600-20-373733</td>
                  <td>복사</td>
                </tr>
                <tr>
                  <td>모</td>
                  <td>신신숙</td>
                  <td>국민은행</td>
                  <td>879802-93-115438</td>
                  <td>복사</td>
                </tr>
              </tbody>
            </table>

            <table class="table-auto mt-5 border-separate border-gray-500 rounded-xl border-spacing-1 border w-full">
              <tbody>
                <tr>
                  <td>신부</td>
                  <td>김한은</td>
                  <td>카카오뱅크</td>
                  <td>3333-28-6191015</td>
                  <td>복사</td>
                </tr>
                <tr>
                  <td>부</td>
                  <td>김규백</td>
                  <td>농협</td>
                  <td>702076-52-131271</td>
                  <td>복사</td>
                </tr>
                <tr>
                  <td>모</td>
                  <td>김영정</td>
                  <td>대구은행</td>
                  <td>009-08-312442</td>
                  <td>복사</td>
                </tr>
              </tbody>
            </table>
          </h1>
        </div>

        <div className="relative overflow-y-auto snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-background-pattern bg-cover bg-center">
          <div className="absolute top-20 text-center text-black">
            <h1 className="text-3xl font-Hahmlet font-bold text-black">방명록</h1>

          </div>
          <div className='absolute top-30 text-black'>
            <div class="commentbox"></div>
            <script src="https://unpkg.com/commentbox.io/dist/commentBox.min.js"></script>
            <script>commentBox(5685847600922624-proj)</script>
          </div>


          {/*
          <footer className='relative mt-auto bottom-0 text-sm text-black'>
            <p>&copy; 2024 joshuajonghankim. All rights reserved.</p>
          </footer>
          */}



        </div>

      </div>
    </main >
  );
}

