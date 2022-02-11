import Image from "next/image"
import NextLink from 'next/link'
export default function Navbar() {
    return (
        <nav className={'w-screen shadow-md'}>
            <div>
            <NextLink href={'/'}>
                    <a>
                        <Image src={'/LogoSmallColor.svg'} width={40} height={40}/>
                        <span>
                            Averia
                        </span>
                    </a>
                </NextLink>
            </div>
        </nav>
    )
}