import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
const Main = () => {
    const {onSent, recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
            <p>David</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            {!showResult
            ?<>
                <div className="greet">
                <p><span>Hello, Sir</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Recommend stunning destinations to visit during an upcoming road trip.</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Provide a concise overview of the concept of urban planning.</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Generate ideas for team-building activities for our upcoming work retreat.</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Enhance the clarity of the provided code.</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>
            :<div className='result'>
                <div className='result-title'>
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>

                </div>
                <div className="result-data">
                    <img src={assets.David_icon} alt="" />
                    {loading
                    ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />

                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                </div>

            </div>
            }
            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter Your Prompt Here:'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    David may display inaccurate information, including about people, so please double-check its responses. Your Privacy and David Apps.
                </p>
            </div>
        </div>
      

    </div>
  )
}
export default Main