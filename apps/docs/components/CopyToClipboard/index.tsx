import { useEffect, useRef, useState } from "react";
import CopyIcon from "./CopyIcon";
import TickIcon from "./TickIcon";

interface Props {
  text: string;
}

export default function CopyToClipboard(props: Props) {
  const { text } = props;
  const [copySuccess, setCopySuccess] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (copySuccess) {
      setTimeout(() => {
        setCopySuccess(false);
      }, 3000);
    }
  }, [copySuccess]);

  function copyToClipboard(e: React.MouseEvent) {
    e.stopPropagation();
    if (text) {
      navigator.clipboard?.writeText(text).then(() => {
        setCopySuccess(true);
      }).catch(error => {
        console.log(error);
      });
    }
  }

  return (
    <>
      <button
        ref={buttonRef}
        className={"md:hidden absolute top-2 right-2 sm:top-4 sm:right-4 group-hover:flex items-center justify-center p-1 sm:p-2 border border-[#f0f6fc1a] text-base font-medium rounded-md text-gray-400 bg-[#333] hover:bg-[#4d4d4d] cursor-pointer transition-all duration-100 " + (copySuccess ? 'text-bhagwa-300 border-bhagwa-300' : '')}
        onClick={copyToClipboard}
      >
        {copySuccess ?
          <>
            <TickIcon />
            <span className="copied-text absolute top-1/2 -translate-y-1/2 right-[calc(100%+8px)] p-1 rounded-md text-xs font-normal text-bhagwa-300 bg-[#666] border border-transparent">
              Copied!
            </span>
          </>
          : <CopyIcon />}
      </button>
    </>
  );
}