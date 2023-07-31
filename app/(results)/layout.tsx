import React from "react";

const ResultsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='bg-white'>
      <section className='flex flex-col items-center justify-center h-screen'>
        {children}
      </section>
    </main>
  );
};

export default ResultsLayout;
