import {categories} from './directory/categories';
import Directory from './components/directory/Directory.component'

const App = () => {
  return (
    <Directory categories={categories} />
  );
}

export default App;
