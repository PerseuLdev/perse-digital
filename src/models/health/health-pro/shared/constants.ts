// Constantes compartilhadas (cores, tamanhos, etc)

export const COLORS = {
  primary: '#004AAD',
  secondary: '#F8FAFC',
  accent: '#0066FF',
  text: {
    primary: '#1A1A1A',
    secondary: '#666666',
  },
  background: {
    light: '#FFFFFF',
    gray: '#F5F5F5',
  },
} as const;

export const BREAKPOINTS = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
} as const;

export const CONTACT_INFO = {
  phone: '(11) 99999-9999',
  email: 'contato@healthpro.com.br',
  address: 'Av. Paulista, 1000 - São Paulo, SP',
} as const;
