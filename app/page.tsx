import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from './ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
       <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        {/*<div
  className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
  />
  This black triangle is actual example for tailwind css*/}
          <div className={styles.shape} />
          {/* The above div is the example for css modules */}
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal ${lusitana.className}`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
          src="/hero-desktop.png"
          width={1000}
          height={760}
          className='hidden md:block'
          alt='Screenshot of the dashboard project showing desktop version'
          />
          {/*This Image above is for desktop screens*/}
          <Image
          src="/hero-mobile.png"
          width={560}
          height={620}
          className='block md:hidden'
          alt='Screenshot of the dashboard project showing mobile version'
          />
        </div>
      </div>
    </main>
  );
}


//The app is where we work
//The lib is where we use reusable utility function and data fetch
//The UI is for interactive client component
//The public is for static assets
//The scripts is for seeding or populating data base

//In lib folder:
//placeholder : dummy data to display when there is no api or fetching
//definitions : manual type declarations
//prisma for better type safety using database schema

//why 'next/font'?
// It downloads font files at build time and hosts them with your other static assets.

//why 'next/images'?
//In order to avoid hassel of manual image optimisation

//purpose of image?
//prevent layout shift(by adding h&w), resizing, lazyloading, modern-format-supportive
// To create a nested route, you can nest folders inside each other and add page.tsx files inside them.
// Only the content inside the page file will be publicly accessible. 
// One benefit of using layouts in Next.js is that on navigation, only the page components update while the layout won't re-render. This is called partial rendering
// <Link> allows you to do client-side navigation with JavaScript, to avoid full page refresh
// Although parts of your application are rendered on the server,
// Splitting code by routes means that pages become isolated. If a certain page throws an error, the rest of the application will still work.
// Next.js automatically prefetches the code for the linked route in the background. 
// To show user's current page, you need to get the user's current path from the URL