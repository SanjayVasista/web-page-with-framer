import Link from "next/link";

export default function Header(){
    return (
        <header className="bg-black text-gray-300 p-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <img src="/favicon.ico" alt="logo" className="w-7 h-7" />
                    <h1>
                        Online shopping
                    </h1>
                </div>
                <nav className="flex items-center space-x-4 mr-10 ">
                    <Link href="/">Home</Link>
                    <Link href="./Rolls/">Rolls</Link>
                </nav>
            </div>
        </header>
    )
}