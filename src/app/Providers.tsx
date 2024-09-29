'use client'
import { ThemeProvider } from "next-themes"
import Header from "./components/Header"
function providers({children}) {
  return (
    <div>
       <ThemeProvider defaultTheme="system" attribute="class">
        <div className="text-gray-700 dark:text-[#fff] dark:bg-[#131c2f] min-h-screen select-none transition-colors duration-300">
           
             {children}
        </div>
       </ThemeProvider>
       
    </div>
  )
}

export default providers