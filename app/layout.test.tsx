// import { render } from '@testing-library/react';
import { render } from "@/test-utils/render";
import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import RootLayout from './layout';
import { getLocale } from 'next-intl/server';

vi.mock('next-intl/server', () => ({
  getLocale: vi.fn(),
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
        <script
          nonce=""
        >
          ((e,i,s,u,m,a,l,h)=&gt;{let d=document.documentElement,w=["light","dark"];function p(n){(Array.isArray(e)?e:[e]).forEach(y=&gt;{let k=y==="class",S=k&&a?m.map(f=&gt;a[f]||f):m;k?(d.classList.remove(...S),d.classList.add(a&&a[n]?a[n]:n)):d.setAttribute(y,n)}),R(n)}function R(n){h&&w.includes(n)&&(d.style.colorScheme=n)}function c(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)p(u);else try{let n=localStorage.getItem(i)||s,y=l&&n==="system"?c():n;p(y)}catch(n){}})("class","theme","system",null,["light","dark"],null,true,true)
        </script>
        <div>
          <nav>
            Mocked Nav
          </nav>
          <div>
            Test Content
          </div>
        </div>
      </div>
    `);
  });
});