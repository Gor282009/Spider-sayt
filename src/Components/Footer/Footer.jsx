import React from 'react'

function Footer() {
    return (
        <div>
            <footer className='bg-[#101010] '>
                <nav>
                    <ul className='w-full flex justify-around pb-[20px] '>
                        <div>
                            <li><a href="" className='text-[#FFFFFFCC]'>Company</a></li>
                            <li className='text-[#FFFFFFCC]'>Abouy US</li>
                            <li className='text-[#FFFFFFCC]'>Careers</li>
                        </div>
                        <div>
                            <li><a href="" className='text-[#FFFFFFCC]'>Need Help</a></li>
                            <li className='text-[#FFFFFFCC]'>Visit Help Center?</li>
                            <li className='text-[#FFFFFFCC]'>Share Feedback</li>
                        </div>
                        <div>
                            <li><a href="" className='text-[#FFFFFFCC]'>View Website in</a></li>
                            <li className='text-[#FFFFFFCC]'>English</li>
                        </div>
                        <div>
                            <li><a href="" className='text-[#FFFFFFCC]'>Social Media</a></li>
                        </div>
                    </ul>
                    <div className='w-full flex gap-[50px] pl-[140px] pt-[20px] border-t-[1px] border-[#fff]'>
                        <p className='text-[#FFFFFFCC] text-center'>© 2023 STREAM X. All Rights Reserved.</p>
                        <li><a href="#">Terms Of Use</a> </li>
                        <li><a href="#">Privacy Policy </a></li>
                        <li><a href="#">FAQ </a></li>
                    </div>
                </nav>
            </footer>
        </div>
    )
}

export default Footer