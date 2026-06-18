export type ServiceArea = 'familia' | 'sucessoes' | 'curatela' | 'civil'

export interface Testimonial {
  id: string
  name: string
  initials: string
  context: string
  quote: string
  rating: number
  avatar?: string
}

export interface ServiceSubcategory {
  title: string
  items: readonly string[]
}

export interface ServiceCategory {
  id: string
  title: string
  description: string
  message: string
  area: ServiceArea
  featured?: boolean
  featuredLabel?: string
  items?: readonly string[]
  subcategories?: readonly ServiceSubcategory[]
}

export const siteConfig = {
  seo: {
    siteUrl: 'https://layanalaurindo.com.br',
    siteName: 'Layana Laurindo — Advocacia',
    defaultTitle: 'Layana Laurindo | Advogada — Direito Civil e de Família',
    defaultDescription:
      'Layana Laurindo, advogada em Florianópolis. Atuação em Direito Civil, Direito de Família, Curatela e Sucessões. Agende sua consulta pelo WhatsApp.',
    ogDescription:
      'Orientação jurídica clara e humanizada. Divórcio, guarda, pensão, inventário, curatela, contratos e mais. Fale pelo WhatsApp.',
    ogImage: '/images/layana-hero-683w.webp',
    ogImageAlt: 'Layana Laurindo, advogada em Florianópolis',
    locale: 'pt_BR',
    themeColor: '#1a3a2f',
    updatedAt: '2026-06-01',
    updatedAtLabel: 'junho de 2026',
  },
  name: 'Layana Laurindo',
  title: 'Advogada',
  tagline:
    'Atuação dedicada em Direito Civil, Direito de Família, Curatela e Proteção Patrimonial e Direito das Sucessões',
  description:
    'Orientação jurídica clara e humanizada para momentos que exigem segurança, estratégia e acolhimento.',
  oab: 'OAB/SC 71.645',
  city: 'Florianópolis, SC',
  address: {
    line1: 'R. Gen. Liberato Bittencourt, 1885a',
    line2: 'Canto, Florianópolis — SC, 88075-000',
    mapsUrl:
      'https://maps.google.com/?q=R.+Gen.+Liberato+Bittencourt,+1885a+-+Canto,+Florianópolis+-+SC,+88075-000',
    mapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.311786884208!2d-48.5838573!3d-27.5838617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952737d8ab3fff19%3A0x11c4430f1bc16fb0!2sR.%20Gen.%20Liberato%20Bittencourt%2C%201885a%20-%20Canto%2C%20Florian%C3%B3polis%20-%20SC%2C%2088075-000!5e0!3m2!1sen!2sbr!4v1781807742303!5m2!1sen!2sbr',
  },
  whatsapp: '554896364634',
  email: 'contato@layanalaurindo.com.br',
  social: {
    instagram: {
      href: 'https://www.instagram.com/layanalrndo/',
      label: '@layanalrndo',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/layana-laurindo/',
      label: 'Layana Laurindo',
    },
  },
  defaultWhatsAppMessage:
    'Olá, Layana! Visitei seu site e gostaria de agendar uma consulta.',
  nav: [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Perguntas frequentes', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ],
  usefulLinks: [
    {
      label: 'Defensoria Pública/SC',
      href: 'https://www.defensoria.sc.def.br/',
    },
    {
      label: 'Tabela de Honorários OAB/SC',
      href: 'https://oab-sc.org.br/api/files/file/1_32_67cb299793cd0.pdf',
    },
    {
      label: 'Estatuto da Advocacia',
      href: 'https://www.planalto.gov.br/ccivil_03/leis/l8906.htm',
    },
  ],
  specialties: [
    'Direito Civil',
    'Direito de Família',
    'Curatela e Proteção Patrimonial',
    'Direito das Sucessões',
  ],
  hero: {
    label: 'Advocacia em Civil, Família, Curatela e Sucessões',
    headline: 'Proteger seus direitos exige quem entende da lei',
    subheadline:
      'Atuação técnica, ágil e segura em Direito Civil, Direito de Família, Curatela e Proteção Patrimonial e Direito das Sucessões. Atendimento em Florianópolis, Santa Catarina e em todo o Brasil — presencial ou online.',
    stats: [
      { value: '+10', label: 'Anos de atuação' },
      { value: '+500', label: 'Casos atendidos' },
      { value: '4', label: 'Áreas de atuação' },
      { value: '24h', label: 'Retorno via WhatsApp' },
    ],
  },
  servicesSection: {
    title: 'Áreas de atuação',
    description:
      'Conheça as principais frentes de atendimento em Direito Civil, Direito de Família, Curatela e Proteção Patrimonial e Direito das Sucessões. Cada caso recebe análise individualizada.',
  },
  about: {
    headline: 'Advocacia com proximidade, técnica e respeito à sua história',
    paragraphs: [
      'Sou advogada com atuação em Direito Civil, Direito de Família, Curatela e Proteção Patrimonial e Direito das Sucessões, auxiliando pessoas e famílias em decisões sensíveis — divórcios, guarda, pensão, inventários, curatela, contratos e conflitos do dia a dia — com linguagem acessível e estratégia jurídica sólida.',
      'Acredito em um atendimento próximo, que escuta antes de orientar. Cada caso é único e merece análise cuidadosa, com transparência sobre caminhos, prazos e expectativas realistas.',
      'Meu compromisso é oferecer segurança jurídica em momentos de incerteza, buscando soluções que preservem direitos e, quando possível, reduzam desgastes desnecessários.',
    ],
  },
  trustPoints: [
    {
      id: 'humanizado',
      title: 'Atendimento humanizado',
      description:
        'Conversa clara, sem juridiquês desnecessário. Você entende o que está acontecendo em cada etapa.',
    },
    {
      id: 'estrategia',
      title: 'Estratégia personalizada',
      description:
        'Cada caso recebe análise individualizada, com foco na melhor solução para o seu contexto.',
    },
    {
      id: 'agilidade',
      title: 'Agilidade no contato',
      description:
        'Primeiro contato rápido pelo WhatsApp para entender sua demanda e orientar os próximos passos.',
    },
    {
      id: 'etica',
      title: 'Ética e confidencialidade',
      description:
        'Sigilo profissional e conduta alinhada às normas da OAB em todas as interações.',
    },
    {
      id: 'experiencia',
      title: 'Experiência consolidada',
      description:
        'Mais de 10 anos de atuação e centenas de casos em Direito Civil, Família, Curatela e Sucessões — com análise técnica e histórico de resultados.',
    },
    {
      id: 'modalidade',
      title: 'Presencial e online',
      description:
        'Atendimento no bairro Canto, em Florianópolis, ou por videoconferência para clientes em Santa Catarina e em todo o Brasil.',
    },
  ],
  testimonialsSection: {
    title: 'O que dizem os clientes',
    description:
      'Relatos de quem buscou orientação jurídica em momentos que exigiam clareza, técnica e acolhimento.',
    disclaimer:
      'Depoimentos ilustrativos para apresentação do site. Em breve, avaliações reais pelo Google.',
  },
  testimonials: [
    {
      id: 'familia-1',
      name: 'Marina S.',
      initials: 'MS',
      context: 'Direito de Família — Florianópolis',
      quote:
        'Cheguei perdida no processo de divórcio e guarda. A Layana explicou cada etapa com calma, sem juridiquês, e me ajudou a tomar decisões com mais segurança para mim e para meus filhos.',
      rating: 5,
    },
    {
      id: 'civil-1',
      name: 'Carlos A.',
      initials: 'CA',
      context: 'Direito Civil — contratos',
      quote:
        'Precisava resolver um conflito contratual com urgência. O atendimento foi ágil, objetivo e muito profissional. Senti que meu caso foi analisado com atenção real aos detalhes.',
      rating: 5,
    },
    {
      id: 'curatela-1',
      name: 'Fernanda L.',
      initials: 'FL',
      context: 'Curatela e Proteção Patrimonial',
      quote:
        'Em um momento delicado da família, a orientação foi humanizada e transparente. Acompanhou todo o processo de curatela com paciência e sempre disponível para tirar dúvidas.',
      rating: 5,
    },
    {
      id: 'sucessoes-1',
      name: 'Roberto M.',
      initials: 'RM',
      context: 'Direito das Sucessões — inventário',
      quote:
        'Conduziu o inventário da minha família com organização e clareza sobre prazos e documentos. A comunicação foi constante e isso fez toda a diferença em um processo tão sensível.',
      rating: 5,
    },
  ] satisfies Testimonial[],
  faq: [
    {
      question: 'Como funciona a primeira consulta?',
      answer:
        'Você entra em contato pelo WhatsApp, descreve brevemente sua situação e recebe orientação sobre documentos, prazos e possíveis caminhos jurídicos. A partir daí, agendamos um atendimento mais detalhado, presencial ou online.',
    },
    {
      question: 'O atendimento pode ser online?',
      answer:
        'Sim. Consultas e acompanhamentos podem ser realizados por videoconferência, quando apropriado para o seu caso. Atendo em Florianópolis, Santa Catarina e em todo o Brasil.',
    },
    {
      question: 'Quais documentos devo separar antes do contato?',
      answer:
        'Depende do caso. Em questões familiares, podem ser úteis certidões, comprovantes de renda e documentos dos filhos. Em sucessões, certidões de óbito e documentos dos bens. Em curatela, laudos médicos e comprovantes de incapacidade. Em direito civil, contratos ou provas do conflito. No primeiro contato, indico exatamente o que preparar.',
    },
    {
      question: 'Atende casos de divórcio consensual e litigioso?',
      answer:
        'Sim. Avalio a melhor estratégia para cada situação — desde acordos amigáveis e dissolução de união estável até processos judiciais, quando necessário.',
    },
    {
      question: 'Como funciona a revisão ou exoneração de pensão alimentícia?',
      answer:
        'A revisão altera o valor da pensão quando há mudança nas necessidades do alimentando ou na capacidade financeira do alimentante. A exoneração encerra a obrigação, geralmente quando o filho atinge a maioridade ou conclui os estudos. Em ambos os casos, analiso a documentação e indico o melhor caminho — acordo ou ação judicial.',
    },
    {
      question: 'É possível alterar a guarda dos filhos ou regulamentar visitas?',
      answer:
        'Sim. A guarda pode ser revisada quando há mudança relevante na situação da criança ou dos genitores. A regulamentação de convivência define dias, horários e formas de contato entre pais e filhos. Atuo tanto em acordos quanto em ações judiciais para garantir o melhor interesse da criança.',
    },
    {
      question: 'Atende casos de investigação de paternidade e alienação parental?',
      answer:
        'Sim. Oriento em ações de investigação e reconhecimento de paternidade, bem como em situações de alienação parental, buscando proteger o vínculo entre pais e filhos e garantir os direitos de todos os envolvidos.',
    },
    {
      question: 'Qual a diferença entre inventário judicial e extrajudicial?',
      answer:
        'O inventário extrajudicial é feito em cartório, mais rápido e econômico, quando todos os herdeiros são maiores, capazes e concordam com a partilha. O inventário judicial tramita no fórum e é necessário quando há menores, incapazes, testamento ou discordância entre herdeiros.',
    },
    {
      question: 'Preciso de testamento para fazer a partilha de bens?',
      answer:
        'Não. Sem testamento, a partilha segue a ordem de herdeiros prevista em lei. O testamento permite organizar a destinação dos bens de forma personalizada. Oriento na elaboração, impugnação ou anulação de testamentos, conforme cada situação.',
    },
    {
      question: 'O que é arrolamento de bens e quando ele é indicado?',
      answer:
        'O arrolamento é um procedimento mais simples e ágil de inventário, indicado quando o espólio tem poucos bens, todos os herdeiros concordam e não há testamento. Avalio se essa via é adequada ao seu caso ou se outro procedimento sucessório é mais seguro.',
    },
    {
      question: 'Quando é necessária uma ação de curatela?',
      answer:
        'A curatela é indicada quando uma pessoa não consegue, de forma parcial ou total, administrar seus bens e tomar decisões sobre sua vida — por deficiência, doença ou idade avançada. A ação judicial nomeia um curador para representar e proteger os interesses do incapaz.',
    },
    {
      question: 'Qual a diferença entre curatela e tomada de decisão apoiada?',
      answer:
        'Na tomada de decisão apoiada, a pessoa escolhe apoiadores para auxiliá-la nas decisões, mantendo sua autonomia. Na curatela, o curador representa legalmente quem não tem capacidade para certos atos. Analiso qual medida de proteção é mais adequada a cada realidade.',
    },
    {
      question: 'Posso rescindir um contrato por inadimplemento da outra parte?',
      answer:
        'Em muitos casos, sim. Quando uma das partes deixa de cumprir obrigações contratuais, é possível buscar a rescisão, cobrança de valores devidos e indenização por perdas e danos. Avalio o contrato, as provas do descumprimento e as melhores alternativas — judicial ou extrajudicial.',
    },
    {
      question: 'O que fazer em caso de negativação indevida no CPF?',
      answer:
        'A negativação indevida pode gerar direito a indenização por danos morais e à exclusão do registro. Oriento na notificação do credor, negociação e, se necessário, ação judicial para cancelar a inscrição e reparar os prejuízos causados.',
    },
    {
      question: 'Como funciona a cobrança de dívidas e execução de títulos?',
      answer:
        'A cobrança pode ser feita por negociação extrajudicial ou por via judicial, incluindo execução de títulos executivos e cumprimento de sentença. Analiso a documentação da dívida, os prazos e a estratégia mais eficiente para recuperar o valor devido ou defender quem está sendo cobrado indevidamente.',
    },
    {
      question: 'Atende ações de indenização por danos morais e materiais?',
      answer:
        'Sim. Atuo em casos de responsabilidade civil, como acidentes de trânsito, erro na prestação de serviços, produtos com defeito e outras situações que causem prejuízo físico, moral ou patrimonial. Cada caso é analisado para definir a melhor estratégia de reparação.',
    },
  ],
  serviceCategories: [
    {
      id: 'civil',
      title: 'Direito Civil',
      description:
        'Principal área de atuação. Orientação em contratos, responsabilidade civil, direito do consumidor e cobranças, com análise técnica e estratégia para cada caso.',
      message: 'Olá, Layana! Gostaria de falar sobre Direito Civil.',
      area: 'civil',
      featured: true,
      featuredLabel: 'Principal área',
      subcategories: [
        {
          title: 'Contratos',
          items: [
            'Rescisão contratual',
            'Cobranças e inadimplemento',
            'Indenização por descumprimento contratual',
          ],
        },
        {
          title: 'Responsabilidade Civil',
          items: [
            'Indenizações por danos morais',
            'Indenizações por danos materiais',
            'Acidentes de trânsito',
            'Erro na prestação de serviços',
          ],
        },
        {
          title: 'Direito do Consumidor',
          items: [
            'Produtos com defeito',
            'Negativação indevida',
            'Cobranças abusivas',
            'Cancelamento de contratos',
          ],
        },
        {
          title: 'Obrigações e Cobranças',
          items: [
            'Cobrança de dívidas',
            'Execução de títulos',
            'Cumprimento de sentença',
            'Negociação e acordos extrajudiciais',
          ],
        },
      ],
    },
    {
      id: 'familia',
      title: 'Direito de Família',
      description:
        'Orientação em conflitos e decisões familiares com acolhimento e estratégia jurídica sólida.',
      message: 'Olá, Layana! Gostaria de falar sobre Direito de Família.',
      area: 'familia',
      featured: true,
      featuredLabel: 'Área de atuação',
      items: [
        'Divórcio consensual e litigioso',
        'Dissolução de união estável',
        'Pensão alimentícia',
        'Revisão, exoneração e execução de alimentos',
        'Guarda de filhos',
        'Regulamentação de convivência (visitas)',
        'Investigação e reconhecimento de paternidade',
        'Alienação parental',
        'Adoção',
        'Destituição do poder familiar',
      ],
    },
    {
      id: 'curatela',
      title: 'Curatela e Proteção Patrimonial',
      description:
        'Proteção de pessoas incapazes e regularização de representação legal para atos patrimoniais.',
      message:
        'Olá, Layana! Gostaria de falar sobre Curatela e Proteção Patrimonial.',
      area: 'curatela',
      items: [
        'Ação de curatela',
        'Tomada de decisão apoiada',
        'Nomeação e substituição de curador',
        'Prestação de contas do curador',
        'Medidas de proteção para pessoas incapazes',
        'Regularização de representação legal para atos patrimoniais e bancários',
      ],
    },
    {
      id: 'sucessoes',
      title: 'Direito das Sucessões',
      description:
        'Condução de inventários, partilhas e questões testamentárias com segurança patrimonial.',
      message: 'Olá, Layana! Gostaria de falar sobre Direito das Sucessões.',
      area: 'sucessoes',
      items: [
        'Inventário judicial',
        'Inventário extrajudicial',
        'Arrolamento de bens',
        'Partilha de bens',
        'Testamentos',
        'Anulação e impugnação de testamento',
        'Prestação de contas do inventariante',
      ],
    },
  ] satisfies ServiceCategory[],
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
