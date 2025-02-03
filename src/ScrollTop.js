import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0) // Scroll to the top on route change
  }, [pathname])

  useEffect(() => {
    const handleSamePageClick = (event) => {
      const target = event.target.closest('a') // Detect if a link is clicked
      if (target && target.getAttribute('href') === window.location.pathname) {
        window.scrollTo(0, 0) // Scroll up when clicking the same NavLink
      }
    }

    document.addEventListener('click', handleSamePageClick)

    return () => {
      document.removeEventListener('click', handleSamePageClick)
    }
  }, [])

  return null
}

export default ScrollToTop
