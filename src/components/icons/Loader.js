const Loader = () => {
    return (
        <div class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden flex flex-col justify-center items-center">
            <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            <h2 class="text-center text-xl font-semibold">Loading...</h2>
            <p class="w-1/3 text-center">This may take a few seconds, please don't close this page.</p>
        </div>

    )
}

export default Loader;