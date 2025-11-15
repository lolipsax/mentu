import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AppDemo } from './components/AppDemo';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <AppDemo />
        <Features />
        
        {/* CTA Section */}
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Hemen Katılın</h2>
                <p className="text-xl text-gray-600 mb-8">
                    Siz de MENTU ailesinin bir parçası olun, bilgiye sınır koymayın.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="bg-mentu-red text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-mentu-redLight transition-colors">
                        Ücretsiz Kayıt Ol
                    </button>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
