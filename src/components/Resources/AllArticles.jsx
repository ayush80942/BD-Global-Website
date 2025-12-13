import React from 'react'

const AllArticleCard = ({ category, readTime, title, description, date, tags, categoryColor = "bg-green-500" }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
      {/* Mobile/Tablet: Stack vertically, Desktop: Side by side */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Icon/Image */}
        <div className="w-full h-32 sm:w-20 sm:h-20 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18.999 7.5 19s3.332-.522 4.5-1.247m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18.999 16.5 19s-3.332-.522-4.5-1.247m0 0V9.75a.75.75 0 011.5 0V19m-1.5 0h1.5m-1.5 0h1.5m-1.5 0c0 1.105.895 2 2 2s2-.895 2-2m-3.5-2.25h1.5m-1.5 0h1.5"/>
          </svg>
        </div>
        
        {/* Content */}
        <div className="flex-1">
          {/* Category, Time, Date - Stack on mobile, inline on larger screens */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
            <span className={`${categoryColor} text-white text-xs px-2 py-1 rounded-full self-start`}>
              {category}
            </span>
            <div className="flex items-center gap-3 text-gray-500 text-sm">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
                {readTime}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {date}
              </span>
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 leading-tight">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-3">
            {description}
          </p>
          
          {/* Tags and Button - Stack on mobile, side by side on larger screens */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded whitespace-nowrap">
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Button */}
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 flex items-center justify-center gap-2 w-full sm:w-auto transition-colors">
              <span className="text-sm">Read Article</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllArticleCard;