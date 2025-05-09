"use client"

import { useTransition } from 'react';
import styles from './nav.module.css';
import { Link } from '@/components/ui/link';
import { HiOutlineCog } from "react-icons/hi";
import { Menu, Portal, IconButton, Flex, Drawer, CloseButton, Separator, Accordion, Span, RadioGroup, VStack } from "@chakra-ui/react"
import { ColorModeSwitch } from '@/components/ui/color-mode'
import { RxHamburgerMenu } from "react-icons/rx";
import { useTranslations, useLocale } from 'next-intl';
import { setUserLocale } from '@/i18n/locale';
import type { Locale } from '@/i18n/settings';

export const LanguageSelect = () => {
  const t = useTranslations('nav');

  const locale = useLocale();

  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (value: string) => {
    const locale = value as Locale;

    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <Accordion.Root collapsible size="sm" className={styles.langAccordion} variant="subtle">
      <Accordion.Item value="language-select">
        <Accordion.ItemTrigger cursor="pointer">
          <Span flex="1">{t('language')}</Span>
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <RadioGroup.Root
            disabled={isPending}
            defaultValue={locale} // Set the current language as the default value
            orientation="vertical"
            variant="subtle"
            onValueChange={(details) => handleLanguageChange(details.value || locale)} // Trigger language change
          >
            <VStack gap="6" alignItems={"start"}>
              <RadioGroup.Item key="en" value="en">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator cursor="pointer" />
                <RadioGroup.ItemText>{t('languageEn')}</RadioGroup.ItemText>
              </RadioGroup.Item>
              <RadioGroup.Item key="es" value="es">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator cursor="pointer" />
                <RadioGroup.ItemText>{t('languageEs')}</RadioGroup.ItemText>
              </RadioGroup.Item>
              <RadioGroup.Item key="fr" value="fr">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator cursor="pointer" />
                <RadioGroup.ItemText>{t('languageFr')}</RadioGroup.ItemText>
              </RadioGroup.Item>
            </VStack>
          </RadioGroup.Root>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export function Nav() {
  const t = useTranslations('nav');

  return (
    <nav className={styles.nav}>
      <Flex className={styles.navLinks} hideBelow="md">
        <Link
          href="/">
          {t('home')}
        </Link>
        <Link
          href="/about">
          {t('about')}
        </Link>
        <Link
          href="/work">
          {t('work')}
        </Link>
        <Link
          href="/contact">
          {t('contact')}
        </Link>
      </Flex>
      <Flex className={styles.navSettings} hideBelow="md" >
        <Menu.Root closeOnSelect={false}>
          <Menu.Trigger asChild aria-label="Open menu">
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
                  <ColorModeSwitch label={t('toggleColorMode')} />
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
            <IconButton aria-label="Open mobile menu" variant="ghost">
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
                      {t('home')}
                    </Link>
                    <Link
                      href="/about">
                      {t('about')}
                    </Link>
                    <Link
                      href="/work">
                      {t('work')}
                    </Link>
                    <Link
                      href="/contact">
                      {t('contact')}
                    </Link>
                    <Separator />
                    <ColorModeSwitch label={t('toggleColorMode')} />
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
      </Flex>
    </nav>
  )
}