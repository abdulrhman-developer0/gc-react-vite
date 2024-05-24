export const Button = (propps) => {
  return (
    <button {...propps}>
      {propps?.text || propps?.children || "click me"}
    </button>
  );
};
