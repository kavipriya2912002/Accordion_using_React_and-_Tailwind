import {BrowserRouter,Routes,Route} from 'react-router-dom'
import FAQAccordion from './FAQAccordion'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<FAQAccordion/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
