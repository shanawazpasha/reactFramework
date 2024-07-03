import { useEffect, useRef } from 'react';

interface PollingOptions {
  interval: number; // Polling interval in milliseconds
  action: () => void; // Function to execute on each poll
}

const usePolling = ({ interval, action }: PollingOptions) => {
  const pollRef = useRef<number>();

  useEffect(() => {
    const poll = () => {
      action();
      pollRef.current = window.setTimeout(poll, interval);
    };

    // Start polling on component mount
    pollRef.current = window.setTimeout(poll, interval);

    return () => {
      // Clean up the polling timer on component unmount
      if (pollRef.current) {
        clearTimeout(pollRef.current);
      }
    };
  }, [interval, action]);
};

export default usePolling;