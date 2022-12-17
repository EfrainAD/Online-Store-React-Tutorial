import {categories} from '../../directory/categories';
import Directory from '../../components/directory/directory.component'

const Home = () => {
  return (
    <Directory categories={categories} />
  );
}

export default Home;
