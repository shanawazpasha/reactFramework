import React from 'react';
import CoreLayout from 'layouts';
import Counter from 'components/counter';
import List from '../../components/list';


const Home = () => {
  return (
    <CoreLayout>
      <Counter />
      <List endpoint="/endpoint" /> {/* Replace with your API endpoint */}
    </CoreLayout>
  );
};

export default Home;