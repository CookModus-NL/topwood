import { business } from '@/content/business'
import { MessageCircle } from 'lucide-react'

export function WhatsappFloat() {
  const num = business.whatsapp?.replace('+', '')
  if (!num) return null
  return (
    <a
      href={`https://wa.me/${num}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp Angelo"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BC5A] flex items-center justify-center shadow-lg shadow-black/25 transition-colors"
    >
      <MessageCircle className="h-7 w-7 text-white" strokeWidth={2} />
    </a>
  )
}
