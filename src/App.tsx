import logo from "./assets/images/logo.svg";
import white_logo from "./assets/images/logo-white.svg";
import screen_mockups from "./assets/images/screen-mockups.svg";
import grow_together_image from "./assets/images/illustration-grow-together.svg";
import flowing_conversation_image from "./assets/images/illustration-flowing-conversation.svg";
import your_users_image from "./assets/images/illustration-your-users.svg";
import communities_icon from "./assets/images/icon-communities.svg";
import messages_icon from "./assets/images/icon-messages.svg";

export default function HuddleLandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} />
        </div>
        <button className="rounded-full text-pink border-2 border-pink py-2 px-6">
          Try it Free
        </button>
      </header>

      <main className="flex-grow py-12">
        <section className="text-center space-y-6">
          <h1 className="text-5xl font-poppins font-bold text-gray-800">
            Build The Community Your Fans Will Love
          </h1>
          <p className="md:w-1/3 mx-auto text-gray-600 leading-7">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="rounded-full drop-shadow-lg font-semibold bg-pink hover:bg-pink text-white py-4 px-20">
            Get Started For Free
          </button>
        </section>

        <img src={screen_mockups} alt="" className="w-4/6 h-auto mx-auto" />

        <section className="flex justify-around text-center">
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

        <div className="w-full h-44 bg-section-top-desktop-1 bg-cover"></div>
        <section className="flex flex-col md:flex-row items-center gap-12 bg-pale-blue py-8 px-32">
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
          <div className="md:w-1/2">
            <img
              src={grow_together_image}
              alt="Grow together illustration"
              className="w-full h-auto"
            />
          </div>
        </section>
        <div className="w-full h-36 bg-section-bottom-desktop-1 bg-cover"></div>
        <section className="flex flex-col md:flex-row-reverse items-center gap-12 py-8 px-32">
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
          <div className="md:w-1/2">
            <img
              src={flowing_conversation_image}
              alt="Flowing conversations illustration"
              className="w-full h-auto"
            />
          </div>
        </section>

        <div className="w-full h-44 bg-section-top-desktop-1 bg-cover"></div>
        <section className="flex flex-col md:flex-row items-center gap-12 bg-pale-blue py-8 px-32">
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
          <div className="md:w-1/2">
            <img
              src={your_users_image}
              alt="Your users illustration"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </section>
        <div className="w-full h-36 bg-section-bottom-desktop-2 bg-cover"></div>

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

      <div className="w-full h-44 bg-footer-top-desktop bg-cover"></div>
      <footer className="bg-dark-cyan text-white py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={white_logo} />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
            </p>
            <p>Phone: +1-543-123-4567</p>
            <p>example@huddle.com</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-pink-500">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-pink-500">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-pink-500">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">NEWSLETTER</h3>
            <p className="mb-4">
              To recieve tips on how to grow your community, sign up to our
              weekly newsletter. We'll never send you spam or pass on your email
              address
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="rounded-full"
              />
              <button
                type="submit"
                className="rounded-full bg-pink-500 hover:bg-pink-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
