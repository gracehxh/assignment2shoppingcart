const PageHeader = ({ menu, controls }) => {
    return (
        <nav id="store" class="w-full z-30 top-0 px-6 py-1">
            <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                <div class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">
                    {menu}
                </div>
                {(controls) && (
                    <div class="flex items-center" id="store-nav-content">

                        <a class="pl-3 inline-block no-underline hover:text-black" href="#">
                            <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                            </svg>
                        </a>
                    </div>
                )}
          </div>
        </nav>
    )
}

export default PageHeader;