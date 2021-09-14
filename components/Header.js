import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <div className="container">
                <Link href="/" passHref>
                    <a rel="noopener noreferrer"><h2>Dev Blog</h2></a>
                </Link>
            </div>
        </header>
    )
}

export default Header
