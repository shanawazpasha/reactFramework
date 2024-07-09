import React from 'react';
import CoreLayout from 'layouts';
import Counter from 'components/counter';
import DataView from '../../components/list';
import { truncateText } from '../../utils/helpers'

const Home = () => {

  //const truncatedText = truncateText(text, maxLength);
  
  return (
    <CoreLayout>
      <Counter />
      <DataView endpoint="/1" /> {/* Replace with your API endpoint */}
    </CoreLayout>
  );
};

export default Home;