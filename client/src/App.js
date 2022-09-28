import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
      </div>
      <div id='page-body'>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/articles' element={<ArticlesListPage />} />
          <Route path='/articles/:articleId' element={<ArticlePage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
