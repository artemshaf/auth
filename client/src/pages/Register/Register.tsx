import Img from "../../assets/imgs/auth/img1.png";
import { Button, Checkbox, CustomLink, Input } from "../../components/UI";
import "./Register.scss";
import cn from "classnames";
import { Container } from "../../components/Layout/Container/Container";
import { IRegisterProps } from "./Register.props";
import { LOGIN_ROUTE, MAIN_ROUTE } from "../../utils/consts";
import { useContext, useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Context, store } from "../../store/context";
import Badge from "../../components/Plain/Badge/Badge";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";

export type Inputs = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  isRemember: string;
};

const Register = ({ className, ...props }: IRegisterProps) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
    watch,
  } = useForm<Inputs>();
  const { store } = useContext(Context);
  const [error, setError] = useState<string>("");
  const password = useRef<Object>({});
  password.current = watch("password", "");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, [store, error]);

  if (store.isAuth) {
    return <Navigate to={MAIN_ROUTE} />;
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const result = await store.registration(data.email, data.password);
    if (result?.message) {
      setError(result.message);
    } else {
      setError("");
    }
  };

  return (
    <Container>
      <section className={cn("register")} {...props}>
        <form
          className={cn("register__form")}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className={cn("register__form__title")}>Welcome!</h1>
          <h2 className={cn("register__form__descr")}>
            Register in to Dashboard-App
          </h2>
          {error && (
            <Badge appearence="red-500" className="block mb-3">
              {error}
            </Badge>
          )}
          <Input
            placeholder="Enter your Email"
            className={cn("register__form__actions__email")}
            error={errors.email}
            {...register("email", {
              required: { value: true, message: "Заполните email!" },
              value: "21fsa3@g.com",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Неккоретный ввод email!",
              },
            })}
          >
            Email
          </Input>
          <Input
            placeholder="Enter your Name and Surname "
            className={cn("register__form__actions__name")}
            error={errors.username}
            {...register("username", {
              required: { value: true, message: "Заполните Name and Surname!" },
              value: "Shaf Art",
              pattern: {
                value:
                  /^([a-zA-Zа-яА-я]{2,}\s[a-zA-Zа-яА-я]{1,}'?-?[a-zA-Zа-яА-я]{1,}\s?([a-zA-Zа-яА-я]{1,})?)$/,
                message: "Uncorrect Name and Surname!",
              },
            })}
          >
            User name
          </Input>
          <Input
            className={cn("register__form__actions__password")}
            type="password"
            placeholder="Enter your Password"
            error={errors.password}
            {...register("password", {
              value: "12345678",
              minLength: {
                message: "Пароль должен содержать не менее 4ех символов",
                value: 4,
              },
              maxLength: {
                message: "Пароль должен содержать не более 32ух символов",
                value: 32,
              },
              required: { value: true, message: "Заполните Password!" },
            })}
          >
            Password
          </Input>
          <Input
            className={cn("register__form__actions__password_confirm")}
            type="password"
            placeholder="Enter your Confirm Password"
            error={errors.confirmPassword}
            {...register("confirmPassword", {
              value: "12345678",
              validate: (value) => {
                if (watch("password") !== value) {
                  return "Passwords do not match";
                }
                return true;
              },
            })}
          >
            Confirm Password
          </Input>
          <div className={cn("register__form__actions__block")}>
            <Checkbox
              error={errors.isRemember}
              className={cn("register__form__actions__checkbox")}
              {...register("isRemember", {
                required: { value: true, message: "Согласитесь с нами!" },
                value: "",
              })}
            >
              Rememebr me
            </Checkbox>
            <CustomLink
              to={"/"}
              className={cn("register__form__actions__link__forgot")}
            >
              Forgot Password ?
            </CustomLink>
          </div>
          <Button
            disabled={store.isLoading}
            width="full"
            appearence="primary"
            className={cn("register__form__actions__btn")}
          >
            Register
          </Button>
          <CustomLink
            to={LOGIN_ROUTE}
            className={cn("register__form__actions__link__register")}
          >
            <span>Already have an Account ? </span>
            Register
          </CustomLink>
        </form>
        <img src={Img} alt="register" className={cn("register__img")} />
      </section>
    </Container>
  );
};
export default observer(Register);
