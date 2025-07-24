import { useEffect, useState } from "react"
import { supabase } from "../../lib/supabase"
import type { LongText } from "../../types/supabadeTypes"
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid"

export function ManageLongTextsPage() {
  const [texts, setTexts] = useState<LongText[]>([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [editingId, setEditingId] = useState<string | null>(null)

  useEffect(() => {
    fetchTexts()
  }, [])

  const fetchTexts = async () => {
    const { data, error } = await supabase.from('long_texts').select('*').order('created_at', { ascending: false })
    if (error) console.error(error)
    else setTexts(data)
  }

  const handleSubmit = async () => {
    if (!title || !content) return

    if (editingId) {
      const { error } = await supabase
        .from('long_texts')
        .update({ title, content })
        .eq('id', editingId)

      if (error) console.error(error)
    } else {
      const { error } = await supabase
        .from('long_texts')
        .insert([{ title, content }])

      if (error) console.error(error)
    }

    setTitle("")
    setContent("")
    setEditingId(null)
    fetchTexts()
  }

  const handleEdit = (text: LongText) => {
    setTitle(text.title)
    setContent(text.content)
    setEditingId(text.id)
  }

  const cancelEdit = () => {
    setTitle("")
    setContent("")
    setEditingId(null)
  }

  const deleteText = async (id: string) => {
    await supabase.from('long_texts').delete().eq('id', id)
    fetchTexts()
  }

  return (
    <div className="p-8 bg-primary min-h-screen text-secondary">
      <h1 className="text-xl font-bold mb-4">
        {editingId ? "Editar Texto Longo" : "Adicionar Texto Longo"}
      </h1>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
        className="border p-2 mb-2 block w-full rounded-lg"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Conteúdo"
        className="border p-2 mb-2 block w-full h-40 rounded-lg"
      />

      <div className="mt-4 flex gap-4">
        <button
          onClick={handleSubmit}
          className="bg-secondary text-white px-3 py-2 rounded"
        >
          {editingId ? "Salvar" : "Adicionar"}
        </button>
        {editingId && (
          <button
            onClick={cancelEdit}
            className="bg-gray-300 text-black px-3 py-2 rounded"
          >
            Cancelar
          </button>
        )}
      </div>

      <ul className="mt-6">
        {texts.map(text => (
          <li key={text.id} className="border-b py-4">
            <h3 className="font-bold text-lg">{text.title}</h3>
            <p className="text-sm text-gray-700 whitespace-pre-line">{text.content}</p>
            <div className="mt-2 flex gap-4">
              <button
                onClick={() => handleEdit(text)}
                className="text-secondary underline"
              >
                 <PencilSquareIcon className="h-4"/>
              </button>
              <button
                onClick={() => deleteText(text.id)}
                className="text-red-600 underline"
              >
                <TrashIcon className="h-4"/>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
