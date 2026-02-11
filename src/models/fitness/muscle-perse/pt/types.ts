export interface ServicePlan {
  title: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}