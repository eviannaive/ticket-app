import styles from './TicketCard.module.css'
import { DeleteBlock, PriorityDisplay, ProgressDisplay, StatusDisplay } from '@/components'

const TicketCard = ({ticketId,ticketContent}:{ticketId:number,ticketContent: any}) => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className='flex mb-3 justify-between text-red-400'>
        <PriorityDisplay />
        <div className='mb-auto'>
          <DeleteBlock />
        </div>
      </div>
      <h4>{ticketContent.title}</h4>
      <hr className='h-px border-0 bg-page mb-2' />
      <p className='whitespace-pre-wrap'>{ticketContent.title}</p>
      <div className='flex-grow'></div>
      <div className='flex mt-2'>
        <div className="flex flex-col">
          <p className='text-xs my-1'>08/31/23 10:43PM</p>
          <ProgressDisplay />
        </div>
        <div className='ml-auto flex items-end'>
          <StatusDisplay />
        </div>
      </div>
    </div>
  )
}

export default TicketCard