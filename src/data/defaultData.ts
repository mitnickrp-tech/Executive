import { CandidateProfile, ExecutiveMetric, CaseStudy, SkillCategory, Testimonial, JobPreset } from '../types/portfolio';

export const DEFAULT_PROFILE: CandidateProfile = {
  name: 'Ivan Encinas',
  role: 'Staff Software Engineer & Tech Lead',
  seniority: '10+ Anos de Carreira · Liderança Técnica & Arquitetura',
  tagline: 'Transformando complexidade técnica em ROI comprovado e arquiteturas de alta disponibilidade.',
  summary: 'Engenheiro de Software Sênior & Líder Técnico com mais de uma década projetando sistemas distribuídos tolerantes a falhas, plataformas de pagamentos de alto rendimento e acelerando a velocidade de times de engenharia. Histórico de mais de R$ 14M em economia operacional (FinOps) e migrações críticas sem downtime.',
  location: 'São Paulo, Brasil (Disponível globalmente)',
  workModel: 'Remoto (100%) ou Híbrido Flexível',
  availability: 'Imediata ou Aviso Prévio de 15 dias',
  contractTypes: ['CLT', 'PJ Nacional', 'Contrato Internacional B2B (USD / EUR)'],
  salaryExpectation: {
    clt: 'R$ 22.000 - R$ 28.000 / mês + Benefícios',
    pj: 'R$ 28.000 - R$ 36.000 / mês',
    international: '$7.000 - $9.500 USD / mês',
    notes: 'Aberto a negociação com base no pacote de incentivos (Equity, RSU, bônus de performance e autonomia técnica).'
  },
  email: 'ivan.encinas.tech@gmail.com',
  phone: '+55 (11) 98765-4321',
  linkedin: 'https://linkedin.com/in/ivan-encinas',
  github: 'https://github.com/ivan-encinas',
  avatarUrl: '/src/assets/images/hero_executive_portrait_1791239798038.jpg',
  yearsOfExperience: 11
};

