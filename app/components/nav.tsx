"use client"

import styles from './nav.module.css';
import Link from 'next/link';
import { HiOutlineCog } from "react-icons/hi";
import { Menu, Portal, IconButton, Flex, Drawer, CloseButton, Separator, Accordion, Span, RadioGroup, VStack } from "@chakra-ui/react"
import { ColorModeSwitch } from '@/components/ui/color-mode'
import { RxHamburgerMenu } from "react-icons/rx";
import { useTranslation } from 'react-i18next';

const LanguageSelect = () => {
  const { t, i18n } = useTranslation('translation'); // Access i18n instance

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang); // Change the language
  };

  return (
    <Accordion.Root collapsible size="sm" className={styles.langAccordion} variant="subtle">
      <Accordion.Item value="language-select">
        <Accordion.ItemTrigger cursor="pointer">
          <Span flex="1">{t('nav.language')}</Span>
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <RadioGroup.Root
            defaultValue={i18n.language} // Set the current language as the default value
            orientation="vertical"
            variant="subtle"
            onValueChange={(details) => handleLanguageChange(details.value || i18n.language)} // Trigger language change
          >
            <VStack gap="6" alignItems={"start"}>
              <RadioGroup.Item key="en" value="en">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>{t('nav.language.en')}</RadioGroup.ItemText>
              </RadioGroup.Item>
              <RadioGroup.Item key="es" value="es">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>{t('nav.language.es')}</RadioGroup.ItemText>
              </RadioGroup.Item>
              <RadioGroup.Item key="fr" value="fr">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>{t('nav.language.fr')}</RadioGroup.ItemText>
              </RadioGroup.Item>
            </VStack>
          </RadioGroup.Root>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export function Nav() {
  const { t } = useTranslation('translation');

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
                <Menu.Item value="toggle-mode">
                  <ColorModeSwitch label={t('nav.toggleColorMode')} />
                </Menu.Item>
                <Menu.Item value="language">
                  <LanguageSelect />
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
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
                    <Separator />
                    <ColorModeSwitch label={t('nav.toggleColorMode')} />
                    <LanguageSelect />
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