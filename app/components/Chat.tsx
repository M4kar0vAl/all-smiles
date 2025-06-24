import { IconText } from '@components/.'

import '@styles/components/Chat.scss'

const Chat = () => {
    return (
        <button className="chat" type='button'>
            <IconText text='Chat' modifier='white-chat' />
        </button>
    )
}

export default Chat