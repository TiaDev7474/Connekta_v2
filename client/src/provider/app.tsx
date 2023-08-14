
import { ThemeProvider } from '@/context/context.theme'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter as Router } from 'react-router-dom'

const ErrorFallback = () => {
    return (
         <div>Fallback error goes here</div>
    )
}
type AppProviderProps = {
     children: React.ReactNode
}
export const AppProvider = ({ children } : AppProviderProps) => {
   
    

  return (
    <React.Suspense
        fallback={
            <div>splash screen goes here</div>
        }
    > 
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <ThemeProvider>
                <Router>
                    {children}
                </Router>
            </ThemeProvider>
        </ErrorBoundary>

    </React.Suspense>
  )
}
