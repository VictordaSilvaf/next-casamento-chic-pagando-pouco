import type { FC, HTMLAttributes } from "react";

interface SubtitleProps extends HTMLAttributes<HTMLHeadingElement> {
    text: string;
}

function highlightAsterisks(text: string) {
    const parts = text.split(/(\*[^*]+\*)/g);
    return parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
            <span key={i} className="font-semibold text-app-primary">
                {part.slice(1, -1)}
            </span>
        ) : (
            <span key={i}>{part}</span>
        )
    );
}

const Subtitle: FC<SubtitleProps> = ({ text, className = '', ...props }) => {
    return (
        <h2
            className={`text-lg font-bold text-black leading-4 uppercase ${className}`}
            {...props}
        >
            {highlightAsterisks(text)}
        </h2>
    );
};

export default Subtitle;