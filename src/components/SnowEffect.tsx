import Snowfall from "react-snowfall";

export const SnowEffect = () => {
  return (
    <Snowfall
      snowflakeCount={10}
      speed={[0.1, 0.3]}
      color="#A9E2C4"
      style={{
        display: "block",
        overflow: "auto",
      }}
    />
  );
};
