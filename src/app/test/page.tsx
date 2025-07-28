import { WelcomeCard, FeatureList } from './components/components_1';
import { ApiTester } from './components/ApiTester';

export default function TestPage() {
  return (
    <div className="font-sans min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to Next.js
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            by Dharshan
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            This is the test page at /test showcasing custom components and API testing
          </p>
        </div>

        {/* API Testing Section */}
        <div className="mb-12">
          <ApiTester />
        </div>

        {/* Custom Component Usage */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-white">
            Custom Welcome Card Component
          </h2>
          <div className="flex justify-center">
            <WelcomeCard
              title="Hello from Dharshan!"
              description="This is a custom component created in components_1.tsx and imported into this test page. It demonstrates component reusability in Next.js!"
              icon="👋"
            />
          </div>
        </div>

        {/* Feature List Component */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-white">
            Next.js Features
          </h2>
          <div className="flex justify-center">
            <FeatureList />
          </div>
        </div>
      </div>
    </div>
  );
}
