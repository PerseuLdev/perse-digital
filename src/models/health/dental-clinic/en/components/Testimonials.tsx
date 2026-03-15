import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Mariana Costa',
    text: 'The best clinic I\'ve ever been to. The service is impeccable from reception to the office. I did my Invisalign treatment and the result was fantastic!',
    rating: 5
  },
  {
    id: 2,
    name: 'Roberto Almeida',
    text: 'I got implants with Dr. Ana and I\'m very satisfied. Gentle hands, modern equipment, and zero pain. I recommend it with eyes closed.',
    rating: 5
  },
  {
    id: 3,
    name: 'Carla Nunes',
    text: 'Super pleasant environment, doesn\'t even feel like a dentist. The aesthetics team transformed my smile with veneers. My self-esteem is on another level!',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What our patients say</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            The satisfaction of those who have transformed their smile with us is our greatest guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl relative">
              <Quote className="absolute top-6 right-6 text-teal-500/30" size={48} />

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-200 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                </div>
                <span className="text-white font-semibold">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
