# Audio Separator

A web application for separating audio and video into individual components (vocals, instruments, bass, drums, etc.) using AI technology.

## Features

- **Audio/Video Upload**: Support for various audio and video formats
- **AI-Powered Separation**: Multiple AI models for high-quality audio separation
- **Real-time Processing**: Cloud-based processing with progress tracking
- **Multiple Output Formats**: Download separated tracks in MP3, WAV, or FLAC
- **Video Support**: Extract and process audio directly from video files

## Project Structure

The project consists of two main parts:

- **Frontend**: Next.js with React, TailwindCSS and TypeScript
- **Backend**: Node.js with Express.js, Multer for file handling, and Bull for queue management

```
audio-separator/
├── frontend/            # Next.js frontend application
│   ├── src/             # Source code
│   │   ├── app/         # Next.js App Router
│   │   ├── components/  # React components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility libraries
│   │   └── utils/       # Helper functions
│   └── public/          # Static assets
│
├── backend/             # Node.js backend application
│   ├── controllers/     # Request handlers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── utils/           # Helper functions
│   └── config/          # Configuration files
```

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- MongoDB (for user data and processing history)
- Redis (for task queue)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/audio-separator.git
   cd audio-separator
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Create a `.env` file in the backend directory:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/audio-separator
   REDIS_URL=redis://localhost:6379
   NODE_ENV=development
   STORAGE_PATH=./uploads
   ```

5. Create a `.env.local` file in the frontend directory:
   ```
   API_URL=http://localhost:5000
   ```

### Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Deployment

### Backend Deployment

The backend can be deployed on services like:
- DigitalOcean
- AWS EC2
- Heroku

### Frontend Deployment

The Next.js frontend can be deployed on:
- Vercel (recommended)
- Netlify
- AWS Amplify

## Future Enhancements

- User authentication and history
- More separation models
- Batch processing
- Audio enhancement features
- Mobile applications

## License

[MIT](LICENSE)

## Acknowledgements

- [Demucs](https://github.com/facebookresearch/demucs) - Music source separation library
- [MDX-Net](https://github.com/kuielab/mdx-net) - Music demixing network
- Next.js, React, and other open-source libraries used in this project