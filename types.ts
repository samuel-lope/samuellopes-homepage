export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface Publication {
  id: string;
  type: 'ARTIGO' | 'NOTÍCIA' | 'PAPER ACADÊMICO';
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  colorClass: string; // Tailwind color class for hover shadow
  tagColorClass: string; // Tailwind color class for tag text
}

export interface NavItem {
  label: string;
  href: string;
}