import Link from 'next/link';

import { MainLayout } from '../../components/layouts/MainLayout';


export default function ContactPage() {

  const pageName = 'Contact Page';

  return (
    <>
      <h1>{ pageName }</h1>        
        <h1 className={'title'}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/contact/index.jsx</code>
        </p>
    </>
  )
}

ContactPage.getLayout= function getLayout(page: JSX.Element) {
  return (
    <MainLayout >
      { page }
    </MainLayout>
  );
}
