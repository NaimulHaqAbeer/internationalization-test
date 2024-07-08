'use client';

import { useTranslations } from 'next-intl';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export default function Home() {
	const locales = ['en', 'bd'] as const;
	const { Link, useRouter, usePathname, redirect } =
		createSharedPathnamesNavigation({ locales });
	const t = useTranslations('Index');
	console.log('Hello world!');
	return (
		<div>
			<div className='flex flex-row justify-center mt-5 underline'>
				<Link className='mr-6 ' href='/example' locale='en'>
					In English
				</Link>
				<Link href='/example' locale='bd'>
					In Belarussina
				</Link>
			</div>
			<div>{t('title')}</div>
		</div>
	);
}
