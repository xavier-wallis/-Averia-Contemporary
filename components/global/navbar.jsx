import Image from "next/image"
import NextLink from 'next/link'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

export default function Navbar() {
    return (
        <div className={'w-screen shadow-lg align-middle flex p-2 justify-between z-10'}>
            <div className={'ml-4'}>
                <NextLink href={'/'}>
                    <a className={'flex'}>
                        <Image src={'/LogoSmallColor.svg'} width={40} height={40}/>
                        <span className={'m-auto font-bold ml-2'}>
                            Averia
                        </span>
                    </a>
                </NextLink>
            </div>
            <div className={'my-auto mr-4 flex'}>
                <NextLink href={'/getStarted'}>
                    <a className={'border-b-2 border-[#B304FA] flex px-2'}>
                        Get Started
                    </a>
                </NextLink>
                <HiOutlineMenuAlt4 />
            </div>
        </div>
    )
}