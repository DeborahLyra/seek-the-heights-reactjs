import { useEffect, useState } from "react"
import { supabase } from "../../lib/supabase"
import type { LongText } from "../../types/supabadeTypes"
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid"
import { Link } from "react-router-dom"
import { ArrowCircleLeft } from "phosphor-react"

export function ManageLongTextsPage() {
  const [texts, setTexts] = useState<LongText[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingTitle, setEditingTitle] = useState("")
  const [editingContent, setEditingContent] = useState("")
  const [newTitle, setNewTitle] = useState("")
  const [newContent, setNewContent] = useState("")

  useEffect(() => {
    fetchTexts()
  }, [])

  const fetchTexts = async () => {
    const { data, error } = await supabase
      .from('long_texts')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) console.error(error)
    else setTexts(data)
  }

  const handleAdd = async () => {
    if (!newTitle.trim() || !newContent.trim()) return
    const { error } = await supabase
      .from('long_texts')
      .insert([{ title: newTitle, content: newContent }])

    if (error) console.error(error)
    else {
      setNewTitle("")
      setNewContent("")
      fetchTexts()
    }
  }

  const handleEdit = (text: LongText) => {
    setEditingId(text.id)
    setEditingTitle(text.title)
    setEditingContent(text.content)
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditingTitle("")
    setEditingContent("")
  }

  const saveEdit = async (id: string) => {
    if (!editingTitle.trim() || !editingContent.trim()) return
    const { error } = await supabase
      .from('long_texts')
      .update({ title: editingTitle, content: editingContent })
      .eq('id', id)

    if (error) console.error(error)
    else {
      setEditingId(null)
      setEditingTitle("")
      setEditingContent("")
      fetchTexts()
    }
  }

  const deleteText = async (id: string) => {
    await supabase.from('long_texts').delete().eq('id', id)
    fetchTexts()
  }

  return (
    <div className="p-8 bg-primary min-h-screen text-secondary">
      <Link to={'/admin'}><ArrowCircleLeft size={24} /></Link>
      <h1 className="text-xl font-bold mb-4">Adicionar Texto Longo</h1>

      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Título"
        className="border p-2 mb-2 block w-full rounded-lg"
      />
      <textarea
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
        placeholder="Conteúdo"
        className="border p-2 mb-4 block w-full h-40 rounded-lg"
      />

      <button
        onClick={handleAdd}
        className="bg-secondary text-white px-3 py-2 rounded"
      >
        Adicionar
      </button>

      <ul className="mt-8">
        {texts.map((text) => (
          <li key={text.id} className="border-b py-4">
            {editingId === text.id ? (
              <>
                <input
                  type="text"
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                  placeholder="Editar título"
                  className="border p-2 mb-2 w-full rounded-lg"
                />
                <textarea
                  value={editingContent}
                  onChange={(e) => setEditingContent(e.target.value)}
                  placeholder="Editar conteúdo"
                  className="border p-2 w-full h-32 rounded-lg"
                />
                <div className="flex gap-4 mt-2">
                  <button
                    onClick={() => saveEdit(text.id)}
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Salvar
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="bg-gray-300 text-black px-3 py-1 rounded"
                  >
                    Cancelar
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="font-bold text-lg">{text.title}</h3>
                <p className="text-sm text-gray-700 whitespace-pre-line">{text.content}</p>
                <div className="mt-2 flex gap-4">
                  <button
                    onClick={() => handleEdit(text)}
                    className="text-secondary"
                  >
                    <PencilSquareIcon className="h-4" />
                  </button>
                  <button
                    onClick={() => deleteText(text.id)}
                    className="text-red-600"
                  >
                    <TrashIcon className="h-4" />
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
