import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";
const ChatsPage = (props) => { 
    const chatProps = useMultiChatLogic(
        REACT_APP_PROJECT_KEY, 
        props.user.username, 
        props.user.secret
        )
    return (
    <div style={{  height: '100vh' }}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
 )}

 export default ChatsPage