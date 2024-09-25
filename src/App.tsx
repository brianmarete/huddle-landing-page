import logo from "./assets/images/logo.svg";
import white_logo from "./assets/images/logo-white.svg";
import screen_mockups from "./assets/images/screen-mockups.svg";
import grow_together_image from "./assets/images/illustration-grow-together.svg";
import flowing_conversation_image from "./assets/images/illustration-flowing-conversation.svg";
import your_users_image from "./assets/images/illustration-your-users.svg";
import communities_icon from "./assets/images/icon-communities.svg";
import messages_icon from "./assets/images/icon-messages.svg";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaSquareTwitter } from "react-icons/fa6";

export default function HuddleLandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div>
          <img src={logo} className="w-2/3 md:w-full" />
        </div>
        <button className="rounded-full text-pink border-2 border-pink py-1 md:py-2 px-3 md:px-6 text-xs md:text-base">
          Try it Free
        </button>
      </header>

      <main className="flex-grow py-12">
        <section className="text-center space-y-6 my-8 sm:mx-4">
          <h1 className="text-3xl md:text-5xl font-poppins font-bold text-gray-800 leading-10 mx-8">
            Build The Community Your Fans Will Love
          </h1>
          <p className="md:mx-auto mx-8 max-w-prose text-gray-600 leading-7">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="rounded-full drop-shadow-lg font-semibold bg-pink hover:bg-pink text-white py-2 px-10 md:py-4 md:px-20 text-sm md:text-base">
            Get Started For Free
          </button>
        </section>

        <img
          src={screen_mockups}
          alt=""
          className="w-4/6 h-auto mx-auto md:my-8 my-32"
        />

        <section className="flex md:flex-row flex-col items-center justify-around text-center my-8 space-y-6">
          <div>
            <img src={communities_icon} alt="" />
            <h2 className="text-7xl font-poppins font-bold text-gray-800 my-3">
              1.4k+
            </h2>
            <p className="text-gray-400">Communities Formed</p>
          </div>
          <div>
            <img src={messages_icon} alt="" />
            <h2 className="text-7xl font-poppins font-bold text-gray-800 my-3">
              2.7m+
            </h2>
            <p className="text-gray-400">Messages Sent</p>
          </div>
        </section>

        <div className="w-full md:h-44 h-24 bg-section-top-mobile-1 md:bg-section-top-desktop-1 md:bg-cover"></div>
        <section className="flex flex-col md:flex-row items-center gap-12 bg-pale-blue md:py-8 py-4 md:px-32 px-8 text-center md:text-left">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Grow Together
            </h2>
            <p className="text-gray-600">
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
          <div className="md:w-1/2 order-first md:order-last">
            <img
              src={grow_together_image}
              alt="Grow together illustration"
              className="w-full h-auto"
            />
          </div>
        </section>
        <div className="w-full h-36 bg-section-bottom-mobile-1 md:bg-section-bottom-desktop-1 bg-cover"></div>
        <section className="flex flex-col md:flex-row-reverse items-center gap-12 md:py-8 py-4 md:px-32 px-8 text-center md:text-left">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Flowing Conversations
            </h2>
            <p className="text-gray-600">
              You wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just-in-time loading for a more natural
              flow.
            </p>
          </div>
          <div className="md:w-1/2 order-first md:order-last">
            <img
              src={flowing_conversation_image}
              alt="Flowing conversations illustration"
              className="w-full h-auto"
            />
          </div>
        </section>

        <div className="w-full h-44 bg-section-top-mobile-1 md:bg-section-top-desktop-1 bg-cover"></div>
        <section className="flex flex-col md:flex-row items-center gap-12 bg-pale-blue md:py-8 py-4 md:px-32 px-8 text-center md:text-left">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Your Users
            </h2>
            <p className="text-gray-600">
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
          <div className="md:w-1/2 order-first md:order-last">
            <img
              src={your_users_image}
              alt="Your users illustration"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </section>
        <div className="w-full h-36 bg-section-bottom-mobile-2 md:bg-section-bottom-desktop-2 bg-cover"></div>

        <section className="h-96 flex flex-col justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Ready To Build Your Community?
            </h2>
            <button className="rounded-full drop-shadow-lg font-semibold bg-pink hover:bg-pink text-white my-4 py-4 px-20">
              Get Started For Free
            </button>
          </div>
        </section>
      </main>

      <div className="w-full md:h-44 h-11 bg-footer-top-mobile md:bg-footer-top-desktop bg-[length:100%] bg-no-repeat"></div>
      <footer className="bg-dark-cyan text-white py-20">
        <div className="container mx-auto px-4 flex justify-between flex-col md:flex-row gap-32">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={white_logo} />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
            </p>
            <p>
              <MdPhoneInTalk className="inline mr-2 text-xl" /> Phone:
              +1-543-123-4567
            </p>
            <p>
              <MdEmail className="inline mr-2 text-xl" />
              example@huddle.com
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-pink-500">
                <span className="sr-only">Facebook</span>
                <FaFacebookSquare className="text-3xl" />
              </a>
              <a href="#" className="text-white hover:text-pink-500">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#" className="text-white hover:text-pink-500">
                <span className="sr-only">Twitter</span>
                <FaSquareTwitter className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="order-first md:order-last">
            <h3 className="text-lg font-semibold mb-4">NEWSLETTER</h3>
            <p className="mb-4">
              To recieve tips on how to grow your community, sign up to our
              weekly newsletter. We'll never send you spam or pass on your email
              address
            </p>
            <form className="flex md:flex-row flex-col md:gap-12 gap-2">
              <input
                type="email"
                placeholder="Email"
                className="rounded-sm py-2 px-2 text-gray-900"
              />
              <button type="submit" className="rounded-sm bg-pink py-2 px-8">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
