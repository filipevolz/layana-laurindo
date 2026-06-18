import type { LucideIcon } from 'lucide-react'
import {
  Baby,
  Banknote,
  FileSignature,
  FileText,
  Handshake,
  Heart,
  HeartCrack,
  Home,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Wallet,
} from 'lucide-react'

export const serviceIcons: Record<string, LucideIcon> = {
  divorcio: HeartCrack,
  guarda: Baby,
  pensao: Wallet,
  inventario: FileText,
  'uniao-estavel': Heart,
  mediacao: Handshake,
  contratos: FileSignature,
  indenizacao: Scale,
  consumidor: ShoppingBag,
  locacao: Home,
  cobranca: Banknote,
  preventiva: ShieldCheck,
}

/** Serviços em destaque no grid 3×3 da seção principal */
export const featuredServiceIds = [
  'divorcio',
  'guarda',
  'pensao',
  'inventario',
  'contratos',
  'indenizacao',
  'consumidor',
  'locacao',
  'preventiva',
] as const
