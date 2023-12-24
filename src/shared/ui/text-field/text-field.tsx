import { FC, InputHTMLAttributes } from "react";
import { useField } from "formik";
import styles from "./text-field.module.css";

type Props = {
  name: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField: FC<Props> = (props) => {
  const { name } = props;
  const [input] = useField(name);

  return (
    <div className={styles.textField}>
      <label className={styles.label} htmlFor={name}>
        {props.label ?? name}
      </label>
      <input className={styles.inputField} {...input} {...props} id={name} />
    </div>
  );
};
