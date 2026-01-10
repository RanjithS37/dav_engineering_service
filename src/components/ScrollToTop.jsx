import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      // Scroll to top instantly when route changes
      // This ensures users always see the top of the new page
      // Account for sticky navigation height (60px)
      
      // Method 1: Scroll to position 0 (page top)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      })
      
      // Method 2: Direct property assignment (for better compatibility)
      if (document.documentElement) {
        document.documentElement.scrollTop = 0
      }
      if (document.body) {
        document.body.scrollTop = 0
      }
    }, 10)
  }, [pathname])

  return null
}

export default ScrollToTop

