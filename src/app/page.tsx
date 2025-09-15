import FileUpload from '@/components/FileUpload';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            File Upload App
          </h1>
          <p className="text-lg text-gray-600">
            Select a file and upload it to our service
          </p>
        </div>
        
        <FileUpload />
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Files are uploaded to{' '}
            <a 
              href="https://fakeapi.platzi.com/en/rest/files/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Platzi Fake API
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
