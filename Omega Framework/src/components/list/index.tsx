import React, { useEffect, useState } from 'react';
import { useFetchData } from '../../hooks/useApi';

interface DataViewProps {
  endpoint: string;
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const DataView: React.FC<DataViewProps> = ({ endpoint }) => {
  const { data, isLoading } = useFetchData(endpoint);
  const [response, setResponse] = useState<Todo | null>(null);
  const [loadData, setLoadData] = useState<boolean>(false);

  useEffect(() => {
    // Simulate loading data when component mounts
    setLoadData(true);

    // Clean up the loadData state on component unmount
    return () => {
      setLoadData(false);
    };
  }, [endpoint]); // Reload data if endpoint changes

  useEffect(() => {
    if (data) {
      const result: Todo = data; // Assuming data is already of type Todo
      setResponse(result);
    }
  }, [data]); // Update response state when data changes

  return (
    <div>
      {loadData && (
        <div style={{ padding: '20px' }}>
          {isLoading ? (
            <p>Loading...</p>
          ) : response ? (
            <table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
              <thead>
                <tr>
                  {Object.keys(response).map(key => (
                    <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }} key={key}>
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {Object.keys(response).map(key => (
                    <td style={{ border: '1px solid black', padding: '8px' }} key={key}>
                      {typeof response[key as keyof Todo] === 'boolean'
                        ? response[key as keyof Todo].toString()
                        : response[key as keyof Todo]}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          ) : (
            <p>No data available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DataView;