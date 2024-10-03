'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, ArrowRight, Search, Briefcase, Brain, Database, BarChart, Gift, FileText } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "Oz Quotes made it so easy to get multiple quotes for my solar panel installation. Saved me time and money!"
  },
  {
    name: "Michael Lee",
    rating: 4,
    text: "Great service! I got competitive quotes for my home battery system within hours."
  },
  {
    name: "Emma Wilson",
    rating: 5,
    text: "The referral program is fantastic. I saved 10% on my heat pump installation by referring friends!"
  }
]

const features = [
  {
    icon: <Gift className="w-12 h-12 text-primary" />,
    title: "Rewards for Information",
    description: "The more details you provide, the better your quotes. We reward your thoroughness with exclusive discounts and priority service."
  },
  {
    icon: <Brain className="w-12 h-12 text-primary" />,
    title: "AI-Powered Insights",
    description: "Our state-of-the-art AI analyzes thousands of quotes to provide you with the most accurate and competitive pricing."
  },
  {
    icon: <Database className="w-12 h-12 text-primary" />,
    title: "Comprehensive Database",
    description: "Access a vast database of quotes from top-rated providers, ensuring you get the best options for your energy upgrade needs."
  },
  {
    icon: <BarChart className="w-12 h-12 text-primary" />,
    title: "Advanced Analytics",
    description: "Benefit from our detailed analytics that help you understand market trends and make informed decisions."
  }
]

export function LandingPageComponent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl font-bold text-gray-900">Oz Quotes</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Get Fair Quotes, Hassle-Free!</h2>
          <p className="text-xl text-gray-600 mb-8">Oz Quotes connects you with top-rated energy upgrade providers in your area.</p>
          <div className="flex flex-col justify-center items-center gap-4 max-w-md mx-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isVisible ? 1 : 0.8, opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Link href="/quotes-form" className="w-full block">
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                  I need quotes now! <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isVisible ? 1 : 0.8, opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full"
            >
              <Link href="/search-quotes" className="w-full block">
                <Button size="lg" variant="outline" className="w-full bg-white hover:bg-gray-100 text-primary font-bold py-3 px-6 rounded-full text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                  Search Our Quote Database <Search className="ml-2" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isVisible ? 1 : 0.8, opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full"
            >
              <Link href="/business-solutions" className="w-full block">
                <Button size="lg" variant="outline" className="w-full bg-white hover:bg-gray-100 text-primary font-bold py-3 px-6 rounded-full text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                  Learn How We Can Help Your Business <Briefcase className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About Us</h3>
          <div className="space-y-4 text-gray-600">
            <p>
              Oz Quotes is your trusted partner in finding the best energy upgrade solutions for your home. 
              We simplify the process of getting multiple quotes from verified providers, ensuring you get 
              the best value for your investment. Our platform covers a wide range of energy upgrades, 
              including solar panels, heat pumps, home batteries, and more.
            </p>
            <p>
              What sets us apart is our commitment to transparency. Upon request, we provide a detailed 
              report that shows which companies viewed your opportunity and offers further insights into 
              the quoting process. This level of transparency is something other platforms won't offer, 
              giving you complete visibility and control over your energy upgrade journey.
            </p>
            <div className="flex items-center mt-4 p-4 bg-primary/10 rounded-lg">
              <FileText className="w-8 h-8 text-primary mr-4" />
              <p className="text-sm">
                <span className="font-semibold">Full Transparency Report:</span> See which companies are interested in your project and gain valuable insights into the competitive landscape.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">What Makes Us Different</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  {feature.icon}
                  <h4 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What Our Customers Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 Oz Quotes. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}