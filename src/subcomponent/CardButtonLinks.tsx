import type { FC } from "react";

type ButtonLink = {
    linkText: string;
    href: string;
    className: string;
}

const CardButtonLinks: FC<ButtonLink> = ({ linkText, href, className = "" }) => {

    return (
        <a
            href={href}
            className={className}
            target="_blank"
            rel="noopener noreferrer"
        >
            {linkText}
        </a>
    );
};

export default CardButtonLinks;