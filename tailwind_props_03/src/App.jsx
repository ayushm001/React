import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)


  let myObj = {
    username : "Ayushman ",
    designation  : "Web devloper"
  }
  return (
    <>
     
     <h1 className='bg-violet-600 text-black p-5 rounded-2xl' >  Let's start Tailwind </h1>

     <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://www.bing.com/th?id=OIP.jQvFuRlmVesA7K6ArjfyrAHaH9&w=150&h=161&c=8&rs=1&qlt=90&o=6&cb=13&pid=3.1&rm=2" alt="" width="384" height="512"></img>
  <div class="pt-6 text-center space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>

   <Card username="Ayushman Rout" designation="web devloper"/>
   <Card username="Alexia " designation=" UI-UX designer "/>

    </>
  )
}

export default App
