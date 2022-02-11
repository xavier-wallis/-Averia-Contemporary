import Wave from "react-wavify"
import Image from "next/image"


export default function Home() {
  return (
    <>
      <div className={'bg-white absolute mt-4 ml-6 p-2 rounded-md shadow-lg font-bold'}>
        <h2>Averia Artificial Intelligence</h2>
      </div>
      <div className={'w-screen h-40 bg-[#B304FA]'}>
        <Image src={'/stockgraphicWhite.svg'} width={400} height={200} className={'absolute z-10 translate-y-2'}/>
      </div>
      <Wave className={'rotate-180'} fill={'#B304FA'} paused={false} options={
          {
            height:20,
            amplitude: 20,
            speed:0.1,
            points: 5
          }}/>
        <div className={'w-screen flex justify-center'}>
          <div className={'bg-white w-2/3 -translate-y-28 rounded-lg shadow-lg text-center'}>
            <h2 className={'font-bold my-2 mx-1'}>The most innovative quantitative financial trading architecture.</h2>
          </div>
        </div>
       
    </>
  )
}
