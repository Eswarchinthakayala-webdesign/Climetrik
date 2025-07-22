import type { PropsWithChildren } from "react"
import Header from "./header"


const Layout = ({children}:PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
       <Header/>
        <main className="min-h-screen container mx-auto px-12 py-8">
               {children}
        </main>
        <footer className="border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 text-center text-gray-400">
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
  All rights reserved &copy; <span className="font-semibold">Climetrik</span>, Made with ❤️ by <span className="font-semibold text-blue-500">Eswar</span>
</p>

            </div>
        </footer>
    </div>
  )
}

export default Layout