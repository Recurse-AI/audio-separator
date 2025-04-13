import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { FiCopy, FiCode, FiDownload, FiServer, FiKey, FiShield } from "react-icons/fi"

export default function ApiPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
          <p className="text-gray-600 mb-8">
            Integrate audio separation capabilities directly into your applications with our simple REST API
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/pricing"
              className="btn btn-primary px-6 py-2 flex items-center"
            >
              <FiKey className="mr-2" /> Get API Key
            </Link>
            <Link 
              href="/docs/api-reference"
              className="btn btn-secondary px-6 py-2 flex items-center"
            >
              <FiCode className="mr-2" /> Full API Reference
            </Link>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="card">
            <div className="flex items-center mb-4 text-primary-600">
              <FiServer className="mr-3 text-xl" />
              <h2 className="text-lg font-semibold">Powerful Endpoints</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Access our audio separation technology through simple REST endpoints for processing,
              status checking, and file management.
            </p>
          </div>
          
          <div className="card">
            <div className="flex items-center mb-4 text-primary-600">
              <FiShield className="mr-3 text-xl" />
              <h2 className="text-lg font-semibold">Secure Authentication</h2>
            </div>
            <p className="text-gray-600 text-sm">
              API keys and secure token-based authentication ensure your data
              and separations remain private and protected.
            </p>
          </div>
          
          <div className="card">
            <div className="flex items-center mb-4 text-primary-600">
              <FiDownload className="mr-3 text-xl" />
              <h2 className="text-lg font-semibold">Flexible Results</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Retrieve separation results in multiple formats with customizable
              quality settings based on your application needs.
            </p>
          </div>
        </div>

        {/* Code Example */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Quick Start Example</h2>
          
          <div className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg">
            <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
              <div className="text-sm font-medium">Separate audio with the API</div>
              <button className="text-gray-400 hover:text-white">
                <FiCopy />
              </button>
            </div>
            
            <pre className="p-4 overflow-x-auto text-sm" style={{ fontFamily: "monospace" }}>
              <code>{`// Upload file and start separation
const form = new FormData();
form.append('file', audioFile);
form.append('model', 'standard'); // or 'advanced', 'professional'

const response = await fetch('https://api.audioseparator.com/v1/separate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: form
});

const data = await response.json();
const jobId = data.job_id;

// Check separation status
const statusResponse = await fetch(\`https://api.audioseparator.com/v1/status/\${jobId}\`, {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});

const statusData = await statusResponse.json();
console.log(\`Separation status: \${statusData.status}\`); // 'queued', 'processing', 'completed'

// Download results when completed
if (statusData.status === 'completed') {
  const tracks = statusData.tracks; // Array of separated track URLs
  
  // Download vocals track
  const vocalsTrack = tracks.find(track => track.name === 'vocals');
  if (vocalsTrack) {
    window.location.href = vocalsTrack.download_url;
  }
}`}</code>
            </pre>
          </div>
        </div>

        {/* Endpoints */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Main API Endpoints</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center">
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded mr-3">POST</span>
                <code className="font-mono text-sm">/v1/separate</code>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-3">
                  Upload an audio file and initiate the separation process.
                </p>
                <div className="text-xs text-gray-500">
                  <p className="font-medium mb-1">Parameters:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><code>file</code> - The audio file to process (MP3, WAV, FLAC, etc.)</li>
                    <li><code>model</code> - Separation model to use (standard, advanced, professional)</li>
                    <li><code>options</code> - Optional JSON string with additional settings</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center">
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded mr-3">GET</span>
                <code className="font-mono text-sm">/v1/status/{"{job_id}"}</code>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-3">
                  Check the status of a separation job and get results when completed.
                </p>
                <div className="text-xs text-gray-500">
                  <p className="font-medium mb-1">Response:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><code>status</code> - Current job status (queued, processing, completed, failed)</li>
                    <li><code>progress</code> - Numerical progress percentage (0-100)</li>
                    <li><code>tracks</code> - Array of separated track URLs (when completed)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center">
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded mr-3">GET</span>
                <code className="font-mono text-sm">/v1/tracks/{"{track_id}"}</code>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-3">
                  Download a specific separated track.
                </p>
                <div className="text-xs text-gray-500">
                  <p className="font-medium mb-1">Parameters:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><code>format</code> - Optional output format (mp3, wav, flac)</li>
                    <li><code>quality</code> - Optional quality setting for compressed formats</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Libraries */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Official Client Libraries</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-yellow-100 text-yellow-700 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-lg font-bold">JS</span>
                </div>
                <h3 className="font-semibold">JavaScript</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                A complete JavaScript client for Node.js and browser applications.
              </p>
              <code className="block bg-gray-100 p-2 rounded text-xs mb-4">npm install audio-separator-client</code>
              <Link href="/docs/js-client" className="text-primary-600 text-sm hover:underline flex items-center">
                View documentation <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </Link>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-lg font-bold">Py</span>
                </div>
                <h3 className="font-semibold">Python</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Python client with async support for backend and data processing applications.
              </p>
              <code className="block bg-gray-100 p-2 rounded text-xs mb-4">pip install audio-separator</code>
              <Link href="/docs/python-client" className="text-primary-600 text-sm hover:underline flex items-center">
                View documentation <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </Link>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-100 text-red-700 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-lg font-bold">PHP</span>
                </div>
                <h3 className="font-semibold">PHP</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                PHP client for server-side applications and content management systems.
              </p>
              <code className="block bg-gray-100 p-2 rounded text-xs mb-4">composer require audio-separator/client</code>
              <Link href="/docs/php-client" className="text-primary-600 text-sm hover:underline flex items-center">
                View documentation <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary-50 rounded-xl p-8 shadow-sm border border-primary-100 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Integrating?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Sign up for an API key and start incorporating audio separation into your applications today.
            All plans include API access with varying rate limits.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup" className="btn btn-primary px-6 py-2">
              Sign Up for API Access
            </Link>
            <Link href="/docs" className="btn btn-secondary px-6 py-2">
              View Full Documentation
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 