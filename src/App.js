import './style.css';
import SettingsContext, { useSiteContext } from './context/SettingsContext';
import Content from './components/Content';

function App() {

  return (
    <div>
      <SettingsContext>
        <Content />
      </SettingsContext>
    </div>
  );
}

export default App;
