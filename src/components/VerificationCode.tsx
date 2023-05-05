import { useState, useRef, KeyboardEvent } from "react";

export const VerificationCode = () => {
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [code4, setCode4] = useState("");
  const [code5, setCode5] = useState("");
  const [code6, setCode6] = useState("");
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);
  const input5 = useRef(null);
  const input6 = useRef(null);

  const formInput = (e: any) => {
    // const input = e.target;
    const input = e;

    console.log(e);

    // console.log(input.nextElementSibling);
  };

  const handleSum = () => {
    console.log(code1 + code2 + code3 + code4 + code5 + code6);
  };

  function handleBackspace(e: KeyboardEvent<HTMLInputElement>) {
    // console.log(e);
  }

  function handleArrowLeft(e: KeyboardEvent<HTMLInputElement>) {}

  function handleArrowRight(e: KeyboardEvent<HTMLInputElement>) {}

  const handleTyping = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.keyCode) {
      case KEYBOARDS.backspace:
        handleBackspace(e);
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
    <form onInput={(e: any) => formInput(e)}>
      <div className="flex gap-x-[10px]">
        <input
          className="w-[50px] h-[50px] px-[16px] border-[2px] rounded-lg border-orange-300 text-[25px]"
          value={code1}
          maxLength={1}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            handleTyping(e)
          }
          //   onInput={(e: React.FormEvent<HTMLInputElement>) => handleInput(e)}
          ref={input1}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCode1(e.target.value)
          }
        />
        <input
          className="w-[50px] h-[50px] px-[16px] border-[2px] rounded-lg border-orange-300 text-[25px]"
          value={code2}
          maxLength={1}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            handleTyping(e)
          }
          ref={input2}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCode2(e.target.value)
          }
        />
        <input
          className="w-[50px] h-[50px] px-[16px] border-[2px] rounded-lg border-orange-300 text-[25px]"
          value={code3}
          maxLength={1}
          ref={input3}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCode3(e.target.value)
          }
        />
        <input
          className="w-[50px] h-[50px] px-[16px] border-[2px] rounded-lg border-orange-300 text-[25px]"
          value={code4}
          maxLength={1}
          ref={input4}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCode4(e.target.value)
          }
        />
        <input
          className="w-[50px] h-[50px] px-[16px] border-[2px] rounded-lg border-orange-300 text-[25px]"
          value={code5}
          maxLength={1}
          ref={input5}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCode5(e.target.value)
          }
        />
        <input
          className="w-[50px] h-[50px] px-[16px] border-[2px] rounded-lg border-orange-300 text-[25px]"
          value={code6}
          maxLength={1}
          ref={input6}
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
