import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

// 認証チェックをせず、常に中身を表示するコンポーネント
const PublicApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* 他のページもここに追加していく */}
    </Routes>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <PublicApp />
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App