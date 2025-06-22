'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Redirect() {
    const router = useRouter()
    const [count, setCount] = useState(5) // Começa em 5 segundos

    useEffect(() => {
        const interval = setInterval(() => {
            if (count > 0) {
                setCount((prev) => prev - 1)
            }
        }, 1000)

        if (count === 0) {
            router.push('/')
        }

        return () => clearInterval(interval)
    }, [count, router])

    return (
        <p className="text-sm text-gray-500">
            Redirecionando para a página inicial em {count} segundo{count !== 1 && 's'}...
        </p>
    )
}
