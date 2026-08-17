import React, { memo, useState } from 'react'
import { FaCopy } from 'react-icons/fa';

export const CopyTooltip = memo(({value}) => {
    const [copied, setCopied] = useState("");
    const copyText = async (text) => {
        await navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(""), 2000);
    };
  return (
    <div>
        <button
        className="copy-btn"
        onClick={() => copyText(value)}
        >
        {copied === value ? (
            <>
            ✓ <span>Copied</span>
            </>
        ) : (
            <>
            <FaCopy />
            <span>Copy</span>
            </>
        )}
        </button>
    </div>
  )
})
