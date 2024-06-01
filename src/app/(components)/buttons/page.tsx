import DoubleLabelButton from "@/components/buttons/double-label-button";
import TextFillUpButton1 from "@/components/buttons/text-fill-up-button1";
import PushButton from "@/components/buttons/push-button";
import WavyButton from "@/components/buttons/wavy-button";
import WavyTextSlideUpButton from "@/components/buttons/wavy-text-slideup-button";
import { ArrowRight } from "lucide-react";
import FillUpButton1 from "@/components/buttons/fill-up-button1";
import FillUpButton2 from "@/components/buttons/fill-up-button2";
import GlowingTextSlideUpButton from "@/components/buttons/glowing-text-slideup-button";
import TextFillUpButton2 from "@/components/buttons/text-fill-up-button2";
import StripeEffectButton from "@/components/buttons/stripe-effect-button";
import GradientGlowButton from "@/components/buttons/gradient-glow-button";
import SquigglyButton from "@/components/buttons/squiggly-button";
import DoubleFillButton from "@/components/buttons/double-fill-button";
import TextFillUpButton3 from "@/components/buttons/text-fill-up-button3";
import MagneticButtonWrapper from "@/components/buttons/magnetic-button-wrapper";
import StackedButton from "@/components/buttons/stacked-button";
import MarqueeButton from "@/components/buttons/marquee-button";
import FillUpButton3 from "@/components/buttons/fill-up-button3";
import RedneckButton from "@/components/buttons/redneck-button";
import FlowchefButton from "@/components/buttons/flowchef-button";
import TextFillUpButton4 from "@/components/buttons/text-fill-up-button4";
import Link from "next/link";
import MagneticButton from "@/components/buttons/magnetic-button";

