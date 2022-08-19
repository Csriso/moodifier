import React from 'react'
import "./Home.css";

function Home() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-white text-3xl pt-5'>Moodifier</h1>

            <div className='w-1/2'>
                <div className="moods flex flex-row flex-wrap justify-center gap-5">
                    <div className='mood'>
                        <p>Happy</p>
                        <p className='icon'>😊</p>
                    </div>
                    <div className='mood'>
                        <p>Sad</p>
                        <p className='icon'>😥</p>
                    </div>
                    <div className='mood'>
                        <p>Excited</p>
                        <p className='icon'>🤩</p>
                    </div>
                    <div className='mood'>
                        <p>Angry</p>
                        <p className='icon'>😠</p>
                    </div>
                    <div className='mood'>
                        <p>Anxious</p>
                        <p className='icon'>😰</p>
                    </div>
                    <div className='mood'>
                        <p>Relaxed</p>
                        <p className='icon'>😊🛏️</p>
                    </div>
                    <div className='mood'>
                        <p>Frustrated</p>
                        <p className='icon'>😤</p>
                    </div>
                    <div className='mood'>
                        <p>Scared</p>
                        <p className='icon'>😨</p>
                    </div>
                    <div className='mood'>
                        <p>Tired</p>
                        <p className='icon'>😫</p>
                    </div>
                    <div className='mood'>
                        <p>Guilty</p>
                        <p className='icon'>😔</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home