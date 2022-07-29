import { ILoginProps } from "./Login.props";
import Img from "../../assets/imgs/auth/img1.png";
import { Button, Checkbox, CustomLink, Input } from "../../components/UI";
import "./Login.scss";
import cn from "classnames";
import { Container } from "../../components/Layout/Container/Container";
import { MAIN_ROUTE, REGISTER_ROUTE } from "../../utils/consts";
import { SubmitHandler, useForm } from "react-hook-form";
import { LOGIN_EMAIL, LOGIN_PASSWORD } from "../../env";
import { Context } from "../../store/context";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Badge from "../../components/Plain/Badge/Badge";

export interface Inputs {
  email: string;
  password: string;
  isRemebmer: string;
}

const Login = ({ className, ...props }: ILoginProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({});
  const { store } = useContext(Context);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, [store, error]);

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    const result = await store.login(data.email, data.password);
    if (result?.message) {
      setError(result.message);
    } else {
      setError("");
    }
    reset();
  };

  if (store.user.email) {
    return <Navigate to={MAIN_ROUTE} />;
  }

  return (
    <Container>
      <section className={cn("login")} {...props}>
        <form className={cn("login__form")} onSubmit={handleSubmit(onSubmit)}>
          <h1 className={cn("login__form__title")}>Welcome!</h1>
          <h2 className={cn("login__form__descr")}>Sign in to Dashboard-App</h2>
          {error && (
            <Badge appearence="red-500" className="block mb-3">
              {error}
            </Badge>
          )}
          <Input
            placeholder="Enter your User name"
            className={cn("login__form__actions__email")}
            error={errors.email}
            {...register("email", {
              required: { value: true, message: "Заполните email!" },
              value: LOGIN_EMAIL,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Uncorrect email!",
              },
            })}
          >
            Email
          </Input>
          <Input
            className={cn("login__form__actions__password")}
            type="password"
            placeholder="Enter your Password"
            error={errors.password}
            {...register("password", {
              value: LOGIN_PASSWORD,
              minLength: {
                message: "Пароль должен содержать не менее 4ех символов",
                value: 4,
              },
              maxLength: {
                message: "Пароль должен содержать не более 32ух символов",
                value: 32,
              },
              required: { value: true, message: "Enter Password!" },
            })}
          >
            Password
          </Input>
          <div className={cn("login__form__actions__block")}>
            <Checkbox
              error={errors.isRemebmer}
              className={cn("login__form__actions__checkbox")}
              {...register("isRemebmer", {
                required: { value: true, message: "Согласитесь с нами!" },
                value: "",
              })}
            >
              Rememebr me
            </Checkbox>
            <CustomLink
              to={"/"}
              className={cn("login__form__actions__link__forgot")}
            >
              Forgot Password ?
            </CustomLink>
          </div>
          <Button
            disabled={store.isLoading}
            width="full"
            appearence="primary"
            className={cn("login__form__actions__btn")}
          >
            Login
          </Button>
          <CustomLink
            to={REGISTER_ROUTE}
            className={cn("login__form__actions__link__register")}
          >
            <span>Don’t you have an Account ? </span>
            Register
          </CustomLink>
        </form>
        <img src={Img} alt="login" className={cn("login__img")} />
      </section>
    </Container>
  );
};

export default observer(Login);
