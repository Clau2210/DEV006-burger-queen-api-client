
interface StaffMember {
    name: string;
    email: string;
    role: string;
    lastSeen: string;
    online?: boolean;
  }

  const Staff: React.FC = () => {
    const staffData: StaffMember[] = [
      {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        lastSeen: '2023-01-23T13:23Z',
      },
      {
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        role: 'Co-Founder / CTO',
        lastSeen: '2023-01-23T13:23Z',
      },
      {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        role: 'Business Relations',
        lastSeen: '2023-01-23T13:23Z',
        online: true,
      },
      {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Front-end Developer',
        lastSeen: '2023-01-23T13:23Z',
      },
      {
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Designer',
        lastSeen: '2023-01-23T13:23Z',
      },
      {
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        role: 'Director of Product',
        lastSeen: '2023-01-23T13:23Z',
        online: true,
      },
    ];
  
    return (
      <ul role="list" className="divide-y divide-gray-100">
        {staffData.map((staffMember, index) => (
          <li key={index} className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
              <img
                className="mx-20 h-12 w-12 flex-none rounded-full bg-gray-50"
                src={`https://images.unsplash.com/photo-1${index + 1}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                alt={`Profile ${staffMember.name}`}
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-[#f8fafc]">{staffMember.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-[#f8fafc]">{staffMember.email}</p>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-[#f8fafc]">{staffMember.role}</p>
              {staffMember.online ? (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  </div>
                  <p className="text-xs leading-5 text-[#f8fafc]">Online</p>
                </div>
              ) : (
                <p className="mt-1 text-xs leading-5 text-[#f8fafc]">
                  Last seen <time dateTime={staffMember.lastSeen}>{calculateTimeAgo(staffMember.lastSeen)}</time>
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    );
  };
  
  // Function to calculate the time difference from a given date
  const calculateTimeAgo = (dateString: string): string => {
    const currentTime = new Date();
    const lastSeenTime = new Date(dateString);
    const timeDifference = Math.floor((currentTime.getTime() - lastSeenTime.getTime()) / (1000 * 60 * 60));
    return `${timeDifference}h ago`;
  };
  
// const Staff: React.FC = () => {
//     return (


        
//       <div className="bg-gray-200 p-4 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-2">Staff Information</h2>
//         <ul>
//           {/* Add staff information here */}
//           <li>Name: John Doe</li>
//           <li>Position: Manager</li>
//           {/* Add more staff information as needed */}
//         </ul>
//       </div>
//     );
//   };



export default Staff;