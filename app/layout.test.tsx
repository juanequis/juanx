// import { render } from '@testing-library/react';
import { render } from "@/test-utils/render";
import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import RootLayout from './layout';
import { getLocale } from 'next-intl/server';

vi.mock('next-intl/server', () => ({
  getLocale: vi.fn(),
}));

vi.mock('@/components/ui/provider', () => ({
  Provider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

vi.mock('./components/nav', () => ({
  Nav: () => <nav>Mocked Nav</nav>,
}));

vi.mock('next/font/google', () => ({
  Geist: vi.fn(() => ({ variable: '--font-geist-sans' })),
  Geist_Mono: vi.fn(() => ({ variable: '--font-geist-mono' })),
}));

vi.mock('next-intl', () => ({
  NextIntlClientProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('RootLayout', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the layout with the correct locale', async () => {
    (getLocale as Mock).mockResolvedValue('en');

    const children = <div>Test Content</div>;
    const { container } = render(await RootLayout({ children }));

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div />
      </div>
    `);
  });


});