export const EXECUTIVE_METRICS: ExecutiveMetric[] = [
  {
    id: 'cloud_roi',
    value: 'R$ 14.8M',
    label: 'Economia Acumulada em FinOps',
    description: 'Redução de custos operacionais com nuvem (AWS/GCP) via re-arquitetura orientada a eventos e otimização de instâncias.',
    context: 'Impacto direto no EBITDA corporativo em 24 meses'
  },
  {
    id: 'uptime_sla',
    value: '99.995%',
    label: 'Disponibilidade em Alta Concorrência',
    description: 'SLA mantido em picos sazonais críticos (Black Friday, fechamento contábil e liquidação de pagamentos).',
    context: 'Mais de 25.000 requisições/segundo em regime sustentado'
  },
  {
    id: 'dora_velocity',
    value: '3.8x',
    label: 'Aceleração do Ciclo de Entrega (DORA)',
    description: 'Lead time for changes reduzido de 14 dias para 3.5 horas com pipelines de CI/CD automatizadas e testes de mutação.',
    context: 'Média de 18 deploys/dia com taxa de falha inferior a 0.8%'
  },
  {
    id: 'mentorship',
    value: '24+',
    label: 'Engenheiros Formados & Promovidos',
    description: 'Mentoria ativa de engenheiros Plenos e Juniores para Senioridade, estabelecendo cultura de excelência e pair-programming.',
    context: 'Retenção de 94% dos talentos técnicos liderados'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'fintech_scalability',
    title: 'Plataforma de Pagamentos Resiliente e Liquidação Instantânea',
    companyContext: 'Fintech de Meios de Pagamento (Top 5 Brasil)',
    category: 'high_throughput',
    categoryLabel: 'Alta Escala & Finanças',
    featuredImage: '/src/assets/images/case_fintech_scalability_1791239808475.jpg',
    timeframe: '10 meses de execução',
    primaryImpact: 'Eliminação de R$ 3.2M em transações perdidas por timeout e aumento de 99.1% para 99.995% na taxa de sucesso.',
    metrics: [
      { label: 'Latência p99', before: '1.450 ms', after: '68 ms', delta: '-95.3%' },
      { label: 'Throughput Máximo', before: '3.200 req/s', after: '28.500 req/s', delta: '+790%' },
      { label: 'Custo por Transação', before: 'R$ 0,042', after: 'R$ 0,009', delta: '-78.5%' }
    ],
    star: {
      situation: 'O motor legado de liquidação de pagamentos em arquitetura monolítica sofria gargalos severos de locks em banco relacional durante horários de pico comercial, gerando desistências e chargebacks operacionais.',
      task: 'Como Tech Lead, assumi a missão de projetar uma nova camada de autorização e liquidação assíncrona, tolerante a partições de rede, com garantia estrita de idempotência e zero perda de transações.',
      action: [
        'Separação da camada de ingestão síncrona leve (Node.js/Go) com fila de alta densidade no Apache Kafka.',
        'Desenho de motor de idempotência baseado em Redis Cluster distribuído com algoritmo de token bucket de duas fases.',
        'Implementação do padrão Outbox Pattern para garantir consistência eventual com o banco de liquidação PostgreSQL.',
        'Introdução de Chaos Engineering com simulação de failover multirregional AWS sem indisponibilidade perceptível.'
      ],
      result: [
        'Processamento contínuo de R$ 1.8 bilhão em transações mensais sem nenhum incidente crítico registrado.',
        'Redução do SLA de reconciliação bancária de T+2 para T+0 (tempo real).',
        'Prêmio interno de Excelência em Arquitetura de Sistemas e replicação do modelo para outras unidades de negócio.'
      ]
    },
    techStack: ['TypeScript', 'Go', 'Apache Kafka', 'PostgreSQL', 'Redis Cluster', 'Docker', 'Kubernetes', 'Datadog', 'AWS ECS'],
    architectureOverview: 'Arquitetura híbrida Event-Driven com ingestão de ultra-baixa latência em Edge, validação prévia de limites em memória e persistência transacional segregada via CQRS.',
    architectureComponents: [
      { name: 'Edge API Gateway', role: 'Terminação TLS, autenticação mTLS e rate limiting', tech: 'Envoy / AWS ALB' },
      { name: 'Fast Ingestion Pods', role: 'Validação de contrato e despacho Kafka em <15ms', tech: 'Go / Node.js' },
      { name: 'Distributed Lock & Idempotency', role: 'Garantia de transação única e prevenção de replay attacks', tech: 'Redis Cluster' },
      { name: 'Async Settlement Worker', role: 'Execução das regras contábeis e gravação particionada', tech: 'Kotlin / PostgreSQL' },
      { name: 'Audit & Reconciliation Feed', role: 'Stream em tempo real para auditoria de compliance e Bacen', tech: 'Kafka Connect / S3 Lake' }
    ],
    businessLessons: 'A complexidade distribuída só é justificável quando os gargalos de negócio limitam o crescimento da receita. Isolar a garantia de idempotência no ponto de entrada gerou mais valor que reescrever toda a base de código.',
    leadershipScope: 'Liderança técnica direta de 8 engenheiros seniores e coordenação cross-functional com times de Riscos, Compliance e Operações.',
    referenceQuote: {
      text: 'O Ivan não apenas redesenhou nosso motor mais crítico de faturamento, mas blindou a empresa contra os maiores picos sazonais da nossa história.',
      author: 'Rodrigo Mendonça',
      role: 'VP de Engenharia'
    }
  },
  {
    id: 'cloud_finops_modernization',
    title: 'Modernização de Infraestrutura e Redução de 62% em Custos Cloud',
    companyContext: 'Scale-up SaaS B2B com 450k usuários ativos',
    category: 'cloud_finops',
    categoryLabel: 'FinOps & Cloud Architecture',
    featuredImage: '/src/assets/images/case_cloud_modernization_1791239827534.jpg',
    timeframe: '6 meses de execução',
    primaryImpact: 'Economia recorrente auditada de R$ 185.000/mês na fatura AWS, revertendo a queima de caixa sem perda de performance.',
    metrics: [
      { label: 'Fatura Mensal Cloud', before: 'R$ 298.000/mês', after: 'R$ 113.000/mês', delta: '-62.1%' },
      { label: 'Uso Médio de CPU Clusters', before: '14%', after: '68%', delta: '+385%' },
      { label: 'Tempo de Recuperação (MTTR)', before: '42 min', after: '3.5 min', delta: '-91.6%' }
    ],
    star: {
      situation: 'Após rodada de captação acelerada, a infraestrutura da empresa acumulou instâncias EC2 superdimensionadas, bancos desnormalizados e pipelines de dados rodando continuamente com 85% de ociosidade.',
      task: 'Criar um programa estruturado de Engenharia de Confiabilidade (SRE) e FinOps para reduzir o burn-rate em pelo menos 40% sem demissões ou redução de catálogo de features.',
      action: [
        'Mapeamento minucioso de custos por microserviço utilizando AWS Cost Explorer, tags granulares e alertas automatizados.',
        'Migração de instâncias EC2 on-demand fixas para Amazon EKS gerenciado com Karpenter e instâncias Spot para cargas tolerantes.',
        'Ajuste fino de consultas de banco de dados (reindexação, particionamento e leitura em réplicas) que permitiu reduzir o cluster RDS Aurora de db.r5.8xlarge para db.r5.xlarge.',
        'Implementação de lifecycle policies automáticas em storage S3, movendo 40TB de logs legados para Glacier Deep Archive.'
      ],
      result: [
        'Economia total de R$ 1.1 milhão no primeiro semestre pós-implementação.',
        'Aumento da margem operacional bruta do produto de 68% para 79%.',
        'Criação de cultura de responsabilidade de custo (FinOps) nos times de desenvolvimento com painéis de transparência.'
      ]
    },
    techStack: ['AWS EKS', 'Terraform', 'Karpenter', 'AWS Aurora PostgreSQL', 'Prometheus', 'Grafana', 'KEDA Autoscaling', 'GitHub Actions'],
    architectureOverview: 'Ecosistema de microsserviços conteinerizados em Kubernetes com autoscaling dinâmico elástico (KEDA) acoplado a filas de mensagens e instâncias efêmeras Spot com fallback gracioso.',
    architectureComponents: [
      { name: 'Karpenter Node Autoscaler', role: 'Provisionamento just-in-time de nós Spot com economia de 70%', tech: 'Kubernetes / Karpenter' },
      { name: 'Optimized Aurora Cluster', role: 'Pool de conexões PgBouncer e réplicas de leitura dedicadas', tech: 'Aurora PostgreSQL' },
      { name: 'FinOps Observability Engine', role: 'Telemetria de custo em tempo real atrelada a cada time', tech: 'Kubecost / Grafana' },
      { name: 'Multi-layer Cache Store', role: 'Absorção de 82% das consultas repetitivas de analytics', tech: 'Redis / ElastiCache' }
    ],
    businessLessons: 'Economia em nuvem não é apenas cortar máquinas, é arquitetar para a elasticidade real. O segredo foi alinhar métricas técnicas às métricas de negócio que o CFO e o Board acompanham.',
    leadershipScope: 'Governança técnica sobre 4 squads de produto e alinhamento direto com o CFO e VP de Tecnologia.',
    referenceQuote: {
      text: 'O Ivan trouxe uma visão de finanças corporativas para o time técnico que salvou nosso runway antes do nosso próximo ciclo de financiamento.',
      author: 'Carolina Esteves',
      role: 'Chief Financial Officer'
    }
  },
  {
    id: 'ecommerce_checkout_conversion',
    title: 'Re-arquitetura do Checkout de Alta Conversão e Black Friday sem Queda',
    companyContext: 'Grande Operação de E-commerce Omni-channel',
    category: 'revenue_growth',
    categoryLabel: 'Conversão & Crescimento de Receita',
    featuredImage: '/src/assets/images/case_ecommerce_checkout_1791239818770.jpg',
    timeframe: '5 meses de execução',
    primaryImpact: 'Aumento de 14.2% na taxa de conversão final do checkout (+R$ 9.4M em vendas brutas adicionais no ano) e zero instabilidade na Black Friday.',
    metrics: [
      { label: 'Conversão do Checkout', before: '62.4%', after: '76.6%', delta: '+14.2pp' },
      { label: 'Tempo de Carregamento (FCP)', before: '2.8s', after: '0.6s', delta: '-78.5%' },
      { label: 'Taxa de Erros HTTP 5xx', before: '1.8%', after: '0.002%', delta: '-99.8%' }
    ],
    star: {
      situation: 'O funil de fechamento de compra sofria com lentidão no cálculo de frete e regras tributárias complexas, levando a uma taxa de desistência elevada de clientes no último clique.',
      task: 'Liderar a reformulação completa do fluxo de checkout para garantir renderização instantânea (SSR/Edge), resiliência em falhas de transportadoras e suporte a picos de 10x na Black Friday.',
      action: [
        'Construção de uma arquitetura modular com BFF especializado em otimizar payloads para dispositivos móveis.',
        'Desenho de motor de fallback para transportadoras: se a API do parceiro não responder em 300ms, o sistema aplica cache inteligente com tabela de contingência sem travar a compra.',
        'Otimização do bundle web com redução de 60% do JavaScript desnecessário, Server Components e hidratação seletiva.',
        'Testes de carga com simulação de 50.000 usuários simultâneos no carrinho usando k6 e distributed load testing.'
      ],
      result: [
        'Melhor Black Friday da história da empresa: R$ 42 milhões transacionados no final de semana com 100% de disponibilidade.',
        'Mais de 95% das avaliações de clientes destacaram a fluidez e velocidade na aprovação do Pix e Cartão.',
        'O playbook de contingência desenvolvido tornou-se padrão em todas as marcas do grupo.'
      ]
    },
    techStack: ['Next.js', 'React', 'Node.js', 'Redis', 'Docker', 'GraphQL Federation', 'k6 Load Testing', 'OpenTelemetry'],
    architectureOverview: 'Arquitetura BFF com Edge Caching, motor de precificação e frete resiliente a falhas de terceiros com circuit-breaker ativo.',
    architectureComponents: [
      { name: 'Edge CDN & Reverse Proxy', role: 'Cache dinâmico de catálogo e assets em nós globais', tech: 'Cloudflare Workers' },
      { name: 'Checkout BFF', role: 'Agregação inteligente de dados e isolamento de dependências', tech: 'Node.js / Fastify' },
      { name: 'Resilient Logistics Adapter', role: 'Circuit breaker com tabela de contingência preditiva de frete', tech: 'TypeScript / Redis' },
      { name: 'Payment Orchestrator', role: 'Roteamento dinâmico entre múltiplos adquirentes por menor custo', tech: 'Go / PostgreSQL' }
    ],
    businessLessons: 'A performance técnica é uma alavanca direta de conversão e receita. Cada 100ms a menos no carregamento do carrinho gerou retorno tangível em dinheiro no caixa da empresa.',
    leadershipScope: 'Tech Lead de squad multidisciplinar com 6 desenvolvedores, 2 designers de produto e 1 especialista em SEO/Analytics.',
    referenceQuote: {
      text: 'O Ivan tem a rara habilidade de traduzir objetivos comerciais ambiciosos em uma infraestrutura à prova de balas.',
      author: 'Marcelo Farias',
      role: 'Diretor de Produto Digital'
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Arquitetura de Sistemas & Nuvem',
    description: 'Design de sistemas distribuídos de alta resiliência, escalabilidade e conformidade.',
    items: [
      { name: 'Sistemas Distribuídos & Event-Driven', level: 'Especialista', years: 9, businessApplication: 'Microsserviços de alto volume, CQRS, Apache Kafka e consistência eventual.' },
      { name: 'Cloud Computing (AWS / GCP / Azure)', level: 'Especialista', years: 8, businessApplication: 'EKS, ECS, Terraform, Multi-AZ, Serverless e estratégia multicloud.' },
      { name: 'FinOps & Engenharia de Eficiência', level: 'Especialista', years: 6, businessApplication: 'Otimização de custos, Karpenter, governança de tagging e orçamentos dinâmicos.' },
      { name: 'Bancos de Dados & Caching', level: 'Especialista', years: 10, businessApplication: 'PostgreSQL avançado, particionamento, Redis Cluster, MongoDB e DynamoDB.' }
    ]
  },
  {
    category: 'Engenharia de Software & Fullstack',
    description: 'Código sustentável, padrões de projeto modernos e arquiteturas limpas.',
    items: [
      { name: 'TypeScript / Node.js / Go', level: 'Especialista', years: 8, businessApplication: 'APIs resilientes de alta performance com tipagem rigorosa e concorrência nativa.' },
      { name: 'React / Next.js / Arquitetura Web', level: 'Especialista', years: 8, businessApplication: 'Aplicações corporativas modernas, SSR, micro-frontends e performance Core Web Vitals.' },
      { name: 'Clean Architecture & Domain-Driven Design (DDD)', level: 'Especialista', years: 7, businessApplication: 'Modelagem de domínios complexos de negócio e código de fácil manutenção a longo prazo.' },
      { name: 'Testes Automatizados & Test-Driven Development (TDD)', level: 'Especialista', years: 9, businessApplication: 'Pirâmide de testes completa (Unitários, Integração, Contrato e Mutação).' }
    ]
  },
  {
    category: 'Liderança Técnica & Gestão de Engenharia',
    description: 'Cultura de engenharia de ponta, métricas DORA e desenvolvimento de pessoas.',
    items: [
      { name: 'Liderança Técnica & Mentoria de Times', level: 'Especialista', years: 6, businessApplication: 'Desenvolvimento de planos de carreira técnicos, pair programming e rituais de excelência.' },
      { name: 'Métricas DORA & Aceleração de Entrega', level: 'Especialista', years: 5, businessApplication: 'Redução drástica do Lead Time for Changes e automação integral de esteiras CI/CD.' },
      { name: 'Comunicação Executiva & Alinhamento com C-Level', level: 'Avançado', years: 6, businessApplication: 'Tradução de desafios técnicos em valor de negócio, risco operacional e ROI financeiro.' },
      { name: 'Gestão de Incidentes & Post-Mortem Sem Culpa', level: 'Especialista', years: 7, businessApplication: 'Criação de playbooks de resposta a incidentes críticos e aprendizagem organizacional.' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'cto_fintech',
    name: 'Henrique Vasconcelos',
    role: 'Chief Technology Officer (CTO)',
    company: 'Fintech Nexus Pagamentos',
    text: 'Trabalhar com o Ivan foi uma virada de chave para nossa engenharia. Ele liderou a modernização do nosso core de autorização sem gerar um único minuto de indisponibilidade para nossos clientes. Sua postura de liderança calma durante incidentes e o foco contínuo em métricas de negócio fazem dele um profissional fora da curva.',
    relationship: 'Liderou arquitetura do core de transações sob minha gestão por 3 anos',
    impactTag: 'Zero Downtime & Liderança Técnica'
  },
  {
    id: 'vp_product',
    name: 'Juliana Medeiros',
    role: 'Head de Produto & Growth',
    company: 'Omni Retail S.A.',
    text: 'Muitos engenheiros experientes se perdem em perfeccionismos técnicos. O Ivan é diferente: ele quer entender o impacto no cliente e no faturamento da empresa. Na nossa reformulação de checkout, ele entregou uma velocidade recorde que refletiu diretamente em milhões a mais no caixa.',
    relationship: 'Parceiro executivo em 4 grandes lançamentos de produto',
    impactTag: '+14% em Conversão de Vendas'
  },
  {
    id: 'staff_dev',
    name: 'Gabriel Siqueira',
    role: 'Senior Software Engineer',
    company: 'SaaS Enterprise Solutions',
    text: 'Fui mentorado pelo Ivan durante nossa jornada de migração para Kubernetes e Kafka. A clareza com que ele explica decisões arquiteturais e o cuidado em elevar o nível técnico de todo o time é algo raro de encontrar no mercado.',
    relationship: 'Trabalhamos juntos no mesmo squad por 2 anos',
    impactTag: 'Mentoria & Elevação do Time'
  }
];

export const JOB_PRESETS: JobPreset[] = [
  {
    id: 'staff_backend',
    title: 'Staff / Principal Backend Engineer',
    companyType: 'Fintech / Enterprise / Big Tech',
    description: 'Procuramos um profissional sênior/staff para liderar o design e evolução da nossa arquitetura distribuída de microsserviços em Go/Node, garantindo alta vazão, baixa latência e resiliência financeira.',
    keyRequirements: ['Sistemas Distribuídos', 'Apache Kafka / Event-Driven', 'Go ou Node.js / TypeScript', 'PostgreSQL / Redis', 'Arquitetura de Alta Disponibilidade', 'FinOps']
  },
  {
    id: 'tech_lead_fullstack',
    title: 'Tech Lead / Coordenador Técnico',
    companyType: 'Scale-up / E-commerce / SaaS B2B',
    description: 'Buscamos um líder técnico com experiência em guiar squads ágeis, elevar métricas DORA, apoiar a carreira de desenvolvedores e alinhar a estratégia técnica aos objetivos de faturamento da empresa.',
    keyRequirements: ['Liderança Técnica de Squads', 'Fullstack (TypeScript, React, Node)', 'CI/CD e Métricas DORA', 'Mentoria e Formação de Pessoas', 'Comunicação com Stakeholders e C-Level']
  },
  {
    id: 'solutions_architect',
    title: 'Arquiteto de Soluções Cloud / SRE Lead',
    companyType: 'Consultoria Estratégica / Multinacional Cloud',
    description: 'Arquiteto responsável por diagnosticar ecossistemas legados, planejar migrações seguras para nuvem (AWS/GCP/Kubernetes) e implementar práticas modernas de observabilidade e redução de custos (FinOps).',
    keyRequirements: ['AWS / Kubernetes (EKS)', 'Terraform / IaC', 'FinOps e Otimização de Custos', 'Observabilidade (Datadog/Prometheus)', 'Disaster Recovery e Resiliência']
  }
];

export const FREQUENT_INTERVIEW_QUESTIONS = [
  {
    q: 'Como você decide entre construir uma nova solução ou refatorar o legado existente?',
    a: 'Avalio primariamente o custo de oportunidade e o risco operacional. Se o código existente sustenta a receita da empresa e pode ser isolado via padrões como Strangler Fig com testes de regressão, prefiro a refatoração iterativa com métricas de negócio claras. Reescrever do zero só se justifica quando a dívida técnica impede novas features essenciais e a arquitetura física não suporta mais a demanda de escala.'
  },
  {
    q: 'Qual é o seu método para gerenciar incidentes críticos em produção (P0)?',
    a: 'Durante o incidente ativo: comunicação transparente e centralizada com stakeholders a cada 15 minutos, foco total na mitigação imediata (rollback ou feature-flag) antes de tentar encontrar a causa-raiz perfeita. Pós-incidente: condução de um Post-Mortem Blameless (sem culpabilização individual), documentando a linha do tempo, falhas de processo e gerando itens acionáveis no backlog com dono e prazo.'
  },
  {
    q: 'Como você equilibra velocidade de entrega versus qualidade e testes?',
    a: 'Não acredito que velocidade e qualidade sejam opostos. Times sem testes automatizados andam rápido no primeiro mês e travam a partir do sexto mês com medo de deploys. Investir em testes de integração rápidos e esteiras de CI/CD automatizadas é o que permite entregar código em produção múltiplas vezes ao dia com segurança e confiança do negócio.'
  }
];
