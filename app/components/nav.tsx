"use client"

import styles from './nav.module.css';
import Link from 'next/link';
import { HiOutlineCog } from "react-icons/hi";
import { Menu, Portal, IconButton, Flex, Drawer, CloseButton, Separator } from "@chakra-ui/react"
import { ColorModeSwitch } from '@/components/ui/color-mode'
import { RxHamburgerMenu } from "react-icons/rx";
import { useTranslation } from 'react-i18next';

// const accordionItems = [
//   { value: "a", title: "First Item", text: "Some value 1..." },
//   { value: "b", title: "Second Item", text: "Some value 2..." },
//   { value: "c", title: "Third Item", text: "Some value 3..." },
// ]

export function Nav() {
  const { t } = useTranslation('common');

  return (
    <Flex className={styles.nav}>
      <Flex className={styles.navLinks} hideBelow="md">
        <Link
          href="/">
          {t('nav.home')}
        </Link>
        <Link
          href="/about">
          {t('nav.about')}
        </Link>
        <Link
          href="/work">
          {t('nav.work')}
        </Link>
        <Link
          href="/contact">
          {t('nav.contact')}
        </Link>
      </Flex>
      <Flex className={styles.navSettings} hideBelow="md">
        <Menu.Root closeOnSelect={false}>
          <Menu.Trigger asChild>
            <IconButton
              variant="ghost"
            >
              <HiOutlineCog size="lg" />
            </IconButton>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                {/* <Menu.Item value="toggle-mode">Mode <ColorModeButton /></Menu.Item> */}
                <Menu.Item value="toggle-mode">
                  <ColorModeSwitch />
                </Menu.Item>
                <Menu.Item value="language">Language</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
        {/* <Accordion.Root collapsible defaultValue={["b"]}>
          {accordionItems.map((item, index) => (
            <Accordion.Item key={index} value={item.value}>
              <Accordion.ItemTrigger>
                <Span flex="1">{item.title}</Span>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root> */}
      </Flex>
      <Flex hideFrom="md">
        <Drawer.Root>
          <Drawer.Trigger asChild>
            <IconButton aria-label="Open menu" variant="ghost">
              <RxHamburgerMenu />
            </IconButton>
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content>
                <Drawer.Header />
                <Drawer.Body>
                  <Flex
                    direction="column"
                    gap="4"
                  >
                    <Link
                      href="/">
                      Home
                    </Link>
                    <Link
                      href="/about">
                      About
                    </Link>
                    <Link
                      href="/work">
                      Work
                    </Link>
                    <Link
                      href="/contact">
                      Contact
                    </Link>
                    <Separator />
                    <ColorModeSwitch />
                    <div>Language</div>
                  </Flex>
                </Drawer.Body>
                <Drawer.Footer />
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
        {/* <IconButton aria-label="Open menu" variant="ghost">
          <RxHamburgerMenu />
        </IconButton> */}
      </Flex>
    </Flex>
  )
}