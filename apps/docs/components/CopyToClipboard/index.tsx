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
    if (text)  {
      navigator.clipboard.writeText(text).then(() => {
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
        className="absolute top-2 right-2 sm:top-4 sm:right-4 flex items-center justify-center p-1 sm:p-2 border border-transparent text-base font-medium rounded-md text-bhagwa-700 bg-bhagwa-300 hover:bg-bhagwa-400 cursor-pointer"
        onClick={copyToClipboard}
      >
        {copySuccess ? <TickIcon /> : <CopyIcon />}
      </button>
    </>
  );
  
  return null;
}
