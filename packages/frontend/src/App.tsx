// packages/frontend/src/App.tsx
import { useState } from 'react';
import { Button } from './components/ui/button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button>Click me pls !</Button>
    </div>
  );
}

export default App;