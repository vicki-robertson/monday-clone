import TicketCard from "../components/TicketCard"

const Dashboard = () => {

const tickets = [
  {
    category: 'Q1 2024',
    color: '#cdc2e8',
    title: 'food',
    owner: 'Vicki R',
    avatar: 'https://www.elephantstock.com/cdn/shop/collections/my-neighbor-totoro-wall-art.jpg?crop=center&height=1024&v=1658136102&width=1024',
    status: 'done',
    priority: 5,
    progress: 40,
    description: 'plan meals',
    timestamp: '2024-01-21'
  },

  {
    category: 'Q1 2024',
    color: 'cornflower',
    title: 'homework this week',
    owner: 'Vicki R',
    avatar: 'https://www.elephantstock.com/cdn/shop/collections/my-neighbor-totoro-wall-art.jpg?crop=center&height=1024&v=1658136102&width=1024',
    status: 'stuck',
    priority: 2,
    progress: 60,
    description: 'learn nextjs',
    timestamp: '2024-01-19'
  },

  {
    category: 'Q2 2024',
    color: 'yellow',
    title: 'food this week',
    owner: 'Vicki R',
    avatar: 'https://www.elephantstock.com/cdn/shop/collections/my-neighbor-totoro-wall-art.jpg?crop=center&height=1024&v=1658136102&width=1024',
    status: 'working on it',
    priority: 3,
    progress: 10,
    description: 'sushi',
    timestamp: '2024-01-19'
  }
]

const colors = [
  'rgb(255,179,186)',
  'rgb(255,223,186)',
  'rgb(255,255,186)',
  'rgb(186,255,201)',
  'rgb(186,255,255)'
]

const uniqueCategories = [
  ...new Set(tickets?.map(({category}) => category))
]

console.log(uniqueCategories)


  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
          <div key={categoryIndex}>
            <h3>{uniqueCategory}</h3>
            {tickets.filter(ticket => ticket.category === uniqueCategory)
              .map((filteredTicket, _index) => (
                <TicketCard
                  id={_index}
                  color={colors[categoryIndex] || colors[0]}
                  ticket={filteredTicket}
                />
              ))
            }
          </div> 
        ))}
      </div>   

    </div>
  )
}

export default Dashboard