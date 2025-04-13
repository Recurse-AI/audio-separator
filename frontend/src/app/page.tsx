import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import FeatureSection from '@/components/FeatureSection'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <Hero />
      
      <FeatureSection />
      
      {/* Models Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-700">Choose from Multiple Separation Models</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Model Card 1 */}
            <div className="card border border-gray-100 hover:border-primary-200">
              <h3 className="text-xl font-semibold mb-2">Standard Separator</h3>
              <p className="text-gray-600 mb-4">Basic 4-stem separation for vocals, drums, bass, and other instruments.</p>
              <div className="flex justify-between items-center">
                <span className="text-primary-600 font-medium">Free</span>
                <Link href="/upload" className="btn btn-primary">
                  Try Now
                </Link>
              </div>
            </div>
            
            {/* Model Card 2 */}
            <div className="card border border-gray-100 hover:border-primary-200">
              <h3 className="text-xl font-semibold mb-2">Advanced Separator</h3>
              <p className="text-gray-600 mb-4">High-quality separation with enhanced vocal isolation and instrumental clarity.</p>
              <div className="flex justify-between items-center">
                <span className="text-primary-600 font-medium">Premium</span>
                <Link href="/upload" className="btn btn-primary">
                  Try Now
                </Link>
              </div>
            </div>
            
            {/* Model Card 3 */}
            <div className="card border border-gray-100 hover:border-primary-200">
              <h3 className="text-xl font-semibold mb-2">Professional Suite</h3>
              <p className="text-gray-600 mb-4">Multi-stem separation with fine-tuned algorithms for studio-quality results.</p>
              <div className="flex justify-between items-center">
                <span className="text-primary-600 font-medium">Enterprise</span>
                <Link href="/upload" className="btn btn-primary">
                  Try Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Ready to Separate Your Audio?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Upload your files now and experience the power of AI-driven audio separation technology.
          </p>
          <Link href="/upload" className="btn btn-primary px-8 py-3 text-lg">
            Get Started Free
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}