import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setCurrentUser } from './store/user/user.action';
import { createUserDocument, onAuthStateChangedListener } from './utils/firebase/firebase.utils';

// Route Components
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.components';
import Athentication from './routes/authentication/authentication.component'
import Checkout from './routes/checkout/checkout.component'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unSub = onAuthStateChangedListener((user) => {
         if (user) {
              createUserDocument(user)
         }
         console.log('onAuthStateChangedListern user:', user)
         dispatch(setCurrentUser(user))
         return user
    })
  },[dispatch])

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Athentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
