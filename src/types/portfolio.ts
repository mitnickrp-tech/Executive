export interface CandidateProfile {
  name: string;
  role: string;
  seniority: string;
  tagline: string;
  summary: string;
  location: string;
  workModel: string;
  availability: string;
  contractTypes: string[];
  salaryExpectation: {
    clt: string;
    pj: string;
    international: string;
    notes: string;
  };
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  avatarUrl: string;
  yearsOfExperience: number;
}

export interface ExecutiveMetric {
  id: string;
  value: string;
  label: string;
  description: string;
  context: string;
}

export interface MetricComparison {
  label: string;
  before: string;
  after: string;
  delta: string;
}

export interface ArchitectureComponent {
  name: string;
  role: string;
  tech: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  companyContext: string;
  category: 'cloud_finops' | 'high_throughput' | 'engineering_excellence' | 'revenue_growth';
  categoryLabel: string;
  featuredImage: string;
  timeframe: string;
  primaryImpact: string;
  metrics: MetricComparison[];
  star: {
    situation: string;
    task: string;
    action: string[];
    result: string[];
  };
  techStack: string[];
  architectureOverview: string;
  architectureComponents: ArchitectureComponent[];
  businessLessons: string;
  leadershipScope: string;
  referenceQuote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface SkillItem {
  name: string;
  level: 'Especialista' | 'Avançado';
  years: number;
  businessApplication: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  items: SkillItem[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  relationship: string;
  impactTag: string;
}

export interface JobPreset {
  id: string;
  title: string;
  companyType: string;
  description: string;
  keyRequirements: string[];
}

export interface JobMatchAnalysis {
  matchScore: number;
  fitAssessment: string;
  matchedKeywords: string[];
  missingKeywords: string[];
  recommendedCases: CaseStudy[];
  talkingPoints: string[];
}
