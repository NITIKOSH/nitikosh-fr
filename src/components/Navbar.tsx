'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { identicon, logo, search, wallent } from '@/assets'
import { useState } from 'react'
import { ethers } from 'ethers'
import { connectWallet,Web3State } from './Web3/web3state'

export interface web3DataType {
	provider: ethers.providers.Web3Provider | undefined;
	signer: ethers.Signer | undefined;
	contract: ethers.Contract | undefined;
	userAdd: string | undefined;
}

const Navbar = () => {
	const router = useRouter()
	const [web3Data, setWeb3Data] = useState<Web3State>()

	const handleConnect = async () => {
		let _web3Data = await connectWallet();
		setWeb3Data(_web3Data);
		router.push('/dashboard');
	}

	return (
		<div
			className='px-6 w-full bg-white h-20 flex items-center justify-center   shadow-[0px_4px_8px_-4px_rgba(0,0,0,0.078)]
 '
		>
			{/* left side  */}
			<div className='container mx-auto flex  justify-between'>
				<div className='flex items-center justify-center space-x-2'>
					<Link className='cursor-pointer' href='/'>
						<Image
							src={logo}
							alt='Picture of the author'
							width={30}
							height={30}
						/>
					</Link>

					<Link
						href='/'
						className=' uppercase text-xl font-poppins cursor-pointer font-thin text-[#222222cb]'
					>
						nitikosh
					</Link>
				</div>
				{/* ri9ght side */}
				<div className='flex items-center justify-center space-x-4'>
					<form className='flex items-center justify-center outline px-4 py-[6px] outline-[#D4D7E5] outline-1 rounded space-x-2'>
						<input
							type='text'
							placeholder='Search Case...'
							id=''
							className='outline-none text-slate-400 text-sm w-48'
						/>
						<Image
							src={search}
							alt='search icpon'
							width={18}
							height={18}
							className='cursor-pointer'
						/>
					</form>
					<div>
						{web3Data?.userAdd ? (
							<>
								<div className='flex gap-3 items-center'>
									<svg
										width='20'
										height='20'
										viewBox='0 0 20 20'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M16.25 5.625H3.75C2.71447 5.625 1.875 6.46447 1.875 7.5V15C1.875 16.0355 2.71447 16.875 3.75 16.875H16.25C17.2855 16.875 18.125 16.0355 18.125 15V7.5C18.125 6.46447 17.2855 5.625 16.25 5.625Z'
											stroke='url(#paint0_linear_117_77)'
											strokeWidth='1.25'
											strokeLinejoin='round'
										/>
										<path
											d='M16.0687 5.62498V4.45311C16.0687 4.16569 16.0051 3.88183 15.8827 3.62179C15.7603 3.36175 15.582 3.13193 15.3605 2.94874C15.139 2.76555 14.8798 2.63349 14.6015 2.562C14.3231 2.49051 14.0323 2.48133 13.75 2.53514L3.4625 4.291C3.01575 4.37613 2.61272 4.6145 2.32291 4.965C2.0331 5.31549 1.87469 5.75613 1.875 6.21092V8.12498'
											stroke='url(#paint1_linear_117_77)'
											strokeWidth='1.25'
											strokeLinejoin='round'
										/>
										<path
											d='M14.375 12.5C14.1278 12.5 13.8861 12.4267 13.6805 12.2893C13.475 12.152 13.3148 11.9568 13.2202 11.7284C13.1255 11.4999 13.1008 11.2486 13.149 11.0061C13.1973 10.7637 13.3163 10.5409 13.4911 10.3661C13.6659 10.1913 13.8887 10.0723 14.1311 10.024C14.3736 9.97579 14.6249 10.0005 14.8534 10.0952C15.0818 10.1898 15.277 10.35 15.4143 10.5555C15.5517 10.7611 15.625 11.0028 15.625 11.25C15.625 11.5815 15.4933 11.8995 15.2589 12.1339C15.0245 12.3683 14.7065 12.5 14.375 12.5Z'
											fill='url(#paint2_linear_117_77)'
										/>
										<defs>
											<linearGradient
												id='paint0_linear_117_77'
												x1='10'
												y1='5.625'
												x2='10'
												y2='16.875'
												gradientUnits='userSpaceOnUse'
											>
												<stop stopColor='#332885' />
												<stop
													offset='1'
													stopColor='#7F8FD7'
												/>
											</linearGradient>
											<linearGradient
												id='paint1_linear_117_77'
												x1='8.97187'
												y1='2.50061'
												x2='9'
												y2='26.5'
												gradientUnits='userSpaceOnUse'
											>
												<stop stopColor='#332885' />
												<stop
													offset='1'
													stopColor='#7F8FD7'
												/>
											</linearGradient>
											<linearGradient
												id='paint2_linear_117_77'
												x1='14.375'
												y1='10'
												x2='14.375'
												y2='12.5'
												gradientUnits='userSpaceOnUse'
											>
												<stop stopColor='#332885' />
												<stop
													offset='1'
													stopColor='#7F8FD7'
												/>
											</linearGradient>
										</defs>
									</svg>

									<span className='text-[#332885] text-sm'>
										...
										{web3Data?.userAdd
											.slice(
												web3Data?.userAdd.length - 4,
												web3Data?.userAdd.length
											)
											.toUpperCase()}
									</span>

									<Image
										src={identicon}
										alt='wallet iconm'
										width={24}
										height={24}
									/>
								</div>
							</>
						) : (
							<button
								className='flex items-center justify-center bg-gradient-to-r px-6 py-[6px] from-[#332885] to-[#7F8FD7] rounded cursor-pointer space-x-2'
								onClick={() => handleConnect()}
							>
								<Image
									src={wallent}
									alt='wallet iconm'
									width={20}
									height={20}
								/>

								<span className='text-white text-sm'>
									Connect Wallet
								</span>
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
