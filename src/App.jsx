import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MultiSchrankHeader from "./components/Header";
import MultiSchrankHero from "./components/MultiSchrankHero";
import MultiSchrankAbout from "./components/MultiSchrankAbout";
import MultiSchrankCatalogPreview from "./components/MultiSchrankCatalogPreview";
import MultiSchrankMaterials from "./components/MultiSchrankMaterials";
import MultiSchrankProcess from "./components/MultiSchrankProcess";
import MultiSchrankFooter from "./components/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MultiSchrankHeader />
      <MultiSchrankHero />
      <MultiSchrankAbout />
      <MultiSchrankCatalogPreview />
      <MultiSchrankMaterials />
      <MultiSchrankProcess />
      <MultiSchrankFooter />
    </>
  )
}

export default App
