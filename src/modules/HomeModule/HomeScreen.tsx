import { Fragment, useState } from "react";
import { Button, InpuText } from "../../packages";
import { isEmpty } from "../../utils";
import { stringCalculator } from "./stringCalculatorHelper";

const HomeScreen = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (event?: any) => {
    if (event) {
      event.preventDefault();
    }
    setResult(stringCalculator(input));
  };
  return (
    <Fragment>
      <p className="text-2xl sm:text-4xl  font-bold text-center mb-10">
        Incubyte TDD Assessment
      </p>
      <form onSubmit={handleSubmit}>
        <InpuText
          value={input}
          onChange={handleChange}
          placeholder="Enter numbers"
        />
        <div className="flex justify-end mt-4">
          <Button btnType="submit" onClick={handleSubmit}>
            Calculate
          </Button>
        </div>
      </form>

      {!isEmpty(result) && (
        <p className="font-bold text-1xl sm:text-2xl mt-4">
          Result: <span className="font-regular">{result}</span>
        </p>
      )}
    </Fragment>
  );
};

export default HomeScreen;
