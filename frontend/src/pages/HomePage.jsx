import MessageContainer from '../components/messages/MessageContainer';
import Sidebar from '../components/sidebar/Sidebar';

const HomePage = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-lg">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default HomePage;
