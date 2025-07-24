import { useEffect, useState } from "react"
import { supabase } from "../../lib/supabase"
import type { Message } from "../../types/supabadeTypes"
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid"

export function ManageMessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingContent, setEditingContent] = useState("")

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    const { data, error } = await supabase.from('messages').select('*')
    if (error) console.error(error)
    else setMessages(data as Message[])
  }

  const addMessage = async () => {
    if (!newMessage.trim()) return
    const { error } = await supabase.from('messages').insert([{ content: newMessage.trim() }])
    if (error) console.error(error)
    else {
      setNewMessage("")
      fetchMessages()
    }
  }

  const deleteMessage = async (id: string) => {
    await supabase.from('messages').delete().eq('id', id)
    fetchMessages()
  }

  const startEditing = (id: string, content: string) => {
    setEditingId(id)
    setEditingContent(content)
  }

  const cancelEditing = () => {
    setEditingId(null)
    setEditingContent("")
  }

  const saveEdit = async (id: string) => {
    const { error } = await supabase.from('messages').update({ content: editingContent }).eq('id', id)
    if (error) console.error(error)
    else {
      setEditingId(null)
      setEditingContent("")
      fetchMessages()
    }
  }

  return (
    <div className="p-8 bg-primary min-h-screen text-secondary">
      <h1 className="text-xl font-bold mb-4">Gerenciar Mensagens Curtas</h1>

      <div className="mb-4">
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Nova mensagem"
          rows={4}
          className="resize-none h-auto border p-2 w-full rounded-lg"
        />
        <button onClick={addMessage} className="mt-4 ml-2 bg-secondary text-white px-3 py-2 rounded">
          Adicionar
        </button>
      </div>

      <ul className="mt-4">
        {messages.map((msg) => (
          <li key={msg.id} className="flex items-center justify-between border-b py-2">
            {editingId === msg.id ? (
              <div className="flex items-center gap-2 w-full">
                <input
                  type="text"
                  value={editingContent}
                  onChange={(e) => setEditingContent(e.target.value)}
                  className="border p-2 w-full"
                />
                <button
                  onClick={() => saveEdit(msg.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Salvar
                </button>
                <button onClick={cancelEditing} className="text-gray-500">
                  Cancelar
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between w-full">
                <span>{msg.content}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEditing(msg.id, msg.content)}
                    className="text-secondary"
                  >
                    <PencilSquareIcon className="h-4"/>
                  </button>
                  <button
                    onClick={() => deleteMessage(msg.id)}
                    className="text-red-500"
                  >
                    <TrashIcon className="h-4"/>
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
