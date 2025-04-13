'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiUpload, FiPlayCircle, FiMusic, FiMic, FiHeadphones, FiActivity } from 'react-icons/fi'

export default function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }
  
  return (
    <section className="pt-20 md:pt-24 lg:pt-32 pb-12 md:pb-16 bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 lg:pr-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="inline-block bg-primary-100 text-primary-800 px-4 py-1 rounded-full mb-4">
              <span className="text-sm font-medium flex items-center">
                <FiMusic className="mr-1" /> Advanced AI Audio Separation
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
            >
              <span className="text-primary-600">
                AI-Powered Audio & Video 
              </span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-600">
                Separation
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Easily separate vocals, instruments, bass, and drums from your audio and video files with state-of-the-art AI technology.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 mb-6 md:mb-8"
            >
              <Link 
                href="/upload" 
                className="btn btn-primary px-6 sm:px-8 py-2.5 sm:py-3 text-base md:text-lg flex items-center justify-center"
              >
                <FiUpload className="mr-2" /> Start Separating
              </Link>
              <Link 
                href="/demo" 
                className="btn btn-secondary px-6 sm:px-8 py-2.5 sm:py-3 text-base md:text-lg flex items-center justify-center"
              >
                <FiPlayCircle className="mr-2" /> Try Demo
              </Link>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-xs sm:max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex items-center">
                <FiMic className="text-primary-600 mr-2" />
                <span className="text-sm text-gray-700">Vocal Isolation</span>
              </div>
              <div className="flex items-center">
                <FiHeadphones className="text-primary-600 mr-2" />
                <span className="text-sm text-gray-700">Instrument Extraction</span>
              </div>
              <div className="flex items-center">
                <FiActivity className="text-primary-600 mr-2" />
                <span className="text-sm text-gray-700">Bass Separation</span>
              </div>
              <div className="flex items-center">
                <FiMusic className="text-primary-600 mr-2" />
                <span className="text-sm text-gray-700">Drum Extraction</span>
            </div>
            </motion.div>
          </motion.div>
          
          {/* Image/Animation */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative w-full h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px] mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-6 sm:-top-10 -right-6 sm:-right-10 w-24 sm:w-40 h-24 sm:h-40 bg-yellow-400 rounded-full opacity-10"></div>
              <div className="absolute -bottom-4 sm:-bottom-5 -left-4 sm:-left-5 w-20 sm:w-28 h-20 sm:h-28 bg-blue-500 rounded-full opacity-10"></div>
              <div className="absolute top-14 sm:top-20 right-6 sm:right-10 w-10 sm:w-16 h-10 sm:h-16 bg-purple-500 rounded-full opacity-10"></div>
              <div className="absolute bottom-28 sm:bottom-40 left-6 sm:left-10 w-14 sm:w-20 h-14 sm:h-20 bg-green-500 rounded-full opacity-10"></div>
              
              {/* Main visualization - Enhanced container */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 shadow-xl sm:shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100">
                {/* Content area with enhanced padding */}
                <div className="p-4 sm:p-6 flex flex-col h-full">
                  {/* Original waveform - Enhanced with gradient */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex justify-between items-center mb-1 sm:mb-2">
                      <div className="text-xs sm:text-sm font-medium text-gray-700">Original Audio</div>
                      <div className="text-xs text-primary-600 font-medium">00:03:42</div>
                    </div>
                    <div className="h-12 sm:h-16 bg-gradient-to-r from-primary-50 to-purple-50 rounded-lg sm:rounded-xl flex items-center justify-center overflow-hidden border border-gray-100">
                      <div className="flex items-end space-x-0.5 sm:space-x-1 px-2 sm:px-4 w-full h-full">
                        {Array.from({ length: 40 }).map((_, i) => {
                          const height = Math.sin(i * 0.2) * 0.5 + 0.5
                          return (
                            <div 
                              key={i} 
                              className="w-1 sm:w-1.5 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-sm" 
                              style={{ 
                                height: `${Math.max(15, height * 90)}%`,
                                opacity: 0.8 + (i % 3) * 0.1,
                                animation: `pulse 1.5s infinite ease-in-out ${i * 0.05}s`
                              }}
                            ></div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                  
                  {/* Title for separated tracks */}
                  <div className="mb-1 sm:mb-2">
                    <div className="text-xs sm:text-sm font-medium text-gray-700 mb-1">Separated Tracks</div>
                  </div>
                  
                  {/* Separated tracks - Enhanced with gradients and better spacing */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg sm:rounded-xl p-1.5 sm:p-2 border border-blue-100">
                      <div className="text-[10px] sm:text-xs text-gray-700 mb-0.5 sm:mb-1 flex items-center font-medium">
                        <FiMic className="mr-1 text-blue-600" size={12} /> Vocals
                      </div>
                      <div className="h-6 sm:h-8 bg-white/80 rounded-md sm:rounded-lg flex items-center overflow-hidden shadow-inner">
                        <div className="flex items-end space-x-0.5 px-1 sm:px-2 w-full h-full">
                          {Array.from({ length: 30 }).map((_, i) => {
                            const height = Math.sin(i * 0.3) * 0.5 + 0.5
                            return (
                              <div 
                                key={i} 
                                className="w-0.5 sm:w-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm" 
                                style={{ 
                                  height: `${Math.max(10, height * 90)}%`,
                                  opacity: 0.8 + (i % 3) * 0.1,
                                  animation: `pulse 2s infinite ease-in-out ${i * 0.07}s`
                                }}
                              ></div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg sm:rounded-xl p-1.5 sm:p-2 border border-green-100">
                      <div className="text-[10px] sm:text-xs text-gray-700 mb-0.5 sm:mb-1 flex items-center font-medium">
                        <FiHeadphones className="mr-1 text-green-600" size={12} /> Instruments
                      </div>
                      <div className="h-6 sm:h-8 bg-white/80 rounded-md sm:rounded-lg flex items-center overflow-hidden shadow-inner">
                        <div className="flex items-end space-x-0.5 px-1 sm:px-2 w-full h-full">
                          {Array.from({ length: 30 }).map((_, i) => {
                            const height = Math.cos(i * 0.2) * 0.5 + 0.5
                            return (
                              <div 
                                key={i} 
                                className="w-0.5 sm:w-1 bg-gradient-to-t from-green-600 to-green-400 rounded-t-sm" 
                                style={{ 
                                  height: `${Math.max(10, height * 90)}%`,
                                  opacity: 0.8 + (i % 3) * 0.1,
                                  animation: `pulse 1.8s infinite ease-in-out ${i * 0.06}s`
                                }}
                              ></div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg sm:rounded-xl p-1.5 sm:p-2 border border-purple-100">
                      <div className="text-[10px] sm:text-xs text-gray-700 mb-0.5 sm:mb-1 flex items-center font-medium">
                        <FiActivity className="mr-1 text-purple-600" size={12} /> Bass
                      </div>
                      <div className="h-6 sm:h-8 bg-white/80 rounded-md sm:rounded-lg flex items-center overflow-hidden shadow-inner">
                        <div className="flex items-end space-x-0.5 px-1 sm:px-2 w-full h-full">
                          {Array.from({ length: 30 }).map((_, i) => {
                            const height = Math.sin(i * 0.1) * 0.5 + 0.5
                            return (
                              <div 
                                key={i} 
                                className="w-0.5 sm:w-1 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-sm" 
                                style={{ 
                                  height: `${Math.max(10, height * 90)}%`,
                                  opacity: 0.8 + (i % 3) * 0.1,
                                  animation: `pulse 2.2s infinite ease-in-out ${i * 0.08}s`
                                }}
                              ></div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg sm:rounded-xl p-1.5 sm:p-2 border border-orange-100">
                      <div className="text-[10px] sm:text-xs text-gray-700 mb-0.5 sm:mb-1 flex items-center font-medium">
                        <FiMusic className="mr-1 text-orange-600" size={12} /> Drums
                      </div>
                      <div className="h-6 sm:h-8 bg-white/80 rounded-md sm:rounded-lg flex items-center overflow-hidden shadow-inner">
                        <div className="flex items-end space-x-0.5 px-1 sm:px-2 w-full h-full">
                          {Array.from({ length: 30 }).map((_, i) => {
                            const pattern = i % 8 === 0 || i % 8 === 4 ? 0.9 : (i % 8 === 2 || i % 8 === 6 ? 0.6 : 0.2)
                            return (
                              <div 
                                key={i} 
                                className="w-0.5 sm:w-1 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t-sm" 
                                style={{ 
                                  height: `${Math.max(5, pattern * 90)}%`,
                                  opacity: 0.8 + (i % 3) * 0.1,
                                  animation: `pulse 1.5s infinite ease-in-out ${i * 0.05}s`
                                }}
                              ></div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Track info section - fills empty space between separated tracks and progress bar */}
                  <div className="mt-auto mb-2 sm:mb-3 flex flex-wrap sm:flex-nowrap justify-between bg-gradient-to-r from-primary-50 to-primary-100 p-1.5 sm:p-2 rounded-lg sm:rounded-xl border border-primary-100">
                    <div className="flex items-center text-[10px] sm:text-xs text-gray-700 w-full sm:w-auto mb-1.5 sm:mb-0">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 bg-white rounded-full flex items-center justify-center mr-1.5 sm:mr-2 shadow-sm">
                        <FiHeadphones className="text-primary-600" size={12} />
                      </div>
                      <div>
                        <div className="font-medium">High Quality</div>
                        <div className="text-[8px] sm:text-[10px] text-gray-500">320kbps MP3/WAV</div>
                      </div>
                    </div>
                    <div className="flex items-center text-[10px] sm:text-xs text-gray-700 w-full sm:w-auto mb-1.5 sm:mb-0">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 bg-white rounded-full flex items-center justify-center mr-1.5 sm:mr-2 shadow-sm">
                        <FiActivity className="text-primary-600" size={12} />
                      </div>
                      <div>
                        <div className="font-medium">AI Model</div>
                        <div className="text-[8px] sm:text-[10px] text-gray-500">Advanced Separation</div>
                      </div>
                    </div>
                    <div className="flex items-center text-[10px] sm:text-xs text-gray-700 w-full sm:w-auto">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 bg-white rounded-full flex items-center justify-center mr-1.5 sm:mr-2 shadow-sm">
                        <FiMusic className="text-primary-600" size={12} />
                      </div>
                      <div>
                        <div className="font-medium">4 Stems</div>
                        <div className="text-[8px] sm:text-[10px] text-gray-500">Individual Tracks</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom progress bar with enhanced styling */}
                  <div className="mt-1 sm:mt-auto min-h-[32px]">
                    <div className="flex justify-between items-center mb-0.5 sm:mb-1 truncate">
                      <span className="text-[9px] sm:text-[10px] font-medium text-gray-700 truncate">Processing Track</span>
                      <span className="text-[9px] sm:text-[10px] text-primary-600 font-medium whitespace-nowrap ml-1">67% Complete</span>
                    </div>
                    <div className="h-1.5 sm:h-2 md:h-2.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                      <div className="h-full bg-gradient-to-r from-primary-500 to-primary-600 w-2/3 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex justify-between text-[7px] sm:text-[8px] md:text-[10px] text-gray-500 mt-0.5 sm:mt-1">
                      <span>0:00</span>
                      <span>1:30</span>
                      <span>3:42</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add animation keyframes */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.85); }
        }
      `}</style>
    </section>
  )
}