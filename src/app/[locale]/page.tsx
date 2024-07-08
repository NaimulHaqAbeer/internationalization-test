'use client';

import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function Home() {
	const t = useTranslations('Index');

	const locales = ['en', 'bd'] as const;
	const { Link } = createSharedPathnamesNavigation({ locales });

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<{ firstName: string }>();
	const onSubmit: SubmitHandler<{ firstName: string }> = data =>
		console.log(data);
	console.log(errors);

	return (
		<Flex flexDir='column' justifyItems='center' gap={6} alignItems='center'>
			<Flex
				justifyItems='center'
				gap={4}
				mt={5}
				mb={3}
				textDecoration='underline'
			>
				<Link style={{ marginRight: '6px' }} href='/' locale='en'>
					In English
				</Link>
				<Link href='/' locale='bd'>
					In Bangla
				</Link>
			</Flex>
			<Text>{t('title')}</Text>
			<Text>{t('description')}</Text>
			<form action='' onSubmit={handleSubmit(onSubmit)}>
				<Flex flexDir='column' gap={4} justifyItems='center'>
					<Input
						{...register('firstName', { required: t('error') })}
						placeholder={t('placeholder')}
						className='border border-gray-400 mr-3'
						type='text'
					/>
					<Button p={4} rounded={10} type='submit'>
						{t('button')}
					</Button>
				</Flex>

				<Text className='text-red-500'>{errors.firstName?.message}</Text>
			</form>
		</Flex>
	);
}
