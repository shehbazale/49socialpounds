import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FAQ() {
  return (
   <>
   <div className='bg-[#f7b141] py-[60px]'>
    <div className='flex flex-col md:flex-row justify-evenly w-full'>
        <div className='md:w-2/5 flex items-center'>
            <img src="../assets/faq.webp" alt="logo"></img>
        </div>
{/* right side */}
        <div className=' mt-3 md:w-[45%'>
            {/* first dropdown */}
        <Menu as="div" className="relative text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-between rounded-md bg-[#024963] px-6 py-2 text-lg font-semibold text-white">
        What Is social media management?
          <ChevronDownIcon className="h-8 w-6" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-[#f7b141]">
          <div className="py-1">
            <Menu.Item>
                <p
                  className={classNames(
                    'block'
                  )}
                >
                  Social media management involves creating post visuals, captions and hashtags and scheduling content to be posted on social media platforms such as Facebook, Instagram, Twitter, and LinkedIn.
                </p>
            
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

{/* second dropdwon */}
<Menu as="div" className="relative text-left mt-4">
      <div>
        <Menu.Button className="inline-flex w-full justify-between rounded-md bg-[#024963] px-6 py-2 text-lg font-semibold text-white">
        Why do I need social media management for my business?
          <ChevronDownIcon className="h-8 w-6" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-[#f7b141]">
          <div className="py-1">
            <Menu.Item>
                <p
                  className={classNames(
                    'block'
                  )}
                >
                  Having effective social media management is crucial for establishing and sustaining an 
                  online presence, connecting with your audience, and expanding your brand. Furthermore,
                   it plays a key role in raising brand awareness, driving traffic to your website,
                    generating leads, and ultimately increasing sales.
                </p>
            
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    {/* third Dropdown */}
    <Menu as="div" className="relative text-left mt-4">
      <div>
        <Menu.Button className="inline-flex w-full justify-between rounded-md bg-[#024963] px-6 py-2 text-lg font-semibold text-white">
        What services do you offer as part of social media management?
          <ChevronDownIcon className="h-8 w-6" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-[#f7b141]">
          <div className="py-1">
            <Menu.Item>
                <p
                  className={classNames(
                    'block'
                  )}
                >
                    First, we design visuals, craft captions, curate hashtags, and schedule posts upon client approval. Additionally, our social media management services encompass content creation, scheduling, analytics, and tailored strategy development.
                </p>
            
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    {/* fourth dropdown */}
    <Menu as="div" className="relative text-left mt-4">
      <div>
        <Menu.Button className="inline-flex w-full justify-between rounded-md bg-[#024963] px-6 py-2 text-lg font-semibold text-white">
        Can I see examples of the content you create?
          <ChevronDownIcon className="h-8 w-6" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-[#f7b141]">
          <div className="py-1">
            <Menu.Item>
                <p
                  className={classNames(
                    'block'
                  )}
                >
                  Absolutely! We'd be happy to share examples of our previous work to give you an idea of the quality and style of content we create for our clients.
                </p>
            
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    {/* fifthdropdown */}
    <Menu as="div" className="relative text-left mt-4">
      <div>
        <Menu.Button className="inline-flex w-full justify-between  rounded-md bg-[#024963] px-6 py-2 text-lg font-semibold text-white">
        Can I provide input or feedback on the content you create?
          <ChevronDownIcon className="h-8 w-6" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-[#f7b141]">
          <div className="py-1">
            <Menu.Item>
                <p
                  className={classNames(
                    'block'
                  )}
                >
                  Yes, we encourage collaboration and welcome your input and feedback on 
                  the content we create. Your satisfaction is our priority, and we'll work 
                  closely with you to ensure the content aligns with your brand voice and goals.
                  </p>
            
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    {/* sixth dropdown */}
    <Menu as="div" className="relative text-left mt-4">
      <div>
        <Menu.Button className="inline-flex w-full justify-between rounded-md bg-[#024963] px-6 py-2 text-lg font-semibold text-white">
        Do you offer social media advertising services?
          <ChevronDownIcon className="h-8 w-6" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-[#f7b141]">
          <div className="py-1">
            <Menu.Item>
                <p
                  className={classNames(
                    'block'
                  )}
                >
                Yes, we provide social media advertising services to help boost your reach, engagement, and conversions on platforms like Facebook & Instagram. We'll develop targeted ad campaigns tailored to your objectives and budget.
                 </p>
            
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    {/* seventh dropdown */}
    <Menu as="div" className="relative text-left mt-4">
      <div>
        <Menu.Button className="inline-flex w-full justify-between  rounded-md bg-[#024963] px-6 py-2 text-lg font-semibold text-white">
         <div className='text-left'> How do I get started with your social media management services?</div>
          <ChevronDownIcon className="h-8 w-6" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-[#f7b141]">
          <div className="py-1">
            <Menu.Item>
                <p
                  className={classNames(
                    'block'
                  )}
                >
                 Getting started is easy! Simply reach out to us via BOOK CALL or email using the contact us link to schedule a consultation. We'll discuss your goals, needs, and budget, and tailor a social media management plan that works for you.
                 </p>
            
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    {/* eight dropdown */}
    <Menu as="div" className="relative text-left mt-4">
      <div>
        <Menu.Button className="inline-flex w-full justify-between rounded-md bg-[#024963] px-6 py-2 text-lg font-semibold text-white">
        <div className="text-left">What sets your social media management services apart from others?</div> 
          <ChevronDownIcon className="h-8 w-6" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 mb-10 w-full origin-top-right rounded-md bg-[#f7b141]">
          <div className="py-1">
            <Menu.Item>
                <p
                  className={classNames(
                    'block'
                  )}
                >
                  Our personalised approach, attention to detail, commitment to client satisfaction, and results-driven strategies set us apart. We prioritise building long-term partnerships with our clients and helping them achieve their social media goals.
                   </p>
            
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
        </div>
    </div>
   </div>
   </>
  )
}
