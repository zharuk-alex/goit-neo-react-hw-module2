import css from "./Option.module.css";
import Button from "../Button/Button";

export default ({ variants = [], handleClick, handleReset }) => {
  return (
    <div className={css.btnGroup}>
      {variants.map(({ text, variant }) => (
        <Button
          key={variant}
          text={text}
          onClick={() => handleClick(variant)}
        />
      ))}
      <Button text="Reset" onClick={handleReset} />
    </div>
  );
};
