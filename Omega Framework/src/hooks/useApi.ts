import { useGetDataQuery, usePostDataMutation, usePutDataMutation } from '../api/service';

export const useFetchData = (endpoint: string) => {
  const { data, error, isLoading } = useGetDataQuery(endpoint);

  return { data, error, isLoading };
};

export const usePostData = () => {
  const [postData] = usePostDataMutation();

  const executePost = async (endpoint: string, data: any) => {
    await postData({ endpoint, data });
  };

  return { executePost };
};

export const usePutData = () => {
  const [putData] = usePutDataMutation();

  const executePut = async (endpoint: string, data: any) => {
    await putData({ endpoint, data });
  };

  return { executePut };
};