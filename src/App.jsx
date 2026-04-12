import './App.css'
import Head from './components/Head';
import Body from './components/Body';
import store from './utils/store';
import { Provider } from 'react-redux';
/**
 * 
 * @returns Head 
 * body
 * Sidebar
 *  MenuItems
 * Main container
 *  ButtonList
 * VideoContainer
 *  VideoCard
 *  VideoDetails
 */
function App() {
  
  return (
    <>
    <Provider store={store}>
    <div>
      <Head />
      <Body />
      
    </div>
     </Provider>
    </>
  )
}

export default App
