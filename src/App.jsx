import { Post } from './Post';

export function App() {
  return (
    <div>
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