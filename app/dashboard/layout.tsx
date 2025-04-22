import React from 'react'

import { ReactNode } from 'react';
import Sidebar from './components/Sidebar';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex max-h-screen md:flex-row'>
        <Sidebar />
        <div className='overflow-y-auto w-full'>
        {children}
        </div>
    </div>
  )
}

export default layout