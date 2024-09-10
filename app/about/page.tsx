import React from 'react';

export const metadata = {
    title: 'About',
    description: 'More about me and my site.',
  }
  
  export default function Page() {
    return (
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">About me</h1>
        <p>This is the about page for our site.</p>
      </section>
    )
  }
  