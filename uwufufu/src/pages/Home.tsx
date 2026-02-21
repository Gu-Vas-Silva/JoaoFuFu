import joao from '../images/joao.png'
import { Navbar } from '../components/Navbar'

export function Home() {

  return (
    <div className="w-screen bg-[#212121]">
      <div className="flex justify-center">
          <Navbar />
      </div>
      <main className="w-screen mt-5 pt-5">
        <div className="flex w-full justify-center">
          <div className="gap-10 flex w-2/3">
            <div className="p-2 w-1/3 border border-white/30 rounded-md">
              <img src={joao} alt="joao" />
            </div>
            <div className="p-2 w-1/3 border border-white/30 rounded-md">
              <img src={joao} alt="joao" />
            </div>
            <div className="p-2 w-1/3 border border-white/30 rounded-md">
              <img src={joao} alt="joao" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}