

const NotFound = () => {
    return (
        <div className="p-4 md:p-5 text-center flex flex-col justify-center items-center min-h-screen bg-gray-500 dark:bg-gray-700 w-screen">
            <h1 className="text-slate-200 text-lg font-bold mb-2 md:text-2xl">404 - Page Not Found</h1>
            <p className="text-slate-300 text-sm md:text-base">Sorry, the page you're looking for doesn't exist or may have been moved.
            <br/>
            Go back to the Home Page.</p>
        </div>
    )
}

export default NotFound