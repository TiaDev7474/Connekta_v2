
import { ThemeProvider } from '@/context/context.theme';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';
import { queryClient } from '@/lib/react-query';
import { QueryClientProvider } from 'react-query';
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
            <QueryClientProvider client={queryClient}>
                <ThemeProvider>
                    <Router>
                        {children}
                    </Router>
                </ThemeProvider>
            </QueryClientProvider>
            
        </ErrorBoundary>

    </React.Suspense>
  )
}
