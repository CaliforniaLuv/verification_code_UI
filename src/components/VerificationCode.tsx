import { useState, useRef } from "react";

export const VerificationCode = () => {
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [code4, setCode4] = useState("");
  const [code5, setCode5] = useState("");
  const [code6, setCode6] = useState("");
  const [empty, setEmpty] = useState(false);

  const formInput = (e: any) => {
    const input = e.target;
    const nextInput = input.nextElementSibling;

    if (nextInput && input.value) {
      nextInput.focus();
      if (nextInput.value) {
        nextInput.select();
      }
    }
  };

  const handleSum = () => {
    if (
      code1 !== "" &&
      code2 !== "" &&
      code3 !== "" &&
      code4 !== "" &&
      code5 !== "" &&
      code6 !== ""
    ) {
      console.log("합격");
      setEmpty(false);
    } else {
      console.log("불합격");
      setEmpty(true);
    }
  };

  function handleBackspace(e: any, func: (value: string) => void) {
    const input = e.target;

    if (input.value || input.id === "input1") {
      input.value = "";
      func("");
      return;
    }

    input.previousElementSibling.focus();
  }

  function handleArrowLeft(e: any) {
    const previousInput = e.target.previousElementSibling;
    if (!previousInput) return;
    previousInput.focus();
  }

  function handleArrowRight(e: any) {
    const nextInput = e.target.nextElementSibling;
    if (!nextInput) return;
    nextInput.focus();
  }

  const handleTyping = (e: any, func: (value: string) => void) => {
    switch (e.keyCode) {
      case KEYBOARDS.backspace:
        handleBackspace(e, func);
        break;
      case KEYBOARDS.arrowLeft:
        handleArrowLeft(e);
        break;
      case KEYBOARDS.arrowRight:
        handleArrowRight(e);
        break;
      default:
    }
  };

  return (
    <form onInput={(e) => formInput(e)} onSubmit={(e) => e.preventDefault()}>
      <div className="flex gap-x-[10px]">
        <input
          id={"input1"}
          type="tel"
          className={`w-[50px] h-[50px] px-[16px] border-[2px] rounded-lg ${
            empty
              ? "border-red-500 focus:shadow-[0_0px_15px_rgba(239,_68,_68,_0.8)]"
              : "border-orange-300 focus:shadow-[0_0px_15px_rgba(253,_186,_116,_0.8)]"
          }  text-[25px] duration-100 outline-none`}
          maxLength={1}
          onFocus={(e) => {
            setTimeout(() => {
              e.target.select();
            }, 0);
          }}
          onKeyDown={(e: any) => handleTyping(e, setCode1)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCode1(e.target.value)
          }
        />
        <input
          id={"input2"}
          type="tel"
          className={`w-[50px] h-[50px] px-[16px] border-[2px] rounded-lg ${
            empty
              ? "border-red-500 focus:shadow-[0_0px_15px_rgba(239,_68,_68,_0.8)]"
              : "border-orange-300 focus:shadow-[0_0px_15px_rgba(253,_186,_116,_0.8)]"
          }  text-[25px] duration-100 outline-none`}
          maxLength={1}
          onFocus={(e) => {
            setTimeout(() => {
              e.target.select();
            }, 0);
          }}
          onKeyDown={(e: any) => handleTyping(e, setCode2)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCode2(e.target.value)
          }
        />
        <input
          id={"input3"}
          type="tel"
          className={`w-[50px] h-[50px] px-[16px] border-[2px] rounded-lg ${
            empty
              ? "border-red-500 focus:shadow-[0_0px_15px_rgba(239,_68,_68,_0.8)]"
              : "border-orange-300 focus:shadow-[0_0px_15px_rgba(253,_186,_116,_0.8)]"
          }  text-[25px] duration-100 outline-none`}
          maxLength={1}
          onFocus={(e) => {
            setTimeout(() => {
              e.target.select();
            }, 0);
          }}
          onKeyDown={(e: any) => handleTyping(e, setCode3)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCode3(e.target.value)
          }
        />
        <input
          id={"input4"}
          type="tel"
          className={`w-[50px] h-[50px] px-[16px] border-[2px] rounded-lg ${
            empty
              ? "border-red-500 focus:shadow-[0_0px_15px_rgba(239,_68,_68,_0.8)]"
              : "border-orange-300 focus:shadow-[0_0px_15px_rgba(253,_186,_116,_0.8)]"
          }  text-[25px] duration-100 outline-none`}
          maxLength={1}
          onFocus={(e) => {
            setTimeout(() => {
              e.target.select();
            }, 0);
          }}
          onKeyDown={(e: any) => handleTyping(e, setCode4)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCode4(e.target.value)
          }
        />
        <input
          id={"input5"}
          type="tel"
          className={`w-[50px] h-[50px] px-[16px] border-[2px] rounded-lg ${
            empty
              ? "border-red-500 focus:shadow-[0_0px_15px_rgba(239,_68,_68,_0.8)]"
              : "border-orange-300 focus:shadow-[0_0px_15px_rgba(253,_186,_116,_0.8)]"
          }  text-[25px] duration-100 outline-none`}
          maxLength={1}
          onFocus={(e) => {
            setTimeout(() => {
              e.target.select();
            }, 0);
          }}
          onKeyDown={(e: any) => handleTyping(e, setCode5)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCode5(e.target.value)
          }
        />
        <input
          id={"input6"}
          type="tel"
          className={`w-[50px] h-[50px] px-[16px] border-[2px] rounded-lg ${
            empty
              ? "border-red-500 focus:shadow-[0_0px_15px_rgba(239,_68,_68,_0.8)]"
              : "border-orange-300 focus:shadow-[0_0px_15px_rgba(253,_186,_116,_0.8)]"
          }  text-[25px] duration-100 outline-none`}
          maxLength={1}
          onFocus={(e) => {
            setTimeout(() => {
              e.target.select();
            }, 0);
          }}
          onKeyDown={(e: any) => handleTyping(e, setCode6)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCode6(e.target.value)
          }
        />
      </div>
      <div className="flex justify-end mt-[10px]">
        <button
          className="px-[30px] py-[10px] border-[2px] rounded-lg"
          onClick={handleSum}
        >
          전송
        </button>
      </div>
    </form>
  );
};

const KEYBOARDS = {
  backspace: 8,
  arrowLeft: 37,
  arrowRight: 39,
};
