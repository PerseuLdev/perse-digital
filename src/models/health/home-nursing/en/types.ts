
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  relation: string;
  content: string;
  image: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
