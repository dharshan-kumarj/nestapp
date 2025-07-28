interface CardProps {
  title: string;
  description: string;
  icon?: string;
}

export function WelcomeCard({ title, description, icon = "🚀" }: CardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 m-4 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3">{icon}</span>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h2>
      </div>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export function FeatureList() {
  const features = [
    {
      title: "Fast Refresh",
      description: "Experience instant feedback with Next.js Fast Refresh for a seamless development experience.",
      icon: "⚡"
    },
    {
      title: "TypeScript Support",
      description: "Built-in TypeScript support for better development experience and type safety.",
      icon: "📝"
    },
    {
      title: "Optimized Performance",
      description: "Automatic optimizations including image optimization, code splitting, and more.",
      icon: "🏆"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
      {features.map((feature, index) => (
        <WelcomeCard
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </div>
  );
}

export default WelcomeCard;