import React, { useState } from 'react'
import Footer from '../commonComponents/Footer/Footer'
import AllArticleCard from './AllArticles'
import FeaturedArticleCard from './FeaturedArticles'
import ResourcesHero from './ResourcesHero'

function Resources() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const categories = [
    { name: "All Posts", count: 5, active: true },
    { name: "Startup Guide", count: 1 },
    { name: "Tax Compliance", count: 2 },
    { name: "Business Finance", count: 1 },
    { name: "Legal Requirements", count: 1 }
  ]

  const downloads = [
    {
      title: "Business Registration Checklist",
      description: "Complete checklist for company registration with required documents.",
      type: "PDF Download",
      icon: "B",
      color: "bg-green-500"
    },
    {
      title: "GST Rate Chart 2024",
      description: "Updated GST rates for all products and services.",
      type: "PDF Download",
      icon: "G",
      color: "bg-blue-500"
    },
    {
      title: "Tax Calendar 2024",
      description: "Important tax filing dates and deadlines.",
      type: "PDF Download",
      icon: "T",
      color: "bg-purple-500"
    },
    {
      title: "Startup Financial Template",
      description: "Financial planning and projections template.",
      type: "Excel Download",
      icon: "S",
      color: "bg-orange-500"
    }
  ]

  return (
    <>
      <ResourcesHero />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6 lg:py-8">
          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md border border-gray-200 w-full sm:w-auto"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span className="font-medium">Filters & Downloads</span>
              <svg className={`w-4 h-4 transition-transform ${sidebarOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            {/* Sidebar - Mobile Collapsible, Desktop Fixed */}
            <div className={`lg:w-64 lg:flex-shrink-0 ${sidebarOpen ? 'block' : 'hidden lg:block'}`}>
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-4 lg:mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className={`flex items-center justify-between p-2 rounded-md transition-colors ${
                          category.active
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span className="text-sm sm:text-base">{category.name}</span>
                        <span className={`text-xs sm:text-sm ${category.active ? 'text-blue-200' : 'text-gray-500'}`}>
                          ({category.count})
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Free Downloads */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Free Downloads</h3>
                <div className="space-y-3 sm:space-y-4">
                  {downloads.map((download, index) => (
                    <div key={index} className="flex items-start gap-3 border border-gray-200 rounded-lg p-3 sm:p-4">
                      <div className={`w-8 h-8 ${download.color} rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0`}>
                        {download.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs sm:text-sm font-medium text-gray-900 mb-1 leading-tight">{download.title}</h4>
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2">{download.description}</p>
                        <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                          {download.type}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Featured Articles */}
              <div className="mb-8 lg:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <FeaturedArticleCard
                    category="Startup Guide"
                    readTime="8 min read"
                    title="Complete Startup Checklist 2024: Don't Miss These 15 Essential Steps"
                    description="A comprehensive guide covering all legal, financial, and operational requirements for starting your business in India."
                    date="1/15/2024"
                    categoryColor="bg-green-500"
                  />
                  <FeaturedArticleCard
                    category="Tax Compliance"
                    readTime="5 min read"
                    title="GST Filing Deadlines 2024: Complete Calendar for Businesses"
                    description="Never miss a GST deadline again with our comprehensive filing calendar and automated reminder system."
                    date="1/10/2024"
                    categoryColor="bg-blue-500"
                  />
                </div>
              </div>

              {/* All Articles */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">All Articles</h2>
                <div className="space-y-4 sm:space-y-6">
                  <AllArticleCard
                    category="Startup Guide"
                    readTime="8 min read"
                    title="Complete Startup Checklist 2024: Don't Miss These 15 Essential Steps"
                    description="A comprehensive guide covering all legal, financial, and operational requirements for starting your business in India."
                    date="01/15/2024"
                    tags={["Company Registration", "GST", "Legal Requirements"]}
                    categoryColor="bg-green-500"
                  />
                  <AllArticleCard
                    category="Tax Compliance"
                    readTime="5 min read"
                    title="GST Filing Deadlines 2024: Complete Calendar for Businesses"
                    description="Never miss a GST deadline again with our comprehensive filing calendar and automated reminder system."
                    date="01/10/2024"
                    tags={["GST", "Tax Filing", "Compliance"]}
                    categoryColor="bg-blue-500"
                  />
                  <AllArticleCard
                    category="Tax Compliance"
                    readTime="6 min read"
                    title="Top 10 Tax Saving Tips for Small Businesses in India"
                    description="Maximize your tax savings with these essential tips tailored for small businesses in India."
                    date="01/05/2024"
                    tags={["Tax Saving", "Business Finance", "Planning"]}
                    categoryColor="bg-blue-500"
                  />
                  <AllArticleCard
                    category="Tax Compliance"
                    readTime="5 min read"
                    title="GST Filing Deadlines 2024: Complete Calendar for Businesses"
                    description="Never miss a GST deadline again with our comprehensive filing calendar and automated reminder system."
                    date="01/10/2024"
                    tags={["GST", "Tax Filing", "Compliance"]}
                    categoryColor="bg-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Resources