import "./LoginForm.scss";
import { useContext, useState } from "react";
import { LOGIN_EMAIL, LOGIN_PASSWORD } from "../../../env";
import { observer } from "mobx-react-lite";
import { Container } from "../../Layout/Container/Container";
import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";
import { Context } from "../../../store/context";
import { ILoginFormProps, Inputs } from "./LoginForm.props";
import cn from "classnames";
import { useForm, SubmitHandler } from "react-hook-form";

const LoginForm = ({
  children = "Зарегистрируйтесь!",
  className,
  ...props
}: ILoginFormProps): JSX.Element => {
  const { store } = useContext(Context);
  const [isRegistred, setIsRegistred] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { email, password } = data;
    if (isRegistred) {
      store.login(email, password);
    } else {
      store.registration(email, password);
    }
  };

  return (
    <Container className={"h-screen flex items-center justify-center"}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn(className, "login-form")}
        {...props}
      >
        <h2 className="login-form__title">{children}</h2>
        <Input
          placeholder="Email"
          error={errors.email}
          {...register("email", {
            required: { value: true, message: "Заполните email!" },
            value: LOGIN_EMAIL,
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
          type="password"
          placeholder="Password"
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
            required: { value: true, message: "Заполните пароль!" },
          })}
        >
          Password
        </Input>
        <div className="flex justify-between">
          <Button onClick={() => setIsRegistred(true)}>Логин</Button>
          <Button onClick={() => setIsRegistred(false)}>Регистрация</Button>
        </div>
      </form>
    </Container>
  );
};

// module.exports = {
//   plugins: {
//     "postcss-import": {},
//     "tailwindcss/nesting": "postcss-nesting",
//     tailwindcss: {
//       config: "tailwind.config.js",
//     },
//     autoprefixer: {},
//   },
// };

export default observer(LoginForm);
