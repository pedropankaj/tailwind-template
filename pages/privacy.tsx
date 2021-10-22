import type { NextPage } from "next";
import Link from 'next/link'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import Header from '../component/Header'
import Footer from "../component/Footer";

const navigation = [
  { name: 'Changelog', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Partners', href: '#' },
  { name: 'News', href: '#' },
]
const contactDetails = [
  { name: 'Collaborate', email: 'support@example.com', telephone: '+1 (555) 123-4567' },
  { name: 'Press', email: 'support@example.com', telephone: '+1 (555) 123-4567' },
  { name: 'Join our team', email: 'support@example.com', telephone: '+1 (555) 123-4567' },
  { name: 'Say hello', email: 'support@example.com', telephone: '+1 (555) 123-4567' },
]
const locations = [
  { city: 'Los Angeles', address: ['4556 Brendan Ferry', 'Los Angeles, CA 90210'] },
  { city: 'New York', address: ['886 Walter Streets', 'New York, NY 12345'] },
  { city: 'Toronto', address: ['7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'] },
  { city: 'Chicago', address: ['726 Mavis Island', 'Chicago, IL 60601'] },
]
const faqs = [
  {
    id: 1,
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 2,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: 'What do you call someone with no body and no nose?',
    answer: 'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 4,
    question: 'Why do you never see elephants hiding in trees?',
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]
const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}
const Privacy: NextPage = () => {
  return (
    <div className="bg-white">
      <header className="relative pb-24 bg-sky-800 sm:pb-32">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div
            className="absolute inset-0 bg-gradient-to-l from-sky-800 to-cyan-700 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <Header />

        <div className="relative mt-24 max-w-md mx-auto px-4 sm:max-w-3xl sm:mt-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Privacy Policy</h1>
          <p className="mt-6 text-xl text-cyan-100 max-w-3xl">
            Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel
            lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.
          </p>
        </div>
      </header>

      <main>
        {/* Side-by-side grid */}
        <div className="bg-white">
          <div className="max-w-md mx-auto lg:py-24 py-12 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="divide-y divide-warm-gray-200">
              <section className="" aria-labelledby="contact-heading">
                <div className="mt-12">
                  <p>This statement of privacy (“Privacy Policy”) describes how Flipkart Internet Pvt Ltd (hereinafter referred to as “we”, “us” “our”) collect, use, and disclose information pertaining to you- the user (hereinafter referred to as “you”, “your”) obtained via this website cloud.flipkart.com (“Website”).
                  </p>
                  <p className="mt-4">Please read the following to learn about our practice of secure collection, use, disclosure and dissemination of information practices.
                  </p>
                  <p className="mt-4">
                    By visiting this Website you agree to be bound by the terms and conditions of this Privacy Policy. If you do not agree, please do not use or access our Website. This Privacy Policy is incorporated into and subject to our Terms of Use (“Terms of Use”).
                  </p>
                </div>
                <h2 id="contact-heading" className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl pt-12">
                  1. Consent
                </h2>
                <div className="mt-8">
                  <p>
                    By using the Website and/ or by providing your information, you consent to the collection and use of the information you disclose on the Website in accordance with this Privacy Policy, including but not limited to Your consent for sharing your information as per this Privacy Policy. If you disclose any personal information relating to other people to us, you represent that you have the authority to do so and to permit us to use the information in accordance with this Privacy Policy.
                  </p>
                  <p className="mt-2">
                    This Website is not for use by any minors (defined as those who are not at least 18 years of age), and you must not use this Website if you a minor.
                  </p>
                </div>

                <h2 id="location-heading" className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl pt-12">
                  2. Amendment
                </h2>
                <div className="mt-8">
                  <p>
                    Our Privacy Policy is subject to change at any time without notice. To make sure you are aware of any changes, please review this policy periodically.
                  </p>
                </div>

                <h2 id="location-heading" className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl pt-12">
                  3. Collection of Personally Identifiable Information and other Information
                </h2>
                <div className="mt-8">
                  <p>
                    When you use our Website, we collect and store your personal information such as name, contact number, email address etc. which is provided by you from time to time. Our primary goal in doing so is to be able to contact you for the services requested by you and to provide you a safe, efficient, smooth and customized experience.
                  </p>

                  <p className="mt-2">
                    In general, you can browse the Website without telling us who you are or revealing any personal information about yourself. Once you give us your personal information, you are not anonymous to us. Where possible, we indicate which fields are required and which fields are optional for us to contact you. You always have the option to not provide information, however, in such an instance we will not be able to contact you.
                  </p>
                  <p className="mt-2">
                    If you choose to post comments on our “Reach Us” page or leave feedback, we will collect that information you provide to us.
                  </p>
                </div>

                <h2 id="location-heading" className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl pt-12">
                  4. Use of Demographic / Profile Data / Your Information
                </h2>
                <div className="mt-8">
                  <p>
                    We use personal information to provide the services you request. To the extent we use your personal information to market to you, we will provide you the ability to opt-out of such uses.
                  </p>
                  <p className="mt-2">
                    We identify and use your IP address to help diagnose problems with our server, and to administer our Website. Your IP address is also used to help identify you and to gather broad demographic information. We also use this information to do internal research on our users' demographics, interests, and behaviour to better understand, protect and serve our users. This information is compiled and analysed on an aggregated basis. This information may include the URL that you just came from (whether this URL is on our Website or not), which URL you next go to (whether this URL is on our Website or not), your computer browser information, and your IP address.
                  </p>
                  <p className="mt-2">We retain any information as necessary to contact you and provide support as permitted by law.</p>
                </div>

                <h2 id="location-heading" className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl pt-12">
                  5. Sharing of personal information
                </h2>
                <div className="mt-8">
                  <p>
                    We may share personal information with our affiliates. We do not disclose your personal information to third parties for their marketing and advertising purposes without your explicit consent.
                  </p>
                  <p className="mt-2">
                    We may disclose personal information if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal process. We may disclose personal information to law enforcement offices, third party rights owners, or others in the good faith belief that such disclosure is reasonably necessary to: enforce our Terms of Use or Privacy Policy; respond to claims that an advertisement, posting or other content violates the rights of a third party; or protect the rights, property or personal safety of our users or the general public.
                  </p>
                  <p className="mt-2">
                    We and our affiliates will share some or all of your personal information with another business entity should we (or our assets) plan to merge with, or be acquired by that business entity, or re-organization, amalgamation, restructuring of business. Should such a transaction occur that other business entity (or the new combined entity) will be required to follow this Privacy Policy with respect to your personal information.
                  </p>
                </div>

                <h2 id="location-heading" className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl pt-12">
                  6. Links to Other Sites
                </h2>
                <div className="mt-8">
                  <p>
                    Our Website may contain links to other websites that may collect personally identifiable information about you. We are not responsible for the privacy practices or the content of those linked websites.
                  </p>
                </div>

                <h2 id="location-heading" className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl pt-12">
                  7. Security Precautions
                </h2>
                <div className="mt-8">
                  <p>
                    Our Website has stringent security measures in place to protect the loss, misuse, and alteration of the information under our control. Once your information is in our possession, we adhere to strict security guidelines, protecting it against unauthorized access.
                  </p>
                </div>

                <h2 id="location-heading" className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl pt-12">
                  8. Cookies
                </h2>
                <div className="mt-8">
                  <p>
                    A "cookie" is a small piece of information stored by a web server on a web browser so it can be later read back from that browser. Cookies are useful for enabling the browser to remember information specific to a given user. We place both permanent and temporary cookies in your computer's hard drive. The cookies do not contain any of your personally identifiable information.
                  </p>
                  <p className="mt-2">
                    We use data collection devices such as "cookies" on certain pages of the Website to help analyse our web page flow, measure promotional effectiveness, and promote trust and safety. "Cookies" are small files placed on your hard drive that assist us in providing our services. We offer certain features that are only available through the use of a "cookie". Cookies can also help us provide information that is targeted to your interests. Most cookies are "session cookies," meaning that they are automatically deleted from your hard drive at the end of a session. You are always free to decline our cookies if your browser permits, although in that case you may not be able to use certain features on the Website.
                  </p>
                  <p className="mt-2">
                    Additionally, you may encounter "cookies" or other similar devices on certain pages of the Website that are placed by third parties. We do not control the use of cookies by third parties.
                  </p>
                </div>

                <h2 id="location-heading" className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl pt-12">
                  9. Choice/Opt-Out
                </h2>
                <div className="mt-8">
                  <p>
                    We provide all users with the opportunity to opt-out of receiving non-essential (promotional, marketing-related) communications from us or on behalf of our partners.
                  </p>
                  <p className="mt-2">
                    If you want to remove your contact information from our server or want to unsubscribe to any newsletters or alerts from us, please contact us on the email address mentioned under clause 12 below.
                  </p>
                </div>

                <h2 id="location-heading" className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl pt-12">
                  10. Advertisements
                </h2>
                <div className="mt-8">
                  <p>
                    We may use third-party advertising companies to serve ads when you visit our Website. These companies may use information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
                  </p>
                </div>

                <h2 id="location-heading" className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl pt-12">
                  11. Grievance Officer
                </h2>
                <div className="mt-8">
                  <p>
                    In accordance with Information Technology Act 2000 and rules made thereunder, the name and contact details of the Grievance Officer are provided below:
                  </p>
                  <p className="mt-2">Mr. Shremanth M</p>
                  <p className="mt-2">Flipkart Internet Pvt Ltd.</p>
                  <p className="mt-2">Embassy tech village</p>
                  <p className="mt-2">8th floor Block 'B' Devarabeesanahalli Village,</p>
                  <p className="mt-2">Varthur Hobli, Bengaluru East Taluk,</p>
                  <p className="mt-2">Bengaluru District,</p>
                  <p className="mt-2">Karnataka, India, 560103.</p>
                  <p className="mt-2">Phone: 1800 208 9898</p>
                  <p className="mt-2">Email: grievance.officer@flipkart.com</p>
                  <p className="mt-2">Time: Mon - Sat (9:00 - 18:00)</p>
                </div>

                <h2 id="location-heading" className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl pt-12">
                  12. Questions?
                </h2>
                <div className="mt-8 pb-12">
                  <p>
                    Please contact us regarding any questions regarding this statement.
                  </p>
                </div>


              </section>
            </div>
          </div>
        </div>

        {/* footer */}
        <Footer />
      </main>
      {/* FAQ */}
      {/* <div className="bg-warm-gray-50">
          <div className="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <h2 className="text-3xl font-extrabold text-warm-gray-900">Frequently asked questions</h2>
                <p className="mt-4 text-lg text-warm-gray-500">
                  Can’t find the answer you’re looking for? Reach out to our{' '}
                  <a href="#" className="font-medium text-cyan-700 hover:text-cyan-600">
                    customer support
                  </a>{' '}
                  team.
                </p>
              </div>
              <div className="mt-12 lg:mt-0 lg:col-span-2">
                <dl className="space-y-12">
                  {faqs.map((faq) => (
                    <div key={faq.id}>
                      <dt className="text-lg font-medium text-warm-gray-900">{faq.question}</dt>
                      <dd className="mt-2 text-base text-warm-gray-500">{faq.answer}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div> */}

      {/* Newsletter */}
      {/* <div className="relative">
          <div className="absolute left-0 right-0 h-1/2 bg-warm-gray-50" aria-hidden="true" />
          <div className="relative max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="py-10 px-6 bg-gradient-to-l from-sky-800 to-cyan-700 rounded-3xl sm:py-16 sm:px-12 lg:py-20 lg:px-20 lg:flex lg:items-center">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">Sign up for our newsletter</h2>
                <p className="mt-4 max-w-3xl text-lg text-cyan-100">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt
                  amet fugiat.
                </p>
              </div>
              <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                <form className="sm:flex">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full border-white px-5 py-3 placeholder-warm-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-white rounded-md"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-green-400 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                  >
                    Notify me
                  </button>
                </form>
                <p className="mt-3 text-sm text-cyan-100">
                  We care about the protection of your data. Read our{' '}
                  <a href="#" className="text-white font-medium underline">
                    Privacy Policy.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main> */}

      {/* <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-md mx-auto py-12 px-4 sm:max-w-3xl sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <img
                className="h-10"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=emerald&shade=400"
                alt="Company name"
              />
              <p className="text-warm-gray-500 text-base">
                Making the world a better place through constructing elegant hierarchies.
              </p>
              <div className="flex space-x-6">
                {footerNavigation.social.map((item) => (
                  <a key={item.name} href={item.href} className="text-warm-gray-400 hover:text-warm-gray-500">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-warm-gray-700 tracking-wider uppercase">Solutions</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-warm-gray-500 hover:text-warm-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-warm-gray-700 tracking-wider uppercase">Support</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-warm-gray-500 hover:text-warm-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-warm-gray-700 tracking-wider uppercase">Company</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-warm-gray-500 hover:text-warm-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-warm-gray-700 tracking-wider uppercase">Legal</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-warm-gray-500 hover:text-warm-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-warm-gray-200 pt-8">
            <p className="text-base text-warm-gray-400 xl:text-center">
              &copy; 2020 Workflow, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  )
}
export default Privacy;