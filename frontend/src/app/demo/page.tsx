'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { FiDownload, FiPlay, FiPause, FiVolume2, FiVolumeX, FiClock, FiSettings } from 'react-icons/fi'

export default function DemoPage() {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [showRateOptions, setShowRateOptions] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  
  const demoTracks = [
    {
      id: 'demo1',
      title: 'Pop Song',
      artist: 'Demo Artist',
      duration: '3:42',
      image: '/images/demo-pop.jpg',
      audio: '/audio/demo-pop.mp3',
      separated: {
        vocals: '/audio/demo-pop-vocals.mp3',
        instruments: '/audio/demo-pop-instruments.mp3',
        bass: '/audio/demo-pop-bass.mp3',
        drums: '/audio/demo-pop-drums.mp3'
      }
    },
    {
      id: 'demo2',
      title: 'Rock Anthem',
      artist: 'Rock Band',
      duration: '4:15',
      image: '/images/demo-rock.jpg',
      audio: '/audio/demo-rock.mp3',
      separated: {
        vocals: '/audio/demo-rock-vocals.mp3',
        instruments: '/audio/demo-rock-instruments.mp3',
        bass: '/audio/demo-rock-bass.mp3',
        drums: '/audio/demo-rock-drums.mp3'
      }
    }
  ]
  
  const handlePlay = (trackId: string, stemType: string = 'original') => {
    const track = demoTracks.find(t => t.id === trackId)
    if (!track) return
    
    setSelectedTrack(trackId)
    
    if (audioRef.current) {
      if (stemType === 'original') {
        audioRef.current.src = track.audio
      } else {
        audioRef.current.src = track.separated[stemType as keyof typeof track.separated] as string
      }
      
      audioRef.current.play()
      setIsPlaying(true)
    }
  }
  
  // Update audio time
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    
    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    
    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    
    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
    }
  }, [selectedTrack])
  
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }
  
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    
    if (audioRef.current) {
      audioRef.current.volume = newVolume
      setIsMuted(newVolume === 0)
    }
  }
  
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(e.target.value)
    setCurrentTime(seekTime)
    
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime
    }
  }
  
  const changePlaybackRate = (rate: number) => {
    setPlaybackRate(rate)
    if (audioRef.current) {
      audioRef.current.playbackRate = rate
    }
    setShowRateOptions(false)
  }
  
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Audio Separation Demo</h1>
      
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden mb-10">
        <div className="p-6">
          <p className="text-lg mb-6">
            Listen to pre-separated audio tracks to hear the power of our AI audio separation technology. 
            Select any track below and toggle between the original mix and isolated stems.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-3">
            <Link 
              href="/upload" 
              className="btn btn-primary w-full md:w-auto text-center"
            >
              Try with Your Own Audio
            </Link>
            <Link 
              href="/pricing" 
              className="btn btn-secondary w-full md:w-auto text-center"
            >
              See Pricing Plans
            </Link>
          </div>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {demoTracks.map((track) => (
          <div key={track.id} className="card border border-gray-100 hover:border-primary-200">
            <div className="flex gap-4">
              <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0">
                {/* Placeholder for track image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  {track.title.substring(0, 1)}
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">{track.title}</h3>
                <p className="text-gray-600 mb-2">{track.artist}</p>
                <p className="text-sm text-gray-500 mb-4">Duration: {track.duration}</p>
                
                <div className="flex flex-wrap gap-2">
                  <button 
                    onClick={() => handlePlay(track.id, 'original')}
                    className="btn btn-sm btn-primary"
                  >
                    Original
                  </button>
                  <button 
                    onClick={() => handlePlay(track.id, 'vocals')}
                    className="btn btn-sm btn-secondary"
                  >
                    Vocals
                  </button>
                  <button 
                    onClick={() => handlePlay(track.id, 'instruments')}
                    className="btn btn-sm btn-secondary"
                  >
                    Instruments
                  </button>
                  <button 
                    onClick={() => handlePlay(track.id, 'bass')}
                    className="btn btn-sm btn-secondary"
                  >
                    Bass
                  </button>
                  <button 
                    onClick={() => handlePlay(track.id, 'drums')}
                    className="btn btn-sm btn-secondary"
                  >
                    Drums
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Audio player controls */}
      {selectedTrack && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 shadow-lg">
          <div className="container mx-auto">
            {/* Progress bar */}
            <div className="mb-2 px-2">
              <input
                type="range"
                min={0}
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button 
                  onClick={togglePlayPause}
                  className="mr-3 p-2 rounded-full bg-primary-100 text-primary-700 hover:bg-primary-200"
                >
                  {isPlaying ? <FiPause size={20} /> : <FiPlay size={20} />}
                </button>
                
                <div className="flex items-center mr-4">
                  <button 
                    onClick={toggleMute}
                    className="mr-2 p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                  >
                    {isMuted ? <FiVolumeX size={18} /> : <FiVolume2 size={18} />}
                  </button>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-20 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                <div className="relative mr-4">
                  <button 
                    onClick={() => setShowRateOptions(!showRateOptions)}
                    className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center"
                  >
                    <FiSettings size={16} />
                    <span className="ml-1 text-xs">{playbackRate}x</span>
                  </button>
                  
                  {showRateOptions && (
                    <div className="absolute bottom-full mb-2 bg-white shadow-md rounded-md p-1 z-10">
                      {[0.5, 0.75, 1, 1.25, 1.5, 2].map(rate => (
                        <button
                          key={rate}
                          onClick={() => changePlaybackRate(rate)}
                          className={`block w-full text-left px-3 py-1 text-sm rounded ${playbackRate === rate ? 'bg-primary-50 text-primary-700' : 'hover:bg-gray-100'}`}
                        >
                          {rate}x
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                <div>
                  <p className="font-medium">
                    {demoTracks.find(t => t.id === selectedTrack)?.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {demoTracks.find(t => t.id === selectedTrack)?.artist}
                  </p>
                </div>
              </div>
              
              <button className="btn btn-sm btn-secondary flex items-center">
                <FiDownload className="mr-1" /> Download
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Hidden audio element */}
      <audio 
        ref={audioRef} 
        onEnded={() => setIsPlaying(false)}
        className="hidden"
      />
      
      {/* Add small button styles */}
      <style jsx global>{`
        .btn-sm {
          @apply px-3 py-1 text-sm;
        }
      `}</style>
    </div>
  )
} 