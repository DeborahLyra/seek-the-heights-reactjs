// types.ts ou no topo do componente
export type LongText = {
    id: string
    created_at: string
    user_id: string
    title: string
    description?: string
    content: string
  }
  
  export type Message = {
    id: string
    created_at: string
    user_id: string
    title: string
    content: string
    language?: string
    category?: string
  }
  