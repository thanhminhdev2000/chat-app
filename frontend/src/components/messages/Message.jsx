import { extractTime } from '../../utils/extractTime';
import useConversation from '../../store/useConversation';
import { useAuthStore } from '../../store/authStore';

const Message = ({ message }) => {
  const { user } = useAuthStore();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === user._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const bubbleBgColor = fromMe ? 'bg-blue-500' : '';

  const shakeClass = message.shouldShake ? 'shake' : '';

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-xl font-bold text-gray-700">
            {selectedConversation.name.charAt(0).toUpperCase() || '?'}
          </span>
        </div>
      </div>
      <div className={`chat-bubble ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
    </div>
  );
};
export default Message;
