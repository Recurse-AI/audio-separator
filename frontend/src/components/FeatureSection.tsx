'use client'

import { FiMusic, FiVideo, FiCpu, FiDownload, FiCloudLightning, FiSmile, FiZap, FiHeadphones, FiLayers } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function FeatureSection() {
  const features = [
    {
      icon: <FiMusic size={24} />,
      title: 'Audio Separation',
      description: 'Separate vocals, instruments, bass, and drums from any audio file with high-quality results.',
      color: 'blue'
    },
    {
      icon: <FiVideo size={24} />,
      title: 'Video Processing',
      description: 'Extract and process audio directly from video files with our integrated video handling.',
      color: 'purple'
    },
    {
      icon: <FiCpu size={24} />,
      title: 'Advanced AI Models',
      description: 'Choose from multiple state-of-the-art AI models optimized for different separation needs.',
      color: 'green'
    },
    {
      icon: <FiDownload size={24} />,
      title: 'Multiple Formats',
      description: 'Download separated tracks in various formats including MP3, WAV, and FLAC.',
      color: 'orange'
    },
    {
      icon: <FiZap size={24} />,
      title: 'Fast Processing',
      description: 'Optimized cloud infrastructure for quick processing even with large audio files.',
      color: 'yellow'
    },
    {
      icon: <FiHeadphones size={24} />,
      title: 'High Quality Output',
      description: 'Superior audio quality retention with advanced noise reduction technology.',
      color: 'red'
    },
    {
      icon: <FiLayers size={24} />,
      title: 'Multi-stem Separation',
      description: 'Separate into multiple stems including vocals, drums, bass, and other instruments.',
      color: 'indigo'
    },
    {
      icon: <FiSmile size={24} />,
      title: 'Intuitive Interface',
      description: 'User-friendly interface designed to make audio separation accessible to everyone.',
      color: 'pink'
    }
  ]

  const colorVariants = {
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    green: 'bg-green-100 text-green-600',
    orange: 'bg-orange-100 text-orange-600',
    yellow: 'bg-yellow-100 text-yellow-700',
    red: 'bg-red-100 text-red-600',
    indigo: 'bg-indigo-100 text-indigo-600',
    pink: 'bg-pink-100 text-pink-600'
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-700">
            Powerful Audio Separation
          </h2>
          <p className="text-xl text-gray-600">
            Our advanced AI technology delivers studio-quality separation for any audio or video file into individual components.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary-200 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg mr-4 ${colorVariants[feature.color as keyof typeof colorVariants]}`}>
                  {feature.icon}
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold mb-4">Advanced Separation Technology</h3>
              <p className="text-gray-700 mb-6">
                Our audio separation service uses cutting-edge deep learning models like Demucs, MDX-B, and more to provide the best possible separation quality for your audio.
              </p>
              <ul className="space-y-2">
                {['State-of-the-art neural networks', 'Multi-layered processing', 'Frequency-domain analysis', 'Time-domain optimization'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary-100 rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-full text-primary-600 mb-4">
                      <FiZap size={28} />
                    </div>
                    <h4 className="text-xl font-semibold">Try It Now</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-gray-200 rounded overflow-hidden">
                      <div className="h-full bg-primary-600 w-2/3"></div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded overflow-hidden">
                      <div className="h-full bg-purple-500 w-4/5"></div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded overflow-hidden">
                      <div className="h-full bg-green-500 w-1/2"></div>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <a 
                      href="/upload" 
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                    >
                      Start Separating
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}