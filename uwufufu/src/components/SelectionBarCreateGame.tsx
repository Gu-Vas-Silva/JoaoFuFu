import { useState } from 'react'
import { TbArrowBadgeRight } from 'react-icons/tb'

type SelectOption = 'cover' | 'choice'

type Props = {
  selectOption: SelectOption
  setSelectOption: React.Dispatch<React.SetStateAction<SelectOption>>
}

export function SelectionBarCreateGame({ selectOption, setSelectOption }: Props) {
  return (
    <div className="flex gap-2 text-white text-2xl w-full items-center">
      <button
        className={`cursor-pointer ${selectOption === 'cover' ? 'text-red-500' : 'text-white'}`}
        onClick={() => setSelectOption('cover')}
      >
        Capa
      </button>
      <TbArrowBadgeRight />
      <button
        className={`cursor-pointer ${selectOption === 'choice' ? 'text-red-500' : 'text-white'}`}
        onClick={() => setSelectOption('choice')}
      >
        Configuração
      </button>
    </div>
  )
}
