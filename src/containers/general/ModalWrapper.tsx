'use client'
import { useState } from 'react'
import { MessageButton } from './MessageButton'
import ModalComponent from './ModalComponent'

export default function ModalWrapper() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <MessageButton onClick={() => setOpen(true)} />
      <ModalComponent open={open} setOpen={setOpen} />
    </>
  )
}
