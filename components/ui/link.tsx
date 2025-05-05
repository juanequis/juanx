import { Link as ChakraLink } from "@chakra-ui/react"
import NextLink from "next/link"
import { JSX } from "react";

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

export const Link = ({ children, href }: LinkProps): JSX.Element => {
  return (
    <ChakraLink asChild>
      <NextLink href={href}>{children}</NextLink>
    </ChakraLink>
  )
};