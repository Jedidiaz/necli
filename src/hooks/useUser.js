import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const useUser = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/login");
    else setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const updateUser = (name, value) => {
    setUser((props) => ({
      ...props,
      [name]: "value",
    }));
    localStorage.setItem("user", JSON.stringify({ ...user, [name]: value }));
  };

  return {
    user,
    updateUser,
  };
};

export default useUser;
