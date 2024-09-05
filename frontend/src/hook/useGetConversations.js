import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { API_URL } from '../store/authStore';

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const data = await axios.get(`${API_URL}/users`);
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data.data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};
export default useGetConversations;
