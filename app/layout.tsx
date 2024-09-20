import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    description: 'Your page description',
    icons: '/favicon.ico',
    title: 'Your page title',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
