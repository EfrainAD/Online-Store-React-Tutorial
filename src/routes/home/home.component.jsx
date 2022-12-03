import {categories} from '../../directory/categories';
import Directory from '../../components/directory/Directory.component'

const Home = () => {
  return (
    <Directory categories={categories} />
  );
}

export default Home;
