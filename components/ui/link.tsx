import { Link as ChakraLink } from "@chakra-ui/react"
import NextLink from "next/link"
import { JSX } from "react";
import { usePathname } from "next/navigation"
import styles from './link.module.css';

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

export const Link = ({ children, href }: LinkProps): JSX.Element => {

  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <ChakraLink className={`${styles.link} ${isActive ? styles.active : ""}`}>
      <NextLink href={href}>{children}</NextLink>
    </ChakraLink>
  )
};