export const profile = {
  appName: 'Portfólio',
  name: 'José Victor Xavier Silva',
  nickname: 'Zevitor',
  role: 'Desenvolvedor backend Node.js',
  location: 'São Paulo, Brasil',
  photo: require('../../assets/images/zevitor.png'),
  tagline:
    'Desenvolvedor backend e fullstack que aprende construindo sistemas reais, do MVP ao deploy.',
  heroDescription:
    'Desenvolvo sistemas do MVP ao deploy, com foco em backend, APIs e interfaces em React.',
  summary:
    'Estudante de Desenvolvimento de Software Multiplataforma na Fatec Itaquera, com formação técnica em Desenvolvimento de Sistemas pela ETEC. Co-fundei uma startup e conduzi o desenvolvimento do MVP até a produção. Hoje tenho cerca de dez projetos de portfólio, quatro deles em produção, com foco em backend com Node.js e TypeScript.',
  quote: 'Aprender construindo sistemas reais, do MVP ao deploy.',
  goals:
    'Continuar evoluindo técnica e academicamente, com planos de pós-graduação, mestrado e doutorado.',
  stats: [
    { value: '~10', label: 'Projetos' },
    { value: '4', label: 'Em produção' },
    { value: 'B2', label: 'Inglês' },
  ],
  education: [
    {
      title: 'Desenvolvimento de Software Multiplataforma (DSM)',
      place: 'Fatec Itaquera',
      period: '2025 – atual',
    },
    {
      title: 'Técnico em Desenvolvimento de Sistemas',
      place: 'ETEC',
      period: '2022 – 2024',
    },
  ],
  experience: [
    {
      icon: 'rocket-outline',
      title: 'Co-fundador (MVP)',
      place: 'TRIPS ESTÁGIOS',
      period: 'Fev 2022 – Fev 2024',
      description:
        'Plataforma de estágios incubada no InovaCPS. Liderei todo o trabalho técnico, do MVP ao deploy em produção.',
    },
    {
      icon: 'layers-outline',
      title: 'Arquitetura e desenvolvimento (voluntário)',
      place: 'Resumify · projeto interdisciplinar da Fatec',
      period: 'Jan 2025 – atual',
      description:
        'Desenvolvimento em equipe com Scrum: API em Java 21 e Spring Boot, frontend em React e TypeScript.',
    },
    {
      icon: 'people-outline',
      title: 'Equipe organizadora do 1º hackathon',
      place: 'Fatec Itaquera',
      period: 'Mai 2025',
      description:
        'Liderei o desenvolvimento do programa de preparação: formulário de mapeamento de participantes, documentação técnica por trilha e live preparatória.',
    },
  ],
  stack: [
    {
      group: 'Backend',
      items: ['Node.js', 'TypeScript', 'Fastify', 'Zod', 'JWT', 'Swagger', 'Java', 'Spring Boot'],
    },
    {
      group: 'Frontend',
      items: ['React', 'React Native', 'Vite', 'Tailwind', 'TanStack Query', 'React Hook Form'],
    },
    {
      group: 'Dados e infraestrutura',
      items: ['PostgreSQL', 'Drizzle', 'Supabase', 'Prisma', 'Redis', 'Docker', 'Vitest'],
    },
    {
      group: 'Em estudo',
      items: ['Kotlin', 'Jetpack Compose', 'MongoDB'],
    },
  ],
  languages: [
    'Inglês B2 (CEL Itaquera)',
    'NEPLE: aprovado nos 6 níveis (Centro Paula Souza)',
  ],
  courses: ['Rocketseat NLW: Journey, Connect, Agents e Operator'],
  projects: [
    {
      name: 'managerSchedules',
      type: 'Fullstack · Em produção',
      description:
        'Sistema de agendamento em que o cliente marca o horário em 5 passos. Backend e frontend publicados, com documentação Swagger pública. Próximo passo: integrar o frontend à API.',
      stack: ['Fastify', 'TypeScript', 'React', 'Vite'],
      image: null,
      url: 'https://manegerschedule.vercel.app',
    },
    {
      name: 'Eletroconsertos',
      type: 'Sistema administrativo · Em produção',
      description:
        'Sistema real para um microempreendedor de eletroeletrônicos, feito solo no 2º semestre. Login com JWT em cookies HttpOnly, logs com Pino e monitoramento com UptimeRobot.',
      stack: ['Fastify', 'TypeScript', 'React', 'Drizzle', 'Supabase', 'Docker'],
      image: require('../../assets/images/jwc.png'),
      url: 'https://eletroconsertos.vercel.app',
    },
    {
      name: 'Resumify',
      type: 'Projeto interdisciplinar · Fatec',
      description:
        'Equipe N7, com perfis de Aluno, Professor e Administrador. Autenticação, renderização por perfil de acesso, scroll infinito e curtidas. Desenvolvido em equipe com Scrum no 3º semestre.',
      stack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript', 'Docker'],
      image: require('../../assets/images/resumify.png'),
      url: 'https://resumify-n7.vercel.app',
    },
    {
      name: 'Professor Mensuring',
      type: 'Frontend · Web mobile-first',
      description:
        'App para avaliação de professores, com notas, distribuição de estrelas e comentários anônimos.',
      stack: ['React 19', 'TypeScript', 'Tailwind 4', 'TanStack Query'],
      image: null,
      url: null,
    },
  ],
  contact: {
    github: 'https://github.com/devZevitor',
    linkedin: 'https://www.linkedin.com/in/zevitor',
    email: 'seu-email@exemplo.com',
    phone: '(11) 90000-0000',
    address: 'São Paulo, SP',
  },
};
