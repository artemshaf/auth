import Img from "../../assets/imgs/auth/img1.png";
import { Button, Checkbox, CustomLink, Input } from "../../components/UI";
import "./Register.scss";
import cn from "classnames";
import { Container } from "../../components/Layout/Container/Container";
import { IRegisterProps } from "./Register.props";
import { LOGIN_ROUTE } from "../../utils/consts";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LOGIN_EMAIL } from "../../env";

export type Inputs = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
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
  const password = useRef<Object>({});
  password.current = watch("password", "");

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setDisabled(true);
    console.log(data);
    console.log(errors);
    setDisabled(false);
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
            <Checkbox className={cn("register__form__actions__checkbox")}>
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
export default Register;
