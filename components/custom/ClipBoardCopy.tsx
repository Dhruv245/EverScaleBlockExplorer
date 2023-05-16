import { FC, ReactElement, useState } from "react";
import copy from "clipboard-copy";
import { CopyIcon, CheckSquareIcon } from "lucide-react";

type Props = {
  text: string;
};

const ClipboardCopyButton: FC<Props> = ({ text }): ReactElement => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await copy(text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000); // Reset copied status after 2 seconds
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div
      onClick={handleCopy}
      className="bg-muted flex items-center justify-center rounded-md cursor-pointer w-8 h-8"
    >
      {!isCopied ? <CopyIcon width={17} /> : <CheckSquareIcon width={17} />}
    </div>
  );
};

export default ClipboardCopyButton;
