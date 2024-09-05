import { useState } from 'react';
import toast from 'react-hot-toast';
import useConversation from '../store/useConversation';
import axios from 'axios';
import { API_URL } from '../store/authStore';

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/messages/send/${selectedConversation._id}`, { message });
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};
export default useSendMessage;
