import { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { CoverGames } from '../components/CoverGames'
import { ChoiceGames } from '../components/ChoiceGames'
import { SelectionBarCreateGame } from '../components/SelectionBarCreateGame'

type FormData = {
  title: string
  description: string
  image: File | null
}

type SelectOption = 'cover' | 'choice'

export function CreateGame() {
  const [form, setForm] = useState<FormData>({
    title: '',
    description: '',
    image: null,
  })

  const [selectOptionCreate, setSelectOptionCreate] = useState<SelectOption>('cover')

  const contentMap: Record<SelectOption, React.ReactNode> = {
    cover: <CoverGames />,
    choice: <ChoiceGames />,
  }

  return (
    <div className="w-screen bg-[#212121]">
      <div className="flex justify-center">
        <Navbar />
      </div>
      <main className="mt-5 pt-5 flex flex-col items-center px-140 gap-16">
        <SelectionBarCreateGame
  selectOption={selectOptionCreate}
  setSelectOption={setSelectOptionCreate}
/>
      {contentMap[selectOptionCreate]}

      </main>
    </div>
  )
}
