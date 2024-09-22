const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
        <div className="flex itms-center justify-between">
            <h1 className="text-xl font-semibold">Announcements</h1>
            <span className="text-xs text-gray-400">View All</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <div className="bg-schoolSky rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem impsum dolor sit</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-01-01</span>
                </div>
                <p className="mt-1 text-gray-400 text-xs">Description</p>
            </div>
            <div className="bg-schoolPurple rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem impsum dolor sit</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-01-01</span>
                </div>
                <p className="mt-1 text-gray-400 text-xs">Description</p>
            </div>
            <div className="bg-schoolYellow rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem impsum dolor sit</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-01-01</span>
                </div>
                <p className="mt-1 text-gray-400 text-xs">Description</p>
            </div>
        </div>
    </div>
  )
}

export default Announcements