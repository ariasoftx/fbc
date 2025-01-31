import { createRoot } from "react-dom/client";
import { useState, useRef } from "react";
import "./style.css"
let posts = [
    {
        uname: "norri",
        date: "12 jul 1979",
        content: "hello everyone! im finally back",
        likes: "2", shares: "8", comments: "1",
        comms: [
            {}
        ]
    },
    {
        uname: "S/D N",
        date: "13 jul 1979",
        content: "hi ma'am",
        likes: "0", shares: "0", comments: "0"
    }
]
function Post({ username, date, likes, comments, shares, children }) {
    return (
        <div className="card">
            <div className="top">
                <img src="src/icons/user.png" alt="" className="pfp" />
                <div className="union">
                    <span className="uname">{username}</span>
                    <small>{date}</small>
                </div>
            </div>
            <div className="content">
                {children}
            </div>
            <div className="spb graycolor">
                <span>{likes} likes</span>
                <span>{comments} comments &nbsp; {shares} shares</span>
            </div>
            <div className="sep"></div>
            <div className="spb popt graycolor">
                <div className="opt"><img src="src/icons/like.svg" alt="" />like</div>
                <div className="opt"><img src="src/icons/comment.svg" alt="" />comment</div>
                <div className="opt"><img src="src/icons/send.svg" alt="" />send</div>
                <div className="opt"><img src="src/icons/share.svg" alt="" />share</div>
            </div>
        </div>
    )
}
function GetPosts() {
    return posts.map((v, i) => <Post key={i} username={v.uname} date={v.date} likes={v.likes} comments={v.comments} shares={v.shares}>{v.content}</Post>)
}
function Home() {
    let rf = useRef()
    return (
        <>
            <dialog ref={rf}>
                <div className="modal">
                    <div className="title">
                        <span className="text">haha</span>
                        <div className="close" onClick={()=>rf.current.close()}><img src="src/icons/close.svg" alt="" /></div>
                    </div>
                    <h1>sdsd</h1>
                </div>
            </dialog>
            <div className="bl">
                <div className="section">
                    <h1>left</h1>
                </div>
                <div className="section">
                    <div className="card post">
                        <input type="text" onClick={()=>rf.current.showModal()} placeholder="Whats on your mind, darkxwolf17" name="" id="" />
                    </div>
                    <div className="posts">
                        <GetPosts />
                    </div>
                </div>
                <div className="section">
                    <h1>right</h1>
                </div>
            </div>
        </>
    )
}
function App() {
    let [tab, setTab] = useState("")
    return (
        <>
            <nav>
                <div className="left section">
                    <span className="logo">ariasoft</span>
                    <input className="search" placeholder="Search Facebook" type="text" name="" id="" />
                </div>
                <div className="center section">
                    <div className="spb">
                        <div className="tab tab-active"><img src="src/icons/home.svg" alt="" /></div>
                        <div className="tab"><img src="src/icons/friends.svg" alt="" /></div>
                        <div className="tab"><img src="src/icons/video.svg" alt="" /></div>
                        <div className="tab"><img src="src/icons/store.svg" alt="" /></div>
                        <div className="tab"><img src="src/icons/groups.svg" alt="" /></div>
                    </div>
                </div>
                <div className="right section">
                    <div className="item"><img src="src/icons/apps.svg" alt="" /></div>
                    <div className="item"><img src="src/icons/chat.svg" alt="" /></div>
                    <div className="item"><img src="src/icons/bell.svg" alt="" /></div>
                    <div className="item account">
                        <img src="src/icons/user.png" alt="" />
                    </div>
                </div>
            </nav>
            <div className="body">
                <Home />
            </div>
        </>
    )
}
createRoot(document.querySelector("#root")).render(<App />)