import {
  MemoryIcon,
  ReactionIcon,
  VerbalIcon,
  VisualIcon,
} from "@/components/icons";
import React from "react";

import data from "@/data.json";

const ResultsPage = () => {
  return (
    <div className='flex flex-col md:flex-row w-screen h-screen md:h-96 md:w-1/2 bg-white md:rounded-2xl shadow-md overflow-hidden'>
      <div className='flex flex-col w-full md:w-1/2 rounded-b-3xl md:rounded-2xl items-center gap-y-2 bg-gradient-to-b from-light-slate-blue to-light-royal-blue'>
        <div className='p-6 text-xl font-bold text-light-lavender'>
          Your Result
        </div>
        <div className='flex flex-col items-center justify-center bg-gradient-to-t from-persian-blue to-violet-blue rounded-full h-40 w-40'>
          <div className='text-6xl font-bold'>76</div>
          <div className='text-sm opacity-50'>of 100</div>
        </div>
        <div className='font-semibold text-2xl'>Great</div>
        <div className='px-10 pb-8 text-sm opacity-70 text-center'>
          You scored higher than 65% of the people who have taken these tests.
        </div>
      </div>
      <div className='flex flex-col w-full md:w-1/2'>
        <div className='px-8 py-6 text-dark-gray-blue font-bold text-lg'>
          Summary
        </div>
        <div className='flex flex-col gap-y-3'>
          <div className='py-3 px-4 flex flex-row justify-between bg-light-red/10 mx-auto w-3/4 rounded text-light-red text-sm font-bold'>
            <span className='flex items-center space-x-2'>
              <ReactionIcon />
              <span>Reaction</span>
            </span>
            <span className='flex items-center space-x-2 text-dark-gray-blue'>
              <span className='font-extrabold'>80</span>
              <span className='opacity-50'>/ 100</span>
            </span>
          </div>
          <div className='py-3 px-4 flex flex-row justify-between bg-orangey-yellow/10 mx-auto w-3/4 rounded text-orangey-yellow text-sm font-bold'>
            <span className='flex items-center space-x-2'>
              <MemoryIcon />
              <span>Memory</span>
            </span>
            <span className='flex items-center space-x-2 text-dark-gray-blue'>
              <span className='font-extrabold'>92</span>
              <span className='opacity-50'>/ 100</span>
            </span>
          </div>
          <div className='py-3 px-4 flex flex-row justify-between bg-green-teal/10 mx-auto w-3/4 rounded text-green-teal text-sm font-bold'>
            <span className='flex items-center space-x-2'>
              <VerbalIcon />
              <span>Verbal</span>
            </span>
            <span className='flex items-center space-x-2 text-dark-gray-blue'>
              <span className='font-extrabold'>61</span>
              <span className='opacity-50'>/ 100</span>
            </span>
          </div>
          <div className='py-3 px-4 flex flex-row justify-between bg-cobalt-blue/10 mx-auto w-3/4 rounded text-cobalt-blue text-sm font-bold'>
            <span className='flex items-center space-x-2'>
              <VisualIcon />
              <span>Visual</span>
            </span>
            <span className='flex items-center space-x-2 text-dark-gray-blue'>
              <span className='font-extrabold'>80</span>
              <span className='opacity-50'>/ 100</span>
            </span>
          </div>
        </div>
        <div className='flex justify-center mt-2 p-4'>
          <button
            type='button'
            className='rounded-full w-4/5 bg-dark-gray-blue py-3 text-sm font-semibold text-white shadow-sm hover:bg-gradient-to-b from-light-slate-blue to-light-royal-blue'
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
