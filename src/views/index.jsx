import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Inicio = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/home");
    else navigate("/login");
  }, []);

  return <></>;
};

export default Inicio;
