
import React from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Smartphone, 
  Truck, 
  Plus, 
  Pizza, 
  Instagram, 
  Facebook, 
  Star,
  ChevronRight,
  Send
} from 'lucide-react';
import { 
  WHATSAPP_NUMBER, 
  WHATSAPP_MESSAGE, 
  PIZZA_SIZES, 
  TESTIMONIALS 
} from './constants';

const Navbar: React.FC = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur shadow-sm">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-red-600 p-1.5 rounded-lg">
          <Pizza className="text-white w-6 h-6" />
        </div>
        <span className="font-brand text-2xl text-red-600">HUADQUIÑA</span>
      </div>
      <div className="hidden md:flex gap-8 font-semibold text-stone-600">
        <a href="#menu" className="hover:text-red-600 transition">Carta</a>
        <a href="#promos" className="hover:text-red-600 transition">Promos</a>
        <a href="#ubicacion" className="hover:text-red-600 transition">Ubicación</a>
      </div>
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-red-700 transition"
      >
        <Smartphone className="w-4 h-4" /> PEDIR YA
      </a>
    </div>
  </nav>
);

const WhatsAppButton: React.FC = () => (
  <a 
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
  >
    <Send className="w-8 h-8 group-hover:rotate-12" />
    <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-green-600 px-3 py-1 rounded shadow-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
      ¡Pide por WhatsApp!
    </span>
  </a>
);

