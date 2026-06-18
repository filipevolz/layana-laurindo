export type ServiceArea = 'familia' | 'civil'

export interface Service {
  id: string
  title: string
  description: string
  message: string
  area: ServiceArea
}

export const siteConfig = {
  name: 'Layana Laurindo',
  title: 'Advogada',
  tagline: 'Atuação dedicada em Direito Civil e de Família',
  description:
    'Orientação jurídica clara e humanizada para momentos que exigem segurança, estratégia e acolhimento.',
  oab: 'OAB/SC — [número a confirmar]',
  city: 'Florianópolis, SC',
  whatsapp: '554896364634',
  whatsappDisplay: '+55 48 9636-4634',
  email: 'contato@layanalaurindo.com.br',
  defaultWhatsAppMessage:
    'Olá, Layana! Visitei seu site e gostaria de agendar uma consulta.',
  nav: [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Contato', href: '#contato' },
  ],
  specialties: ['Direito Civil', 'Direito de Família'],
  hero: {
    label: 'Advocacia Civil e Familiar',
    headline: 'Proteger seus direitos exige quem entende da lei',
    subheadline:
      'Atuação técnica, ágil e segura em Direito Civil e de Família. Atendimento em Florianópolis, Santa Catarina e em todo o Brasil — presencial ou online.',
    stats: [
      { value: '+5', label: 'Anos de atuação' },
      { value: '+200', label: 'Casos atendidos' },
      { value: '2', label: 'Áreas de atuação' },
      { value: '24h', label: 'Retorno via WhatsApp' },
    ],
  },
  servicesSection: {
    title: 'Áreas de atuação',
    description:
      'Conheça as principais frentes de atendimento em Direito Civil e de Família. Cada caso recebe análise individualizada.',
  },
  about: {
    headline: 'Advocacia com proximidade, técnica e respeito à sua história',
    paragraphs: [
      'Sou advogada com atuação em Direito Civil e de Família, auxiliando pessoas e famílias em decisões sensíveis — divórcios, guarda, pensão, contratos e conflitos do dia a dia — com linguagem acessível e estratégia jurídica sólida.',
      'Acredito em um atendimento próximo, que escuta antes de orientar. Cada caso é único e merece análise cuidadosa, com transparência sobre caminhos, prazos e expectativas realistas.',
      'Meu compromisso é oferecer segurança jurídica em momentos de incerteza, buscando soluções que preservem direitos e, quando possível, reduzam desgastes desnecessários.',
    ],
  },
  trustPoints: [
    {
      title: 'Atendimento humanizado',
      description:
        'Conversa clara, sem juridiquês desnecessário. Você entende o que está acontecendo em cada etapa.',
    },
    {
      title: 'Estratégia personalizada',
      description:
        'Cada caso recebe análise individualizada, com foco na melhor solução para o seu contexto.',
    },
    {
      title: 'Agilidade no contato',
      description:
        'Primeiro contato rápido pelo WhatsApp para entender sua demanda e orientar os próximos passos.',
    },
    {
      title: 'Ética e confidencialidade',
      description:
        'Sigilo profissional e conduta alinhada às normas da OAB em todas as interações.',
    },
  ],
  faq: [
    {
      question: 'Como funciona a primeira consulta?',
      answer:
        'Você entra em contato pelo WhatsApp, descreve brevemente sua situação e recebe orientação sobre documentos, prazos e possíveis caminhos jurídicos. A partir daí, agendamos um atendimento mais detalhado, presencial ou online.',
    },
    {
      question: 'Atende casos de divórcio consensual e litigioso?',
      answer:
        'Sim. Avalio a melhor estratégia para cada situação — desde acordos amigáveis até processos judiciais, quando necessário.',
    },
    {
      question: 'Quais documentos devo separar antes do contato?',
      answer:
        'Depende do caso. Em questões familiares, podem ser úteis certidões, comprovantes de renda e documentos dos filhos. Em direito civil, contratos ou provas do conflito. No primeiro contato, indico exatamente o que preparar.',
    },
    {
      question: 'O atendimento pode ser online?',
      answer:
        'Sim. Consultas e acompanhamentos podem ser realizados por videoconferência, quando apropriado para o seu caso.',
    },
  ],
  services: [
    {
      id: 'divorcio',
      title: 'Divórcio e Separação',
      description:
        'Orientação em divórcio consensual ou litigioso, partilha de bens e regularização do estado civil.',
      message:
        'Olá, Layana! Gostaria de falar sobre divórcio ou separação.',
      area: 'familia',
    },
    {
      id: 'guarda',
      title: 'Guarda e Convivência',
      description:
        'Definição de guarda, regime de convivência e revisões, sempre priorizando o bem-estar dos filhos.',
      message:
        'Olá, Layana! Preciso de orientação sobre guarda e convivência de filhos.',
      area: 'familia',
    },
    {
      id: 'pensao',
      title: 'Pensão Alimentícia',
      description:
        'Fixação, revisão ou execução de pensão alimentícia com análise criteriosa da necessidade e capacidade.',
      message:
        'Olá, Layana! Gostaria de conversar sobre pensão alimentícia.',
      area: 'familia',
    },
    {
      id: 'inventario',
      title: 'Inventário e Partilha',
      description:
        'Condução de inventário judicial ou extrajudicial e partilha de bens com segurança jurídica.',
      message:
        'Olá, Layana! Preciso de ajuda com inventário ou partilha de bens.',
      area: 'familia',
    },
    {
      id: 'uniao-estavel',
      title: 'União Estável',
      description:
        'Reconhecimento, dissolução e regulamentação de união estável, incluindo aspectos patrimoniais.',
      message:
        'Olá, Layana! Gostaria de orientação sobre união estável.',
      area: 'familia',
    },
    {
      id: 'mediacao',
      title: 'Mediação Familiar',
      description:
        'Busca de acordos em conflitos familiares com abordagem conciliatória e respeitosa.',
      message:
        'Olá, Layana! Tenho interesse em mediação familiar.',
      area: 'familia',
    },
    {
      id: 'contratos',
      title: 'Contratos e Obrigações',
      description:
        'Elaboração, revisão e análise de contratos civis para prevenir riscos e proteger seus interesses.',
      message:
        'Olá, Layana! Preciso de orientação sobre contratos.',
      area: 'civil',
    },
    {
      id: 'indenizacao',
      title: 'Indenizações',
      description:
        'Ações de reparação por danos materiais e morais, com avaliação técnica do cabimento e valores.',
      message:
        'Olá, Layana! Gostaria de falar sobre indenização por danos.',
      area: 'civil',
    },
    {
      id: 'consumidor',
      title: 'Direito do Consumidor',
      description:
        'Defesa em conflitos com empresas, produtos defeituosos, cobranças indevidas e serviços não prestados.',
      message:
        'Olá, Layana! Tenho um problema de direito do consumidor.',
      area: 'civil',
    },
    {
      id: 'locacao',
      title: 'Locação e Imóveis',
      description:
        'Assessoria em contratos de locação, despejo, revisões e questões condominiais.',
      message:
        'Olá, Layana! Preciso de ajuda com questões de locação ou imóveis.',
      area: 'civil',
    },
    {
      id: 'cobranca',
      title: 'Cobranças e Execuções',
      description:
        'Recuperação de créditos e defesa em execuções, com estratégia adequada a cada fase do processo.',
      message:
        'Olá, Layana! Gostaria de orientação sobre cobrança ou execução.',
      area: 'civil',
    },
    {
      id: 'preventiva',
      title: 'Assessoria Preventiva',
      description:
        'Consultoria para evitar litígios, antecipar riscos e tomar decisões seguras no âmbito civil.',
      message:
        'Olá, Layana! Busco assessoria jurídica preventiva.',
      area: 'civil',
    },
  ] satisfies Service[],
  images: {
    hero: '/images/layana-hero.png',
    heroCutout: '/images/layana-hero-cutout.png',
    office: '/images/layana-office.png',
    portrait: '/images/layana-portrait.png',
  },
} as const

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
}
