```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Solution: Ensure the Contact component is correctly exported and imported */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {  return <div>Home</div>; }
function About() { return <div>About</div>; }
function Contact() { return <div>Contact</div>; }
export default App;
```