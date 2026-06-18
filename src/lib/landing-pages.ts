import type { ServiceArea } from '@/lib/site-config'

export type LandingPageType = 'area' | 'topic'

export interface LandingPage {
  slug: string
  path: string
  type: LandingPageType
  area: ServiceArea
  title: string
  metaDescription: string
  h1: string
  intro: readonly string[]
  whatsAppMessage: string
  servicesHeading: string
  services: readonly string[]
  whyHeading: string
  whyParagraphs: readonly string[]
  faqIndices: readonly number[]
  relatedPaths: readonly string[]
  breadcrumbLabel: string
  sitemapPriority: number
  comparisonTable?: {
    heading: string
    columns: readonly string[]
    rows: readonly (readonly string[])[]
  }
}

export const landingPages: readonly LandingPage[] = [
  {
    slug: 'advogada-direito-de-familia-florianopolis',
    path: '/advogada-direito-de-familia-florianopolis',
    type: 'area',
    area: 'familia',
    title: 'Advogada de Direito de Família em Florianópolis | Layana Laurindo',
    metaDescription:
      'Advogada de Direito de Família em Florianópolis. Divórcio, guarda, pensão alimentícia e dissolução de união estável. OAB/SC 71.645. Atendimento presencial e online.',
    h1: 'Advogada de Direito de Família em Florianópolis',
    intro: [
      'Sou Layana Laurindo, advogada especializada em Direito de Família em Florianópolis, com mais de 10 anos de atuação e mais de 500 casos acompanhados. Atendo divórcios, guarda, pensão alimentícia, dissolução de união estável e demais questões familiares com orientação clara e estratégia jurídica sólida.',
      'Cada família vive um momento diferente. Por isso, analiso documentos, prazos e objetivos reais antes de indicar o melhor caminho — seja por acordo amigável ou por via judicial, sempre com foco no melhor interesse de quem está envolvido, especialmente crianças e adolescentes.',
      'O atendimento pode ser presencial no escritório no bairro Canto, em Florianópolis, ou online para clientes em Santa Catarina e em todo o Brasil. O primeiro contato é feito pelo WhatsApp, com retorno em até 24 horas.',
    ],
    whatsAppMessage: 'Olá, Layana! Gostaria de falar sobre Direito de Família.',
    servicesHeading: 'Quais serviços de Direito de Família atendo em Florianópolis?',
    services: [
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
    whyHeading: 'Por que buscar uma advogada especializada em Direito de Família?',
    whyParagraphs: [
      'Questões familiares envolvem decisões emocionais e patrimoniais que exigem técnica e sensibilidade. Uma advogada com experiência em Florianópolis conhece a prática dos fóruns locais, os prazos processuais e as alternativas extrajudiciais que podem reduzir desgaste.',
      'Com registro na OAB/SC 71.645, ofereço atendimento humanizado — sem juridiquês desnecessário — e estratégia personalizada para cada caso. Mais de 500 famílias já foram orientadas em processos de divórcio, guarda, pensão e dissolução de união estável.',
    ],
    faqIndices: [0, 1, 2, 3, 4, 5, 6],
    relatedPaths: [
      '/servicos/divorcio-florianopolis',
      '/servicos/pensao-alimenticia',
      '/advogada-direito-civil-florianopolis',
      '/advogada-inventario-florianopolis',
    ],
    breadcrumbLabel: 'Direito de Família',
    sitemapPriority: 0.9,
  },
  {
    slug: 'advogada-direito-civil-florianopolis',
    path: '/advogada-direito-civil-florianopolis',
    type: 'area',
    area: 'civil',
    title: 'Advogada de Direito Civil em Florianópolis | Layana Laurindo',
    metaDescription:
      'Advogada de Direito Civil em Florianópolis. Contratos, responsabilidade civil, direito do consumidor e cobranças. OAB/SC 71.645. Consulta pelo WhatsApp.',
    h1: 'Advogada de Direito Civil em Florianópolis',
    intro: [
      'Atuo como advogada de Direito Civil em Florianópolis, com foco em contratos, responsabilidade civil, direito do consumidor e cobranças. São mais de 10 anos de experiência e mais de 500 casos analisados com estratégia técnica e comunicação acessível.',
      'Conflitos contratuais, negativação indevida, cobranças abusivas e indenizações por danos morais e materiais exigem análise cuidadosa de provas e prazos. Avalio cada situação para indicar a via mais eficiente — negociação extrajudicial ou ação judicial.',
      'Atendo clientes presencialmente no escritório no Canto, Florianópolis, e por videoconferência em todo o Brasil. Entre em contato pelo WhatsApp para descrever sua demanda e receber orientação sobre documentos e próximos passos.',
    ],
    whatsAppMessage: 'Olá, Layana! Gostaria de falar sobre Direito Civil.',
    servicesHeading: 'Quais serviços de Direito Civil atendo em Florianópolis?',
    services: [
      'Rescisão contratual',
      'Cobranças e inadimplemento',
      'Indenização por descumprimento contratual',
      'Indenizações por danos morais e materiais',
      'Acidentes de trânsito',
      'Erro na prestação de serviços',
      'Produtos com defeito',
      'Negativação indevida',
      'Cobranças abusivas',
      'Cancelamento de contratos',
      'Cobrança de dívidas',
      'Execução de títulos',
      'Cumprimento de sentença',
      'Negociação e acordos extrajudiciais',
    ],
    whyHeading: 'Por que contratar uma advogada de Direito Civil em Florianópolis?',
    whyParagraphs: [
      'O Direito Civil abrange situações do dia a dia — desde um contrato mal cumprido até uma negativação indevida no CPF. Ter uma advogada que analisa riscos, prazos prescricionais e provas disponíveis evita perdas financeiras e decisões precipitadas.',
      'Com atuação registrada na OAB/SC 71.645, ofereço estratégia personalizada para cada caso, priorizando soluções extrajudiciais quando possível e litígio estruturado quando necessário. Retorno via WhatsApp em até 24 horas.',
    ],
    faqIndices: [0, 1, 2, 12, 13, 14, 15],
    relatedPaths: [
      '/advogada-direito-de-familia-florianopolis',
      '/advogada-inventario-florianopolis',
      '/servicos/pensao-alimenticia',
      '/advogada-curatela-florianopolis',
    ],
    breadcrumbLabel: 'Direito Civil',
    sitemapPriority: 0.9,
  },
  {
    slug: 'advogada-curatela-florianopolis',
    path: '/advogada-curatela-florianopolis',
    type: 'area',
    area: 'curatela',
    title: 'Advogada de Curatela em Florianópolis | Layana Laurindo',
    metaDescription:
      'Advogada de Curatela e Proteção Patrimonial em Florianópolis. Ação de curatela, tomada de decisão apoiada e proteção de incapazes. OAB/SC 71.645.',
    h1: 'Advogada de Curatela e Proteção Patrimonial em Florianópolis',
    intro: [
      'Sou advogada especializada em Curatela e Proteção Patrimonial em Florianópolis, auxiliando famílias a proteger pessoas incapazes e regularizar a representação legal para atos patrimoniais e bancários. Atuo em ações de curatela, tomada de decisão apoiada e medidas de proteção com mais de 10 anos de experiência.',
      'A curatela é necessária quando uma pessoa não consegue, total ou parcialmente, administrar seus bens ou tomar decisões sobre sua vida — por deficiência, doença ou idade avançada. Cada caso exige análise de laudos médicos, documentação familiar e a medida de proteção mais adequada.',
      'Ofereço atendimento humanizado em momentos delicados, com orientação clara sobre prazos, documentos e o processo judicial. Atendo presencialmente em Florianópolis e online em todo o Brasil. Primeiro contato pelo WhatsApp.',
    ],
    whatsAppMessage:
      'Olá, Layana! Gostaria de falar sobre Curatela e Proteção Patrimonial.',
    servicesHeading: 'Quais serviços de Curatela atendo em Florianópolis?',
    services: [
      'Ação de curatela',
      'Tomada de decisão apoiada',
      'Nomeação e substituição de curador',
      'Prestação de contas do curador',
      'Medidas de proteção para pessoas incapazes',
      'Regularização de representação legal para atos patrimoniais e bancários',
    ],
    whyHeading: 'Por que buscar uma advogada especializada em Curatela?',
    whyParagraphs: [
      'Proteger um familiar incapaz exige conhecimento das diferenças entre curatela, tomada de decisão apoiada e outras medidas previstas no Estatuto da Pessoa com Deficiência. A escolha errada pode gerar burocracia desnecessária ou deixar a pessoa desprotegida.',
      'Com registro OAB/SC 71.645 e experiência em mais de 500 casos, analiso laudos, a estrutura familiar e os bens envolvidos para indicar a medida mais adequada — sempre preservando a dignidade e os direitos da pessoa protegida.',
    ],
    faqIndices: [0, 1, 2, 10, 11],
    relatedPaths: [
      '/servicos/curatela-incapaz',
      '/advogada-inventario-florianopolis',
      '/advogada-direito-de-familia-florianopolis',
      '/advogada-direito-civil-florianopolis',
    ],
    breadcrumbLabel: 'Curatela',
    sitemapPriority: 0.9,
  },
  {
    slug: 'advogada-inventario-florianopolis',
    path: '/advogada-inventario-florianopolis',
    type: 'area',
    area: 'sucessoes',
    title: 'Advogada de Inventário em Florianópolis | Layana Laurindo',
    metaDescription:
      'Advogada de Inventário e Direito das Sucessões em Florianópolis. Inventário judicial, extrajudicial e arrolamento. OAB/SC 71.645. Atendimento presencial e online.',
    h1: 'Advogada de Inventário e Sucessões em Florianópolis',
    intro: [
      'Conduzo inventários judiciais e extrajudiciais em Florianópolis e em todo o Brasil, com mais de 10 anos de atuação em Direito das Sucessões. Auxilio famílias na partilha de bens, elaboração de testamentos e regularização de espólios com segurança patrimonial e comunicação transparente.',
      'O inventário é o procedimento necessário para transferir bens de uma pessoa falecida aos herdeiros. A escolha entre inventário extrajudicial (em cartório), judicial (no fórum) ou arrolamento depende da existência de testamento, herdeiros menores ou incapazes e do nível de concordância entre os envolvidos.',
      'Analiso a documentação do espólio — certidão de óbito, matrículas de imóveis, extratos bancários e certidões — para indicar o caminho mais ágil e seguro. Atendo presencialmente no Canto, Florianópolis, e por videoconferência.',
    ],
    whatsAppMessage: 'Olá, Layana! Gostaria de falar sobre Direito das Sucessões.',
    servicesHeading: 'Quais serviços de Sucessões atendo em Florianópolis?',
    services: [
      'Inventário judicial',
      'Inventário extrajudicial',
      'Arrolamento de bens',
      'Partilha de bens',
      'Testamentos',
      'Anulação e impugnação de testamento',
      'Prestação de contas do inventariante',
    ],
    whyHeading: 'Por que contratar uma advogada de Inventário em Florianópolis?',
    whyParagraphs: [
      'Erros no inventário podem gerar anos de tramitação, conflitos entre herdeiros e perdas patrimoniais. Uma advogada experiente em sucessões identifica a via procedimental correta, organiza a documentação e conduz a partilha com previsibilidade de prazos e custos.',
      'Com OAB/SC 71.645 e mais de 500 casos atendidos, ofereço orientação desde a análise inicial do espólio até a conclusão da partilha — judicial ou extrajudicial. Primeiro contato pelo WhatsApp com retorno em até 24 horas.',
    ],
    faqIndices: [0, 1, 2, 7, 8, 9],
    relatedPaths: [
      '/servicos/inventario-extrajudicial',
      '/advogada-direito-de-familia-florianopolis',
      '/advogada-curatela-florianopolis',
      '/advogada-direito-civil-florianopolis',
    ],
    breadcrumbLabel: 'Inventário e Sucessões',
    sitemapPriority: 0.9,
    comparisonTable: {
      heading: 'Qual a diferença entre inventário judicial e extrajudicial?',
      columns: ['Critério', 'Extrajudicial (cartório)', 'Judicial (fórum)'],
      rows: [
        ['Prazo médio', 'Mais rápido', 'Mais longo'],
        ['Custo', 'Geralmente menor', 'Geralmente maior'],
        ['Requisitos', 'Herdeiros maiores, capazes e de acordo', 'Menores, incapazes, testamento ou discordância'],
        ['Indicado quando', 'Todos concordam com a partilha', 'Há conflito ou herdeiros incapazes'],
      ],
    },
  },
  {
    slug: 'divorcio-florianopolis',
    path: '/servicos/divorcio-florianopolis',
    type: 'topic',
    area: 'familia',
    title: 'Advogada para Divórcio em Florianópolis | Layana Laurindo',
    metaDescription:
      'Advogada para divórcio consensual e litigioso em Florianópolis. Guarda, pensão e partilha de bens. OAB/SC 71.645. Primeiro contato pelo WhatsApp.',
    h1: 'Advogada para Divórcio em Florianópolis',
    intro: [
      'O divórcio em Florianópolis pode ser consensual — quando há acordo sobre guarda, pensão e partilha — ou litigioso, quando as partes não chegam a um entendimento. Sou Layana Laurindo, advogada de Direito de Família com OAB/SC 71.645, e avalio a melhor estratégia para cada situação.',
      'No divórcio consensual, é possível resolver guarda, visitas, pensão alimentícia e divisão de bens de forma mais ágil, muitas vezes por via extrajudicial. Quando há conflito, conduzo o processo judicial com foco na proteção dos direitos de todos, especialmente de crianças e adolescentes.',
      'Com mais de 10 anos de atuação e mais de 500 casos acompanhados, ofereço orientação clara sobre documentos necessários, prazos e expectativas realistas. Atendo presencialmente no Canto, Florianópolis, e online em todo o Brasil.',
    ],
    whatsAppMessage: 'Olá, Layana! Gostaria de falar sobre divórcio.',
    servicesHeading: 'Quais questões do divórcio posso orientar?',
    services: [
      'Divórcio consensual e litigioso',
      'Dissolução de união estável',
      'Guarda de filhos',
      'Regulamentação de convivência (visitas)',
      'Pensão alimentícia',
      'Partilha de bens do casal',
      'Investigação e reconhecimento de paternidade',
      'Alienação parental',
    ],
    whyHeading: 'Quando devo procurar uma advogada para o divórcio?',
    whyParagraphs: [
      'Mesmo em divórcios amigáveis, a assistência de uma advogada garante que acordos sobre guarda, pensão e bens estejam juridicamente corretos e evitem problemas futuros. Em divórcios litigiosos, a representação técnica é essencial para proteger seus direitos patrimoniais e familiares.',
      'Em Florianópolis, os prazos e procedimentos variam conforme o grau de consenso entre as partes. Analiso sua situação no primeiro contato pelo WhatsApp e indico documentos, custos estimados e o caminho mais adequado.',
    ],
    faqIndices: [0, 1, 3, 4, 5, 6],
    relatedPaths: [
      '/advogada-direito-de-familia-florianopolis',
      '/servicos/pensao-alimenticia',
      '/advogada-inventario-florianopolis',
      '/advogada-direito-civil-florianopolis',
    ],
    breadcrumbLabel: 'Divórcio',
    sitemapPriority: 0.8,
  },
  {
    slug: 'inventario-extrajudicial',
    path: '/servicos/inventario-extrajudicial',
    type: 'topic',
    area: 'sucessoes',
    title: 'Inventário Extrajudicial em Florianópolis | Layana Laurindo',
    metaDescription:
      'Inventário extrajudicial em Florianópolis. Procedimento em cartório, mais rápido e econômico. Advogada OAB/SC 71.645. Saiba se seu caso se enquadra.',
    h1: 'Inventário Extrajudicial em Florianópolis',
    intro: [
      'O inventário extrajudicial é feito em cartório de notas e é a via mais rápida e econômica para partilhar bens de uma pessoa falecida — desde que todos os herdeiros sejam maiores, capazes e concordem com a divisão. Em Florianópolis, oriento famílias na escolha entre essa modalidade e o inventário judicial.',
      'Para o inventário extrajudicial, é obrigatória a assistência de advogada. Reúno a documentação do espólio — certidão de óbito, certidões negativas, matrículas de imóveis e extratos — e conduzo o procedimento junto ao tabelionato, com transparência sobre prazos e custos.',
      'Quando há herdeiros menores, incapazes, testamento ou discordância entre herdeiros, o inventário judicial no fórum é necessário. Analiso cada caso individualmente para indicar a via mais segura e eficiente.',
    ],
    whatsAppMessage:
      'Olá, Layana! Gostaria de saber sobre inventário extrajudicial.',
    servicesHeading: 'O que está incluído no acompanhamento de inventário extrajudicial?',
    services: [
      'Análise da documentação do espólio',
      'Verificação dos requisitos legais',
      'Elaboração da minuta de partilha',
      'Acompanhamento no cartório de notas',
      'Orientação sobre ITCMD e taxas',
      'Regularização de bens após a partilha',
    ],
    whyHeading: 'O inventário extrajudicial é indicado para o meu caso?',
    whyParagraphs: [
      'O inventário extrajudicial exige unanimidade entre os herdeiros e ausência de testamento ou herdeiros incapazes. Quando esses requisitos são atendidos, a família economiza tempo e recursos em comparação ao processo judicial.',
      'Com experiência em mais de 500 casos sucessórios e registro OAB/SC 71.645, avalio se o espólio se enquadra nos requisitos legais e organizo toda a documentação necessária. Atendo em Florianópolis e online.',
    ],
    faqIndices: [0, 1, 2, 7, 8, 9],
    relatedPaths: [
      '/advogada-inventario-florianopolis',
      '/advogada-direito-de-familia-florianopolis',
      '/advogada-curatela-florianopolis',
      '/advogada-direito-civil-florianopolis',
    ],
    breadcrumbLabel: 'Inventário Extrajudicial',
    sitemapPriority: 0.8,
    comparisonTable: {
      heading: 'Inventário extrajudicial ou judicial: qual escolher?',
      columns: ['Critério', 'Extrajudicial', 'Judicial'],
      rows: [
        ['Local', 'Cartório de notas', 'Fórum'],
        ['Tempo', 'Semanas a poucos meses', 'Meses a anos'],
        ['Custo', 'Menor', 'Maior'],
        ['Requisito principal', 'Acordo entre herdeiros capazes', 'Conflito, menores ou testamento'],
      ],
    },
  },
  {
    slug: 'pensao-alimenticia',
    path: '/servicos/pensao-alimenticia',
    type: 'topic',
    area: 'familia',
    title: 'Revisão e Exoneração de Pensão Alimentícia | Layana Laurindo',
    metaDescription:
      'Advogada para revisão, exoneração e execução de pensão alimentícia em Florianópolis. OAB/SC 71.645. Orientação sobre documentos e prazos.',
    h1: 'Revisão e Exoneração de Pensão Alimentícia em Florianópolis',
    intro: [
      'A pensão alimentícia pode ser revisada quando há mudança nas necessidades do alimentando ou na capacidade financeira do alimentante. A exoneração encerra a obrigação, geralmente quando o filho atinge a maioridade ou conclui os estudos. Atuo em ambas as situações em Florianópolis e em todo o Brasil.',
      'Para a revisão, analiso comprovantes de renda, despesas do alimentando e alterações na situação financeira das partes. Para a exoneração, verifico se os requisitos legais estão preenchidos — idade, conclusão de estudos ou independência financeira.',
      'Sou Layana Laurindo, advogada de Direito de Família com OAB/SC 71.645 e mais de 10 anos de experiência. Indico o melhor caminho — acordo extrajudicial ou ação judicial — e oriento sobre documentos necessários no primeiro contato pelo WhatsApp.',
    ],
    whatsAppMessage:
      'Olá, Layana! Gostaria de falar sobre pensão alimentícia.',
    servicesHeading: 'Quais serviços relacionados à pensão alimentícia atendo?',
    services: [
      'Fixação de pensão alimentícia',
      'Revisão do valor da pensão',
      'Exoneração da obrigação alimentar',
      'Execução de alimentos em atraso',
      'Acordos extrajudiciais de pensão',
      'Pensão provisória em processos de divórcio',
    ],
    whyHeading: 'Quando posso pedir revisão ou exoneração da pensão?',
    whyParagraphs: [
      'A revisão é cabível quando há alteração significativa na renda do alimentante ou nas necessidades do alimentando — como perda de emprego, novo filho ou aumento de despesas escolares e médicas. A exoneração é possível quando o alimentando atinge a maioridade e independência financeira, ou conclui a formação prevista.',
      'Cada caso exige análise documental específica. Com mais de 500 casos de Direito de Família atendidos, avalio a viabilidade da ação e os riscos de cada caminho antes de iniciar qualquer procedimento.',
    ],
    faqIndices: [0, 1, 2, 4, 5],
    relatedPaths: [
      '/advogada-direito-de-familia-florianopolis',
      '/servicos/divorcio-florianopolis',
      '/advogada-direito-civil-florianopolis',
      '/advogada-inventario-florianopolis',
    ],
    breadcrumbLabel: 'Pensão Alimentícia',
    sitemapPriority: 0.8,
  },
  {
    slug: 'curatela-incapaz',
    path: '/servicos/curatela-incapaz',
    type: 'topic',
    area: 'curatela',
    title: 'Ação de Curatela em Florianópolis | Layana Laurindo',
    metaDescription:
      'Ação de curatela em Florianópolis para proteção de pessoas incapazes. Advogada OAB/SC 71.645. Orientação sobre laudos, documentos e procedimento judicial.',
    h1: 'Ação de Curatela para Proteção de Pessoas Incapazes',
    intro: [
      'A ação de curatela é o procedimento judicial que nomeia um curador para representar e proteger os interesses de uma pessoa que não consegue, total ou parcialmente, administrar seus bens e tomar decisões sobre sua vida. Em Florianópolis, oriento famílias em todo o processo — da análise inicial à nomeação do curador.',
      'A curatela é indicada em casos de deficiência, doenças degenerativas, demência ou idade avançada que comprometam a capacidade de decisão. É necessário laudo médico e documentação que comprove a incapacidade, além da indicação de quem será o curador.',
      'Também analiso se a tomada de decisão apoiada — em que a pessoa mantém autonomia com auxílio de apoiadores — é mais adequada que a curatela plena. Cada situação familiar é única e merece estratégia personalizada.',
    ],
    whatsAppMessage: 'Olá, Layana! Gostaria de falar sobre ação de curatela.',
    servicesHeading: 'O que envolve uma ação de curatela?',
    services: [
      'Análise de laudos médicos e documentação',
      'Petição inicial de curatela',
      'Indicação e nomeação de curador',
      'Tomada de decisão apoiada (alternativa à curatela)',
      'Substituição de curador',
      'Prestação de contas do curador',
      'Regularização de atos patrimoniais e bancários',
    ],
    whyHeading: 'Quando é necessária uma ação de curatela?',
    whyParagraphs: [
      'A curatela protege pessoas incapazes de serem exploradas financeiramente ou de tomarem decisões prejudiciais. Sem a regularização judicial, familiares podem enfrentar dificuldades para movimentar contas bancárias, vender imóveis ou autorizar procedimentos médicos em nome do incapaz.',
      'Com OAB/SC 71.645 e experiência em casos de proteção patrimonial, conduzo a ação com sensibilidade e técnica, explicando cada etapa do processo. Atendo presencialmente em Florianópolis e por videoconferência.',
    ],
    faqIndices: [0, 1, 2, 10, 11],
    relatedPaths: [
      '/advogada-curatela-florianopolis',
      '/advogada-inventario-florianopolis',
      '/advogada-direito-de-familia-florianopolis',
      '/advogada-direito-civil-florianopolis',
    ],
    breadcrumbLabel: 'Ação de Curatela',
    sitemapPriority: 0.8,
  },
] as const

export function getLandingPageByPath(path: string): LandingPage | undefined {
  return landingPages.find((page) => page.path === path)
}

export function getAllLandingPaths(): string[] {
  return landingPages.map((page) => page.path)
}

export function getRelatedPages(page: LandingPage): LandingPage[] {
  return page.relatedPaths
    .map((path) => getLandingPageByPath(path))
    .filter((p): p is LandingPage => p !== undefined)
}
