'use client'

import { useState, useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUpload, FiMusic, FiVideo, FiCheckCircle, FiAlertCircle, FiSettings, FiFileText, FiDownload } from 'react-icons/fi'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import axios from 'axios'
import { motion } from 'framer-motion'

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadError, setUploadError] = useState('')
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [selectedModel, setSelectedModel] = useState('standard')
  const [processingStatus, setProcessingStatus] = useState<string | null>(null)
  const [processingProgress, setProcessingProgress] = useState(0)
  const [outputFiles, setOutputFiles] = useState<Array<{name: string, url: string}>>([])
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0])
      setUploadError('')
      // Reset states when a new file is uploaded
      setUploadSuccess(false)
      setProcessingStatus(null)
      setOutputFiles([])
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'audio/*': ['.mp3', '.wav', '.flac'],
      'video/*': ['.mp4', '.avi', '.mov', '.webm']
    },
    maxSize: 100 * 1024 * 1024, // 100MB
    multiple: false
  })

  // Simulate processing status updates with WebSocket (in a real app)
  useEffect(() => {
    if (uploadSuccess && !processingStatus) {
      setProcessingStatus('queued')
      
      // Simulate processing progress updates
      const timer = setTimeout(() => {
        setProcessingStatus('processing')
        
        let progress = 0
        const interval = setInterval(() => {
          progress += Math.random() * 5
          if (progress >= 100) {
            progress = 100
            clearInterval(interval)
            setProcessingStatus('completed')
            
            // Simulate generated output files
            setOutputFiles([
              { name: 'vocals.mp3', url: '#' },
              { name: 'instruments.mp3', url: '#' },
              { name: 'drums.mp3', url: '#' },
              { name: 'bass.mp3', url: '#' }
            ])
          }
          setProcessingProgress(Math.min(Math.round(progress), 100))
        }, 1000)
        
        return () => clearInterval(interval)
      }, 1500)
      
      return () => clearTimeout(timer)
    }
  }, [uploadSuccess, processingStatus])

  const handleUpload = async () => {
    if (!file) {
      setUploadError('Please select a file first')
      return
    }

    setIsUploading(true)
    setUploadProgress(0)
    setUploadError('')
    setUploadSuccess(false)
    setProcessingStatus(null)
    setOutputFiles([])

    const formData = new FormData()
    formData.append('file', file)
    formData.append('model', selectedModel)

    try {
      // Add additional options if advanced settings are enabled
      if (showAdvancedOptions) {
        formData.append('highQuality', 'true')
        formData.append('enhanceBass', 'true')
      }

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 1))
          setUploadProgress(percentCompleted)
        }
      })

      console.log('Upload response:', response.data)
      setUploadSuccess(true)
    } catch (error) {
      console.error('Upload error:', error)
      setUploadError('Failed to upload file. Please try again.')
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-center mb-2">Upload Your Audio or Video</h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Extract vocals, instruments, drums, and bass from your music files using advanced AI models
        </p>

        <div className="max-w-3xl mx-auto">
          {/* Processing Steps */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div className={`flex flex-col items-center ${file ? 'text-primary-600' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 flex items-center justify-center rounded-full mb-2 ${file ? 'bg-primary-100' : 'bg-gray-200'}`}>
                  <FiUpload className="text-lg" />
                </div>
                <span className="text-xs font-medium">Upload</span>
              </div>
              
              <div className="flex-1 h-1 mx-2 bg-gray-200">
                <div className={`h-full ${uploadSuccess ? 'bg-primary-600' : 'bg-gray-200'}`}></div>
              </div>
              
              <div className={`flex flex-col items-center ${processingStatus ? 'text-primary-600' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 flex items-center justify-center rounded-full mb-2 ${processingStatus ? 'bg-primary-100' : 'bg-gray-200'}`}>
                  <FiSettings className="text-lg" />
                </div>
                <span className="text-xs font-medium">Process</span>
              </div>
              
              <div className="flex-1 h-1 mx-2 bg-gray-200">
                <div className={`h-full ${processingStatus === 'completed' ? 'bg-primary-600' : 'bg-gray-200'}`}></div>
              </div>
              
              <div className={`flex flex-col items-center ${outputFiles.length > 0 ? 'text-primary-600' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 flex items-center justify-center rounded-full mb-2 ${outputFiles.length > 0 ? 'bg-primary-100' : 'bg-gray-200'}`}>
                  <FiDownload className="text-lg" />
                </div>
                <span className="text-xs font-medium">Download</span>
              </div>
            </div>
          </div>

          {/* File Upload */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="card mb-8"
          >
            <div 
              {...getRootProps()} 
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
                ${isDragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-400'}`}
            >
              <input {...getInputProps()} />
              
              <div className="flex flex-col items-center">
                {!file ? (
                  <>
                    <FiUpload className="text-4xl text-gray-400 mb-4" />
                    <p className="text-lg mb-2">Drag & drop your audio or video file here</p>
                    <p className="text-sm text-gray-500">or click to browse files</p>
                    <p className="mt-4 text-xs text-gray-400">Supports MP3, WAV, FLAC, MP4, AVI, MOV, WEBM (max 100MB)</p>
                  </>
                ) : (
                  <>
                    {file.type.startsWith('audio/') ? (
                      <FiMusic className="text-4xl text-primary-500 mb-4" />
                    ) : (
                      <FiVideo className="text-4xl text-primary-500 mb-4" />
                    )}
                    <p className="text-lg mb-2 font-medium">{file.name}</p>
                    <p className="text-sm text-gray-500">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        setFile(null)
                      }}
                      className="mt-4 text-xs text-primary-600 hover:text-primary-800"
                    >
                      Remove file and select another
                    </button>
                  </>
                )}
              </div>
            </div>

            {uploadError && (
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-red-50 text-red-700 rounded-md flex items-center"
              >
                <FiAlertCircle className="mr-2" />
                {uploadError}
              </motion.div>
            )}

            {uploadSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-green-50 text-green-700 rounded-md flex items-center"
              >
                <FiCheckCircle className="mr-2" />
                File uploaded successfully!
              </motion.div>
            )}
          </motion.div>

          {/* Model Selection */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="card mb-8"
          >
            <h2 className="mb-4">Select Separation Model</h2>
            
            <div className="grid gap-3 mb-6">
              <div className={`border rounded-lg p-4 cursor-pointer transition-colors ${selectedModel === 'standard' ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-gray-300'}`}
                onClick={() => setSelectedModel('standard')}
              >
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="model-standard" 
                    name="model" 
                    value="standard"
                    checked={selectedModel === 'standard'}
                    onChange={() => setSelectedModel('standard')}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                  />
                  <label htmlFor="model-standard" className="ml-3 font-medium text-gray-700 cursor-pointer">
                    Standard Separator
                  </label>
                  <span className="ml-auto badge badge-primary">Free</span>
                </div>
                <p className="text-sm text-gray-500 mt-2 ml-7">4-stem separation (vocals, drums, bass, other) with good quality</p>
              </div>
              
              <div className={`border rounded-lg p-4 cursor-pointer transition-colors ${selectedModel === 'advanced' ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-gray-300'}`}
                onClick={() => setSelectedModel('advanced')}
              >
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="model-advanced" 
                    name="model" 
                    value="advanced"
                    checked={selectedModel === 'advanced'}
                    onChange={() => setSelectedModel('advanced')}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                  />
                  <label htmlFor="model-advanced" className="ml-3 font-medium text-gray-700 cursor-pointer">
                    Advanced Separator
                  </label>
                  <span className="ml-auto badge badge-warning">Premium</span>
                </div>
                <p className="text-sm text-gray-500 mt-2 ml-7">Higher quality separation with enhanced vocal isolation and clarity</p>
              </div>
              
              <div className={`border rounded-lg p-4 cursor-pointer transition-colors ${selectedModel === 'professional' ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-gray-300'}`}
                onClick={() => setSelectedModel('professional')}
              >
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="model-professional" 
                    name="model" 
                    value="professional"
                    checked={selectedModel === 'professional'}
                    onChange={() => setSelectedModel('professional')}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                  />
                  <label htmlFor="model-professional" className="ml-3 font-medium text-gray-700 cursor-pointer">
                    Professional Suite
                  </label>
                  <span className="ml-auto badge badge-danger">Enterprise</span>
                </div>
                <p className="text-sm text-gray-500 mt-2 ml-7">Multi-stem separation with studio-quality results and customizable options</p>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <button 
                type="button"
                onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
                className="text-sm text-primary-600 hover:text-primary-800 flex items-center"
              >
                {showAdvancedOptions ? 'Hide' : 'Show'} advanced options
                <svg className={`ml-1 h-5 w-5 transform transition-transform ${showAdvancedOptions ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showAdvancedOptions && (
                <div className="mt-4 grid gap-3">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="high-quality" 
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 rounded"
                    />
                    <label htmlFor="high-quality" className="ml-3 text-sm text-gray-700">
                      High Quality Processing <span className="text-xs text-gray-500">(Takes longer)</span>
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="enhance-vocals" 
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 rounded"
                    />
                    <label htmlFor="enhance-vocals" className="ml-3 text-sm text-gray-700">
                      Enhance Vocals
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="enhance-bass" 
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 rounded"
                    />
                    <label htmlFor="enhance-bass" className="ml-3 text-sm text-gray-700">
                      Enhance Bass
                    </label>
                  </div>
                  
                  <div className="input-group">
                    <label htmlFor="output-format" className="input-label">Output Format</label>
                    <select 
                      id="output-format" 
                      className="input"
                    >
                      <option value="mp3">MP3 (Compressed)</option>
                      <option value="wav">WAV (Lossless)</option>
                      <option value="flac">FLAC (High-quality)</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Upload Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            onClick={handleUpload}
            disabled={!file || isUploading || uploadSuccess}
            className={`w-full py-3 rounded-md font-medium transition-colors ${!file || isUploading || uploadSuccess ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'btn btn-primary'}`}
          >
            {isUploading ? 'Uploading...' : uploadSuccess ? 'Uploaded Successfully' : 'Start Processing'}
          </motion.button>

          {/* Upload Progress */}
          {isUploading && (
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4"
            >
              <div className="progress-bar">
                <div className="progress-bar-value" style={{ width: `${uploadProgress}%` }}></div>
              </div>
              <p className="text-center text-sm mt-2">{uploadProgress}% uploaded</p>
            </motion.div>
          )}
          
          {/* Processing Status */}
          {processingStatus && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8 card"
            >
              <h3 className="mb-4">Processing Status</h3>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    {processingStatus === 'queued' && 'In Queue...'}
                    {processingStatus === 'processing' && 'Processing...'}
                    {processingStatus === 'completed' && 'Processing Complete!'}
                  </span>
                  <span className="text-sm font-medium text-gray-700">{processingProgress}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className={`progress-bar-value ${processingStatus === 'completed' ? 'bg-green-600' : ''}`} 
                    style={{ width: `${processingProgress}%` }}
                  ></div>
                </div>
              </div>
              
              {processingStatus === 'queued' && (
                <p className="text-sm text-gray-600">Your file is in the processing queue. We'll start working on it shortly.</p>
              )}
              
              {processingStatus === 'processing' && (
                <p className="text-sm text-gray-600">We're separating your audio tracks. This may take a few minutes depending on file length.</p>
              )}
              
              {processingStatus === 'completed' && (
                <div>
                  <p className="text-sm text-gray-600 mb-4">Your audio has been successfully separated! Download the individual tracks below.</p>
                  
                  <div className="space-y-3">
                    {outputFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                        <div className="flex items-center">
                          <FiFileText className="text-gray-500 mr-3" />
                          <span>{file.name}</span>
                        </div>
                        <a 
                          href={file.url} 
                          download={file.name}
                          className="btn btn-primary py-1 px-3 text-sm flex items-center"
                        >
                          <FiDownload className="mr-1" /> Download
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}