const App: React.FC = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-16">
        <div className="absolute inset-0 bg-stone-900">
          <img 
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Pizzeria Huadquiña"
            onLoad={(e) => (e.currentTarget.style.opacity = '1')}
            style={{ opacity: 0, transition: 'opacity 1s ease-in-out' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 w-full text-white">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="inline-block bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold mb-4">
              ABIERTO: 4 PM - 10 PM
            </span>
            <h1 className="text-5xl md:text-7xl font-brand leading-tight mb-6">
              LAS MEJORES PIZZAS DE <span className="text-red-500">HUADQUIÑA</span> 🍕🔥
            </h1>
            <p className="text-lg md:text-xl mb-8 text-stone-200">
              Artesanales, calientes y recién horneadas. El sabor auténtico que estabas buscando en Santa Teresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={openWhatsApp}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition transform active:scale-95 shadow-lg shadow-red-900/40"
              >
                <Smartphone className="w-6 h-6" /> Pedir por WhatsApp
              </button>
              <a 
                href="#menu"
                className="bg-white/10 backdrop-blur border-2 border-white hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition shadow-lg"
              >
                Ver Nuestra Carta
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-stone-300">
                <Truck className="text-yellow-500 w-5 h-5" />
                <span>Delivery Huadquiña S/1</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <MapPin className="text-red-500 w-5 h-5" />
                <span>Santa Teresa, Cusco</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promos Bar */}
      <section id="promos" className="bg-yellow-500 py-6 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex gap-12 items-center">
              <span className="font-brand text-2xl flex items-center gap-2">
                <Truck className="w-6 h-6" /> DELIVERY SÚPER RÁPIDO S/1
              </span>
              <span className="font-brand text-2xl flex items-center gap-2">
                <Plus className="w-6 h-6" /> COMBINA 2 SABORES POR +S/2
              </span>
              <span className="font-brand text-2xl flex items-center gap-2 text-red-700">
                <Smartphone className="w-6 h-6" /> PAGA CON YAPE O EFECTIVO
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Menu/Sizes Section */}
      <section id="menu" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-brand text-red-600 mb-4 uppercase">Elige tu tamaño ideal</h2>
            <p className="text-stone-500 max-w-xl mx-auto">Masa artesanal hecha a mano diariamente. Ingredientes frescos de la zona para un sabor inigualable.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PIZZA_SIZES.map((size) => (
              <div key={size.id} className="group bg-stone-50 rounded-3xl overflow-hidden border border-stone-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="h-64 overflow-hidden relative bg-stone-200">
                  <img 
                    src={size.image} 
                    alt={size.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                    style={{ opacity: 0, transition: 'opacity 0.5s ease' }}
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    S/ {size.price}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{size.name}</h3>
                    <div className="flex items-center gap-1 text-stone-500 text-sm">
                      <Pizza className="w-4 h-4 text-red-500" /> {size.slices} tajadas
                    </div>
                  </div>
                  <p className="text-stone-600 mb-6">{size.description}</p>
                  <button 
                    onClick={openWhatsApp}
                    className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold hover:bg-red-600 transition flex items-center justify-center gap-2 group-hover:shadow-lg"
                  >
                    Pedir {size.name} <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-red-50 p-8 rounded-3xl border-2 border-dashed border-red-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-6">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-red-100">
                <Plus className="text-red-600 w-10 h-10" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-red-900">¿No te decides?</h4>
                <p className="text-red-700">Por solo <span className="font-bold">S/ 2.00 extra</span> puedes mezclar 2 sabores en una sola pizza.</p>
              </div>
            </div>
            <button 
              onClick={openWhatsApp}
              className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition shadow-lg hover:-translate-y-1 active:translate-y-0"
            >
              ¡Combinar sabores!
            </button>
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-brand text-yellow-500 mb-4 uppercase">¿CÓMO PEDIR?</h2>
            <p className="text-stone-400">Es más fácil que nunca. Sigue estos 4 pasos:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: Smartphone, title: "Escríbenos", desc: "Envía un mensaje a nuestro WhatsApp oficial." },
              { icon: Pizza, title: "Elige", desc: "Indica tamaño, sabores y si deseas combinarlos." },
              { icon: Smartphone, title: "Confirma", desc: "Indica si pagas con Yape o efectivo al repartidor." },
              { icon: Truck, title: "Recibe", desc: "En pocos minutos tu pizza estará en tu puerta." }
            ].map((step, idx) => (
              <div key={idx} className="relative text-center">
                <div className="bg-stone-800 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-stone-700 shadow-inner">
                  <step.icon className="w-10 h-10 text-yellow-500" />
                  <div className="absolute -top-2 -right-2 bg-red-600 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-stone-900 shadow-lg">
                    {idx + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-stone-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-brand text-stone-900 mb-2 uppercase">Lo que dicen nuestros clientes</h2>
            <div className="flex justify-center gap-1 text-yellow-500">
              <Star className="fill-current" /><Star className="fill-current" /><Star className="fill-current" /><Star className="fill-current" /><Star className="fill-current" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 italic relative">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-stone-700 mb-6 leading-relaxed">"{t.text}"</p>
                <div className="font-bold text-stone-900 not-italic border-t border-stone-50 pt-4 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs">
                     {t.name.charAt(0)}
                   </div>
                   {t.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="ubicacion" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-brand text-red-600 mb-6 uppercase">Visítanos o pide delivery</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-stone-50 transition">
                  <MapPin className="text-red-600 w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-xl">Ubicación exacta</h5>
                    <p className="text-stone-600">CP. Huadquiña - Santa Teresa - La Convención - Cusco</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-stone-50 transition">
                  <Clock className="text-red-600 w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-xl">Horario de atención</h5>
                    <p className="text-stone-600">Lunes a Sábado: 4:00 PM - 10:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-stone-50 transition">
                  <Smartphone className="text-red-600 w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-xl">Métodos de pago</h5>
                    <div className="flex gap-4 mt-2">
                      <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-xl border border-blue-100">
                        <span className="text-blue-700 font-bold text-sm">YAPE</span>
                      </div>
                      <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-xl border border-green-100">
                        <span className="text-green-700 font-bold text-sm">Efectivo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button 
                onClick={openWhatsApp}
                className="mt-10 bg-stone-900 text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-2 hover:bg-stone-800 transition shadow-xl hover:-translate-y-1 active:translate-y-0"
              >
                <Phone className="w-6 h-6" /> Llamar / Escribir al WhatsApp
              </button>
            </div>
            
            <div className="bg-stone-100 rounded-3xl overflow-hidden h-[450px] shadow-2xl relative border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15535.197933614917!2d-72.5975456254882!3d-13.1274536294705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916d61d1e4c7e6c1%3A0x6e8a4d4b8e6a5e0!2sSanta%20Teresa!5e0!3m2!1ses-419!2spe!4v1700000000000!5m2!1ses-419!2spe" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-red-600 p-1.5 rounded-lg">
                  <Pizza className="text-white w-6 h-6" />
                </div>
                <span className="font-brand text-3xl text-red-600">HUADQUIÑA</span>
              </div>
              <p className="text-stone-400">Pizzería artesanal en el corazón de Santa Teresa. Calidad, rapidez y sabor inconfundible en cada tajada.</p>
            </div>
            <div>
              <h6 className="font-bold text-lg mb-6 text-yellow-500 uppercase tracking-wider">Contactos Rápidos</h6>
              <ul className="space-y-4 text-stone-400">
                <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-red-600" /> +51 940841728</li>
                <li className="flex items-center gap-3"><Clock className="w-5 h-5 text-red-600" /> Lun - Sáb | 4 PM - 10 PM</li>
                <li className="flex items-center gap-3"><Truck className="w-5 h-5 text-red-600" /> Delivery: Huadquiña - Santa Teresa</li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold text-lg mb-6 text-yellow-500 uppercase tracking-wider">Síguenos</h6>
              <div className="flex gap-4">
                <a href="#" className="bg-stone-800 p-3 rounded-full hover:bg-red-600 transition shadow-sm"><Facebook className="w-6 h-6" /></a>
                <a href="#" className="bg-stone-800 p-3 rounded-full hover:bg-red-600 transition shadow-sm"><Instagram className="w-6 h-6" /></a>
              </div>
              <p className="mt-6 text-sm text-stone-500 italic">"Pizzas calientes, recién horneadas e ideales para compartir."</p>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-800 text-center text-stone-500 text-sm">
            &copy; {new Date().getFullYear()} Pizzería Huadquiña. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      <WhatsAppButton />
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;
