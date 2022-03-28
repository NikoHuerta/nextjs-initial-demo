import Link from 'next/link';

import { MainLayout } from '../../components/layouts/MainLayout';


export default function ContactPage() {

  const pageName = 'Contact Page';

  return (
    <MainLayout>
      <h1>{ pageName }</h1>        
        <h1 className={'title'}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.js</code>
        </p>
    </MainLayout>
  )
}