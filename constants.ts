import { NavItem, Project, Publication } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'SOBRE', href: '#sobre' },
  { label: 'PUBLICAÇÕES', href: '#publicacoes' },
  { label: 'PROJETOS', href: '#projetos' },
  { label: 'CONTATO', href: '#contato' },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: '1',
    type: 'ARTIGO',
    title: 'A Nova Arquitetura Sustentável',
    description: 'Análise das tendências e materiais que estão moldando o futuro da construção civil eco-friendly.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4EGn1rRFhq_Erb6X1raBNi00WaaI47bs_AlRBD1f-PnqOeWE_VljaFPj3mwNCbUY-DRC4RMjQXV0CjukELtZR7-0gmB6c-gEcu7ARu_MXjDafQ8oyuSieoQh4mr_htV2TPOW-bpaQ6l4L84dz-mXo1oaprH4YJdOGZyWaWatxxd1vercTe76kimjNlfuSAqmm_92kxPwTZjQFRDC-GkbVOyTqoQkbvRvYxmnCFfgs5cqbm0o-zLTjtc-c34zyGrAxRMz09RWu3xI',
    link: '#',
    colorClass: 'shadow-[4px_4px_0_0_#FF6B33]',
    tagColorClass: 'text-secondary',
  },
  {
    id: '2',
    type: 'NOTÍCIA',
    title: 'Palestra na Semana de Urbanismo',
    description: 'Samuel Lopes discute o impacto social do planejamento urbano em grandes metrópoles.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXELc8ti99N0OeVy3dxR_w7MQPjdJlD9rFbMVUn-uEI2J-ocNEjN3emJVVuiwe6-qU3WkwzYJjUYfS7PrcmPFnqfLuTKtXW0u_dS7G0JGFfgPgaX40hNW8sk0BWTUUlK3igw8XiCcIU11HckyLNMTNuu7cllMxl-F3sSaKVv7OSYTzimJaUEfGSDWL9kkGAJp-qrc87UVYke3RdCAMCIVEca4Ub2ZD7Y1K6QQSp_vqu3X3K9HVScs1DtNN-DCSXVh39cYAXmaS_U4',
    link: '#',
    colorClass: 'shadow-[4px_4px_0_0_#33A1FF]',
    tagColorClass: 'text-accent',
  },
  {
    id: '3',
    type: 'PAPER ACADÊMICO',
    title: 'Espaços Públicos e Interação',
    description: 'Estudo de caso sobre a requalificação de praças e seu efeito na coesão comunitária.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzSS7P4hpY_Hv9kspoAo4e_NAqZIIEfkRj0gd1qDFn4BYIxzt7vy7RloNWKpaTUA6bl7yIJ9aVPrn4V0E9hzkKbmoBTeiCwmQNZHjtsQFfYUQjeSq4LzJnukN8455saFbMJ0LIS79UKJ0XG4-Z48Jjg5Q54bBLGAMFbmvAULtwdkkZvo3DgkEY_rfmWUH5ANzMsGX3ZeXzjkjtmc41kNSjJVmbIscKZbeA0CrRG71_5A-5Y-haA1zVsAiPte6IrbJzilCYUbL9xeA',
    link: '#',
    colorClass: 'shadow-[4px_4px_0_0_#FF6B33]',
    tagColorClass: 'text-secondary',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Edifício Corporativo Vértice',
    description: 'Design inovador para um centro empresarial no coração da cidade, focado em eficiência energética.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1JC5DRcCnyaNBLgIrc9lDRunh9jdnCIw6Xi_LfD8fSPliS0wL30_CK6jl0gA4Gf4Dise3hW4k0svQJVvnDEyYHxLaoMkrWPieis-uzTj_r-TiUP3qYfzMer8u4jQzBLJ-AoQekAYoLkWk41P4C_HSW0PblHWRMuKBU9OEMze1sl7J_nUnz-TXd0oFJ4ELqRmj_ZqKqzPcSLtLEBr0a4wfu6V1OU5pYnO4yS-nQmznsF1DCcPAT28Mp9vQnMGPA6xHR_5L4FpRZl4',
    link: '#',
  },
  {
    id: '2',
    title: 'Residência Alvorada',
    description: 'Projeto residencial que prioriza a integração com a natureza e o uso de luz natural.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtyK9g-pAU4dMyw4bpxmO_JaZglyFI4zSboiOikIK3ayCIoGq8qMRjvmYzw_GW3xBybRWOI41H2lCBe0X7amqAaEqkI4xF5Aa50pUjW9qD57Bf434Hz_ly8foo5iwXjyF0OpkyZlKQyRzLNaHdBxCC4zfAT8bxG6Tuvrzd-S7W2WfuzB_0H6pdWXUsD7gDVlsXDNisxbfSw6MSpqNvDoX9L2Kn3q8G-XmwW8NkkvwY4kIb1-kN-8MCs36TggaVV1pOZLh21gQJrZo',
    link: '#',
  },
  {
    id: '3',
    title: 'Parque Central Requalificado',
    description: 'Revitalização de área urbana, transformando um espaço degradado em um vibrante parque público.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZVUXYpgmGENklRpst0c0yfOHPTYgPl799ZfmxADYWWr9-jaymSoL3WcKWDGBYgfSfEjvi8WjztUbdQV_Lm49kH5YTBVh3XVsgUcsmDIyrhtc7lDB4tDDlBOJROUXwkQSWmHIZzXOhoaYMM8kKnVMSh5niv-4Qr-zf6Gl8s3l9FfuFBTzGIxmYWyoi74Uxif73b8wJQdRSLXKmllUxPQoeMn982_KoNqO7zKYqSG4Eq5AquaCxgyU6vRNaNNlOgwPitNZ0UVB5Bkc',
    link: '#',
  },
];

export const PROFILE_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpmZ9VZgyjBGP0rLl-TLs7F3dZtur1ZNXHZOpy5AeGSQMzKBNVHWCaeWbWV0ZJVVVKhbjfzjg4G5Aw9oAuQtdkiQB9nwUI9owSnx9SxxCev7tT1fkra1J3hu6hpdBukxeW26TLfZ1xFbcy18ju3u2Uu065fDz-aHOVM9EpWnEFsJvQtne2iP8fUuR63ATWdKuRMkFB2Bnr3N7V3Be7EYMKQG9afiJG1gfDiBKOTiJ84fxcXTdwnBJc-eiGEej4xFdHeypAcaUo830';
