import { screen, fireEvent } from "@testing-library/react";
import { render } from "@/test-utils/render";
import { describe, it, expect, vi } from "vitest";
import { WeatherWidget } from "./WeatherWidget";
import { useWeather } from "@/app/hooks/use-weather";

vi.mock("@/app/hooks/use-weather", () => ({
  useWeather: vi.fn(),
}));

describe("WeatherWidget Component", () => {
  it("renders the inactive state with a prompt", () => {
    const { container } = render(<WeatherWidget />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <script
          nonce=""
        >
          ((e,i,s,u,m,a,l,h)=&gt;{let d=document.documentElement,w=["light","dark"];function p(n){(Array.isArray(e)?e:[e]).forEach(y=&gt;{let k=y==="class",S=k&&a?m.map(f=&gt;a[f]||f):m;k?(d.classList.remove(...S),d.classList.add(a&&a[n]?a[n]:n)):d.setAttribute(y,n)}),R(n)}function R(n){h&&w.includes(n)&&(d.style.colorScheme=n)}function c(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)p(u);else try{let n=localStorage.getItem(i)||s,y=l&&n==="system"?c():n;p(y)}catch(n){}})("class","theme","system",null,["light","dark"],null,true,true)
        </script>
        <div
          class="css-1uasfij"
        >
          <em
            class="css-1kvvtld"
          >
            inactiveText
          </em>
        </div>
      </div>
    `);
  });

  it("activates and renders the weather information", () => {
    const mockWeather = vi.mocked(useWeather);
    mockWeather.mockReturnValue({
      weather: {
        condition: { text: "Sunny", icon: "/sunny.png", temperature: 25 },
        location: "New York",
      },
      loading: false,
      error: null,
    });

    const { container } = render(<WeatherWidget />);

    const box = screen.getByText(/inactiveText/i);
    fireEvent.click(box);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <script
          nonce=""
        >
          ((e,i,s,u,m,a,l,h)=&gt;{let d=document.documentElement,w=["light","dark"];function p(n){(Array.isArray(e)?e:[e]).forEach(y=&gt;{let k=y==="class",S=k&&a?m.map(f=&gt;a[f]||f):m;k?(d.classList.remove(...S),d.classList.add(a&&a[n]?a[n]:n)):d.setAttribute(y,n)}),R(n)}function R(n){h&&w.includes(n)&&(d.style.colorScheme=n)}function c(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)p(u);else try{let n=localStorage.getItem(i)||s,y=l&&n==="system"?c():n;p(y)}catch(n){}})("class","theme","system",null,["light","dark"],null,true,true)
        </script>
        <div
          class="css-dvxtzn"
        >
          <img
            alt="Sunny"
            height="50"
            src="http:/sunny.png"
            width="50"
          />
          <p>
            Sunny
          </p>
          <p>
            25
            °C
          </p>
          <p>
            ⚲ 
            New York
          </p>
        </div>
      </div>
    `);
  });

  it("renders a loading state", () => {
    const mockWeather = vi.mocked(useWeather);
    mockWeather.mockReturnValue({
      weather: null,
      loading: true,
      error: null,
    });

    const { container } = render(<WeatherWidget />);

    const box = screen.getByText(/inactiveText/i);
    fireEvent.click(box);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <script
          nonce=""
        >
          ((e,i,s,u,m,a,l,h)=&gt;{let d=document.documentElement,w=["light","dark"];function p(n){(Array.isArray(e)?e:[e]).forEach(y=&gt;{let k=y==="class",S=k&&a?m.map(f=&gt;a[f]||f):m;k?(d.classList.remove(...S),d.classList.add(a&&a[n]?a[n]:n)):d.setAttribute(y,n)}),R(n)}function R(n){h&&w.includes(n)&&(d.style.colorScheme=n)}function c(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)p(u);else try{let n=localStorage.getItem(i)||s,y=l&&n==="system"?c():n;p(y)}catch(n){}})("class","theme","system",null,["light","dark"],null,true,true)
        </script>
        <div
          class="chakra-stack css-1iixkxl"
        >
          <div
            class="chakra-stack css-1yxzzu5"
          >
            <div
              class="chakra-skeleton css-1vt0q6u"
            />
            <div
              class="chakra-stack css-ppmla1"
            >
              <div
                class="chakra-skeleton css-1rt1frb"
              />
              <div
                class="chakra-skeleton css-1rt1frb"
              />
            </div>
          </div>
        </div>
      </div>
    `);
  });

  it("renders an error state", () => {
    const mockWeather = vi.mocked(useWeather);
    mockWeather.mockReturnValue({
      weather: null,
      loading: false,
      error: "Failed to fetch weather data",
    });

    const { container } = render(<WeatherWidget />);

    const box = screen.getByText(/inactiveText/i);
    fireEvent.click(box);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <script
          nonce=""
        >
          ((e,i,s,u,m,a,l,h)=&gt;{let d=document.documentElement,w=["light","dark"];function p(n){(Array.isArray(e)?e:[e]).forEach(y=&gt;{let k=y==="class",S=k&&a?m.map(f=&gt;a[f]||f):m;k?(d.classList.remove(...S),d.classList.add(a&&a[n]?a[n]:n)):d.setAttribute(y,n)}),R(n)}function R(n){h&&w.includes(n)&&(d.style.colorScheme=n)}function c(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)p(u);else try{let n=localStorage.getItem(i)||s,y=l&&n==="system"?c():n;p(y)}catch(n){}})("class","theme","system",null,["light","dark"],null,true,true)
        </script>
        <div
          class="css-1rr4jna"
        >
          ⚠️
          <em
            class="css-1kvvtld"
          >
              
            Failed to fetch weather data
          </em>
        </div>
      </div>
    `);
  });
});
// fireEvent.click(box);

// const weatherText = screen.getByText(/Sunny/i);
// const temperatureText = screen.getByText(/25°C/i);
// const locationText = screen.getByText(/New York/i);

// expect(weatherText).toBeInTheDocument();
// expect(temperatureText).toBeInTheDocument();
// expect(locationText).toBeInTheDocument();

// it("renders a loading state", () => {
//   const mockWeather = vi.mocked(useWeather);
//   mockWeather.mockReturnValue({
//     weather: null,
//     loading: true,
//     error: null,
//   });

//   render(<WeatherWidget />);

//   const skeleton = screen.getByRole("progressbar");
//   expect(skeleton).toBeInTheDocument();
// });

// it("renders an error state", () => {
//   const mockWeather = vi.mocked(useWeather);
//   mockWeather.mockReturnValue({
//     weather: null,
//     loading: false,
//     error: "Failed to fetch weather data",
//   });

//   render(<WeatherWidget />);

//   const errorText = screen.getByText(/Failed to fetch weather data/i);
//   expect(errorText).toBeInTheDocument();
// });