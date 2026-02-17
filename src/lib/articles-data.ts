export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  category: string;
  content: string; // HTML format for simplicity in rendering
}

export const articles: Record<string, Article[]> = {
  en: [
    {
      slug: 'seo-mastery-2026',
      title: 'SEO Mastery: Ranking High in 2026',
      description: 'Discover the latest technical SEO strategies and content trends to dominate search results in 2026.',
      date: '2026-02-14',
      author: 'Perse Team',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=600&fit=crop',
      category: 'Marketing',
      content: `
        <p>In 2026, SEO is no longer just about keywords; it's about authority, user experience, and semantic relevance. Artificial Intelligence has transformed how search engines understand content, making quality more important than ever.</p>
        <h2>The Core Pillars of SEO in 2026</h2>
        <ul>
          <li><strong>E-E-A-T:</strong> Experience, Expertise, Authoritativeness, and Trustworthiness are the gold standard.</li>
          <li><strong>Technical Excellence:</strong> Core Web Vitals and lightning-fast loading speeds are mandatory.</li>
          <li><strong>Intent Matching:</strong> Understanding what the user <em>really</em> wants, not just what they type.</li>
        </ul>
        <p>At Perse Digital, we specialize in high-performance Next.js architectures that give you a natural edge in SEO rankings.</p>
      `,
    },
    {
      slug: 'why-your-business-needs-a-website',
      title: 'Why Your Business Needs a Professional Website',
      description: 'A professional website is more than just a digital business card—it\'s a revenue-generating machine.',
      date: '2026-02-12',
      author: 'Perse Team',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
      category: 'Business',
      content: `
        <p>In today's digital-first economy, your website is often the first and most important interaction a customer has with your brand. If it looks outdated or is slow, you are losing money every second.</p>
        <h2>How a Website Drives Revenue</h2>
        <ul>
          <li><strong>Credibility:</strong> 75% of consumers judge a company's credibility based on its website design.</li>
          <li><strong>24/7 Availability:</strong> Your website works even when you don't, capturing leads and making sales around the clock.</li>
          <li><strong>Data Control:</strong> Unlike social media, you own your website and your data.</li>
        </ul>
        <p>A premium website isn't an expense; it's an investment with a massive ROI.</p>
      `,
    },
    {
      slug: 'psychology-of-premium-design',
      title: 'The Psychology of Premium Design',
      description: 'Learn how high-quality design influences trust, conversion rates, and long-term customer loyalty.',
      date: '2026-02-10',
      author: 'Perse Team',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop',
      category: 'Design',
      content: `
        <p>Design is the silent ambassador of your brand. Premium design isn't just about looking "pretty"; it's about creating a frictionless experience that guides users toward taking action.</p>
        <h2>The Trust Factor</h2>
        <p>When a user lands on a site with impeccable typography, balanced whitespace, and smooth animations, they subconsciously associate those qualities with your product or service.</p>
        <ul>
          <li><strong>Reduced Cognitive Load:</strong> Simple, intuitive layouts keep users engaged longer.</li>
          <li><strong>Emotional Connection:</strong> Color theory and imagery can evoke specific feelings in your target audience.</li>
          <li><strong>Conversion Optimization:</strong> Subtle micro-interactions can significantly increase click-through rates.</li>
        </ul>
      `,
    },
  ],
  pt: [
    {
      slug: 'maestria-seo-2026',
      title: 'Maestria em SEO: Dominando o Ranking em 2026',
      description: 'Descubra as últimas estratégias de SEO técnico e tendências de conteúdo para dominar os resultados de busca em 2026.',
      date: '2026-02-14',
      author: 'Equipe Perse',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=600&fit=crop',
      category: 'Marketing',
      content: `
        <p>Em 2026, o SEO não se trata mais apenas de palavras-chave; trata-se de autoridade, experiência do usuário e relevância semântica. A Inteligência Artificial transformou como os motores de busca entendem o conteúdo, tornando a qualidade mais importante do que nunca.</p>
        <h2>Os Pilares do SEO em 2026</h2>
        <ul>
          <li><strong>E-E-A-T:</strong> Experiência, Expertise, Autoridade e Confiabilidade são o padrão ouro.</li>
          <li><strong>Excelência Técnica:</strong> Core Web Vitals e velocidades de carregamento ultrarrápidas são obrigatórias.</li>
          <li><strong>Correspondência de Intenção:</strong> Entender o que o usuário <em>realmente</em> quer, não apenas o que ele digita.</li>
        </ul>
        <p>Na Perse Digital, nos especializamos em arquiteturas Next.js de alto desempenho que dão ao seu site uma vantagem natural nos rankings de SEO.</p>
      `,
    },
    {
      slug: 'por-que-sua-empresa-precisa-de-um-site',
      title: 'Por que sua Empresa Precisa de um Site Profissional',
      description: 'Um site profissional é mais do que um cartão de visitas digital—é uma máquina de gerar receita.',
      date: '2026-02-12',
      author: 'Equipe Perse',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
      category: 'Negócios',
      content: `
        <p>Na economia digital atual, seu site é frequentemente a primeira e mais importante interação que um cliente tem com sua marca. Se ele parecer desatualizado ou for lento, você está perdendo dinheiro a cada segundo.</p>
        <h2>Como um Site Impulsiona a Receita</h2>
        <ul>
          <li><strong>Credibilidade:</strong> 75% dos consumidores julgam a credibilidade de uma empresa com base no design de seu site.</li>
          <li><strong>Disponibilidade 24/7:</strong> Seu site funciona mesmo quando você não está, capturando leads e fazendo vendas o tempo todo.</li>
          <li><strong>Controle de Dados:</strong> Ao contrário das redes sociais, você é dono do seu site e dos seus dados.</li>
        </ul>
        <p>Um site premium não é um gasto; é um investimento com um ROI massivo.</p>
      `,
    },
    {
      slug: 'psicologia-do-design-premium',
      title: 'A Psicologia do Design Premium',
      description: 'Saiba como o design de alta qualidade influencia a confiança, as taxas de conversão e a fidelidade do cliente a longo prazo.',
      date: '2026-02-10',
      author: 'Equipe Perse',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop',
      category: 'Design',
      content: `
        <p>O design é o embaixador silencioso da sua marca. Design premium não se trata apenas de ser "bonito"; trata-se de criar uma experiência fluida que guia os usuários a tomar uma ação.</p>
        <h2>O Fator Confiança</h2>
        <p>Quando um usuário entra em um site com tipografia impecável, espaços em branco equilibrados e animações suaves, ele subconscientemente associa essas qualidades ao seu produto ou serviço.</p>
        <ul>
          <li><strong>Carga Cognitiva Reduzida:</strong> Layouts simples e intuitivos mantêm os usuários engajados por mais tempo.</li>
          <li><strong>Conexão Emocional:</strong> A teoria das cores e as imagens podem evocar sentimentos específicos em seu público-alvo.</li>
          <li><strong>Otimização de Conversão:</strong> Micro-interações sutis podem aumentar significativamente as taxas de cliques.</li>
        </ul>
      `,
    },
  ],
};
