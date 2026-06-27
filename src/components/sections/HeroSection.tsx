import { ArrowRight } from 'lucide-react';
import heroImage from '../../../public/images/teste1.png'
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

export function HeroSection() {
  return (
    <section className="hero-viewport hero-strokes relative h-[calc(100dvh-var(--header-height))] min-h-0 grid grid-cols-2 overflow-hidden px-55">
      <div className="relative z-10 flex flex-col justify-center items-start gap-6">
        <Badge>Advocacia em Civil, Família e Sucessões</Badge>
        <h1 className="text-primary text-7xl">
          Acolher, orientar e <span className="text-brand">proteger</span> seus direitos
        </h1>
        <p className="text-xl">Atuação técnica, ágil e segura em Direito Civil, Direito de Família e Direito das Sucessões. Atendimento presencial em Florianópolis/SC e online para todo o Brasil.</p>
        <Button className="px-16 py-6 rounded-full">
          Entre em contato
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </div>
      <div className="relative z-10 h-full w-full overflow-hidden flex justify-end items-center">
        <img
          src={heroImage}
          alt="Layana Laurindo"
          className="h-[100%] w-[100%] object-cover object-[center_15%]"
        />
      </div>
    </section>
  )
}