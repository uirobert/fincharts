/* This example requires Tailwind CSS v2.0+ */
const navigation: any = [
	// { name: "Solutions", href: "#" },
	// { name: "Pricing", href: "#" },
	// { name: "Docs", href: "#" },
	// { name: "Company", href: "#" },
];

export default function Header() {
	return (
		<header className='bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r'>
			<nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8' aria-label='Top'>
				<div className='flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none'>
					<div className='flex items-center'>
						<a href='#'>
							<span className='sr-only'>Your Company</span>

							<p className='text-white text-xl'>
								<a href='/'>CryptoCharts</a>
							</p>
							{/* <img
								className='h-10 w-auto'
								src='https://tailwindui.com/img/logos/mark.svg?color=white'
								alt=''
							/> */}
						</a>
						<div className='ml-10 hidden space-x-8 lg:block'>
							{navigation.map((link: any) => (
								<a
									key={link.name}
									href={link.href}
									className='text-base font-medium text-white hover:text-indigo-50'>
									{link.name}
								</a>
							))}
						</div>
					</div>
					<div className='ml-10 space-x-4'>
						<a
							href='/Login'
							className='inline-block rounded-md border border-transparent  text-white text-xl hover:bg-opacity-75'>
							Login
						</a>
						<a
							href='Signup'
							className='inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-black hover:bg-indigo-50'>
							Signup
						</a>
					</div>
				</div>
				<div className='flex flex-wrap justify-center space-x-6 py-4 lg:hidden'>
					{navigation.map((link: any) => (
						<a
							key={link.name}
							href={link.href}
							className='text-base font-medium text-white hover:text-indigo-50'>
							{link.name}
						</a>
					))}
				</div>
			</nav>
		</header>
	);
}
