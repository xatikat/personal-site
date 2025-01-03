function NotFoundPage() {
    return (
        <div className="bg-gradient-to-r from-background via-dark-accent-1 to-background
            grid grid-rows-[20px_1fr_20px] items-center justify-items-center
            min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div></div>
            <div>
                <h1 className="text-4xl font-bold">Page Not Found</h1>
                <h1 className="text-2xl font-bold">404</h1>
            </div>
        </div>
    )
}

export default NotFoundPage;
