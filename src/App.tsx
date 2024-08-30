import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AppRoutes } from './routes/AppRoutes';
import { Toaster } from './components/ui/Sonner';
import { AuthProvider } from './app/authentication/context/AuthContext';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <AppRoutes  />
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
      <Toaster position="top-center" expand={true} />
    </>
  );
}

export default App
