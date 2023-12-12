import { LinkProps } from "next/link";
import { FC, ReactNode } from "react";
import NextLink from "next/link";

interface LinkPropsFace extends LinkProps {
  children: ReactNode;
  className?: string;
}

const Link: FC<LinkPropsFace> = ({ className, children, ...props }) => {
  return (
    <NextLink {...props} className={className}>
      {children}
    </NextLink>
  );
};

export default Link;
