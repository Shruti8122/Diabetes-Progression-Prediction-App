function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">

            <h1 className="text-8xl font-bold text-blue-600 mb-4">
                404
            </h1>

            <h2 className="text-3xl font-semibold mb-4">
                Page Not Found
            </h2>

            <p className="text-gray-600 max-w-lg mb-8">
                The page you are looking for does not exist or may have been moved.
                Please check the URL or return to the home page.
            </p>
        </div>
    );
}

export default NotFound;