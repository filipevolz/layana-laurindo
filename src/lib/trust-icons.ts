import type { LucideIcon } from 'lucide-react'
import { Award, HeartHandshake, MapPin, ShieldCheck, Target, Zap } from 'lucide-react'

export const trustIcons: Record<string, LucideIcon> = {
  humanizado: HeartHandshake,
  estrategia: Target,
  agilidade: Zap,
  etica: ShieldCheck,
  experiencia: Award,
  modalidade: MapPin,
}