export default function Buttons() {
  return (
    <div className="grid gap-5 py-5 md:grid-cols-2 lg:grid-cols-3">
      {/* Card 0 */}
      <div className="w-full space-y-4 rounded-md bg-neutral-900 p-3">
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-neutral-950">
          <MagneticButton>Magnetic button</MagneticButton>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium">Magnetic Buttons</h3>
          <Link
            href={"/buttons/magnetic-buttons"}
            className="self-end rounded-md bg-neutral-800 px-3 py-2 font-semibold transition-colors duration-300 hover:bg-neutral-700"
          >
            Get code
          </Link>
        </div>
      </div>

      {/* Card 1 */}
      <div className="w-full space-y-4 rounded-md bg-neutral-900 p-3">
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-white">
          <WavyButton>discover our commitments</WavyButton>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium">Wavy Buttons</h3>
          <Link
            href={"/buttons/wavy-buttons"}
            className="self-end rounded-md bg-neutral-800 px-3 py-2 font-semibold transition-colors duration-300 hover:bg-neutral-700"
          >
            Get code
          </Link>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-full space-y-4 rounded-md bg-neutral-900 p-3">
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-white">
          <DoubleLabelButton>
            Explore collection <ArrowRight size={20} />
          </DoubleLabelButton>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium">Double label Buttons</h3>
          <Link
            href={"/buttons/double-label-buttons"}
            className="self-end rounded-md bg-neutral-800 px-3 py-2 font-semibold transition-colors duration-300 hover:bg-neutral-700"
          >
            Get code
          </Link>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full space-y-4 rounded-md bg-neutral-900 p-3">
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-white">
          <PushButton size={"sm"}>Identify my situation</PushButton>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium">Push Buttons</h3>
          <Link
            href={"/buttons/push-buttons"}
            className="self-end rounded-md bg-neutral-800 px-3 py-2 font-semibold transition-colors duration-300 hover:bg-neutral-700"
          >
            Get code
          </Link>
        </div>
      </div>

      {/* Card 4 */}
      <div className="w-full space-y-4 rounded-md bg-neutral-900 p-3">
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-white">
          <TextFillUpButton1>About us</TextFillUpButton1>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium">Text Fill up Buttons 1</h3>
          <Link
            href={"/buttons/text-fill-up-buttons1"}
            className="self-end rounded-md bg-neutral-800 px-3 py-2 font-semibold transition-colors duration-300 hover:bg-neutral-700"
          >
            Get code
          </Link>
        </div>
      </div>

      {/* Card 5 */}
      <div className="w-full space-y-4 rounded-md bg-neutral-900 p-3">
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-white">
          <TextFillUpButton2>Go to home</TextFillUpButton2>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium">Text Fill up Buttons 2</h3>
          <Link
            href={"/buttons/text-fill-up-buttons2"}
            className="self-end rounded-md bg-neutral-800 px-3 py-2 font-semibold transition-colors duration-300 hover:bg-neutral-700"
          >
            Get code
          </Link>
        </div>
      </div>

      {/* Card 6 */}
      <div className="w-full space-y-4 rounded-md bg-neutral-900 p-3">
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-white">
          <TextFillUpButton3>Go to home</TextFillUpButton3>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium">Text Fill up Buttons 3</h3>
          <Link
            href={"/buttons/text-fill-up-buttons3"}
            className="self-end rounded-md bg-neutral-800 px-3 py-2 font-semibold transition-colors duration-300 hover:bg-neutral-700"
          >
            Get code
          </Link>
        </div>
      </div>

      {/* Card 7 */}
      <div className="w-full space-y-4 rounded-md bg-neutral-900 p-3">
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-neutral-950">
          <TextFillUpButton4>view all posts</TextFillUpButton4>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium">Text Fill up Buttons 4</h3>
          <Link
            href={"/buttons/text-fill-up-buttons4"}
            className="self-end rounded-md bg-neutral-800 px-3 py-2 font-semibold transition-colors duration-300 hover:bg-neutral-700"
          >
            Get code
          </Link>
        </div>
      </div>

      {/* Card 8 */}
      <div className="w-full space-y-4 rounded-md bg-neutral-900 p-3">
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-white">
          <FillUpButton1>See how it works</FillUpButton1>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium">Fill up Buttons 1</h3>
          <Link
            href={"/buttons/fill-up-buttons1"}
            className="self-end rounded-md bg-neutral-800 px-3 py-2 font-semibold transition-colors duration-300 hover:bg-neutral-700"
          >
            Get code
          </Link>
        </div>
      </div>

      {/* Card 9 */}
      <div className="w-full space-y-4 rounded-md bg-neutral-900 p-3">
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-white">
          <FillUpButton2>Check this out</FillUpButton2>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium">Fill up Buttons 2</h3>
          <Link
            href={"/buttons/fill-up-buttons2"}
            className="self-end rounded-md bg-neutral-800 px-3 py-2 font-semibold transition-colors duration-300 hover:bg-neutral-700"
          >
            Get code
          </Link>
        </div>
      </div>

      {/* Card 10 */}
      <div className="w-full space-y-4 rounded-md bg-neutral-900 p-3">
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-white">
          <FillUpButton3>Download now</FillUpButton3>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium">Fill up Buttons 3</h3>
          <Link
            href={"/buttons/fill-up-buttons3"}
            className="self-end rounded-md bg-neutral-800 px-3 py-2 font-semibold transition-colors duration-300 hover:bg-neutral-700"
          >
            Get code
          </Link>
        </div>
      </div>

      {/* Card 11 */}
      <div className="w-full space-y-4 rounded-md bg-neutral-900 p-3">
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-white">
          <StripeEffectButton>Our excellent reviews</StripeEffectButton>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium">Stripe Effect Buttons</h3>
          <Link
            href={"/buttons/stripe-effect-buttons"}
            className="self-end rounded-md bg-neutral-800 px-3 py-2 font-semibold transition-colors duration-300 hover:bg-neutral-700"
          >
            Get code
          </Link>
        </div>
      </div>

      {/* Card 12 */}
      <div className="w-full space-y-4 rounded-md bg-neutral-900 p-3">
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-neutral-700">
          <GradientGlowButton>Follow us</GradientGlowButton>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium">Gradient Glow Buttons</h3>
          <Link
            href={"/buttons/gradient-glow-buttons"}
            className="self-end rounded-md bg-neutral-800 px-3 py-2 font-semibold transition-colors duration-300 hover:bg-neutral-700"
          >
            Get code
          </Link>
        </div>
      </div>

      {/* Card 13 */}
      <div className="w-full space-y-4 rounded-md bg-neutral-900 p-3">
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-white">
          <SquigglyButton>Download now</SquigglyButton>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium">Squiggly Buttons</h3>
          <Link
            href={"/buttons/squiggly-buttons"}
            className="self-end rounded-md bg-neutral-800 px-3 py-2 font-semibold transition-colors duration-300 hover:bg-neutral-700"
          >
            Get code
          </Link>
        </div>
      </div>

      {/* Card 14 */}
      <div className="w-full space-y-4 rounded-md bg-neutral-900 p-3">
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-white">
          <WavyTextSlideUpButton>Get the font</WavyTextSlideUpButton>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium">Wavy Text Slide up Buttons</h3>
          <Link
            href={"/buttons/wavy-text-slideup-buttons"}
            className="self-end rounded-md bg-neutral-800 px-3 py-2 font-semibold transition-colors duration-300 hover:bg-neutral-700"
          >
            Get code
          </Link>
        </div>
      </div>

      {/* Card 15 */}
      <div className="w-full space-y-4 rounded-md bg-neutral-900 p-3">
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-white">
          <DoubleFillButton>Try for free</DoubleFillButton>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium">Double Fill Buttons</h3>
          <Link
            href={"/buttons/double-fill-buttons"}
            className="self-end rounded-md bg-neutral-800 px-3 py-2 font-semibold transition-colors duration-300 hover:bg-neutral-700"
          >
            Get code
          </Link>
        </div>
      </div>

      {/* Card 16 */}
      <div className="w-full space-y-4 rounded-md bg-neutral-900 p-3">
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-white">
          <StackedButton>Learn more</StackedButton>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium">Stacked Buttons</h3>
          <Link
            href={"/buttons/stacked-buttons"}
            className="self-end rounded-md bg-neutral-800 px-3 py-2 font-semibold transition-colors duration-300 hover:bg-neutral-700"
          >
            Get code
          </Link>
        </div>
      </div>

      {/* Card 17 */}
      <div className="w-full space-y-4 rounded-md bg-neutral-900 p-3">
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-white">
          <MarqueeButton>Book a demo</MarqueeButton>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium">Marquee Buttons</h3>
          <Link
            href={"/buttons/marquee-buttons"}
            className="self-end rounded-md bg-neutral-800 px-3 py-2 font-semibold transition-colors duration-300 hover:bg-neutral-700"
          >
            Get code
          </Link>
        </div>
      </div>

      {/* Card 18 */}
      <div className="w-full space-y-4 rounded-md bg-neutral-900 p-3">
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-neutral-900">
          <GlowingTextSlideUpButton>Buy now</GlowingTextSlideUpButton>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium">Glowing Text Slide Up Buttons</h3>
          <Link
            href={"/buttons/glowing-text-slideup-buttons"}
            className="self-end rounded-md bg-neutral-800 px-3 py-2 font-semibold transition-colors duration-300 hover:bg-neutral-700"
          >
            Get code
          </Link>
        </div>
      </div>

      {/* Card 19 */}
      <div className="w-full space-y-4 rounded-md bg-neutral-900 p-3">
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-neutral-900">
          <RedneckButton>View projects</RedneckButton>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium">Redneck Buttons</h3>
          <Link
            href={"/buttons/redneck-buttons"}
            className="self-end rounded-md bg-neutral-800 px-3 py-2 font-semibold transition-colors duration-300 hover:bg-neutral-700"
          >
            Get code
          </Link>
        </div>
      </div>

      {/* Card 20 */}
      <div className="w-full space-y-4 rounded-md bg-neutral-900 p-3">
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-neutral-900">
          <FlowchefButton>Original website</FlowchefButton>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium">Flowchef Buttons</h3>
          <Link
            href={"/buttons/flowchef-buttons"}
            className="self-end rounded-md bg-neutral-800 px-3 py-2 font-semibold transition-colors duration-300 hover:bg-neutral-700"
          >
            Get code
          </Link>
        </div>
      </div>

      {/* Card 21 */}
      <div className="w-full space-y-4 rounded-md bg-neutral-900 p-3">
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-neutral-900">
          Coming soon.
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium">Coming soon.</h3>
        </div>
      </div>
    </div>

    //   <hr className="w-full" />
    //   <h1 className="text-2xl font-bold">21. Coming soon</h1>

    /* <hr className="w-full" />
      <h1 className="text-2xl font-bold">15. Magnetic Buttons</h1> */
    /* <MagneticButtonWrapper>
        <svg
          id="Layer_2"
          style={{
            background: "red",
            fill: "#c8bdb0",
            height: "50px",
            padding: "50px",
            boxSizing: "content-box",
            cursor: "pointer",
          }}
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.5 58"
        >
          <path d="m20.72,22.16c2.77,0,5.55.02,8.32.03.4,0,.8.02,1.2.03.07.06.14.13.21.19-.28,1.58-.56,3.16-.83,4.75-.32,1.87-.64,3.74-.99,5.76-1.37.13-2.76-.07-4.14-.04-1.36.03-2.72,0-4.2,0-.13,8.38.12,16.72.11,25.11h-11.17v-24.91H0v-10.81h9.16c.04-.39.11-.71.11-1.02-.01-1.58-.05-3.17-.06-4.75-.01-1.62-.16-3.26.02-4.85.19-1.69.64-3.35,1.52-4.86,1.36-2.33,3.28-4.06,5.58-5.4,1.39-.81,2.94-1.25,4.52-1.3C24.28-.03,27.71.02,31.15,0c.07,0,.13.05.35.14.04,3.3-.29,6.66-.18,10.11-1.13,0-2.15.03-3.17,0-1.57-.07-3.15-.06-4.65.46-1.42.49-2.46,1.4-2.89,2.95-.3,1.08-.36,2.16-.34,3.25.04,1.69.13,3.38.2,5.07.08.06.16.13.24.19Z" />
        </svg>
      </MagneticButtonWrapper>
      <MagneticButtonWrapper>Try for free</MagneticButtonWrapper>
      <MagneticButtonWrapper>Try for free</MagneticButtonWrapper>
      <MagneticButtonWrapper>Try for free</MagneticButtonWrapper> */
    /* </div> */
  );
}
