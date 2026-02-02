'use client'

import { useEffect } from 'react'

// Global flag để đảm bảo scripts chỉ load một lần
declare global {
  interface Window {
    __legacyScriptsLoaded?: boolean
  }
}

export function LegacyScripts() {
  useEffect(() => {
    // Kiểm tra xem scripts đã được load chưa (tránh load lại khi navigate)
    if (typeof window !== 'undefined' && window.__legacyScriptsLoaded) {
      return
    }

    // Load scripts theo thứ tự đúng như template gốc
    const scripts = [
      '/js/jquery.js',
      '/js/popper.min.js',
      '/js/bootstrap.min.js',
      '/js/appear.js',
      '/js/parallax.min.js',
      '/js/tilt.jquery.min.js',
      '/js/jquery.paroller.min.js',
      '/js/owl.js',
      '/js/wow.js',
      '/js/jarallax.js',
      '/js/swiper.min.js',
      '/js/odometer.js',
      '/js/wait-for-images.js',
      '/js/parallax-scroll.js',
      '/js/element-in-view.js',
      '/js/gsap.min.js',
      '/js/SplitText.min.js',
      '/js/ScrollTrigger.min.js',
      '/js/ScrollToPlugin.min.js',
      '/js/ScrollSmoother.min.js',
      '/js/magnific-popup.min.js',
      '/js/nav-tool.js',
      '/js/jquery-ui.js',
      '/js/jquery.validate.min.js',
      '/js/jquery.form.min.js',
      '/js/script.js', // Load cuối cùng
    ]

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Kiểm tra xem script đã được load chưa
        const existing = document.querySelector(`script[src="${src}"]`)
        if (existing) {
          resolve()
          return
        }

        const script = document.createElement('script')
        script.src = src
        script.async = false // Giữ thứ tự tuần tự
        script.onload = () => resolve()
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`))
        document.body.appendChild(script)
      })
    }

    // Load tuần tự để đảm bảo thứ tự
    const loadAllScripts = async () => {
      for (const src of scripts) {
        try {
          await loadScript(src)
        } catch (error) {
          console.error(`Error loading script ${src}:`, error)
        }
      }
      
      // Đánh dấu đã load xong
      if (typeof window !== 'undefined') {
        window.__legacyScriptsLoaded = true
        
        // Trigger lại script.js nếu có function init
        // Một số template có function để re-initialize khi navigate
        const jQuery = (window as unknown as { jQuery?: unknown }).jQuery
        if (jQuery && typeof jQuery === 'function') {
          const $ = jQuery as (selector: string | Document) => {
            ready: (callback: () => void) => void
            trigger: (event: string) => void
          }
          // Đảm bảo jQuery ready
          $(document).ready(function() {
            // Trigger lại các event handlers nếu cần
            $(document).trigger('legacyScriptsLoaded')
          })
        }
      }
    }

    loadAllScripts()
  }, [])

  return null
}
