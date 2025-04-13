import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { FiCheck, FiX } from "react-icons/fi"

export default function PricingPage() {
  const plans = [
    {
      id: "free",
      name: "Free",
      description: "Perfect for casual users who want to try out audio separation",
      price: "$0",
      period: "forever",
      features: [
        { title: "5 separations per month", included: true },
        { title: "Standard separation model", included: true },
        { title: "Files up to 10 minutes", included: true },
        { title: "MP3 output format", included: true },
        { title: "Email support", included: false },
        { title: "Advanced separation models", included: false },
        { title: "Priority processing", included: false },
        { title: "API access", included: false },
      ],
      cta: "Get Started Free",
      highlight: false
    },
    {
      id: "premium",
      name: "Premium",
      description: "For musicians and content creators who need higher quality separations",
      price: "$9.99",
      period: "month",
      features: [
        { title: "30 separations per month", included: true },
        { title: "All separation models", included: true },
        { title: "Files up to 30 minutes", included: true },
        { title: "MP3, WAV, FLAC formats", included: true },
        { title: "Email support", included: true },
        { title: "Advanced separation models", included: true },
        { title: "Priority processing", included: false },
        { title: "API access", included: false },
      ],
      cta: "Start Premium Plan",
      highlight: true
    },
    {
      id: "professional",
      name: "Professional",
      description: "For studios and professionals requiring the highest quality",
      price: "$29.99",
      period: "month",
      features: [
        { title: "Unlimited separations", included: true },
        { title: "All separation models", included: true },
        { title: "Files up to 2 hours", included: true },
        { title: "All output formats", included: true },
        { title: "Priority email support", included: true },
        { title: "Advanced separation models", included: true },
        { title: "Priority processing", included: true },
        { title: "API access", included: true },
      ],
      cta: "Start Pro Plan",
      highlight: false
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-28">
        <h1 className="text-center text-4xl font-bold mb-2">Simple, Transparent Pricing</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose the plan that works best for your audio separation needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`card border hover:shadow-xl transition-all relative ${
                plan.highlight 
                  ? 'border-primary-500 shadow-lg scale-105 md:scale-110 z-10' 
                  : 'border-gray-200'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-primary-500 text-white py-1 px-4 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-center mb-1">{plan.name}</h2>
                <p className="text-gray-600 text-center text-sm mb-6 h-12">{plan.description}</p>
                
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 text-sm">/{plan.period}</span>
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      {feature.included ? (
                        <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      ) : (
                        <FiX className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.title}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href={`/signup?plan=${plan.id}`}
                  className={`w-full py-3 text-center block font-medium rounded-md transition-colors ${
                    plan.highlight 
                      ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <h3 className="font-semibold">Can I switch plans later?</h3>
              <p className="text-sm text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of your next billing cycle.</p>
            </div>
            
            <div className="space-y-1">
              <h3 className="font-semibold">What payment methods do you accept?</h3>
              <p className="text-sm text-gray-600">We accept all major credit cards, PayPal, and Apple Pay.</p>
            </div>
            
            <div className="space-y-1">
              <h3 className="font-semibold">Is there a free trial?</h3>
              <p className="text-sm text-gray-600">The Free plan allows you to try our services with no time limit. Premium and Professional plans have a 7-day free trial.</p>
            </div>
            
            <div className="space-y-1">
              <h3 className="font-semibold">What happens if I exceed my monthly separations?</h3>
              <p className="text-sm text-gray-600">You can purchase additional separations or upgrade to a higher plan to continue using the service.</p>
            </div>
            
            <div className="space-y-1">
              <h3 className="font-semibold">Do you offer refunds?</h3>
              <p className="text-sm text-gray-600">Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.</p>
            </div>
            
            <div className="space-y-1">
              <h3 className="font-semibold">Do you have discounts for annual billing?</h3>
              <p className="text-sm text-gray-600">Yes, you can save 20% by choosing annual billing for any paid plan.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-primary-50 rounded-xl p-8 shadow-sm border border-primary-100 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Enterprise Plan?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            For large organizations with specific needs, we offer custom enterprise plans with 
            dedicated support, custom models, and volume discounts.
          </p>
          <Link href="/contact" className="btn btn-primary px-6 py-2">
            Contact for Enterprise Options
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
} 