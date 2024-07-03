import React, { useEffect, useState } from 'react';
import { useFetchData } from '../../hooks/useApi';

interface ApiDataProps {
  endpoint: string;
}

const ApiData: React.FC<ApiDataProps> = ({ endpoint }) => {
  const { data, isLoading } = useFetchData(endpoint);
  const [loadData, setLoadData] = useState<boolean>(false);

  useEffect(() => {
    // Simulate loading data when component mounts
    setLoadData(true);

    // Clean up the loadData state on component unmount
    return () => {
      setLoadData(false);
    };
  }, [endpoint]); // Reload data if endpoint changes

  return (
    <div>
      {loadData && (
        <>
          {isLoading && <p>Loading...</p>}
          {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </>
      )}
    </div>
  );
};

export default ApiData;