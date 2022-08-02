import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Lucas" 
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam quaerat sapiente consequuntur minus dolorum qui deserunt molestiae maxime" 
      />
      <Post 
        author="Bereguejonson" 
        content="Jogles" 
      />
    </div>
  )
}