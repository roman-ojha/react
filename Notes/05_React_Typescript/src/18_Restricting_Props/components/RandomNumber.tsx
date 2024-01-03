type RandomNumberProps1 = {
  value: number;
  isPositive?: boolean;
  isNegative?: boolean;
  isZero?: boolean;
  // here user can provide 'isPositive', 'isNegative' & 'isZero' to true all at once, but that is not what we wanted
  // We just one value to be pass with true if they are passed
  // So we want to restrict the props when one props is passed then we don't want another props to be passable
};

type RandomNumberType = {
  value: number;
};

// So, we will going to create the separate type for Positive, Negative & Zero

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  // here we are telling we can never set 'isNegative' & 'isZero' props when ever we will set 'isPositive' prop
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type Zero = RandomNumberType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "negative"}{" "}
      {isZero && "zero"}
    </div>
  );
};
