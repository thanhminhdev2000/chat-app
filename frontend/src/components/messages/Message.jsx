import useConversation from '../../store/useConversation';
import { useAuthStore } from '../../store/authStore';
import Avatar from '../sidebar/Avatar';

const Message = ({ message }) => {
  const { user } = useAuthStore();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === user._id;
  const profilePic = fromMe ? user.profilePic : selectedConversation?.profilePic;
  const shakeClass = message.shouldShake ? 'shake' : '';

  return (
    <div>
      {fromMe ? (
        <div className="flex justify-end">
          <div className="flex items-center mb-1 gap-1">
            <div className={`chat-bubble text-white ${shakeClass} pb-2`}>{message.message}</div>
            <Avatar size={10} filename={profilePic} />
          </div>
        </div>
      ) : (
        <div className="flex items-center mb-1 gap-1">
          <Avatar size={10} filename={profilePic} />
          <div className={`chat-bubble text-white ${shakeClass} pb-2`}>{message.message}</div>
        </div>
      )}
    </div>
  );
};
export default Message;
