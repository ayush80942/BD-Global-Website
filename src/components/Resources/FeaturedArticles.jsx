import React from 'react'

const FeaturedArticleCard = ({ category, readTime, title, description, date, categoryColor = "bg-green-500" }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
      {/* Image/Icon section - responsive height */}
      <div className="h-24 sm:h-32 md:h-40 bg-gray-200 flex items-center justify-center">
        <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18.999 7.5 19s3.332-.522 4.5-1.247m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18.999 16.5 19s-3.332-.522-4.5-1.247m0 0V9.75a.75.75 0 011.5 0V19m-1.5 0h1.5m-1.5 0c0 1.105.895 2 2 2s2-.895 2-2m-3.5-2.25h1.5m-1.5 0h1.5"/>
        </svg>
      </div>
      
      {/* Content section - responsive padding */}
      <div className="p-4 sm:p-5 md:p-6">
        {/* Category and Read time - stack on very small screens */}
        <div className="flex flex-col xs:flex-row xs:items-center gap-2 mb-3">
          <span className={`${categoryColor} text-white text-xs px-2 py-1 rounded-full self-start`}>
            {category}
          </span>
          <span className="text-gray-500 text-xs sm:text-sm flex items-center gap-1">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12,6 12,12 16,14"/>
            </svg>
            {readTime}
          </span>
        </div>
        
        {/* Title - responsive text size */}
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 leading-tight">
          {title}
        </h3>
        
        {/* Description - responsive text size and line clamping */}
        <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>
        
        {/* Footer - stack on mobile, side by side on larger screens */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          {/* Date */}
          <span className="text-gray-500 text-xs sm:text-sm flex items-center gap-1 order-2 sm:order-1">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            {date}
          </span>
          
          {/* Button - full width on mobile */}
          <button className="bg-white border border-gray-300 text-gray-700 px-3 py-2 sm:px-4 rounded-md hover:bg-gray-50 flex items-center justify-center gap-2 w-full sm:w-auto transition-colors duration-200 order-1 sm:order-2">
            <span className="text-xs sm:text-sm font-medium">Read More</span>
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default FeaturedArticleCard;