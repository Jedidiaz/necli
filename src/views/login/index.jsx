import { Container, Slide, Snackbar, Stack, Typography } from "@mui/material";
import StyledInput from "../../components/input";
import { colors } from "../../utils/colors";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { bank } from "../../utils/instance";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout";

const initValues = { account: "", password: "" };

const Login = () => {
  const [form, setForm] = useState(initValues);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //capture form
  const handleChange = ({ target }) => {
    const { value, name } = target;
    setForm((props) => ({
      ...props,
      [name]: value,
    }));
  };
  //submit api
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await bank.post("login", form);
      setMessage(`✅ ${data.msg}`);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setLoading(false);
      navigate("/home");
    } catch (error) {
      setLoading(false);
      setMessage(`⚠️ ${error.response.data.msg}`);
    }
  };

  return (
    <Layout>
      <Stack>
        <Container>
          <Stack alignItems="center">
            {/* Box login */}
            <Stack
              bgcolor={colors.bgColor}
              maxWidth="400px"
              width="100%"
              px={{ xs: 2, sm: 3 }}
              py={5}
              spacing={2}
              borderRadius={2}
              mt={12}
            >
              {/* header */}
              <Stack textAlign="center" spacing={1}>
                <Typography variant="h5" fontWeight={600}>
                  Entra a tu Necli
                </Typography>
                <Typography variant="subtitle2" fontWeight={500}>
                  Entra con tu cuenta y contraseña indicada
                </Typography>
              </Stack>
              {/* Form */}
              <Stack
                role="form"
                component="form"
                onSubmit={handleSubmit}
                spacing={3}
              >
                <StyledInput
                  type="number"
                  name="account"
                  label="Account"
                  change={handleChange}
                  value={form?.account}
                />
                <StyledInput
                  type="password"
                  name="password"
                  label="Password"
                  change={handleChange}
                  value={form?.password}
                />
                <LoadingButton type="submit" loading={loading}>
                  Entrar
                </LoadingButton>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Stack>
      <Snackbar
        open={!!message}
        onClose={() => setMessage("")}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={(props) => {
          return <Slide {...props} direction="left" />;
        }}
        message={message}
        autoHideDuration={2000}
      />
    </Layout>
  );
};

export default Login;
