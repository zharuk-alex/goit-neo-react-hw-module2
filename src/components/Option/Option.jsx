import css from "./Option.module.css";
import Button from "../Button/Button";

export default ({ variants = [], handleClick, handleReset, totalFeedback }) => {
  return (
    <div className={css.btnGroup}>
      {variants.map(({ text, variant }) => (
        <Button
          key={variant}
          text={text}
          onClick={() => handleClick(variant)}
        />
      ))}
      {!!totalFeedback && <Button text="Reset" onClick={handleReset} />}
    </div>
  );
};
