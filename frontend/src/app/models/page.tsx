import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { FiMusic, FiCpu, FiZap, FiActivity, FiHeadphones, FiBarChart2 } from "react-icons/fi"
import Link from "next/link"

export default function ModelsPage() {
  const models = [
    {
      id: "standard",
      name: "Standard Separator",
      description: "Basic 4-stem separation for vocals, drums, bass, and other instruments with good quality results.",
      features: [
        "4-stem separation", 
        "Fast processing", 
        "Compatible with mp3, wav, flac, mp4",
        "Up to 10 minutes of audio"
      ],
      specs: {
        quality: "Good",
        processing: "Fast",
        accuracy: "Medium",
        stems: 4
      },
      icon: <FiMusic size={24} />,
      color: "blue",
      price: "Free",
      recommended: false
    },
    {
      id: "advanced",
      name: "Advanced Separator",
      description: "High-quality separation with enhanced vocal isolation and instrumental clarity for professional results.",
      features: [
        "4-stem separation with enhanced quality", 
        "Vocal enhancement technology", 
        "Artifact reduction", 
        "Up to 30 minutes of audio"
      ],
      specs: {
        quality: "High",
        processing: "Medium",
        accuracy: "High",
        stems: 4
      },
      icon: <FiHeadphones size={24} />,
      color: "purple",
      price: "$9.99",
      recommended: true
    },
    {
      id: "professional",
      name: "Professional Suite",
      description: "Studio-grade multi-stem separation with fine-tuned algorithms for the highest quality results.",
      features: [
        "5+ stem separation (vocals, drums, bass, piano, other)", 
        "Vocal reverb control", 
        "Super resolution processing", 
        "Priority processing queue"
      ],
      specs: {
        quality: "Studio",
        processing: "Thorough",
        accuracy: "Very High",
        stems: 6
      },
      icon: <FiCpu size={24} />,
      color: "green",
      price: "$19.99",
      recommended: false
    }
  ]

  const colorVariants = {
    blue: "bg-blue-500 text-white",
    purple: "bg-purple-500 text-white",
    green: "bg-green-500 text-white"
  }

  const bgColorVariants = {
    blue: "from-blue-50 to-white border-blue-100",
    purple: "from-purple-50 to-white border-purple-100",
    green: "from-green-50 to-white border-green-100"
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-28">
        <h1 className="text-center text-4xl font-bold mb-2">Separation Models</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose from multiple AI models optimized for different separation needs and quality requirements
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {models.map((model) => (
            <div 
              key={model.id}
              className={`card overflow-hidden border hover:shadow-lg relative ${model.recommended ? 'ring-2 ring-primary-500' : ''}`}
            >
              {model.recommended && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary-500 text-white py-1 px-3 text-xs font-semibold transform rotate-45 translate-x-[30%] translate-y-[-30%] w-[150px] text-center">
                    RECOMMENDED
                  </div>
                </div>
              )}
              
              <div className={`p-6 ${colorVariants[model.color as keyof typeof colorVariants]}`}>
                <div className="flex items-center mb-2">
                  <div className="bg-white/20 p-2 rounded-lg mr-3">
                    {model.icon}
                  </div>
                  <h2 className="text-xl font-bold">{model.name}</h2>
                </div>
                <div className="font-bold text-2xl mb-2">{model.price}</div>
                <div className="text-sm opacity-90">{model.description}</div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold mb-3">Features</h3>
                <ul className="space-y-2 mb-6">
                  {model.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Specifications</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="text-xs text-gray-500">Quality</div>
                      <div className="font-medium">{model.specs.quality}</div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="text-xs text-gray-500">Processing</div>
                      <div className="font-medium">{model.specs.processing}</div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="text-xs text-gray-500">Accuracy</div>
                      <div className="font-medium">{model.specs.accuracy}</div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="text-xs text-gray-500">Stems</div>
                      <div className="font-medium">{model.specs.stems}</div>
                    </div>
                  </div>
                </div>
                
                <Link
                  href={`/upload?model=${model.id}`}
                  className={`w-full btn ${model.recommended ? 'btn-primary' : 'btn-secondary'} py-3 flex justify-center items-center`}
                >
                  <span className="mr-2">Select Model</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-primary-50 rounded-xl p-8 shadow-sm border border-primary-100">
          <h2 className="text-2xl font-bold mb-4 text-center">Need a Custom Model?</h2>
          <p className="text-center max-w-2xl mx-auto mb-6">
            We offer custom-trained models for specific use cases like podcasts, movie dialog extraction,
            instrument-specific isolation, and more. Contact us for details.
          </p>
          <div className="text-center">
            <Link href="/contact" className="btn btn-primary px-6 py-2">
              Contact for Custom Solutions
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 