import { createRoot } from "react-dom/client";
import { useState} from "react";
import "./style.css"
let posts = [
    {
        uname: "norri doorman",
        date: "12 jul 1979",
        content: "hello everyone! im finally back",
        likes: "2", shares: "8", comments: "1",
        comms: [
            {uname:"sirwan javadi",content:"welcome back norri!"},
            {uname:"Solver",content:"norri ur dead"}
        ]
    },
    {
        uname: "S/D N",
        date: "13 jul 1979",
        content: "hi ma'am",
        likes: "0", shares: "0", comments: "0",
        comms:[]
    }
]
function showModal(){
    document.querySelector("dialog").showModal()
}
function closeModal(){
    document.querySelector("dialog").close()
}
let [view,setView] = []
function Post({ username, date, likes, comments, shares, children,comc }) {
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
                <div className="opt" onClick={comc}><img src="src/icons/comment.svg" alt="" />comment</div>
                <div className="opt"><img src="src/icons/send.svg" alt="" />send</div>
                <div className="opt"><img src="src/icons/share.svg" alt="" />share</div>
            </div>
        </div>
    )
}
function Home() {
    let [view,setView] = useState("default")
    let [cid,setCid] = useState(0)
    return (
        <>
            <dialog>
                <div className="modal">
                    <div className="title">
                        <span className="text">{view}</span>
                        <div className="close" onClick={()=>closeModal()}><img src="src/icons/close.svg" alt="" /></div>
                    </div>
                    {
                        view == "comments" && posts[cid].comms.map((v,i)=>(
                            <div key={i} className="comment">
                                <span className="uname">{v.uname}</span>
                                {v.content}
                            </div>
                        ))
                    }
                    <br />
                    <input type="text" onKeyDown={(k)=>{
                        if(k.key == "Enter"){
                            posts[cid].comms.push({uname:"darkxwolf17",content:k.target.value})
                            console.log(posts);
                            
                        }
                    }} placeholder="post a comment" name="" id="" />
                </div>
            </dialog>
            <div className="bl">
                <div className="section">
                    <h1>left</h1>
                </div>
                <div className="section">
                    <div className="card post">
                        <input type="text" onClick={()=>showModal()} placeholder="Whats on your mind, darkxwolf17" name="" id="" />
                    </div>
                    <div className="posts">
                        {posts.map((v, i) => <Post key={i} comc={()=>{
                            setView("comments")
                            setCid(i)
                            showModal()
                        }} username={v.uname} date={v.date} likes={v.likes} comments={v.comments} shares={v.shares} pid={i}>{v.content}</Post>)}
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
                    {/* <input className="search" placeholder="Search Facebook" type="text" name="" id="" /> */}
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