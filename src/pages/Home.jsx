import axios from 'axios';
import React from 'react'
import "./Home.css";

function Home() {
    const getSuggestions = async (mood) => {
        const response = await axios.get()
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-white text-3xl pt-5'>Moodifier</h1>
            <p className='text-white'>Select your mood, to get Spotify suggestions</p>
            <div className='w-1/2 mt-12'>
                <div className="moods flex flex-row flex-wrap justify-center gap-5">
                    <div className='mood' onClick={getSuggestions("Happy")}>
                        <p>Happy</p>
                        <p className='icon'>😊</p>
                    </div>
                    <div className='mood' onClick={getSuggestions("Sad")}>
                        <p>Sad</p>
                        <p className='icon'>😥</p>
                    </div>
                    <div className='mood' onClick={getSuggestions("Excited")}>
                        <p>Excited</p>
                        <p className='icon'>🤩</p>
                    </div>
                    <div className='mood' onClick={getSuggestions("Angry")}>
                        <p>Angry</p>
                        <p className='icon'>😠</p>
                    </div>
                    <div className='mood' onClick={getSuggestions("Anxious")}>
                        <p>Anxious</p>
                        <p className='icon'>😰</p>
                    </div>
                    <div className='mood' onClick={getSuggestions("Relaxed")}>
                        <p>Relaxed</p>
                        <p className='icon'>😊🛏️</p>
                    </div>
                    <div className='mood' onClick={getSuggestions("Frustrated")}>
                        <p>Frustrated</p>
                        <p className='icon'>😤</p>
                    </div>
                    <div className='mood' onClick={getSuggestions("Scared")}>
                        <p>Scared</p>
                        <p className='icon'>😨</p>
                    </div>
                    <div className='mood' onClick={getSuggestions("Tired")}>
                        <p>Tired</p>
                        <p className='icon'>😫</p>
                    </div>
                    <div className='mood' onClick={getSuggestions("Guilty")}>
                        <p>Guilty</p>
                        <p className='icon'>😔</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home