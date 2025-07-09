'use client'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import CrossIcon from '../../../public/cross-icon.svg'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import type { Message } from '../../types/supabadeTypes'
import { Link } from 'react-router-dom'


export default function ModalComponent({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
  const { t } = useTranslation('modal')
  const [lastMessage, setLastMessage] = useState<Message | null>(null)

  useEffect(() => {
    const fetchLastMessage = async () => {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single()

      if (error) {
        console.error('Erro ao buscar a última mensagem:', error.message)
      } else {
        setLastMessage(data)
      }
    }

    fetchLastMessage()
  }, [])

console.log(lastMessage)
  return (
    <div>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-light-gray text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary sm:mx-0 sm:size-10">
                    <img src={CrossIcon} alt="" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" className="text-base font-semibold text-secondary">
                      {lastMessage?.title}
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-secondary">
                        {lastMessage?.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-light-gray shadow-xs hover:bg-primary sm:ml-3 sm:w-auto cursor-pointer"
                >
                  {t('modal.close')}
                </button>
                <Link
                  to={'/message-list'}
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-secondary shadow-xs ring-1 ring-secondary ring-inset hover:bg-light-gray sm:mt-0 sm:w-auto cursor-pointer"
                >
                  {t('modal.viewAll')}
                </Link>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
