import { API_URL } from '../../store/authStore';
import avatar from '../../assets/default.jpg';

const Avatar = ({ size = 12, filename }) => {
  const imageUrl = `${API_URL}/upload/${filename}`;
  return (
    <div className={`w-${size} h-${size} rounded-full overflow-hidden border-2 border-gray-300`}>
      {filename ? (
        <img src={imageUrl} alt="User" className="w-full h-full object-cover" />
      ) : (
        <img src={avatar} alt="User" className="w-full h-full object-cover" />
      )}
    </div>
  );
};

export default Avatar;
