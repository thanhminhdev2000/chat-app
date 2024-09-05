import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useConversation from '../store/useConversation';
import axios from 'axios';
import { API_URL } from '../store/authStore';

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const data = await axios.get(`${API_URL}/messages/${selectedConversation._id}`);
        if (data.error) throw new Error(data.error);
        setMessages(data.data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};
export default useGetMessages;
