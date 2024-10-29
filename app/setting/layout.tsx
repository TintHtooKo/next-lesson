import Link from 'next/link'
import React from 'react'

const SettingLayout = ({children} : 
    {children: React.ReactNode}) => {
  return (
    <main>
        <nav>
            <Link href={'/setting/profile'}>Profile</Link>
        </nav>
      {children}
    </main>
  )
}

export default SettingLayout
