import { ILoginProps } from "./Login.props";
import Img from "../../assets/imgs/auth/img1.png";
import { Button, Checkbox, CustomLink, Input } from "../../components/UI";
import "./Login.scss";
import cn from "classnames";
import { Container } from "../../components/Layout/Container/Container";
import { REGISTER_ROUTE } from "../../utils/consts";
import { SubmitHandler, useForm } from "react-hook-form";
import { LOGIN_EMAIL, LOGIN_PASSWORD } from "../../env";
import { boolean } from "joi";
import { useState } from "react";

export type Inputs = {
  email: string;
  password: string;
};

const Login = ({ className, ...props }: ILoginProps) => {
  // const { store } = useContext(Context);
  // const [isRegistred, setIsRegistred] = useState<boolean>(true);
  const [disabled, setDisabled] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setDisabled(true);
    console.log(data);
    console.log(errors);
    setDisabled(false);
  };

  return (
    <Container>
      <section className={cn("login")} {...props}>
        <form className={cn("login__form")} onSubmit={handleSubmit(onSubmit)}>
          <h1 className={cn("login__form__title")}>Welcome!</h1>
          <h2 className={cn("login__form__descr")}>Sign in to Dashboard-App</h2>
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
            <Checkbox className={cn("login__form__actions__checkbox")}>
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
            disabled={disabled}
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
export default Login;
