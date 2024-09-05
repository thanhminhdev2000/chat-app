import { useSocketContext } from '../../context/SocketContext';
import useConversation from '../../store/useConversation';

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  // const { onlineUsers } = useSocketContext();
  // const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				${isSelected ? 'bg-sky-500' : ''}
			`}
        onClick={() => setSelectedConversation(conversation)}
      >
        {/* <div className={`avatar ${isOnline ? 'online' : ''}`}> */}
        <div className={`''}`}>
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            {conversation.name ? (
              <span className="text-xl font-bold text-gray-700">{conversation.name.charAt(0).toUpperCase()}</span>
            ) : (
              <span className="text-xl font-bold text-gray-700">?</span>
            )}
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};
export default Conversation;
