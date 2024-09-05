import { BiLogOut } from 'react-icons/bi';
import { useAuthStore } from '../../store/authStore';

const LogoutButton = () => {
  const { isLoading, logout } = useAuthStore();

  return (
    <div className="mt-auto">
      {!isLoading ? (
        <BiLogOut className="w-6 h-6 text-white cursor-pointer" onClick={logout} />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
export default LogoutButton;
