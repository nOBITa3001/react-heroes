import { useMessages } from '../context/MessageContext'

export default function Messages() {
  const { messages, clearMessage: clear } = useMessages()

  return (
    <div>
      <div className='flex gap-3'>
        <h2 className='text-2xl'>Messages</h2>
        <button onClick={clear} className='btn'>
          Clear messages
        </button>
      </div>

      {messages.map((message, index) => (
        <div key={index} className='my-2'>
          {message}
        </div>
      ))}
    </div>
  )
}
