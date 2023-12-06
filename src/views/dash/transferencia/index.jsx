import { Container, Slide, Snackbar, Stack, Typography } from "@mui/material";
import StyledInput from "../../../components/input";
import { colors } from "../../../utils/colors";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { bank } from "../../../utils/instance";
import { useNavigate } from "react-router-dom";
import Layout from "../../../components/layout";
import useUser from "../../../hooks/useUser";

const initValues = { account_recive: "", amount: "" };

const Transferencia = () => {
  const [form, setForm] = useState(initValues);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user, updateUser } = useUser();

  //capture form
  const handleChange = ({ target }) => {
    const { value, name } = target;
    setForm((props) => ({
      ...props,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };
  //submit api
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const body = {
      ...form,
      id: user?.id,
      token: localStorage.getItem("token"),
    };
    try {
      const { msg, new_money } = await bank
        .post("movements", body)
        .then((data) => data.data);
      setMessage(`✅ ${msg}`);
      updateUser("money", new_money);
      setLoading(false);
      setForm(initValues);
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
                  Transfiere con Necli
                </Typography>
                <Typography variant="subtitle2" fontWeight={500}>
                  Transfiere facil y sencillo a tus amigos de necli
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
                  name="account_recive"
                  label="Account"
                  change={handleChange}
                  value={form?.account_recive}
                />
                <StyledInput
                  type="number"
                  name="amount"
                  label="Monto"
                  change={handleChange}
                  value={form?.amount}
                />
                <LoadingButton type="submit" loading={loading}>
                  Enviar
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

export default Transferencia;
